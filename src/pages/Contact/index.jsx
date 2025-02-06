import Container from "@/components/Container";
import React from "react";
import Hero from "./sections/Hero";
import ContactForm from "./sections/ContactForm";
import FAQ from './sections/Faq'
import ScrollOnSideSection from "@/components/ScrollOnSideSection";

const index = () => {
  return (
    <div className="main-container">
      <Hero />
      <Container>
        <ContactForm />
        <FAQ/>
      </Container>
      <ScrollOnSideSection/>
    </div>
  );
};

export default index;
