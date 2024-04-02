"use client"
import { About, Skills, Testimonials, Work } from "@/components";
import { Footer, Header, Navbar } from "@/components";
import { createContext, useState } from "react";
import { LinkContext } from "@/utils";

export default function Home() {
  const [curLink, setCurLink] = useState("home");
  return (
    <main>
      <LinkContext.Provider value={{ curLink, setCurLink }}>
        <Navbar />
        <Header />

        <About />
        <Work />
        <Skills />

        <Footer />
      </LinkContext.Provider>
    </main>
  );
}
