import { useEffect } from "react";
import HeroImg from "../assets/img/HeroImg.png";
import BlackStar from "../assets/img/blackstar.svg";
import { useRef } from "react";

import gsap from "gsap";

export const Home = () => {
  const leftToRight = useRef(null);
  const rightToLeft = useRef(null);

  useEffect(() => {
    gsap.to(".rotateSvg", {
      rotation: -360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      leftToRight.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5 }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      rightToLeft.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".textReveal",
      { opacity: 0, y: 30 },
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: 0,
        ease: "power3.out",
        delay: 0,
      }
    );
  }, []);
  
  return (
    <>
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
          <h1
            ref={leftToRight}
            className="text-gray-500 font-bree text-xl lg:text-2xl"
          >
            Bogor
          </h1>
          <a
            href="#About"
            className=" textReveal text-gray-500 font-bree border py-2 px-6 border-gray-500 cursor-pointer rounded-full hover:bg-secondary hover:text-white duration-300 transition-all text-xl lg:text-2xl"
          >
            Keep it scrolling down
          </a>
          <h3
            ref={rightToLeft}
            className="text-gray-500 font-bree text-xl lg:text-2xl"
          >
            /2024
          </h3>
        </div>
      </section>
    </>
  );
};
