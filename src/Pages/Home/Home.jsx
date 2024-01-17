import React from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import Partners from "./Partners";

export default function Home() {
  const { lang } = useParams();
  return (
    <>
      <Hero />
      <Partners />
    </>
  );
}
