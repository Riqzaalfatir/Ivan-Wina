"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
    { src: "/images/ourstory/Prewed1.jpg", position: "object-[50%_20%]"},
    { src: "/images/ourstory/Prewed2.jpg", position: "object-[50%_20%]"},
    { src: "/images/ourstory/Prewed3.jpg", position: "object-[50%_50%]"},
    { src: "/images/ourstory/Prewed4.jpg", position: "object-[50%_30%]"},
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
            <section className='w-full bg-[#6C7852]'>
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
                                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2"
                            >
                                <Image
                                    src="/images/ourstory/Vector2.png"
                                    alt="left"
                                    width={50}
                                    height={40}
                                />
                            </button>

                            {/* ARROW KANAN */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2"
                            >
                                <Image
                                    src="/images/ourstory/Vector1.png"
                                    alt="right"
                                    width={50}
                                    height={40}
                                />
                            </button>

                        </div>

                    </div>
                </div>
            </section>

            <div className="border-b border-[#202F26] border-[1.5px]" />
        </>
    )
}

export default OurStory