import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Fab,
  Drawer,
  IconButton,
  TextField,
  Typography,
  Avatar,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

// ------------------------------------------------------------------
// Frontend-only TrekBot (single-file React component)
// - Keeps rule-based FAQ fallback
// - Adds an "AI provider" path that can call Hugging Face or OpenAI
// - Uses prompt injection (contextual knowledge) instead of model fine-tuning
// NOTE: Storing API keys in frontend is OK for demos but NOT secure for production.
// For production, put your keys on a server and call them from there.
// ------------------------------------------------------------------

// ---------------------
// FAQ data (rule-based)
// ---------------------
const FAQS = [
  { keys: ['beginner', 'beginners', 'easy'], answer: 'For beginners we recommend Triund (Himachal) and Nag Tibba (Uttarakhand). Short, scenic and beginner-friendly.' },
  { keys: ['winter', 'snow', 'cold'], answer: 'Popular winter treks include Kedarkantha, Brahmatal and Dayara Bugyal. Expect snow from December to March.' },
  { keys: ['valley of flowers', 'flowers'], answer: 'Valley of Flowers is best visited between July and September when the blooms are at their peak.' },
  { keys: ['triund'], answer: 'Triund is a 2-day trek near Dharamshala — great for weekenders and beginner trekkers.' },
  { keys: ['kedarkantha'], answer: 'Kedarkantha is an easy-to-moderate winter trek with beautiful campsites and a snowy summit.' },
  { keys: ['packing', 'pack', 'what to bring'], answer: 'Pack warm layers, good trekking shoes, a rain jacket, headlamp, basic first-aid, thermals (winter), water and snacks.' },
  { keys: ['cost', 'price', 'budget'], answer: 'Trek packages usually range from ₹1,000 to ₹8,000 depending on duration and services. Short treks are cheaper.' },
  { keys: ['safety', 'safe'], answer: 'Always inform someone of your plan, prefer guided groups, check weather before starting, and carry basic emergency supplies.' },
  { keys: ['best time', 'when to go'], answer: 'Best time depends on trek — summer treks: May–Sep, winter treks: Dec–Mar. Monsoon (Jul–Aug) is for specific treks only.' },
];

// ---------------------
// Helper: simple FAQ matcher
// ---------------------
function matchFAQ(message) {
  if (!message) return null;
  const text = message.toLowerCase();
  // Exact keyword includes
  for (const f of FAQS) {
    for (const k of f.keys) {
      if (text.includes(k)) return f.answer;
    }
  }
  return null;
}

// ---------------------
// Build a compact system/context prompt for the AI
// We inject the FAQ and a short persona so the model behaves like TrekBot.
// ---------------------
function buildSystemPrompt() {
  const knowledge = FAQS.map((f, i) => `- ${f.answer}`).join('\n');
  return `You are TrekBot, a friendly and concise trekking assistant focused on short, actionable answers.
Only use information in the provided knowledge and common trekking best-practices. Keep answers short (2-6 sentences) unless the user asks for more detail.

Knowledge (do not invent other trek names):
${knowledge}

If the user asks for opinions, provide helpful but neutral guidance. If you cannot answer, say "I don't know — please ask a specific trekking question or check local guides."`;
}

