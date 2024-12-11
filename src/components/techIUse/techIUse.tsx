// import Image from "next/image"
// import { motion } from "framer-motion"
// import { DjangoSVG } from "../../../public/techstack-django"
// import { GitSVG } from "../../../public/techstack-git"
// import { GithubSVG } from "../../../public/techstack-github"
// import { PHPSVG } from "../../../public/techstack-php"
// import { MongoDbSVG } from "../../../public/techstack-mongodb"
// import { FlutterSVG } from "../../../public/techstack-flutter"
// import { HTMLSVG } from "../../../public/techstack-html5"
// import { CSS3SVG } from "../../../public/icon-techstack/techstack-css"
// import Inner from "../Layout/Inner"
// import { PythonSVG } from "../../../public/icon-techstack/techstack-python"

// export default function TechIUse() {
//     return (
//         <Inner>
//             <div className="px-2 pb-20 sm:px-3 md:px-12 text-white min-h-screen flex flex-col items-center justify-center">
//                 <header className="mb-10">
//                     <h1 className="text-center text-4xl mb-2">Tech I Use</h1>
//                     <div className="flex justify-center gap-4 items-center ">
//                         <p className="text-grayText text-center">
//                             Lorem ipsum dolor, sit amet consectetur adipisicing
//                             elit. Quas, voluptatum?
//                         </p>
//                     </div>
//                 </header>
//                 <main className="flex flex-wrap justify-center gap-4 max-w-full md:max-w-md lg:max-w-6xl mx-auto">
//                 <HTMLSVG />
//                     <CSS3SVG />
//                     <DjangoSVG />
//                     <GitSVG />
//                     <FlutterSVG />
//                     <GithubSVG />
//                     <PythonSVG/>
//                     <MongoDbSVG />
//                     {/* Mo */}    <HTMLSVG />
//                     <CSS3SVG />
//                     <DjangoSVG />
//                     <GitSVG />
//                     <FlutterSVG />
//                     <GithubSVG />
//                     <PythonSVG/>
//                     <MongoDbSVG />
//                     {/* Mo */}    <HTMLSVG />
//                     <CSS3SVG />
//                     <DjangoSVG />
//                     <GitSVG />
//                     <FlutterSVG />
//                     <GithubSVG />
//                     <PythonSVG/>
//                     <MongoDbSVG />
//                     {/* Mo */}    <HTMLSVG />
//                     <CSS3SVG />
//                     <DjangoSVG />
//                     <GitSVG />
//                     <FlutterSVG />
//                     <GithubSVG />
//                     <PythonSVG/>
//                     <MongoDbSVG />
//                     {/* Mo */}
//                 </main>
//             </div>
//         </Inner>
//     )
// }

import Image from "next/image"
import { motion } from "framer-motion"
import { DjangoSVG } from "../../../public/techstack-django"
import { GitSVG } from "../../../public/techstack-git"
import { GithubSVG } from "../../../public/techstack-github"
import { PHPSVG } from "../../../public/techstack-php"
import { MongoDbSVG } from "../../../public/techstack-mongodb"
import { FlutterSVG } from "../../../public/techstack-flutter"
import { HTMLSVG } from "../../../public/techstack-html5"
import { CSS3SVG } from "../../../public/icon-techstack/techstack-css"
import Inner from "../Layout/Inner"
import { PythonSVG } from "../../../public/icon-techstack/techstack-python"

const TechIcon = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
            duration: 0.5, 
            delay,
            type: "spring",
            stiffness: 100
        }}
    >
        {children}
    </motion.div>
)

export default function TechIUse() {
    return (
        <Inner>
            <div className="px-2 pb-20 sm:px-3 md:px-12 text-white min-h-screen flex flex-col items-center justify-center">
                <header className="mb-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-4xl mb-2"
                    >
                        Tech I Use
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center gap-4 items-center"
                    >
                        <p className="text-grayText text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas, voluptatum?
                        </p>
                    </motion.div>
                </header>
                <main className="flex flex-wrap justify-center gap-4 max-w-full md:max-w-md lg:max-w-6xl mx-auto">
                    <TechIcon delay={0.5}><HTMLSVG /></TechIcon>
                    <TechIcon delay={0.6}><CSS3SVG /></TechIcon>
                    <TechIcon delay={0.7}><DjangoSVG /></TechIcon>
                    <TechIcon delay={0.8}><GitSVG /></TechIcon>
                    <TechIcon delay={0.9}><FlutterSVG /></TechIcon>
                    <TechIcon delay={1.0}><GithubSVG /></TechIcon>
                    <TechIcon delay={1.1}><PythonSVG /></TechIcon>
                    <TechIcon delay={1.2}><MongoDbSVG /></TechIcon>
                    {/* Removed duplicates for clarity, but you can add them back with increasing delays */}
                    <TechIcon delay={0.5}><HTMLSVG /></TechIcon>
                    <TechIcon delay={0.6}><CSS3SVG /></TechIcon>
                    <TechIcon delay={0.7}><DjangoSVG /></TechIcon>
                    <TechIcon delay={0.8}><GitSVG /></TechIcon>
                    <TechIcon delay={0.9}><FlutterSVG /></TechIcon>
                    <TechIcon delay={1.0}><GithubSVG /></TechIcon>
                    <TechIcon delay={1.1}><PythonSVG /></TechIcon>
                    <TechIcon delay={1.2}><MongoDbSVG /></TechIcon>
                    {/* Mo */}
                    <TechIcon delay={0.5}><HTMLSVG /></TechIcon>
                    <TechIcon delay={0.6}><CSS3SVG /></TechIcon>
                    <TechIcon delay={0.7}><DjangoSVG /></TechIcon>
                    <TechIcon delay={0.8}><GitSVG /></TechIcon>
                    <TechIcon delay={0.9}><FlutterSVG /></TechIcon>
                    <TechIcon delay={1.0}><GithubSVG /></TechIcon>
                    <TechIcon delay={1.1}><PythonSVG /></TechIcon>
                    <TechIcon delay={1.2}><MongoDbSVG /></TechIcon>
                      {/* Mo */}
                      <TechIcon delay={0.5}><HTMLSVG /></TechIcon>
                    <TechIcon delay={0.6}><CSS3SVG /></TechIcon>
                    <TechIcon delay={0.7}><DjangoSVG /></TechIcon>
                    <TechIcon delay={0.8}><GitSVG /></TechIcon>
                    <TechIcon delay={0.9}><FlutterSVG /></TechIcon>
                    <TechIcon delay={1.0}><GithubSVG /></TechIcon>
                    <TechIcon delay={1.1}><PythonSVG /></TechIcon>
                    <TechIcon delay={1.2}><MongoDbSVG /></TechIcon>
                </main>
            </div>
        </Inner>
    )
}
