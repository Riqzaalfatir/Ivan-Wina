"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full z-50 lg:hidden px-4 py-3">

      {/* HAMBURGER (saat tertutup) */}
      {!open && (
        <button onClick={() => setOpen(true)}>
          <FiMenu size={24} className="text-white" />
        </button>
      )}

      {/* DROPDOWN BOX */}
      {open && (
        <div className="bg-[#FEFBF052]/30 p-6 md:p-8 text-white  relative w-full max-w-[240px] md:max-w-[280px]">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-1 left-1"
          >
            <FiX size={22} />
          </button>

          {/* MENU */}
          <ul className="-mt-2 ml-2 space-y-1 text-[10px] md:text-[14px] tracking-widest font-sweetsans font-medium">
            <li>HOME</li>
            <li>PROFILE</li>
            <li>COUNTING DOWN</li>
            <li>OUR STORY</li>
            <li>RSVP</li>
            <li>GALLERY</li>
            <li>WEDDING GIFT</li>
          </ul>

          {/* TEXT */}
          <p className="pt-3 ml-2 text-[8px] md:text-[12px] font-sweetsans">
            Select a section above to continue
          </p>

        </div>
      )}
    </div>
  )
}

export default Header