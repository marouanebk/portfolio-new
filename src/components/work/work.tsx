"use client"
import React, { useEffect, useRef } from "react"
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
import { useState } from "react"
import { PHPSVG } from "../../../public/techstack-php"
import { HTMLSVG } from "../../../public/techstack-html5"
import { DjangoSVG } from "../../../public/techstack-django"
import { PythonSVG } from "../../../public/icon-techstack/techstack-python"

type Project = {
    id: number
    img: string
    projectName: string
    overview: string
    myRole: string
    seeLiveUrl: string
    seeCodeUrl: string
    tech: string[]
}

const ProjectCard = ({
    project,
    onSelect,
}: {
    project: Project
    onSelect: (project: Project) => void
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect()
            onSelect(project) // Remove spreading rect since it's not in Project type
        }
    }

    return (
        <div
            ref={cardRef}
            className="relative h-full rounded-2xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                style={{
                    backgroundImage: `url("${project.img}")`,
                    objectFit: "cover",
                }}
                className="h-full rounded-2xl bg-slate-900"
            >
                <motion.div
                    initial={false}
                    animate={{
                        opacity: isHovered ? 0 : 1,
                        y: isHovered ? -20 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center gap-3 p-4"
                >
                    <Image src="html5.svg" width={45} height={45} alt="" />
                    <Image src="git.svg" width={45} height={45} alt="" />
                    <Image width={45} height={45} src="github.svg" alt="" />
                </motion.div>
                {/* Hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0  flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 200 }}
                        animate={{
                            scale: isHovered ? 1 : 0.8,
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 200,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                        className="relative w-[350px] h-[350px]"
                        onClick={handleClick}
                    >
                        <div className="absolute inset-0 rounded-full bg-transparent flex items-center justify-center">
                            <div className="relative z-10">
                                <p className="text-white text-3xl font-semibold text-center cursor-pointer">
                                    View Project Details
                                </p>
                            </div>
                        </div>

                        <div
                            className="absolute inset-0 rounded-full shadow-lg"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 70%, transparent 100%)",
                                transform: "scale(1.5)",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

// const ProjectOverlay = ({
//     project,
//     onClose,
// }: {
//     project: Project & { rect?: DOMRect }
//     onClose: () => void
// }) => {
//     // Add ESC key handler
//     useEffect(() => {
//         const handleEsc = (e: KeyboardEvent) => {
//             if (e.key === 'Escape') {
//                 onClose();
//             }
//         };
//         window.addEventListener('keydown', handleEsc);
//         return () => window.removeEventListener('keydown', handleEsc);
//     }, [onClose]);

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black bg-opacity-90"
//         >
//             <motion.div
//                 initial={{
//                     position: "fixed",
//                     top: project.rect ? project.rect.top : 0,
//                     left: project.rect ? project.rect.left : 0,
//                     width: project.rect ? project.rect.width : "100%",
//                     height: project.rect ? project.rect.height : "100%",
//                 }}
//                 animate={{
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                 }}
//                 transition={{
//                     duration: 0.4,
//                     ease: "easeInOut",
//                 }}
//                 className="bg-slate-900"
//             >
//                 {/* Back button styled like slider navigation */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-8 left-8 z-50 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors group"
//                 >
//                     <svg 
//                         width="24" 
//                         height="24" 
//                         viewBox="0 0 24 24" 
//                         fill="none" 
//                         className="text-white transform transition-transform group-hover:-translate-x-0.5"
//                     >
//                         <path 
//                             d="M15 19l-7-7 7-7" 
//                             stroke="currentColor" 
//                             strokeWidth="2" 
//                             strokeLinecap="round" 
//                             strokeLinejoin="round"
//                         />
//                     </svg>
//                 </button>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                     className="h-full overflow-y-auto"
//                 >
//                     <div className="relative h-[400px]">
//                         <Image
//                             src={project.img}
//                             layout="fill"
//                             objectFit="cover"
//                             alt={project.projectName}
//                         />
//                     </div>
//                     <div className="p-8 text-white">
//                         <h2 className="text-3xl font-bold mb-4">
//                             {project.projectName}
//                         </h2>
//                         <p className="mb-4">{project.overview}</p>
//                         <h3 className="text-xl font-semibold mb-2">My Role</h3>
//                         <p className="mb-4">{project.myRole}</p>
//                         <div className="flex gap-4">
//                             <a
//                                 href={project.seeLiveUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-6 py-2 bg-blue-600 rounded-full"
//                             >
//                                 See Live
//                             </a>
//                             <a
//                                 href={project.seeCodeUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="px-6 py-2 border border-white rounded-full"
//                             >
//                                 View Code
//                             </a>
//                         </div>
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     )
// }

// const ProjectOverlay = ({
//     project,
//     onClose,
// }: {
//     project: Project;
//     onClose: () => void;
// }) => {
//     useEffect(() => {
//         const handleEsc = (e: KeyboardEvent) => {
//             if (e.key === "Escape") {
//                 onClose();
//             }
//         };
//         window.addEventListener("keydown", handleEsc);
//         return () => window.removeEventListener("keydown", handleEsc);
//     }, [onClose]);

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black bg-opacity-90"
//         >
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative bg-linearBlack text-white min-h-screen overflow-hidden"
//             >
//                 {/* Back Button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-8 left-8 z-50 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors group"
//                 >
//                     <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         className="text-white transform transition-transform group-hover:-translate-x-0.5"
//                     >
//                         <path
//                             d="M15 19l-7-7 7-7"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </svg>
//                 </button>

//                 <div>
//                     <div
//                         style={{
//                             backgroundImage: `url(${project.img})`,
//                             height: "400px",
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                         }}
//                         className="w-full"
//                     ></div>
//                 </div>

