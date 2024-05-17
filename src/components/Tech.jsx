import Star from "../assets/img/star.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/js.svg";
import reactjs from "../assets/img/reactjs.svg";
import bootsrap from "../assets/img/bootsrap.svg";
import tailwindcss from "../assets/img/tailwindcss.svg";
import flutter from "../assets/img/flutter.svg";
import dart from "../assets/img/dart.svg";
import firebase from "../assets/img/firebase.svg";
import mysql from "../assets/img/mysql.svg";
import git from "../assets/img/git.svg";

import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

export const TechStack = () => {
  const marqueeText = useRef();
  useEffect(() => {
    gsap.fromTo(
      marqueeText.current,
      { xPercent: 0 },
      { xPercent: -54, duration: 5, ease: "linear", repeat: -1 }
    );
  }, []);

  return (
    <>
      <section id="Tech-stack" className=" bg-primary overflow-hidden">
        <div className="pt-20 px-6 flex justify-start items-start mb-4">
          <h1 className="text-2xl lg:text-4xl text-gray-400 font-spaceGrotesk">
            /03
          </h1>
        </div>

        {/* Marquee animation */}
        <hr />
        <div className="overflow-hidden">
          <div ref={marqueeText} className="flex gap-5 whitespace-nowrap">
            <h1 className="font-spaceGrotesk text-[3rem] lg:text-[10rem]">
              Tech Stack
            </h1>
            <img src={Star} className="w-[48px] lg:w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[3rem] lg:text-[10rem]">
              Tech Stack
            </h1>
            <img src={Star} className="w-[48px] lg:w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[3rem] lg:text-[10rem]">
              Tech Stack
            </h1>
            <img src={Star} className="w-[48px] lg:w-[130px] " alt="" />

            <h1 className="font-spaceGrotesk text-[3rem] lg:text-[10rem]">
              Tech Stack
            </h1>
            <img src={Star} className="w-[48px] lg:w-[130px] " alt="" />
          </div>
        </div>
        <hr />

        {/* SVG technologies */}
        <div className=" gap-8 lg:gap-16 flex flex-wrap justify-center items-center py-24">
          <img
            src={html}
            className="w-[66px] sm:w-[90px] lg:w-[100px]"
            alt=""
          />
          <img src={css} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img src={js} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
          <img
            src={reactjs}
            className="w-[66px] sm:w-[90px] lg:w-[100px]"
            alt=""
          />
          <img
            src={bootsrap}
            className="w-[66px] sm:w-[90px] lg:w-[100px]"
            alt=""
          />
          <img
            src={tailwindcss}
            className="w-[66px] sm:w-[90px] lg:w-[100px]"
            alt=""
          />
          <img
            src={flutter}
            className="w-[66px] sm:w-[90px] lg:w-[100px]"
            alt=""
          />
          <img
            src={dart}
            className="w-[66px] sm:w-[90px] lg:w-[100px]"
            alt=""
          />
          <img
            src={firebase}
            className="w-[66px] sm:w-[90px] lg:w-[100px]"
            alt=""
          />
          <img
            src={mysql}
            className="w-[66px] sm:w-[90px] lg:w-[100px]"
            alt=""
          />
          <img src={git} className="w-[66px] sm:w-[90px] lg:w-[100px]" alt="" />
        </div>
      </section>
    </>
  );
};
