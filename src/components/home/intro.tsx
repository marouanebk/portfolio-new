// "use client"
// import dynamic from "next/dynamic"
// import { easeInOut, easeOut, motion } from "framer-motion"
// import Image from "next/image"

// export default function Intro() {
//     const opacitySun1 = {
//         enter: {
//             opacity: 0,
//         },
//         animate: {
//             opacity: 1,
//             transition: {
//                 delay: 0.2,
//                 ease: easeOut,
//             },
//         },
//     }

//     const opacitySun2 = {
//         enter: {
//             opacity: 0,
//             y: 40,
//             scale: 0.5,
//         },
//         animate: {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             transition: {
//                 ease: easeOut,
//                 delay: 1,
//             },
//         },
//     }

//     return (
//         <div className="intro flex items-center justify-center relative ">
//             <article className="w-full h-full flex flex-col lg:flex-row gap-5 items-center justify-between my-24 md:my-48">
//                 <div className="basis-1/3 w-lg max-w-lg flex flex-col gap-4 lg:gap-7 items-center lg:items-start">
//                     <h1 className="text-4xl sm:text-7xl font-normal text-center lg:text-left w-full text-white">
//                         Merouane Boukandoura.
//                     </h1>
//                     <div className="h-2 w-11 bg-gradientPurple rounded"></div>

//                     <div className="flex items-center justify-start gap-3">
//                         <img src="/github-icon.svg" alt="" />
//                         <img src="/email-icon.svg" alt="" />
//                         <img src="/facebook-icon.svg" alt="" />
//                         <img src="/instagram-icon.svg" alt="" />
//                     </div>
//                 </div>

//                 <div className="basis-1/3 text-center lg:text-start">
//                     <h2 className="text-xl text-white">
//                         Backend & Mobile developer
//                     </h2>
//                     <p className="text-grayText mb-3">
//                         Lorem ipsum dolor sit amet consectetur. Velit egestas
//                         sed fermentum lobortis dui. Vitae sit d vel. Massa id
//                         elementum porttitor suspendisse.
//                     </p>

//                     <p className="text-grayText">
//                         Lorem ipsum dolor sit amet consectetur. Velit egestas
//                         sed fermentum lobortis dui. Vitae sit velit tristique
//                         purus. Consequat vitae cursus augue turpis gravida
//                         fringilla at. Suspendisse d etiam enim adipiscing vel.
//                         Massa id elementum porttitor suspendisse.
//                     </p>

//                     <div className="flex gap-5 items-center my-5 justify-center lg:justify-normal ">
//                         <a href="#" className="">
//                             <button className="bg-gradientPurple text-white px-3.5 py-1 rounded-2xl">
//                                 DOWNLOAD CV
//                             </button>
//                         </a>
//                         <a
//                             href=""
//                             className="gradient-text-purple relative before:absolute before:left-0 before:-bottom-[0.3px] before:w-full before:h-px before:bg-gradientPurple h-fit"
//                         >
//                             START A PROJECT
//                         </a>
//                     </div>
//                 </div>
//             </article>
//             <article>
//                 <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2">
//                     <motion.img
//                         variants={opacitySun2}
//                         initial={"enter"}
//                         animate={"animate"}
//                         exit={"exit"}
//                         src="/sun2.svg"
//                         alt=""
//                     />
//                 </div>
//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
//                     <motion.img
//                         variants={opacitySun1}
//                         initial={"enter"}
//                         animate={"animate"}
//                         src="/sun1.svg"
//                         alt=""
//                     />
//                 </div>
//             </article>
//         </div>
//     )
// }
"use client"
import dynamic from "next/dynamic"
import { easeInOut, easeOut, motion } from "framer-motion"
import Image from "next/image"
import Navbar from "../navbar" // Import Navbar here
import { GithubContactSVG } from "../../../public/icon-techstack/contact-github"

