import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
        color: "white",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <p>© 2025 Trekking Website. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer; // <-- THIS was missing
