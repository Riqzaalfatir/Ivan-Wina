"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

const images = [
    { src: "/images/ourstory/ourstory3.jpg", position: "object-[50%_50%]" },
    { src: "/images/ourstory/ourstory2.jpg", position: "object-[50%_20%]" },
    { src: "/images/ourstory/ourstory1.jpg", position: "object-[50%_50%]" },
    { src: "/images/ourstory/ourstory4.jpg", position: "object-[50%_0%]" },
    { src: "/images/ourstory/ourstory5.jpg", position: "object-[50%_50%]" },
]

const OurStory = () => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [open, setOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    const nextSlide = () => {
        setDirection(1)
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }
    

    return (
        
        <>
            <motion.section id="gallery" initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                }}
                className='w-full bg-[#6C7852]  '>
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="flex items-center justify-center">

                        <div className="relative w-full max-w-[950px] h-[430px] md:max-w-[700px] md:h-[800px] lg:max-w-[950px] lg:h-[600px] overflow-hidden z-10">

                            {/* IMAGE SLIDE */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    className="absolute inset-0 z-0 cursor-pointer"
                                   onClick={() => {
  setScrollY(window.scrollY)
  setOpen(true)
}}
                                    initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Image
                                        src={images[index].src}
                                        alt="prewed"
                                        fill
                                        className={`object-cover ${images[index].position}`}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* ARROW KIRI */}
                            <button

                                onClick={prevSlide}
                                className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-30"
                            >
                                <Image
                                    src="/images/ourstory/vectorkiri.png"
                                    alt="left"
                                    width={50}
                                    height={40}
                                    className="w-[40px] md:w-[60px]"
                                />
                            </button>

                            {/* ARROW KANAN */}
                            <button

                                onClick={nextSlide}
                                className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-auto "
                            >
                                <img
                                    src="/images/ourstory/panahkanan.png"
                                    alt="right"
                                    className="w-[42px] md:w-[60px]"
                                />
                            </button>

                        </div>

                    </div>
                </div>
            </motion.section>
            <Lightbox
                open={open}
            close={() => {
  setOpen(false)

  requestAnimationFrame(() => {
    window.scrollTo({
      top: scrollY,
      behavior: "smooth"
    })
  })
}}
                index={index}

                slides={images.map((img) => ({ src: img.src }))}
                plugins={[Zoom]}
            />

            <div className="border-b border-[#454F23]/80 md:border-[#454F23]/85 border-[1px]" />
        </>
    )
}

export default OurStory