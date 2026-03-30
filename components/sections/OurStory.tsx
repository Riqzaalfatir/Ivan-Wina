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
            <section id="gallery" className='w-full bg-white'>
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
                            <button
                                onClick={prevSlide}
                                className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2"
                            >
                                <Image
                                    src="/images/ourstory/Vector2.png"
                                    alt="left"
                                    width={50}
                                    height={40}
                                    className="w-[40px] md:w-[60px]"
                                />
                            </button>

                            {/* ARROW KANAN */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2"
                            >
                                <Image
                                    src="/images/ourstory/Vector1.png"
                                    alt="right"
                                    width={50}
                                    height={40}
                                    className="w-[40px] md:w-[60px]"
                                />
                            </button>

                        </div>

                    </div>
                </div>
            </section>

            <div className="hidden md:block border-b border-[#454F2340]/20 border-[1.5px]" />
        </>
    )
}

export default OurStory