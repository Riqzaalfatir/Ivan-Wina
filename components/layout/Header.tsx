"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

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
            exit={{ opacity: 0, y: -60, scale: 0.98 }}
            transition={{
              duration: 0.45,
              ease: [0.7, 1, 0.5, 1], 
            }}
            className="bg-[#1E1E1E]/60 p-6 md:p-8 text-white relative w-full max-w-[240px] md:max-w-[280px]"
          >

            {/* CLOSE */}
            <motion.button
              onClick={() => setOpen(false)}
              whileTap={{ scale: 0.9, rotate: 60 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="absolute top-1 left-1"
            >
              <FiX size={26} />
            </motion.button>

            {/* MENU */}
            <ul className="-mt-2 ml-4 space-y-1.5 text-[10px] md:text-[14px] tracking-widest font-sweetsans font-medium flex flex-col">
              <a href="#hero">HOME</a>
              <a href="#hero">PROFILE</a>
              <a href="#counting">COUNTING DOWN</a>
              <a href="#dresscode">OUR STORY</a>
              <a href="#gallery">GALLERY</a>
              <a href="#rsvp">RSVP</a>
              <a href="#gift">WEDDING GIFT</a>
            </ul>

            {/* TEXT */}
            <p className="pt-3 ml-2 text-[8px] md:text-[12px] font-sweetsans">
              Select a section above to continue
            </p>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Header