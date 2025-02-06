// File: /pages/index.js

import Container from "@/components/Container";
import React from "react";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Service from "./sections/Service";
import WhereWeShip from "@/components/WhereWeShip";
import CallToActionSection from "@/components/CallToActionSection";
import ScrollOnSideSection from "@/components/ScrollOnSideSection";
import HowWeWork from "./sections/HowWeWork";
import { whereWeWorkImmigrationCards } from "@/constants/homepage";

const HomePage = () => {
  return (
    <div className="main-container">
      <Hero />
      <Container>
        <Stats />
        <Service />
        <WhereWeShip 
          title="Experience Seamless Immigration Services" 
          styles="grid grid-cols-1 md:grid-cols-2 gap-10 my-7" 
          data={whereWeWorkImmigrationCards || []} // Fallback in case data is undefined
        />
        <HowWeWork />
      </Container>
      <CallToActionSection />
      < ScrollOnSideSection/>
    </div>
  );
};

export default HomePage;
