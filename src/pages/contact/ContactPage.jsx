import React from "react";
import ContactCard from "../../components/contact-card/ContactCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactCard />
      <Footer />
    </div>
  );
}
