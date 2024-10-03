"use client"
import React from "react"
import { throttle } from "lodash"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Inner from "@/components/Layout/Inner"

const FormAnimation = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    })
    const [cursorVariant, setCursorVariant] = useState("default")

    const [isMouseOver, setIsMouseOver] = useState(false)

    const handleMouseEnter = () => {
        setIsMouseOver(true)
    }

    const handleMouseLeave = () => {
        setIsMouseOver(false)
    }

    useEffect(() => {
        const mouseMove = throttle((e) => {
            if (window.innerWidth > 768) {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                })
            }
        }, 100)

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
    }

    return (
        <div
            className="App form-component"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h1 className="title">
                <span className="text-white flex items-center">
                    <span className="mr-6">{"GET IN"}</span>
                    <img src="/arrow.svg" />
                </span>
                <span className="text-grey ">&lt;/TOUCH</span>
            </h1>
            {isMouseOver && (
                <motion.div
                    className="cursor"
                    variants={variants}
                    animate={cursorVariant}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <span className="font-kalnia text-base font-normal leading-5 tracking-normal text-center">
                        Contact Me
                    </span>
                </motion.div>
            )}
        </div>
    )
}

const SecondPage = () => {
    return (
        <div className="flex items-center justify-center bg-black min-h-screen">
            <div className="container  mx-auto px-4 py-8">
                <div className="border border-gray-300 rounded-lg p-6">
                    <h2 className="text-white text-4xl font-normal mb-2 kalnia-font text-center">
                        GET IN TOUCH
                    </h2>
                    <p className=" text-gray-500 text-base font-normal leading-5 tracking-normal text-center mb-8">
                        Leave your details bellow and lets start working on your
                        next big project.
                    </p>

                    <form className=" myForm grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            className="bg-gray-800 text-white p-2 mb-4 w-full"
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            className="bg-gray-800 text-white p-2 mb-4 w-full"
                            type="text"
                            placeholder="Last Name"
                        />
                        <input
                            className="bg-gray-800 text-white p-2 mb-4 w-full"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className="bg-gray-800 text-white p-2 mb-4 w-full"
                            type="text"
                            placeholder="Enterprise"
                        />
                        <textarea
                            className="bg-gray-800 text-white p-2 mb-4 w-full md:col-span-2"
                            placeholder="Message"
                        ></textarea>
                        <button className="md:col-span-2 mx-auto bg-purple-500 text-white p-2 px-4 py-2 rounded">
                            SEND THE MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
const Contact = () => {
    const [currentPage, setCurrentPage] = useState("form")

    const handleClick = () => {
        setCurrentPage("secondPage")
    }

    const slideVariants = {
        hidden: { x: "100%" }, // Position off-screen to the right
        visible: { x: 0, transition: { duration: 1 } }, // Adjust duration to 1 second
    }

    return (
        <Inner>
            <div onClick={handleClick}>
                <motion.div
                    variants={slideVariants}
                    animate={currentPage === "form" ? "visible" : "hidden"}
                >
                    {currentPage === "form" && <FormAnimation />}
                </motion.div>
                <motion.div
                    variants={slideVariants}
                    animate={
                        currentPage === "secondPage" ? "visible" : "hidden"
                    }
                >
                    {currentPage === "secondPage" && <SecondPage />}
                </motion.div>
            </div>
        </Inner>
    )
}
export default Contact
