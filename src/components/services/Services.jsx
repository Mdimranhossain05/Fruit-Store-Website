import applesImg from "../../assets/apples.png";
import pineapples from "../../assets/pine_apple.png"
import fruitsMix from "../../assets/fruits-2.png"
import { motion } from "framer-motion";

export default function Services() {

  //items to show in services section
  const items = [
    {
      logo: applesImg,
      title: "Fresh Kashmiri Apples",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    },
    {
      logo: pineapples,
      title: "Sweety Salty Pineapple",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      logo: fruitsMix,
      title: "Tasty Fruit Mix",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  const cardVariants = {
    hidden : {opacity : 0, y: 20},
    visible : {
      opacity : 1, 
      y: 0,
      transition : {
      type : "spring",
      stifness : 150,
      damping : 10,
      ease : "easeInOut"
    }
  }
}

const containerVariants = {
  hidden : {opacity :0},
  visible: {
    opacity : 1,
    transition: {
      delay : 0.6,
      staggerChildren : 0.4 //delay between siblings
    }
  }
}

  return (
    <div className="container my-6 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2"
      >
        <motion.h1 className="text-3xl font-bold text-black uppercase"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type:"spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        >
          Fresh and{" "}
          <span className="text-red-500 opacity-100">Tasty Fruits</span>
        </motion.h1>
        <motion.p className="opacity-50 text-sm"
        initial={{ opacity: 0, scale:0 }}
        whileInView={{ opacity: 1, scale:1 }}
        transition={{
          type:"spring",
          stiffness: 100,
          damping: 10,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          inventore explicabo dolorum ab minima delectus animi excepturi optio
          impedit quidem.
        </motion.p>
      </div>
      <motion.div variants={containerVariants}
      initial = "hidden"
      whileInView={"visible"}
      viewport={{amount : 0.8, once: true}} //add onec: true for animate once
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index)=>{
          return (
            <motion.div variants={cardVariants} key={index} className="flex flex-col justify-center items-center p-3 rounded-md cursor-pointer" >
          <img src={item.logo} alt="" className="w-[200px] hover:scale-110 duration-300 img-shadow2"/>
          <h1 className=" font-bold">{item.title}</h1>
          <p className=" text-xs text-center -space-y-3">{item.details}</p>
        </motion.div>)
        })}
      </motion.div>
    </div>
  );
}
