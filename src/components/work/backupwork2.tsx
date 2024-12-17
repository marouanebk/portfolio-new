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
import { useState } from "react"
import { useRouter } from "next/router"
import { PHPSVG } from "../../../public/techstack-php"
import { HTMLSVG } from "../../../public/techstack-html5"
import { DjangoSVG } from "../../../public/techstack-django"

// const ProjectCard = ({ project }: { project: any }) => {
//     const [isHovered, setIsHovered] = useState(false)
//     const [isTransitioning, setIsTransitioning] = useState(false);
//     const router = useRouter();

//     const handleProjectClick = async () => {
//         setIsTransitioning(true);
//         // Wait for animation to complete before navigation
//         await new Promise(resolve => setTimeout(resolve, 800));
//         router.push(`/project-details/${project.id}`);
//     };

//     return (
//         <motion.div 
//         className={`relative h-full rounded-2xl overflow-hidden ${
//             isTransitioning ? 'fixed inset-0 z-50' : ''
//         }`}
//         animate={{
//             scale: isTransitioning ? 1.1 : 1,
//             height: isTransitioning ? '100vh' : '100%',
//             width: isTransitioning ? '100vw' : '100%',
//             borderRadius: isTransitioning ? '0' : '1rem'
//         }}
//         transition={{ duration: 0.8 }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}

//         >

//         <div
//             className="relative h-full rounded-2xl overflow-hidden"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             >
//             <div
//                 style={{
//                     backgroundImage: `url("/project${project.id}.png")`,
//                     objectFit: "cover",
//                 }}
//                 className="h-full rounded-2xl bg-slate-900"
//                 >
//                 <motion.div
//                     initial={false}
//                     animate={{
//                         opacity: isHovered ? 0 : 1,
//                         y: isHovered ? -20 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="flex items-center justify-center gap-3 p-4"
//                     >
//                     <Image src="html5.svg" width={45} height={45} alt="" />
//                     <Image src="git.svg" width={45} height={45} alt="" />
//                     <Image width={45} height={45} src="github.svg" alt="" />
//                 </motion.div>
//                 {/* Hover display */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: isHovered ? 1 : 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute inset-0  flex items-center justify-center"
//                     >
//                     {/* Circle container with bottom-to-center animation */}
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0, y: 200 }}
//                         animate={{
//                             scale: isHovered ? 1 : 0.8,
//                             opacity: isHovered ? 1 : 0,
//                             y: isHovered ? 0 : 200,
//                         }}
//                         transition={{
//                             duration: 0.4,
//                             ease: "easeOut",
//                         }}
//                         className="relative w-[350px] h-[350px]"
//                         >
//                         <div className="absolute inset-0 rounded-full bg-transparent flex items-center justify-center">
//                             <div className="relative z-10">
//                                 <Link href={`/project-details/${project.id}`}>
//                                     <p className="text-white text-3xl font-semibold text-center">
//                                         View Project Details
//                                     </p>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div
//                             className="absolute inset-0 rounded-full shadow-lg"
//                             style={{
//                                 background:
//                                 "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 70%, transparent 100%)",
//                                 transform: "scale(1.5)",
//                             }}
//                             />
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </div>
//                             </motion.div>
//     )
// }

