// src/pages/Home.jsx
import React from "react";
import HomeBanner from "../components/Home-banner"; // from src/pages -> ../components
import WhyTrekWithUs from "../components/WhyTrekWithUs";
// import TrekCards from "../components/TrekCards";
// import HomeCards from "../components/Home-cards";

export default function Home() {
  return (
    <main>
      <HomeBanner/>
      {/* <HomeCards/> */}
      {/* <TrekCards/> */}
      <WhyTrekWithUs/>
      
      
      {/* other homepage sections */}
    </main>
  );
}
