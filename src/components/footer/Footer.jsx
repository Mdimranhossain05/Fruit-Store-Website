import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import cardsImg from "../../assets/cards.png";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-[#E74064] pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold uppercase">Sweet Fruit</h1>
            <p className="text-sm  max-w-[300px] text-justify leading-tight opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              porro explicabo enim placeat maxime cumque est doloremque dolorum
              incidunt laboriosam.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +88 (0) 1**-****
              </p>

              <p className="flex items-center gap-2">
                <FaMapLocation />
                Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>
          {/* footer section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {/* first column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* second column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social links section */}
          <motion.div className="space-y-3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex gap-3 items-center">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={cardsImg} alt="" className="max-w-[120px]" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-center mt-8 pt-7 border-t-2 border-black">
          Copyright &copy; 2024 Sweet Fruit All rights reserved
        </p>
      </div>
    </div>
  );
}