export default function Intro() {
    const opacitySun1 = {
        enter: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2,
                ease: easeOut,
            },
        },
    }

    const opacitySun2 = {
        enter: {
            opacity: 0,
            y: 40,
            scale: 0.5,
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                ease: easeOut,
                delay: 1,
            },
        },
    }

    return (
        <div className="intro flex items-center justify-center relative min-h-screen w-full scroll-snap-start">
            <style jsx>{`
                .svg-icon {
                    transition:
                        filter 0.3s ease,
                        transform 0.3s ease;
                    filter: brightness(1); /* Normal state */
                }

                .cont-svg-icon {
                    transition:
                        0.3s ease,
                        transform 0.3s ease;
                    position: relative;
                }
                .cont-svg-icon::before {
                    content: "";
                    transition:
                        0.3s ease,
                        transform 0.3s ease;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0%;
                    height: 0%;
                    background: #cb89ff;
                    border-radius: 50%;
                    filter: blur(5px);
                }

                .cont-svg-icon:hover::before {
                    width: 110%;
                    height: 110%;
                }

                .svg-icon:hover {
                    filter: brightness(1.5) saturate(1.8) hue-rotate(45deg);
                    transform: scale(1.1); /* Optional scaling for better UX */
                }
            `}</style>
            <div className="intro flex items-center justify-center relative min-h-screen w-full scroll-snap-start">
                <Navbar /> {/* Include Navbar here */}
                <article className="w-full h-full flex flex-col lg:flex-row gap-5 items-center justify-between my-24 md:my-48 pt-20">
                    {" "}
                    {/* Added pt-20 to make space for fixed Navbar */}
                    <div className="basis-1/3 w-lg max-w-lg flex flex-col gap-4 lg:gap-7 items-center lg:items-start">
                        <h1 className="text-4xl sm:text-7xl font-normal text-center lg:text-left w-full text-white">
                            Merouane Boukandoura.
                        </h1>
                        <div className="h-2 w-11 bg-gradientPurple rounded"></div>

                        <div className="flex items-center justify-start gap-3">
                            {/* <div className="cont-svg-icon"> */}

                            <GithubContactSVG />
                            {/* </div> */}

                            <div className="cont-svg-icon">
                                <img
                                    className="svg-icon"
                                    src="/github-icon.svg"
                                    alt=""
                                />
                            </div>
                            <div className="cont-svg-icon">
                                <img
                                    className="svg-icon"
                                    src="/email-icon.svg"
                                    alt=""
                                />
                            </div>
                            <div className="cont-svg-icon">
                                <img
                                    className="svg-icon"
                                    src="/facebook-icon.svg"
                                    alt=""
                                />
                            </div>

                            <div className="cont-svg-icon">
                                <img
                                    className="svg-icon"
                                    src="/instagram-icon.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 text-center lg:text-start">
                        <h2 className="text-xl text-white">
                            Backend & Mobile developer
                        </h2>
                        <p className="text-grayText mb-3">
                            Lorem ipsum dolor sit amet consectetur. Velit
                            egestas sed fermentum lobortis dui. Vitae sit d vel.
                            Massa id elementum porttitor suspendisse.
                        </p>

                        <p className="text-grayText">
                            Lorem ipsum dolor sit amet consectetur. Velit
                            egestas sed fermentum lobortis dui. Vitae sit velit
                            tristique purus. Consequat vitae cursus augue turpis
                            gravida fringilla at. Suspendisse d etiam enim
                            adipiscing vel. Massa id elementum porttitor
                            suspendisse.
                        </p>

                        <div className="flex gap-5 items-center my-5 justify-center lg:justify-normal ">
                            <a href="#" className="">
                                <button className="bg-gradientPurple text-white px-3.5 py-1 rounded-2xl">
                                    DOWNLOAD CV
                                </button>
                            </a>
                            <a
                                href=""
                                className="gradient-text-purple relative before:absolute before:left-0 before:-bottom-[0.3px] before:w-full before:h-px before:bg-gradientPurple h-fit"
                            >
                                START A PROJECT
                            </a>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2">
                        <motion.img
                            variants={opacitySun2}
                            initial={"enter"}
                            animate={"animate"}
                            exit={"exit"}
                            src="/sun2.svg"
                            alt=""
                        />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <motion.img
                            variants={opacitySun1}
                            initial={"enter"}
                            animate={"animate"}
                            src="/sun1.svg"
                            alt=""
                        />
                    </div>
                </article>
            </div>
        </div>
    )
}
