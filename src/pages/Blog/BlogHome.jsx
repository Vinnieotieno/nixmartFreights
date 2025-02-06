// src/pages/Blog/BlogHome.jsx
import React from "react";
import Container from "@/components/Container";
import Hero from "./sections/Hero";  
import BlogPage from "./sections/BlogPage"; 
import CallToActionSection from "@/components/CallToActionSection"; 
import ScrollOnSideSection from "@/components/ScrollOnSideSection";
import BlogDetail from "@/pages/Blog/BlogDetail";

const BlogHome = () => {
  return (
    <div className="main-container">
      <Hero />
      <Container>
        <BlogPage />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Container>
      <CallToActionSection />
      <ScrollOnSideSection/>
    </div>
  );
};

export default BlogHome;
