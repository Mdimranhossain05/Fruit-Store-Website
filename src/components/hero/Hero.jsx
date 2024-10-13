// import bgImage from "../../assets/bg-1.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import bannerFruitLogo from "../../assets/fruits-1.png";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {

  //sidebar hook
  const [sideBar, setSideBar] = useState(false);

  //banner title
  const title = "Sweet Fruit";

  // banner gradient backgroubd
  const gradBG = {
    backgroundImage: `linear-gradient(to right, yellow, #E74064)`,
    height: "100vh",
  };

  return (
    <main style={gradBG}>
      <section className="relative min-h-[100vh] w-full">
        <div className="container">
          {/* navabr section */}
          <Navbar sideBar={sideBar} setSideBar={setSideBar} />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[100vh]">
            {/* text content section */}
            <div className=" text-black mt-[100px] md:mt-0 p-4 md:space-y-28 space-y-10">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="md:text-8xl text-6xl font-bold ml-16 opacity-80 md:tracking-wider tracking-wide"
              >
                {title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 md:space-y-4 space-y-2">
                  <h1 className="text-2xl">Have Sweet Fruits</h1>
                  <h1 className="text-sm opacity-80 md:leading-loose leading-tight">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam ad in iusto consequuntur asperiores laboriosam?
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 bg-gray-700/25 w-[250px] h-[180px]"></div>
              </motion.div>
            </div>
            {/* hero image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={bannerFruitLogo}
                alt=""
                className="relative z-40 w-[190px] md:w-[250px] lg:w-full"
              />
              {/* rectangle circle */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="md:h-[180px] md:w-[180px] h-[100px] w-[100px] absolute z-10 border-pink-700/20 border-[15px] 
                  top-24 -right-8 rounded-full"
              ></motion.div>
              {/* big low opacity text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-10 left-[200px] z-[1]"
              >
                <h1 className="md:text-[100px]  scale-150 leading-none text-pink-700/5 font-bold">
                  {title}
                </h1>
              </motion.div>
            </div>
            {/* third div section */}
            <div className="hidden sm:block">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className=" mx-auto text-black mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="hidden lg:block opacity-0 text-7xl font-bold ml-16 text-black">
                {title}
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Fruits are the best food</h1>
                  <h1 className="text-sm opacity-80 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam ad in iusto consequuntur asperiores laboriosam?
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 bg-pink-700/40 w-[250px] h-[180px]"></div>
              </div>
            </motion.div>
            </div>

            <div></div>
          </div>
        </div>

        {/* sidebar section */}
        {sideBar && (
          <motion.div 
          initial={{x:"100%"}}
          whileInView={{x:"0"}} 
          className="absolute top-0 right-0 w-[150px] h-full bg-gradient-to-b from-yellow-700/40 to-yellow-200 z-[900]">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-black">
                {/* black line */}
                <div className="bg-black w-[1px] h-[70px]"></div>
                {/* icons */}
                <div className="inline-block p-2 cursor-pointer border rounded-full border-black hover:bg-yellow-400 hover:border-yellow-400 duration-200">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 cursor-pointer border rounded-full border-black hover:bg-yellow-400 hover:border-yellow-400 duration-200">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 cursor-pointer border rounded-full border-black hover:bg-yellow-400 hover:border-yellow-400 duration-200">
                  <FaTwitter className="text-2xl" />
                </div>
                {/* black line */}
                <div className="bg-black w-[1px] h-[70px]"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
