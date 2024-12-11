"use client"
import gsap from "gsap"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

export function Slider() {
    const firstText = useRef(null)
    const secoundText = useRef(null)
    const slider = useRef(null)

    const firstText2 = useRef(null)
    const secoundText2 = useRef(null)
    const slider2 = useRef(null)

    let xPercent = 0
    let direction = 1

    let xPercent2 = 0
    let direction2 = -1

    useEffect(() => {
        requestAnimationFrame(animation)
        requestAnimationFrame(animation2)
    }, [])

    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0
        }
        if (xPercent > 0) {
            xPercent = -100
        }
        if (firstText) gsap.set(firstText.current, { xPercent: xPercent })
        if (secoundText) gsap.set(secoundText.current, { xPercent: xPercent })
        xPercent += 0.02 * direction  // Changed from 0.04 to 0.02
        requestAnimationFrame(animation)
    }
    
    const animation2 = () => {
        if (xPercent2 <= -100) {
            xPercent2 = 0
        }
        if (xPercent2 > 0) {
            xPercent2 = -100
        }
        if (firstText2) gsap.set(firstText2.current, { xPercent: xPercent2 })
        if (secoundText2) gsap.set(secoundText2.current, { xPercent: xPercent2 })
        xPercent2 += 0.02 * direction2  // Changed from 0.04 to 0.02
        requestAnimationFrame(animation2)
    }
    return (
        <div className="relative w-screen h-[18rem] overflow-hidden -mt-[6rem]">
            <div className="slider--container slider--container--1 -rotate-[8deg] md:-rotate-3">
                <div className="slider" ref={slider}>
                    <h1
                        ref={firstText}
                        className="text-white text-7xl md:text-9xl py-2 text-nowrap whitespace-nowrap "
                    >
                        ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT &lt;/&gt;
                        WEB DEVELOPMENT / BACKEND DEVELOPMENT -
                    </h1>
                    <h1
                        ref={secoundText}
                        className="text-white  text-7xl md:text-9xl py-2 text-nowrap whitespace-nowrap "
                    >
                        ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT &lt;/&gt;
                        WEB DEVELOPMENT / BACKEND DEVELOPMENT -
                    </h1>
                </div>
            </div>
            <div className="slider--container slider--container--2 rotate-[8deg] md:rotate-3">
                <div className="slider" ref={slider2}>
                    <h1
                        ref={firstText2}
                        style={{ backgroundColor: "#C172FF" }}
                        className="text-white bg-purple py-2 text-7xl md:text-9xl text-nowrap whitespace-nowrap "
                    >
                        ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT &lt;/&gt;
                        WEB DEVELOPMENT / BACKEND DEVELOPMENT -
                    </h1>
                    <h1
                        ref={secoundText2}
                        style={{ backgroundColor: "#C172FF" }}
                        className="text-white bg-purple py-2 text-7xl md:text-9xl text-nowrap whitespace-nowrap "
                    >
                        ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT &lt;/&gt;
                        WEB DEVELOPMENT / BACKEND DEVELOPMENT -
                    </h1>
                </div>
            </div>
        </div>
    )
}
