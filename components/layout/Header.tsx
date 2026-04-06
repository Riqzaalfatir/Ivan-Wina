"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full z-50 lg:hidden px-4 py-3">

      {/* HAMBURGER */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <FiMenu size={28} className="text-[#C3C3C3]" />
        </motion.button>
      )}

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -80, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.9 }}            
            transition={{
               duration: 0.5,
  ease: [0.4, 0, 0.2, 1], 
            }}
            className="bg-white/20 p-6 md:p-8 text-white relative w-full max-w-[260px] md:max-w-[280px] z-0"
          >

            {/* CLOSE */}
            <motion.button
  onClick={() => setOpen(false)}
  whileTap={{ scale: 0.9, rotate: 60 }}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 250, damping: 20 }}
  className="absolute top-2 left-2"
>
  <Image
    src="/images/header/x.svg"
    alt="close"
    width={26}
    height={26}
    className="w-[20px] h-[20px] object-contain"
  />
</motion.button>

            {/* MENU */}
            <ul className="pt-4 ml-3 space-y-3 text-[12px] md:text-[14px] tracking-widest text-white font-sans font-medium flex flex-col">
  {[
    "HOME",
    "PROFILE",
    "COUNTING DOWN",
    "OUR STORY",
    "GALLERY",
    "RSVP",
    "WEDDING GIFT"
  ].map((item) => (
    <motion.a
      key={item}
      href="#"
      whileHover={{
        x: -2,
        scale: 1.03,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="cursor-pointer"
    >
      {item}
    </motion.a>
  ))}
</ul>

            {/* TEXT */}
            <p className="pt-7 ml-2.5 text-[8px] md:text-[12px] font-sans">
              Select a section above to continue
            </p>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Header