// ---------------------
// ChatBot component
// ---------------------
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const stored = localStorage.getItem('trek_chat_history');
      return stored ? JSON.parse(stored) : [{ id: 0, sender: 'bot', text: 'Hi! I\'m TrekBot — ask me about treks, packing, best seasons, and more.' }];
    } catch (e) {
      return [{ id: 0, sender: 'bot', text: 'Hi! I\'m TrekBot — ask me about treks, packing, best seasons, and more.' }];
    }
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('trek_chat_history', JSON.stringify(messages));
    // auto scroll
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight + 200;
    }
  }, [messages]);

  // Helper to push message
  const pushMessage = (msg) => {
    setMessages((m) => [...m, { id: Date.now() + Math.random(), ...msg }]);
  };

  // ---------------------
  // Frontend AI caller
  // - Supports two providers: 'openai' (OpenAI Chat Completions) or 'hf' (Hugging Face Inference)
  // - Configure via environment variables (see comments below)
  // ---------------------
  async function callAI(userMessage) {
    // Provider selection:
    // set VITE_AI_PROVIDER to 'openai' or 'hf' in your environment. Default: 'hf'
    const provider = import.meta.env.VITE_AI_PROVIDER || process.env.REACT_APP_AI_PROVIDER || 'hf';

    // Build context-aware prompt
    const systemPrompt = buildSystemPrompt();

    if (provider === 'openai') {
      const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY || process.env.REACT_APP_OPENAI_KEY;
      if (!OPENAI_KEY) throw new Error('No OpenAI API key configured in VITE_OPENAI_KEY / REACT_APP_OPENAI_KEY');

      // Chat Completions API (v1)
      const payload = {
        model: 'gpt-4o-mini', // change to a model you have access to
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        max_tokens: 500,
        temperature: 0.2
      };

      const res = await axios.post('https://api.openai.com/v1/chat/completions', payload, {
        headers: { Authorization: `Bearer ${OPENAI_KEY}`, 'Content-Type': 'application/json' },
        timeout: 30000
      });

      if (res?.data?.choices && res.data.choices.length) {
        const content = res.data.choices[0].message?.content || res.data.choices[0].text || '';
        return content.trim();
      }

      throw new Error('Unexpected OpenAI response');
    }

    // Default: Hugging Face
    const HF_KEY = import.meta.env.VITE_HF_API_KEY || process.env.REACT_APP_HF_API_KEY;
    if (!HF_KEY) throw new Error('No Hugging Face API key configured in VITE_HF_API_KEY / REACT_APP_HF_API_KEY');

    // You can set VITE_HF_MODEL to change the model (inference endpoints vary by model type)
    const model = import.meta.env.VITE_HF_MODEL || process.env.REACT_APP_HF_MODEL || 'facebook/blenderbot-400M-distill';
    const modelUrl = `https://api-inference.huggingface.co/models/${model}`;

    // For HF we send a single prompt that includes the system prompt
    const prompt = `${systemPrompt}\n\nUser: ${userMessage}`;

    const resp = await axios.post(modelUrl, { inputs: prompt }, { headers: { Authorization: `Bearer ${HF_KEY}`, 'Content-Type': 'application/json' }, timeout: 30000 });

    // handle different HF response shapes
    if (resp?.data) {
      if (typeof resp.data === 'string') return resp.data.trim();
      if (Array.isArray(resp.data) && resp.data.length) {
        const item = resp.data[0];
        if (item?.generated_text) return item.generated_text.trim();
        if (typeof item === 'string') return item.trim();
      }
      if (resp.data.generated_text) return resp.data.generated_text.trim();
    }

    throw new Error('Unexpected response from Hugging Face model');
  }

  // Main handler for sending a user message
  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    pushMessage({ sender: 'user', text: trimmed });
    setInput('');

    // check FAQ first
    const faq = matchFAQ(trimmed);
    if (faq) {
      // small delay to feel natural
      setTyping(true);
      setTimeout(() => {
        pushMessage({ sender: 'bot', text: faq });
        setTyping(false);
      }, 600 + Math.random() * 700);
      return;
    }

    // If no provider is configured, politely inform the user
    const HF_KEY = import.meta.env.VITE_HF_API_KEY || process.env.REACT_APP_HF_API_KEY;
    const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY || process.env.REACT_APP_OPENAI_KEY;
    if (!HF_KEY && !OPENAI_KEY) {
      setTyping(true);
      setTimeout(() => {
        pushMessage({ sender: 'bot', text: "Sorry — I don't have my AI brain connected. Ask me trekking-specific questions or set VITE_HF_API_KEY / VITE_OPENAI_KEY to enable AI answers." });
        setTyping(false);
      }, 700 + Math.random() * 900);
      return;
    }

    // call AI
    setLoading(true);
    setTyping(true);
    try {
      const res = await callAI(trimmed);
      pushMessage({ sender: 'bot', text: res });
    } catch (err) {
      console.error('AI error', err?.response?.data || err.message);
      pushMessage({ sender: 'bot', text: 'Sorry, the AI service failed. Please try again or use the FAQ keywords.' });
    } finally {
      setTyping(false);
      setLoading(false);
    }
  };

  // Key handler: Enter to send
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', right: 24, bottom: 24, zIndex: 1400, bgcolor: 'linear-gradient(135deg,#4facfe,#00f2fe)', boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}
      >
        <ChatBubbleOutlineIcon />
      </Fab>

      {/* Drawer as chat window */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: { xs: '100%', sm: 420 }, borderRadius: 2, overflow: 'hidden' } }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 2, background: 'linear-gradient(90deg,#43cea2,#185a9d)', color: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.15)' }}>TB</Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>TrekBot</Typography>
              <Typography variant="caption">Ask questions about treks, packing & seasons</Typography>
            </Box>
          </Box>
          <IconButton onClick={() => setOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Body */}
        <Box sx={{ height: 'calc(100vh - 220px)', overflowY: 'auto', p: 2 }} ref={listRef}>
          <AnimatePresence initial={false} mode="popLayout">
            {messages.map((m) => (
              <motion.div key={m.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.25 }}>
                <Box sx={{ display: 'flex', mb: 1.5, ...(m.sender === 'user' ? { justifyContent: 'flex-end' } : {}) }}>
                  {m.sender === 'bot' && (
                    <Paper sx={{ maxWidth: '78%', p: 1.25, borderRadius: 2, background: '#f5f7fb' }} elevation={0}>
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{m.text}</Typography>
                    </Paper>
                  )}

                  {m.sender === 'user' && (
                    <Paper sx={{ maxWidth: '78%', p: 1.25, borderRadius: 2, background: 'linear-gradient(90deg,#cfe9ff,#e6f5ff)' }} elevation={0}>
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{m.text}</Typography>
                    </Paper>
                  )}
                </Box>
              </motion.div>
            ))}

            {typing && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Box sx={{ display: 'flex', mb: 1.5 }}>
                  <Paper sx={{ maxWidth: '78%', p: 1.25, borderRadius: 2, background: '#f5f7fb' }} elevation={0}>
                    <Typography variant="body2">Typing...</Typography>
                  </Paper>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        {/* Footer / Input */}
        <Box sx={{ px: 2, py: 2, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <TextField
              placeholder="Ask about treks, packing, seasons..."
              size="small"
              fullWidth
              multiline
              maxRows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{ bgcolor: 'white', borderRadius: 1 }}
            />
            <Button variant="contained" onClick={handleSend} disabled={loading} sx={{ minWidth: 44, height: 40 }}>
              <SendIcon />
            </Button>
          </Box>

          <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
            <Chip label="FAQ-first" size="small" />
            <Chip label="AI: prompt-enhanced" size="small" />
            <Chip label="Local storage history" size="small" />
          </Box>

          {/* Helpful note for local demo devs */}
          <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
            For a demo: set VITE_HF_API_KEY or VITE_OPENAI_KEY in your .env. Keys in frontend are exposed — use a backend in production.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

/*
.env examples (Vite):
VITE_AI_PROVIDER=hf            # or 'openai'
VITE_HF_API_KEY=hf_XXXXXXXX    # your Hugging Face Inference API key (demo only)
VITE_HF_MODEL=facebook/blenderbot-400M-distill  # optional
VITE_OPENAI_KEY=sk-XXXXXXXX    # your OpenAI key (demo only)

If you're using CRA replace VITE_ with REACT_APP_.

Security reminder: Never commit API keys to a public repo. For production hosting, create a tiny serverless function (Vercel/Netlify/Firebase) that holds the key and proxies requests.
*/
