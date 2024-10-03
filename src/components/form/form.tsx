import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { div } from "three/examples/jsm/nodes/Nodes.js"

export function Form() {
    const [page, setPage] = useState<number>(0)

    const toggle = () => {
        setPage((prev: number) => {
            if (prev == 1) {
                return 0
            } else {
                return 1
            }
        })
    }

    return (
        <AnimatePresence initial={false} mode="wait">
            {page == 0 && <FormCover key={"cover"} toggle={toggle} />}
            {page == 1 && <FormInput key={"form"} />}
        </AnimatePresence>
    )
}

const FormCover = ({ toggle }: { toggle: any }) => {
    const variants = {
        enter: {
            y: "100%",
        },
        animate: {
            y: "100%",
        },
        exit: (i: number) => ({
            y: "0",
            transition: {
                duration: 0.4,
                delay: 0.1 * i,
            },
        }),
    }

    const anim = (variants: any, custom: number) => {
        return {
            initial: "enter",
            animate: "animate",
            exit: "exit",
            variants,
            custom,
        }
    }

    return (
        <div className="absolute w-screen h-screen overflow-hidden">
            <div className="stairs--container  w-screen h-screen absolute flex z-10 pointer-events-none">
                {[...Array(5)].map((_, i) => {
                    return (
                        <motion.div
                            key={i}
                            className="stairs--column w-full h-full bg-dark relative"
                            {...anim(variants, i)}
                        ></motion.div>
                    )
                })}
            </div>
            <div
                onClick={toggle}
                className="relative w-screen h-screen grid place-content-center bg-linearBlack"
            >
                <div>
                    <h1 className="title">
                        <div className="text-white flex items-center">
                            <span className="mr-6 text-6xl lg:text-[6rem]">
                                {"GET IN"}
                            </span>
                            <Image
                                src="/arrow.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="w-[52px] h-fit lg:h-[75px] lg:w-fit"
                            />
                        </div>
                        <div className="text-stroke text-6xl lg:text-[6rem] ">
                            <span className="mr-6">&lt;/</span>
                            <span className="text-grey ">TOUCH</span>
                        </div>
                    </h1>
                </div>
                <div className="md:hidden">
                    <Image
                        height={100}
                        width={100}
                        src="/sun3.svg"
                        className="absolute bottom-0 w-[90%] left-1/2 -translate-x-1/2"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

const FormInput = () => {
    const variants = {
        enter: {
            y: "0",
        },
        animate: (i: number) => ({
            y: "100%",
            transition: {
                duration: 0.4,
                delay: 0.1 * i,
            },
        }),
        exit: () => ({
            y: "0",
        }),
    }

    const anim = (variants: any, custom: number) => {
        return {
            initial: "enter",
            animate: "animate",
            exit: "exit",
            variants,
            custom,
        }
    }

    return (
        <div className="absolute w-screen h-screen overflow-hidden">
            <div className="stairs--container  w-screen h-screen absolute flex z-10 pointer-events-none">
                {[...Array(5)].map((_, i) => {
                    return (
                        <motion.div
                            key={i}
                            className="stairs--column w-full h-full bg-dark relative"
                            {...anim(variants, i)}
                        ></motion.div>
                    )
                })}
            </div>
            <motion.div className="flex items-center justify-center bg-black min-h-screen">
                <div className="container  mx-auto px-4 py-8">
                    <div className="border border-gray-300 rounded-lg p-6 max-w-full md:max-w-2xl lg:max-w-3xl mx-auto">
                        <h2 className="text-white text-4xl font-normal mb-2 kalnia-font text-center">
                            GET IN TOUCH
                        </h2>
                        <p className=" text-gray-500 text-base font-normal leading-5 tracking-normal text-center mb-8">
                            Leave your details bellow and lets start working on
                            your next big project.
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
            </motion.div>
        </div>
    )
}
