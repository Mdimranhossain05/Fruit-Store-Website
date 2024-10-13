import bannerimg from "../../assets/appBanner.jpg";
import playstoreImg from "../../assets/playstore.png";
import appstoreImg from "../../assets/appstore.png";
import { motion } from "framer-motion";

export default function AppBanner() {
  const bannerStyle = {
    backgroundImage: `url(${bannerimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="container my-14">
      <div
        style={bannerStyle}
        className="sm:min-h-[400px] sm:flex sm: justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-4 max-w-xl mx-auto">
            <motion.h1 className="text-2xl text-center sm:text-4xl font-semibold"
            initial = {{opacity : 0 , y : 100}}
            whileInView={{opacity : 1, y: 0}}
            transition={{
                type : "spring",
                stiffness : 100,
                damping: 10,
                delay : 0.2}}
            viewport={{once : true}}
            >
              Download the app
            </motion.h1>
            <motion.p className="text-center sm:px-20"
            initial = {{opacity : 0 , y : 100}}
            whileInView={{opacity : 1, y: 0}}
            transition={{
                type : "spring",
                stiffness : 100,
                damping: 10,
                delay : 0.3}}
            viewport={{once : true}}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur.
            </motion.p>

            <div className="flex justify-center items-center md:max-h-[100px]">
                <a href="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                    <motion.img src={appstoreImg}  alt="" 
                    initial = {{opacity : 0 , y : 100}}
                    whileInView={{opacity : 1, y: 0}}
                    transition={{
                        type : "spring",
                        stiffness : 100,
                        damping: 10,
                        delay : 0.3}}
                    viewport={{once : true}}/>
                </a>

                <a href="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                    <motion.img src={playstoreImg} alt="" 
                    initial = {{opacity : 0 , y : 100}}
                    whileInView={{opacity : 1, y: 0}}
                    transition={{
                        type : "spring",
                        stiffness : 100,
                        damping: 10,
                        delay : 0.4}}
                    viewport={{once : true}}
                    />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
