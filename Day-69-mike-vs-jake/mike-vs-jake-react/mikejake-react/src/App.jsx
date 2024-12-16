import { useState, useEffect } from "react";
import { motion } from "motion/react";
import "./App.css";
import Jake1 from "./assets/jake-paul-2.png";
import Jake2 from "./assets/jake-paul.png";
import Mike1 from "./assets/mike-tyson.png";
import Mike2 from "./assets/mike-tyson2.png";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  //Effect for growing up on scroll

  // const { scrollY } = useScroll(); // Get the vertical scroll position

  // const scale = useTransform(
  //   scrollY,
  //   [0.5 * viewportHeight, 1 * viewportHeight],
  //   [1, 4]
  // ); // Map scroll position to scale values
  // const moveLeft = useTransform(
  //   scrollY,
  //   [0.5 * viewportHeight, 1 * viewportHeight],
  //   [100, 500]
  // );

  // let resizeTimeout;

  // Stay on top of the page

  useEffect(() => {
    const disableScroll = () => window.scrollTo(0, 0);
    window.addEventListener("scroll", disableScroll);

    const timer = setTimeout(() => {
      window.removeEventListener("scroll", disableScroll);
    }, 2800);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", disableScroll);
    };
  });

  return (
    <>
      {isVisible && (
        <motion.div
          className="overflow-x-hidden"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: "-100%", opacity: 0 }}
          transition={{
            y: { delay: 3, duration: 1 },
            opacity: { delay: 3, duration: 0.2 },
          }}
        >
          <motion.div className="w-screen h-screen flex items-center flex-col justify-center overflow-hidden absolute z-10">
            <motion.div
              className="font-bebaskNeue text-5xl md:text-7xl text-center xl:text-[7em]"
              style={{ textShadow: "20px 20px 20px rgba(0, 0, 0, 0.3)" }}
              initial={{ x: -200, opacity: 0 }}
              animate={{ y: [-60, 0], opacity: 1, x: 0 }}
              transition={{
                x: { delay: 0.9, ease: "easeInOut", duration: 0.6 },
                y: { delay: 0.4, duration: 0.6 },
                opacity: { delay: 0.4, ease: "easeIn", duration: 0.6 },
              }}
            >
              PAUL
            </motion.div>

            <motion.div
              className="font-bebaskNeue text-5xl md:text-7xl text-center xl:text-[7em]"
              style={{ textShadow: "20px 20px 200px rgba(0, 0, 0, 0.3)" }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                opacity: { delay: 1.3, duration: 0.6 },
                scale: { delay: 1.2, duration: 0.6 },
              }}
            >
              VS
            </motion.div>

            <motion.div
              className="font-bebaskNeue text-5xl md:text-7xl text-center xl:text-[7em]"
              style={{ textShadow: "20px 20px 20px rgba(0, 0, 0, 0.3)" }}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [60, 0] }}
              transition={{
                x: { delay: 2, ease: "easeInOut", duration: 0.6 },
                y: { delay: 1.5, duration: 0.6 },
                opacity: { delay: 1.4, ease: "easeInOut", duration: 0.6 },
              }}
            >
              TYSON
            </motion.div>
          </motion.div>

          <div className="w-screen h-screen flex items-end justify-around">
            <motion.div
              className="w-[70vw] absolute left-0 md:relative md:w-[50%] md:h-auto flex justify-start"
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { delay: 0.3, duration: 1 },
                opacity: { delay: 0.5, duration: 0.5 },
              }}
            >
              <img
                src={Jake2}
                className="max-w-[900px] h-auto"
                alt="Jake Paul"
              />
            </motion.div>

            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { delay: 1.3, duration: 1 },
                opacity: { delay: 1.5, duration: 0.5 },
              }}
              className="w-[82vw] absolute right-0 md:relative md:w-[50%] md:h-auto flex justify-end"
            >
              <img
                src={Mike1}
                className="max-w-[1000px] h-auto"
                alt="Mike Tyson"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="p-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { delay: 0, duration: 1.2 },
            y: { duration: 0.7 },
          }}
          className="w-[100%] md:w-[80%] m-auto h-auto  flex flex-col-reverse lg:flex-row items-center justify-between md:justify-around"
        >
          <div className="pt-40 pb-40 md:pt-0 md:pb-0 w-full lg:w-[40vw] xl:w-[40%]">
            <h1 className="font-bebaskNeue text-[5em]">winner</h1>
            <p className="font-hostGrotesk sm:text-sm md:text-lg xl:text-xl">
              Jake Paul, of Cleveland, Ohio, is a YouTuber-turned-boxer, and one
              of the most popular social media personalities in the world. Paul
              won six consecutive fights to start his boxing career but suffered
              the first defeat in a split-decision loss to Tommy Fury back in
              February 2023. He then defeated Nate Diaz by unanimous decision on
              August 5, 2023. He has fought four times since then, three KO
              victories.
            </p>
          </div>
          <div className="">
            <div className="h-full w-[100vw] md:w-[80vw] lg:w-[20vw]">
              <img
                src={Jake1}
                className="w-full h-auto  rounded-none md:rounded-2xl"
              ></img>
              <h2 className="font-bebaskNeue text-[6rem] text-center">
                JAKE PAUL
              </h2>
              <div className="pt-5 font-hostGrotesk text-xl flex justify-around items-center">
                <div>Age:27</div>
                <div>Wins: 11</div>
                <div>Loses: 1</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { delay: 0.4, duration: 1.2 },
            y: { delay: 0.4, duration: 0.7 },
          }}
          className="w-[100%] md:w-[80%] m-auto h-auto   flex flex-col-reverse lg:flex-row-reverse items-center justify-between md:justify-around"
        >
          <div className="pt-40 pb-40 md:pt-0 md:pb-0 w-full lg:w-[40vw] xl:w-[40%]">
            <h1 className="font-bebaskNeue text-[5em]">loser</h1>
            <p className="font-hostGrotesk sm:text-sm md:text-lg xl:text-xl">
              Mike Tyson, of Brooklyn, New York, is a former heavyweight lineal
              champion known as "The Baddest Man on the Planet." Tyson, the
              youngest man to ever win a heavyweight title, retired in 2005, but
              has fought exhibition fights most recently, including a bout
              against Roy Jones Jr. in November 2020. Tyson was the first
              undisputed heavyweight champion in the three-belt era. In February
              1992, Tyson was convicted of rape and after serving less than
              three years in prison, returned to the ring to resume his career.
              He has notable victories over Frank Bruno, Donovan Ruddock, Larry
              Holmes, Michael Spinks and Tony Tucker, among others.
            </p>
          </div>
          <div className="">
            <div className="h-full w-[100vw] md:w-[80vw] lg:w-[25vw]">
              <img
                src={Mike2}
                className="w-full h-auto rounded-none md:rounded-2xl"
              ></img>
              <h2 className="font-bebaskNeue text-[6rem] text-center">
                MIKE TYSON
              </h2>
              <div className="pt-5 font-hostGrotesk text-xl flex justify-around items-center">
                <div>Age: 58</div>
                <div>Wins: 50</div>
                <div>Loses: 7</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
