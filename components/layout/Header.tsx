"use client"

import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const Header = () => {
  const [open, setOpen] = useState(false)

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1
      }
    },
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10, skewX: -10 },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }

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
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 0.7,
              opacity: 0,
              transition: { duration: 0.25 }
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ originX: 0, originY: 0 }}
            className="bg-[#1E1E1E]/50 py-4 md:p-8 text-white relative w-full max-w-[260px] md:max-w-[280px] z-0"
          >

            {/* CLOSE */}
            <motion.button
              onClick={() => setOpen(false)}
              whileTap={{ scale: 0.9, rotate: 60 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="absolute top-2.5 left-2"
            >
              <Image
                src="/images/header/x.svg"
                alt="close"
                width={26}
                height={26}
                className="w-[16px] h-[16px] object-contain"
              />
            </motion.button>

            {/* MENU */}
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="pt-4 pl-7 space-y-1.5 text-[12px] md:text-[14px] tracking-widest text-white font-sans font-medium flex flex-col"
            >
              {[
                "HOME",
                "COUNTING DOWN",
                "ORDER OF EVENTS",
                "VENUE DETAILS",
                "DRESS CODE",
                "RSVP",
                "WEDDING GIFT"
              ].map((menu) => (
                <motion.a
                  key={menu}
                  href="#"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer relative group inline-block"
                >
                  {/* ARROW */}
<span className="hidden absolute left-0 opacity-0 -translate-x-3 transition-all duration-300 ease-out md:group-hover:opacity-100 md:group-hover:translate-x-0">                    
  →
                  </span>

                  {/* TEXT */}
                  <motion.span

                  >
                    {menu}
                  </motion.span>
                </motion.a>
              ))}
            </motion.ul>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: "easeOut"
              }}
              className="pt-[20px] ml-7 text-[8px] md:text-[12px] font-sans font-extralight"
            >
              Select a section above to continue
            </motion.p>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Header