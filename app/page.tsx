import Image from "next/image";
import Body from "./components/Home/Body";
import About from "./components/Home/About";
import Experience from "./components/Home/Experience";
import Skills from "./components/Home/Skills";
import Projects from "./components/Home/Projects";
import ContactUs from "./components/Home/ContactUs";

export default function Home() {
  return (
    <>
      <Body />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <ContactUs />
    </>
  );
}
