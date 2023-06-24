import { Fragment } from "react";
import { NavBar } from "./NavBar";
import { Hero } from "./hero";
import { HeroInferior } from "./heroInferior";
import { Footer } from "./Footer";

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <HeroInferior />
      <Footer />
    </Fragment>
  );
}
