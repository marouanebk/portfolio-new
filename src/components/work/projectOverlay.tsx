import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { projectsData } from '@/components/work/projectsData';
import Image from 'next/image';

export default function ProjectDetails() {
    const router = useRouter();

    const project = projectsData.find(p => p.id === Number(router.query.id));

    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full h-screen"
            >
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                >
                    <div className="absolute bottom-0 w-full p-8">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold mb-4 text-white">
                                {project.projectName}
                            </h2>
                            <p className="mb-4 text-white/90">{project.overview}</p>
                            <div className="flex gap-4">
                                <a
                                    href={project.seeLiveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-blue-600 rounded-full text-white"
                                >
                                    See Live
                                </a>
                                <a
                                    href={project.seeCodeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 border border-white rounded-full text-white"
                                >
                                    View Code
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Back button styled like slider navigation */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-8 left-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="text-white"
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
            </motion.div>
        </motion.div>
    );
}