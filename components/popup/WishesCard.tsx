"use client"

import { motion } from "framer-motion"

const WishesCard = ({ data, onClose }: any) => {
  if (!data) return null

  return (
    <div
      onClick={onClose}
      className="fixed flex-col inset-0 flex items-center justify-center  bg-black/60 backdrop-blur-sm z-50 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F7F8F2]/20  rounded-2xl p-6 w-[320px] md:w-[380px] h-[280px] md:h-[380px] text-center shadow-2xl border border-white/20 mb-5"
      >
        {/* Title */}
        <h3 className="text-[25px] md:text-[20px] text-white font-semibold  tracking-wide leading-snug font-sweetsans">
          {data.nama}
        </h3>

        {/* Divider */}
        <div className="w-14 h-[1px] text-white bg-white mx-auto my-4 opacity-50"></div>

        {/* Message */}
        <p className="text-[13px] md:text-[15px] font-sweetsans leading-relaxed mb-6 text-white">
          {data.pesan}
        </p>

      
      </motion.div>
       <button
          onClick={onClose}
          className="w-[320px] md:w-full bg-[#6C7852] font-sweetsans font-semibold text-white py-2 rounded-md text-[13px] tracking-widest hover:opacity-90 transition"
        >
          BACK
        </button>
    </div>
  )
}

export default WishesCard