import { useRef } from "react";
import Portfolio1 from "../assets/img/portf-2.png";
import Portfolio2 from "../assets/img/portf-3.png";
import Portfolio3 from "../assets/img/portf-4.png";
import Portfolio4 from "../assets/img/portf-5.png";
import gsap from "gsap";
import { useEffect } from "react";

export const Portfolio = () => {
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
      <div className="bg-secondary px-4 lg:px-12 pt-12 ">
        <div className="flex justify-start items-start mb-4">
          <h1 className="text-3xl md:text-4xl text-white font-spaceGrotesk">
            /04
          </h1>
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

    </>
  );
};
