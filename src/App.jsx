/* eslint-disable react/no-unescaped-entities */
import { Header } from "./components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import Footer from "./components/Footer";
import { GetInTouch } from "./components/GetInTouch";
import { About } from "./components/About";
import { Home } from "./components/Hero";
import { TechStack } from "./components/Tech";
import { Portfolio } from "./components/Portfolio";


function App() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);


  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <Header />
      <Home />

      <About />
      <TechStack />

     <Portfolio />

      <GetInTouch />

      <Footer />
    </>
  );
}

export default App;
