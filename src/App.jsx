/* eslint-disable react/no-unescaped-entities */
import { Header } from "./components/Header";
import HeroImg from "./assets/img/HeroImg.png";
import Circle from "./assets/img/circle.svg";
import Star from "./assets/img/star.svg";
import Flower2 from "./assets/img/flower-2.svg";
import BlackStar from "./assets/img/blackstar.svg";
import Portfolio1 from "./assets/img/portf-2.png";
import Portfolio2 from "./assets/img/portf-3.png";
import Portfolio3 from "./assets/img/portf-4.png";
import Portfolio4 from "./assets/img/portf-5.png";
import html from "./assets/img/html.svg";
import css from "./assets/img/css.svg";
import js from "./assets/img/js.svg";
import reactjs from "./assets/img/reactjs.svg";
import bootsrap from "./assets/img/bootsrap.svg";
import tailwindcss from "./assets/img/tailwindcss.svg";
import flutter from "./assets/img/flutter.svg";
import dart from "./assets/img/dart.svg";
import firebase from "./assets/img/firebase.svg";
import mysql from "./assets/img/mysql.svg";
import git from "./assets/img/git.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const rotatingSvg = useRef(null);
  const rotatingSvgRev = useRef(null);
  const marqueeText = useRef(null);
  const leftToRight =useRef (null)
  const rightToLeft =useRef (null)
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.to('.rotateSvg', {
      rotation: -360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    })
  })

  useEffect(() => {
    gsap.fromTo('.textReveal', {opacity:0, y:30},{
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 0, 
      ease: 'power3.out',
      delay: 0,
    });
  }, []);


  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
    tl.fromTo(
      leftToRight.current,
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5 }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
    tl.fromTo(
      rightToLeft.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5 }
    );
  }, []);

  useEffect(() => {
    gsap.to(rotatingSvg.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  useEffect(() => {
    gsap.to(rotatingSvgRev.current, {
      rotation: -360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      marqueeText.current,
      { xPercent: 0 },
      { xPercent: -54, duration: 5, ease: "linear", repeat: -1 }
    );
  }, []);

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
      <section id="Hero" className="h-screen bg-primary overflow-hidden">

        <div className="grid lg:grid-cols-3 pt-24 pb-6">
          <div className="flex flex-col justify-center items-center text-end lg:ml-24 z-[1] mb-4">
            <h1 className=" textReveal text-3xl lg:text-6xl xl:text-9xl font-spaceGrotesk">
              Frontend Developer
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center z-[0]">
            <div className="flex justify-between w-full px-6 lg:px-2 xl:px-24">
              <div className="flex gap-2">
                <img src={BlackStar} className="w-[12px] rotateSvg" alt="" />
                <img src={BlackStar} className="w-[12px] rotateSvg" alt="" />
                <img src={BlackStar} className="w-[12px] rotateSvg" alt="" />
              </div>
              <h1 className="text-xl font-spaceGrotesk font-bold mb-4">
                Yudhiazhr
              </h1>
              <div className="flex gap-2">
                <img src={BlackStar} className="w-[12px] rotateSvg" alt="" />
                <img src={BlackStar} className="w-[12px] rotateSvg" alt="" />
                <img src={BlackStar} className="w-[12px] rotateSvg" alt="" />
              </div>
            </div>

            <img src={HeroImg} className="h-[60vh] lg:h-[70dvh] mb-4" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center lg:mr-24 z-[1]">
            <h1 className=" textReveal text-3xl lg:text-6xl xl:text-9xl font-spaceGrotesk">
              Mobile Developer
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center px-2 lg:px-12 mb-12">
          <h1 ref={leftToRight} className="text-gray-500 font-bree text-xl lg:text-2xl">Bogor</h1>
          <a href="#About" className=" textReveal text-gray-500 font-bree border py-2 px-6 border-gray-500 cursor-pointer rounded-full hover:bg-secondary hover:text-white duration-300 transition-all text-xl lg:text-2xl">
            Keep it scrolling down
          </a>
          <h3 ref={rightToLeft} className="text-gray-500 font-bree text-xl lg:text-2xl">/2024</h3>
        </div>

      </section>

      <section id="About" className="h-screen bg-primary overflow-hidden">
        <div className="pt-16 px-6 flex justify-end items-end">
          <h1 className="text-2xl lg:text-4xl text-gray-400 font-spaceGrotesk">/02</h1>
        </div>

        <div className="grid grid-cols-2 px-12">
          <div className="flex flex-col">
            <h1 className="text-8xl font-spaceGrotesk mb-12">
              Shortly
              <br /> About MySelf!
            </h1>
            <p className="font-spaceGrotesk text-xl lg:text-3xl text-normal lg:text-justify">
              I'm someone who is full of passion and enthusiasm in frontend
              development and Flutter mobile development. Exploring the world of
              coding is like an adventure for me, where every line of code is a
              step towards greater achievements.
            </p>
          </div>

          <div className="flex justify-center items-center h-[80dvh]">
            <img
              ref={rotatingSvg}
              src={Circle}
              className="md:w-[720px] md:h-[680px] "
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="Tech-stack" className=" bg-primary overflow-hidden">
        <div className="pt-20 px-6 flex justify-start items-start mb-4">
          <h1 className="text-2xl lg:text-4xl text-gray-400 font-spaceGrotesk">/03</h1>
        </div>

        {/* Marquee animation */}
        <hr />
        <div className="overflow-hidden">
          <div ref={marqueeText} className="flex gap-5 whitespace-nowrap">
            <h1 className="font-spaceGrotesk text-[3rem] lg:text-[10rem]">Tech Stack</h1>
            <img src={Star} className="w-[48px] lg:w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[3rem] lg:text-[10rem]">Tech Stack</h1>
            <img src={Star} className="w-[48px] lg:w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[3rem] lg:text-[10rem]">Tech Stack</h1>
            <img src={Star} className="w-[48px] lg:w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[3rem] lg:text-[10rem]">Tech Stack</h1>
            <img src={Star} className="w-[48px] lg:w-[130px] " alt="" />
          </div>
        </div>
        <hr />

        {/* SVG technologies */}
        <div className=" gap-8 lg:gap-16 flex flex-wrap justify-center items-center py-24">
          <img src={html} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={css} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={js} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={reactjs} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={bootsrap} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={tailwindcss} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={flutter} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={dart} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={firebase} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={mysql} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={git} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
        </div>
      </section>
      
      <div className="bg-secondary px-4 lg:px-12 pt-12 ">
          <div className="flex justify-start items-start mb-4">
            <h1 className="text-3xl md:text-4xl text-white font-spaceGrotesk">/04</h1>
          </div>
          <div className="flex justify-end items-end px-12">
            <h1 className="text-7xl md:text-8xl font-spaceGrotesk mb-12 text-white">
              My Portfolio
            </h1>
          </div>
        </div>

      <section id="Portfolio" className="overflow-hidden bg-secondary">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-100dvh w-[400dvw] flex flex-row relative"
          >

            {/* 1. */}
            <div className=" px-6 md:px-16 pt-24 block xl:flex items-center h-[100dvh] w-[100dvw]">
              <h1
                className="font-spaceGrotesk text-6xl md:text-8xl font-bold text-secondary z-[1] mb-8"
                style={{ WebkitTextStroke: "2px white" }}
              >
                FakeFakeFake
                <br />
                <span>Website</span>
              </h1>
              <img
                src={Portfolio1}
                className="absolute right-[305dvw] z-[0] w-[470px] lg:w-[1200px]"
                alt=""
              />
            </div>

            {/* 2. */}
            <div className=" px-6 md:px-16 pt-24 block xl:flex items-center h-[100dvh] w-[100dvw]">
            
              <h1
                className="absolute bottom-[250px] lg:flex font-spaceGrotesk text-6xl md:text-8xl font-bold text-secondary z-[1] mb-8"
                style={{ WebkitTextStroke: "2px white" }}
              >
                Vape Store
                <br />
                <span>Website</span>
              </h1>

              <img
                src={Portfolio2}
                className="absolute top-[250px] right-[205vw] z-[0]  w-[470px] lg:w-[1200px]"
                alt=""
              />
             
            </div>

            {/* 3. */}
            <div className=" px-6 md:px-16 pt-24 block xl:flex items-center h-[100dvh] w-[100dvw]">
              <h1
                className="font-spaceGrotesk text-6xl md:text-8xl font-bold text-secondary z-[1] mb-8"
                style={{ WebkitTextStroke: "2px white" }}
              >
                Mandiri Furniture
              </h1>
              <img
                src={Portfolio3}
                className="absolute right-[105vw] z-[0]  w-[470px] lg:w-[1000px]"
                alt=""
              />
            </div>

            {/* 4. */}
            <div className=" px-6 md:px-16 pt-24 block xl:flex items-center h-[100dvh] w-[100dvw]">
            
              <h1
                className="absolute bottom-32 lg:flex font-spaceGrotesk text-6xl md:text-8xl font-bold text-secondary z-[1] mb-8"
                style={{ WebkitTextStroke: "2px white" }}
              >
                Todo Application
              </h1>

              <img
                src={Portfolio4}
                className="absolute top-[250px] lg:top-[140px] right-[10vw] z-[0]  w-[470px] h-[355px] lg:h-[750px] lg:w-[1200px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="Get-in-touch" className="bg-primary h-[80vh] overflow-hidden">
        <div className="flex flex-col gap-4 justify-center items-center h-[80vh]">
          <h1 className="text-4xl text-center md:text-9xl font-spaceGrotesk z-[1] duration-300 transition-all">Get In Touch</h1>
          <p className="font-spaceGrotesk text-xl z-[1] text-center">
            if you have any general project or enquiry, feel free and contact us
            - available now
          </p>

          <div className="absolute items-center">
            <img
              ref={rotatingSvgRev}
              src={Flower2}
              className="w-[320px] md:w-[520px] z-[-1] "
              alt=""
            />
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default App;
