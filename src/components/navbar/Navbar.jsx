/* eslint-disable react/prop-types */
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Navbar({sideBar, setSideBar}){

    return (
        <nav className="absolute top-0 right-0 w-full pt-10 z-[1000]">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* logo section */}
                    <motion.h1 
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.2,
                    }}
                    className="text-2xl uppercase font-semibold text-red-700/95">Sweet
                        <span className="text-black opacity-80"> Fruit.</span></motion.h1>

                    {/* Hamburger menu section */}
                    <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.2,
                    }} onClick={()=>{setSideBar(!sideBar)}}>
                        <GiHamburgerMenu className="text-3xl cursor-pointer"/>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}