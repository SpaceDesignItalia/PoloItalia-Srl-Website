import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import CustomersAroundWorld from "./CustomersAroundWorld";
import OurStrengths from "./OurStrengths";
import ContactForm from "./ContactForm";
import ProductsSection from "./ProductsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <OurStrengths />
      <ProductsSection />
      <CustomersAroundWorld />
      <ContactForm />
    </>
  );
}