// export function Work() {
//     return (
//         <Inner>
//             <div className="pt-64 py-20 text-white">
//                 <header>
//                     <h1 className="text-center text-4xl mb-2">Portfolio</h1>
//                     <div className="flex justify-center gap-4 items-center ">
//                         <p>/AI</p>
//                         <p className="text-grayText">Backend Dev</p>
//                         <p className="text-grayText">Mobile Dev</p>
//                     </div>
//                 </header>
//                 {/* ... existing header ... */}
//                 <main className="my-5">
//                     <Swiper
//                         effect={"coverflow"}
//                         grabCursor={true}
//                         centeredSlides={true}
//                         slidesPerView={"auto"}
//                         coverflowEffect={{
//                             rotate: 0,
//                             stretch: -300,
//                             depth: 300,
//                             modifier: 1,
//                             slideShadows: true,
//                         }}
//                         pagination={{
//                             dynamicBullets: true,
//                         }}
//                         modules={[EffectCoverflow, Pagination, Navigation]}
//                         navigation
//                         className="h-[400px] md:h-[493px]"
//                     >
//                         {projectsData.map((project) => (
//                             <SwiperSlide
//                                 key={project.id}
//                                 className="max-h-[250px] md:max-h-[493px] max-w-[80%] md:max-w-[700px]"
//                             >
//                                 <ProjectCard project={project} />
//                                 <motion.h3
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: false, amount: "all" }}
//                                     transition={{
//                                         duration: 0.3,
//                                     }}
//                                     className="text-xl text-center my-3"
//                                 >
//                                     {"Lorem ipsum dolor sit amet"}
//                                 </motion.h3>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </main>
//             </div>
//         </Inner>
//     )
// }
export function Work() {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleProjectClick = (project: any) => {
        setSelectedProject(project);
        setIsTransitioning(true);
    };

    const handleClose = () => {
        setIsTransitioning(false);
        setTimeout(() => {
            setSelectedProject(null);
        }, 800);
    };

    return (
        <Inner>
            <div className="pt-64 py-20 text-white">
                {/* ... header content ... */}

                <main className={`my-5 ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <Swiper>
                        {projectsData.map((project) => (
                            <SwiperSlide
                                key={project.id}
                                className="max-h-[250px] md:max-h-[493px] max-w-[80%] md:max-w-[700px]"
                            >
                                <ProjectCard 
                                    project={project} 
                                    onProjectClick={() => handleProjectClick(project)}
                                    isSelected={selectedProject?.id === project.id}
                                    isTransitioning={isTransitioning}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </main>

                {/* Transitioning Project View */}
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-50 bg-black/80"
                    >
                        <motion.div
                            initial={{ 
                                position: 'fixed',
                                width: '700px',  // Initial card width
                                height: '493px', // Initial card height
                                top: '50%',
                                left: '50%',
                                x: '-50%',
                                y: '-50%',
                                scale: 1,
                            }}
                            animate={{ 
                                width: '100%',
                                height: '400px',
                                top: 0,
                                left: 0,
                                x: 0,
                                y: 0,
                                scale: 1.2,
                            }}
                            transition={{ 
                                duration: 0.8,
                                ease: [0.4, 0, 0.2, 1] // Custom easing for smooth zoom
                            }}
                            className="origin-center overflow-hidden"
                        >
                            <motion.img
                                src={selectedProject.img}
                                alt={selectedProject.projectName}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1 }}
                                animate={{ scale: isTransitioning ? 1.1 : 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative mt-[400px] mx-4 md:mx-8 lg:mx-28"
                        >
                            <button 
                                onClick={handleClose}
                                className="fixed top-4 right-4 text-white text-2xl"
                            >
                                ×
                            </button>
                            <h3 className="text-center text-3xl my-8 mb-12 capitalize">
                                {selectedProject.projectName}
                            </h3>
                            <article className="mb-6">
                                <h4 className="text-left text-2xl mb-4">Used Tech</h4>
                                <div className="max-w-full md:max-w-md lg:max-w-6xl flex-wrap flex justify-start gap-4 pe-3">
                                    <PHPSVG />
                                    <HTMLSVG />
                                    <DjangoSVG />
                                </div>
                            </article>
                            {/* ... rest of content ... */}
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </Inner>
    );
}

// Simplified ProjectCard component
const ProjectCard = ({ 
    project, 
    onProjectClick,
    isSelected,
    isTransitioning 
}: { 
    project: any; 
    onProjectClick: () => void;
    isSelected: boolean;
    isTransitioning: boolean;
}) => {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
        className={`relative h-full rounded-2xl overflow-hidden ${
            isSelected && isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}            onMouseEnter={() => setIsHovered(true)}
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
                        y: isHovered ? -20 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center gap-3 p-4"
                >
                    <Image src="html5.svg" width={45} height={45} alt="" />
                    <Image src="git.svg" width={45} height={45} alt="" />
                    <Image width={45} height={45} src="github.svg" alt="" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={onProjectClick}
                >
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0, y: 200 }}
                        animate={{ 
                            scale: isHovered ? 1 : 0.8,
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 200
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-[350px] h-[350px]"
                    >
                        {/* ... circle and gradient effects ... */}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};