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
import css from "./assets/img/css.svg"
import js from "./assets/img/js.svg"
import reactjs from "./assets/img/reactjs.svg"
import bootsrap from "./assets/img/bootsrap.svg"
import tailwindcss from "./assets/img/tailwindcss.svg"
import flutter from "./assets/img/flutter.svg"
import dart from "./assets/img/dart.svg"
import firebase from "./assets/img/firebase.svg"
import mysql from "./assets/img/mysql.svg"
import git from "./assets/img/git.svg"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const rotatingSvg = useRef(null);
  const rotatingSvgRev = useRef(null);
  const marqueeText = useRef(null);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

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
      <section id="Hero" className="h-screen bg-primary">
        <div className="grid grid-cols-3 pt-24 pb-12">
          <div className="flex flex-col justify-center items-center text-end ml-24 z-[1]">
            <h1 className="text-9xl font-spaceGrotesk">Frontend Developer</h1>
          </div>

          <div className="flex flex-col justify-center items-center z-[0]">
            <div className="flex justify-between  w-full px-24">
              <div className="flex">
                <img src={BlackStar} className="w-[24px]" alt="" />
                <img src={BlackStar} className="w-[24px]" alt="" />
                <img src={BlackStar} className="w-[24px]" alt="" />
              </div>
              <h1 className="text-2xl font-spaceGrotesk font-bold mb-4">
                Yudhiazhr
              </h1>
              <div className="flex">
                <img src={BlackStar} className="w-[24px]" alt="" />
                <img src={BlackStar} className="w-[24px]" alt="" />
                <img src={BlackStar} className="w-[24px]" alt="" />
              </div>
            </div>

            <img src={HeroImg} className="h-[70dvh]" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center mr-24 z-[1]">
            <h1 className="text-9xl font-spaceGrotesk">Mobile Developer</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center px-12 mb-12">
          <h1 className="text-gray-500 font-bree text-2xl">Bogor</h1>
          <h1 className="text-gray-500 font-bree border py-2 px-6 border-gray-500 cursor-pointer rounded-full hover:bg-secondary hover:text-white duration-300 transition-all text-2xl">
            Keep it scrolling down
          </h1>
          <h3 className="text-gray-500 font-bree text-2xl">/2024</h3>
        </div>
      </section>

      <section id="About" className="h-screen bg-primary">
        <div className="pt-16 px-12 flex justify-end items-end">
          <h1 className="text-4xl text-gray-400 font-spaceGrotesk">/02</h1>
        </div>

        <div className="grid grid-cols-2 px-12">
          <div className="flex flex-col">
            <h1 className="text-8xl font-spaceGrotesk mb-12">
              Shortly
              <br /> About MySelf!
            </h1>
            <p className="font-spaceGrotesk text-3xl text-justify">
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
              className="w-[720px] h-[680px]"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="Tech-stack" className="h-screen bg-primary">
        <div className="pt-20 px-12 flex justify-start items-start mb-4">
          <h1 className="text-4xl text-gray-400 font-spaceGrotesk">/03</h1>
        </div>

        {/* Marquee animation */}
        <hr />
        <div className="overflow-hidden">
          <div ref={marqueeText} className="flex gap-5 whitespace-nowrap">
            <h1 className="font-spaceGrotesk text-[10rem]">Tech Stack</h1>
            <img src={Star} className="w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[10rem]">Tech Stack</h1>
            <img src={Star} className="w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[10rem]">Tech Stack</h1>
            <img src={Star} className="w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[10rem]">Tech Stack</h1>
            <img src={Star} className="w-[130px] " alt="" />
          </div>
        </div>
        <hr />

        {/* SVG technologies */}
        <div className="h-[40vh] gap-16 flex flex-wrap justify-center items-center">
            <img src={html} className="w-[100px]" alt="" />
            <img src={css} className="w-[100px]" alt="" />
            <img src={js} className="w-[100px]" alt="" />
            <img src={reactjs} className="w-[100px]" alt="" />
            <img src={bootsrap} className="w-[100px]" alt="" />
            <img src={tailwindcss} className="w-[100px]" alt="" />
            <img src={flutter} className="w-[100px]" alt="" />
            <img src={dart} className="w-[100px]" alt="" />
            <img src={firebase} className="w-[100px]" alt="" />
            <img src={mysql} className="w-[100px]" alt="" />
            <img src={git} className="w-[100px]" alt="" />
        </div>
        <div className="bg-secondary px-12 pt-12">
          <div className="flex justify-start items-start mb-4">
            <h1 className="text-4xl text-gray-200 font-spaceGrotesk">/04</h1>
          </div>
          <div className="flex justify-end items-end px-12">
            <h1 className="text-8xl font-spaceGrotesk mb-12 text-white">
              My Portfolio
            </h1>
          </div>
        </div>
      </section>

      <section id="Portfolio" className="overflow-hidden bg-secondary">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-100vh w-[400vw] flex flex-row relative"
          >
            <div className=" px-16 flex items-center h-[100vh] w-[100vw]">
              <h1
                className="font-spaceGrotesk text-8xl font-bold text-secondary z-[1]"
                style={{ WebkitTextStroke: "2px white" }}
              >
                FakeFakeFake
                <br />
                <span>Website</span>
              </h1>
              <img src={Portfolio1} className="absolute right-[305vw] z-[0] w-[1200px]" alt="" /> 
            </div>

            <div className=" px-16 flex items-center h-[100vh] w-[100vw]">
              <h1
                className="font-spaceGrotesk text-8xl font-bold text-secondary z-[1]"
                style={{ WebkitTextStroke: "2px white" }}
              >
                Vape Store
                <br />
                <span>Website</span>
              </h1>
              <img src={Portfolio2} className="absolute right-[205vw] z-[0] w-[1200px]" alt="" /> 
            </div>

            <div className=" px-16 flex items-center h-[100vh] w-[100vw]">
              <h1
                className="font-spaceGrotesk text-8xl font-bold text-secondary z-[1]"
                style={{ WebkitTextStroke: "2px white" }}
              >
                Mandiri Furniture
                <br />
                <span>Mobile Application</span>
              </h1>
              <img src={Portfolio3} className="absolute right-[105vw] z-[0] w-[1000px]" alt="" /> 
            </div>

            <div className=" px-16 flex items-center h-[100vh] w-[105vw]">
              <h1
                className="font-spaceGrotesk text-8xl font-bold text-secondary z-[1]"
                style={{ WebkitTextStroke: "2px white" }}
              >
                Todo App
                <br />
                <span>Mobile Application</span>
              </h1>
              <img src={Portfolio4} className="absolute right-[10vw] z-[0] w-[1000px]" alt="" /> 
            </div>

          </div>
        </div>
      </section>

      <section id="Get-in-touch" className="bg-primary h-[80vh]">
        <div className="flex flex-col gap-12 justify-center items-center h-[80vh]">
          <h1 className="text-9xl font-spaceGrotesk z-[1]">Get In Touch</h1>
          <p className="font-spaceGrotesk text-xl z-[1]">
            if you have any general project or enquiry, feel free and contact us
            - available now
          </p>

          <div className="absolute items-center">
            <img
              ref={rotatingSvgRev}
              src={Flower2}
              className="w-[520px] z-[-1] "
              alt=""
            />
          </div>
        </div>
      </section>

      <footer className="bg-dark py-12 mx-auto">
        <div className="flex flex-col ">
          <div className="grid grid-cols-3 justify-items-center mb-12">
            <div className="flex flex-col w-[300px]">
              <h1 className="text-white text-4xl font-spaceGrotesk mb-4">
                Contact
              </h1>
              <p className="text-white text-2xl">
                m.yudhiazhari@gmail.com Jl. rawa gembira No. 57 Jonggol Kab.
                Bogor
              </p>
            </div>
            <div className="flex flex-col w-[300px]">
              <h1 className="text-white text-4xl font-spaceGrotesk mb-4">
                Website
              </h1>
              <ul className="text-slate-300">
                <li>
                  <a
                    href=" https://ecommerce-with-fake-storeapi.netlify.app/"
                    target="_blank"
                    className="inline-block text-2xl text-white hover:text-secondary  mb-3"
                  >
                    FakeFakeFake Web
                  </a>
                </li>
                <li>
                  <a
                    href="https://arraxysworld.000webhostapp.com/arraxys-vape/"
                    target="_blank"
                    className="inline-block text-2xl text-white hover:text-secondary  mb-3"
                  >
                    Vape Store Web
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-[300px]">
              <h1 className="text-white text-4xl font-spaceGrotesk mb-4">
                Link
              </h1>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#Hero"
                    className="inline-block text-2xl font-spaceGrotesk text-white hover:text-secondary mb-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="inline-block text-2xl font-spaceGrotesk text-white hover:text-secondary mb-3"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Portfolio"
                    className="inline-block text-2xl font-spaceGrotesk text-white hover:text-secondary mb-3"
                  >
                    Portofolio
                  </a>
                </li>
                <li>
                  <a
                    href="#Get-in-touch"
                    className="inline-block text-2xl font-spaceGrotesk text-white hover:text-secondary mb-3"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center"></div>
          </div>

          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <a
                href="https://www.instagram.com/yudhiazhr/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-secondary hover:bg-secondary hover:text-white"
              >
                <svg
                  role="img"
                  className="fill-current"
                  width="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>
              <a
                href="https://github.com/yudhiazhr/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-secondary hover:bg-secondary hover:text-white"
              >
                <svg
                  role="img"
                  className="fill-current"
                  width="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/yudhi-azhari-59282827b/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-secondary hover:bg-secondary hover:text-white"
              >
                <svg
                  role="img"
                  className="fill-current"
                  width="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Created by{" "}
              <a
                href="https://www.instagram.com/yudhiazhr/"
                className="text-white"
                target="_blank"
              >
                yudhiazhr
              </a>{" "}
              &#169; 2023
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
