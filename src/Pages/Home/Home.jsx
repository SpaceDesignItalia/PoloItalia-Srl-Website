import React from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import Partners from "./Partners";
import CustomersAroundWorld from "./CustomersAroundWorld";
import OurStrengths from "./OurStrengths";

export default function Home() {
  const { lang } = useParams();
  return (
    <>
      <Hero />
      <Partners />
      <OurStrengths />
      <CustomersAroundWorld />
    </>
  );
}
