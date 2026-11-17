import Hero from "../src/components/sections/Hero";
import Experience from "../src/components/sections/Experience";
import Projects from "../src/components/sections/Projects";
import Expertise from "../src/components/sections/Expertise";
import Footer from "../src/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}