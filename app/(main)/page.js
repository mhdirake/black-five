import React from "react";

import AuctionsSection from "./_components/AuctionsSection";
import FaqSection from "./_components/FaqSection";
import Hero from "./_components/Hero";
import HowItWorksSection from "./_components/HowItWorksSection";
import SecuritySection from "./_components/SecuritySection";
import TicketsSection from "./_components/TicketsSection";
import { HomeRoot } from "./style";

function Home() {
  return (
    <HomeRoot>
      <Hero />
      <AuctionsSection />
      <HowItWorksSection />
      <TicketsSection />
      <SecuritySection />
      <FaqSection />
    </HomeRoot>
  );
}

export default Home;
