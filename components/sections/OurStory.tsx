"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

                        <div className="relative w-full max-w-[950px] h-[430px] md:max-w-[700px] md:h-[800px] lg:max-w-[950px] lg:h-[600px] overflow-hidden">

                            {/* IMAGE SLIDE */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    className="absolute inset-0"
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
                            <motion.button
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.6,
                                }}
                                onClick={prevSlide}
                                className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-20"
                            >
                                <Image
                                    src="/images/ourstory/vectorkiri.png"
                                    alt="left"
                                    width={50}
                                    height={40}
                                    className="w-[40px] md:w-[60px]"
                                />
                            </motion.button>

                            {/* ARROW KANAN */}
                            <motion.button
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.6,
                                }}
                                onClick={nextSlide}
                                className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 "
                            >
                              <img
  src="/images/ourstory/vectorkanan.png"
  alt="right"
  className="w-[40px] md:w-[60px]"
/>
                            </motion.button>

                        </div>

                    </div>
                </div>
            </motion.section>

            <div className="border-b border-[#454F23]/80 border-[1px]" />
        </>
    )
}

export default OurStory