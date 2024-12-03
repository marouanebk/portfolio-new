"use client"
import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useSwiper } from "swiper/react"
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"
import { projectsData } from "./projectsData"
import Inner from "../Layout/Inner"

export function Work() {
    return (
        <Inner>
            
        <div className="pt-64 py-20 text-white">
            <header>
                <h1 className="text-center text-4xl mb-2">Portfolio</h1>
                <div className="flex justify-center gap-4 items-center ">
                    <p>/AI</p>
                    <p className="text-grayText">Backend Dev</p>
                    <p className="text-grayText">Mobile Dev</p>
                </div>
            </header>
            <main className="my-5">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -300,
                        depth: 300,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    navigation
                    className="h-[400px] md:h-[493px] "
                    >
                    {projectsData.map((project) => (
                        <SwiperSlide
                        key={project.id}
                        className="max-h-[250px] md:max-h-[493px] max-w-[80%] md:max-w-[700px]"
                        >
                            <Link href={`/project-details/${project.id}`}>
                                <div
                                    style={{
                                        backgroundImage: `url("/project${project.id}.png")`,
                                        objectFit: "cover",
                                    }}
                                    className=" h-full rounded-2xl bg-slate-900"
                                    >
                                    <div>
                                        <div className="flex items-center justify-center gap-3 p-4">
                                            <Image
                                                src="html5.svg"
                                                width={45}
                                                height={45}
                                                alt=""
                                                />
                                            <Image
                                                src="git.svg"
                                                width={45}
                                                height={45}
                                                alt=""
                                                />
                                            <Image
                                                width={45}
                                                height={45}
                                                src="github.svg"
                                                alt=""
                                                />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: "all" }}
                                transition={{
                                    duration: 0.3,
                                }}
                                className="text-xl text-center my-3"
                                >
                                Lorem ipsut amet, consectetur adipisicing elit.
                                Harum, quam?
                            </motion.h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </div>
                    </Inner>
    )
}
