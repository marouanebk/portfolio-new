import React, { useEffect, useRef, useState } from "react"
import Cont from "../../components/cont"
import Inner from "@/components/Layout/Inner"
import Image from "next/image"
import { motion } from "framer-motion"

type CardTypes = {
    title: string
    number: number
}

type SectionItemTypes = {
    title: string
    description: string
}
const Card = ({ title, number, delay = 0 }: CardTypes & { delay?: number }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLSpanElement>(null)
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                // Start animation when card is visible
                let start = 0
                const duration = 3000 // 2 seconds
                const step = (timestamp: number) => {
                    if (!start) start = timestamp
                    const progress = timestamp - start
                    const percentage = Math.min(progress / duration, 1)
                    
                    // Easing function for smooth animation
                    const easeOutQuad = 1 - Math.pow(1 - percentage, 2)
                    setCount(Math.floor(easeOutQuad * number))

                    if (progress < duration) {
                        requestAnimationFrame(step)
                    } else {
                        setCount(number) // Ensure we end at exact number
                    }
                }
                requestAnimationFrame(step)
                
                // Cleanup observer after animation starts
                observer.current?.disconnect()
            }
        }, { threshold: 0.1 })

        if (countRef.current) {
            observer.current.observe(countRef.current)
        }

        return () => {
            observer.current?.disconnect()
        }
    }, [number])

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="md:w-[193px] md:h-[98px] rounded-lg border-solid border-white border p-2 flex flex-col items-center justify-center bg-linearBlack"
        >
            <span 
                ref={countRef}
                className="text-4xl md:text-[48px] text-white font-kalnia leading-10"
            >
                +{count}
            </span>
            <span className="text-center md:text-left text-grayText font-dosis">
                {title}
            </span>
        </motion.div>
    )
}


const SectionItem = ({ title, description, delay = 0 }: SectionItemTypes & { delay?: number }) => (
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="flex justify-start items-start gap-3 mb-2"
    >
        <div>
            <Image
                width={10}
                height={3}
                className="mt-3.5 min-w-3"
                src="/-.svg"
                alt="-"
            />
        </div>
        <div>
        <h3 className="text-xl font-normal text-white font-Dosis">
                {title}
            </h3>
            <p className="text-lg text-grayText font-Dosis">{description}</p>
        </div>
    </motion.div>
)

const About = () => (
    <Inner>
        <div
            className="px-2 sm:px-3 md:px-12 xl:px-20 flex flex-col items-center justify-start py-20 min-h-screen w-full scroll-snap-start h-screen"
            style={{
                background: "linear-gradient(103.02deg, #2E2E2E 0%, #222222 81.17%)",
            }}
        >
            <div className="flex gap-3 md:gap-10 justify-center flex-row w-full">
                <Card title="Successful Projects" number={30} delay={0.2} />
                <Card title="Years of Experience" number={4} delay={0.4} />
                <Card title="Worldwide Clients" number={10} delay={0.6} />
            </div>
            
            <div className="min-w-full flex justify-around flex-col lg:flex-row gap-8 my-12 mt-28 px-3">
                <div className="max-w-[568px]">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-4xl md:text-4xl text-center md:text-left mb-4 text-white kalnia-font"
                    >
                        Education
                    </motion.h1>
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        delay={1.0}
                    />
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        delay={1.2}
                    />
                </div>

                <div className="max-w-[568px]">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-4xl md:text-4xl text-center md:text-left mb-4 text-white kalnia-font"
                    >
                        Experience
                    </motion.h1>
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        delay={1.0}
                    />
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                        delay={1.2}
                    />
                </div>
            </div>
        </div>
    </Inner>
)


export default About
