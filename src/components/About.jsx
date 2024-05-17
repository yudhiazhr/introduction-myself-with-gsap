/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import Circle from "../assets/img/circle.svg";

export const About = () => {
  const rotatingSvg = useRef(null);

  useEffect(() => {
    gsap.to(rotatingSvg.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <section id="About" className="h-screen bg-primary overflow-hidden">
        <div className="pt-16 px-6 flex justify-end items-end">
          <h1 className="text-2xl lg:text-4xl text-gray-400 font-spaceGrotesk">
            /02
          </h1>
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
    </>
  );
};
