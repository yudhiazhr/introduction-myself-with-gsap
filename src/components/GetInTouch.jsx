import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import Flower2 from "../assets/img/flower-2.svg";


export const GetInTouch = () => {
    const rotatingSvgRev = useRef(null)
    useEffect(() => {
        gsap.to(rotatingSvgRev.current, {
          rotation: -360,
          repeat: -1,
          duration: 10,
          ease: "linear",
        });
      }, []);
    
      
  return (
    <>
      <section
        id="Get-in-touch"
        className="bg-primary h-[80vh] overflow-hidden"
      >
        <div className="flex flex-col gap-4 justify-center items-center h-[80vh]">
          <h1 className="text-4xl text-center md:text-9xl font-spaceGrotesk z-[1] duration-300 transition-all">
            Get In Touch
          </h1>
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
    </>
  );
};
