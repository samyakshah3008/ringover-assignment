import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TeammemberCardsSection from "../../components/teammember-cards-section/TeammemberCardsSection";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <TeammemberCardsSection />
      <Footer />
    </>
  );
}
