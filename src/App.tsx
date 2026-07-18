import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Statement } from "./sections/Statement";
import { Work } from "./sections/Work";
import { Capabilities } from "./sections/Capabilities";
import { Security } from "./sections/Security";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <Work />
        <Capabilities />
        <Security />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