//                 <div className="mx-4 md:mx-8 lg:mx-28">
//                     <h3 className="text-center text-3xl my-8 mb-12 capitalize">
//                         {project.projectName}
//                     </h3>

//                     <article className="mb-6">
//                         <h4 className="text-left text-2xl mb-4">Used Tech</h4>
//                         <div className="max-w-full md:max-w-md lg:max-w-6xl flex-wrap flex justify-start gap-4">
//                             <PHPSVG />
//                             <HTMLSVG />
//                             <DjangoSVG />
//                         </div>
//                     </article>

//                     <article className="mb-6">
//                         <h4 className="text-left text-2xl mb-4">Project Overview</h4>
//                         <p className="leading-6 text-lg text-left text-grayText">
//                             {project.overview}
//                         </p>
//                     </article>

//                     <article className="mb-6">
//                         <h4 className="text-left text-2xl mb-4">My Role</h4>
//                         <p className="leading-6 text-lg text-left text-grayText">
//                             {project.myRole}
//                         </p>
//                     </article>

//                     <article className="mb-6">
//                         <div className="flex justify-start items-center gap-3">
//                             <a href={project.seeLiveUrl} target="_blank" rel="noopener noreferrer">
//                                 <div className="inline-flex items-center justify-between px-4 py-2 border border-white rounded-lg text-white gap-3">
//                                     <span className="font-bold mr-1">See Live</span>
//                                     <span className="text-sm opacity-70">
//                                         <img src="/arrow1.svg" className="h-4" />
//                                     </span>
//                                 </div>
//                             </a>
//                             <a href={project.seeCodeUrl} target="_blank" rel="noopener noreferrer">
//                                 <div className="inline-flex items-center justify-between px-4 py-2 border border-white rounded-lg text-white gap-3">
//                                     <span className="font-bold mr-1">See Code</span>
//                                     <span className="text-sm opacity-70">
//                                         <img src="/github-1.svg" className="h-4" />
//                                     </span>
//                                 </div>
//                             </a>
//                         </div>
//                     </article>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

const ProjectOverlay = ({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative bg-linearBlack text-white w-full h-full overflow-hidden"
            >
                {/* Scrollable Content */}
                <div className="overflow-y-auto h-full">
                    {/* Back Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 left-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors group"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-white transform transition-transform group-hover:-translate-x-0.5"
                        >
                            <path
                                d="M15 19l-7-7 7-7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Image Section */}
                    <div
                        style={{
                            backgroundImage: `url(${project.img})`,
                            height: "400px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="w-full"
                    ></div>

                    {/* Content Section */}
                    <div className="mx-4 md:mx-8 lg:mx-28">
                        <h3 className="text-center text-3xl my-8 mb-12 capitalize">
                            {project.projectName}
                        </h3>

                        <article className="mb-6">
                            <h4 className="text-left text-2xl mb-4">Used Tech</h4>
                            <div className="max-w-full md:max-w-md lg:max-w-6xl flex-wrap flex justify-start gap-4">
                                <PythonSVG />
                                <HTMLSVG />
                                <DjangoSVG />
                            </div>
                        </article>

                        <article className="mb-6">
                            <h4 className="text-left text-2xl mb-4">Project Overview</h4>
                            <p className="leading-6 text-lg text-left text-grayText">
                                {project.overview}
                            </p>
                        </article>

                        <article className="mb-6">
                            <h4 className="text-left text-2xl mb-4">My Role</h4>
                            <p className="leading-6 text-lg text-left text-grayText">
                                {project.myRole}
                            </p>
                        </article>

                        <article className="mb-6">
                            <div className="flex justify-start items-center gap-3">
                                <a
                                    href={project.seeLiveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="inline-flex items-center justify-between px-4 py-2 border border-white rounded-lg text-white gap-3">
                                        <span className="font-bold mr-1">See Live</span>
                                        <span className="text-sm opacity-70">
                                            <img src="/arrow1.svg" className="h-4" />
                                        </span>
                                    </div>
                                </a>
                                <a
                                    href={project.seeCodeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="inline-flex items-center justify-between px-4 py-2 border border-white rounded-lg text-white gap-3">
                                        <span className="font-bold mr-1">See Code</span>
                                        <span className="text-sm opacity-70">
                                            <img src="/github-1.svg" className="h-4" />
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export function Work() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
                {/* ... existing header ... */}
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
                        className="h-[400px] md:h-[493px]"
                    >
                        {projectsData.map((project) => (
                            <SwiperSlide
                                key={project.id}
                                className="max-h-[250px] md:max-h-[493px] max-w-[80%] md:max-w-[700px]"
                            >
                                <ProjectCard
                                    project={project}
                                    onSelect={setSelectedProject}
                                />
                                <motion.h3>{project.projectName}</motion.h3>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </main>
            </div>
            {selectedProject && (
                <ProjectOverlay
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </Inner>
    )
}
