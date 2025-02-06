// File: /pages/index.js

import Container from "@/components/Container";
import React from "react";
import Track from "./sections/Track";
import CallToActionSection from "@/components/CallToActionSection";
import ScrollOnSideSection from "@/components/ScrollOnSideSection";


const index = () => {
    return (
      <div className="main-container">
        
        <Container>
          <Track />
        </Container>
        <CallToActionSection />
        <ScrollOnSideSection />
      </div>
    );
  };
  
  export default index;