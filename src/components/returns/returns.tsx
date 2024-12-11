import Inner from "../Layout/Inner"
import { motion } from "framer-motion"

const SingleReturn = ({ delay = 0 }) => {
    return (
        <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="transition before:transition after:transition before:shadow-sm before:hover:shadow-purple max-w-[430px] md:w-[530px] lg:min-w-[500px] text-center p-5 border-2 border-grayText hover:border-purple hover:before:bg-purple  rounded-2xl bg-linearBlack relative before:w-[40%] before:absolute before:left-1/2 before:-bottom-[14px] before:h-[25px] before:bg-grayText before:rounded-full before:-translate-x-1/2 before:-z-10 after:w-full after:h-full after:top-0 after:left-0 hover:after:bg-purple after:absolute after:rounded-2xl after:filter after:blur-lg after:-z-10"
        >
            <p className="mb-3 leading-6 text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum maiores dolor, cumque blanditiis sunt debitis
                dolorum iusto, rem officia voluptate cum provident sit quasi
                iure. Fugit, non. Architecto, excepturi a!
            </p>
            <div className="flex gap-3 text-center w-fit mx-auto">
                <h4 className="text-lg">client name</h4>
                <span className="text-lg">/</span>
                <h4 className="text-lg text-grayText">client function.</h4>
            </div>
        </motion.article>   
    )
}

export function Returns() {
    return (
        <Inner>
            <div className="px-2 pb-20 sm:px-3 md:px-12 text-white min-h-screen flex flex-col items-center justify-center">
                <header>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-4xl mb-2"
                    >
                        {"Clients' Returns"}
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
                <main className="my-5 max-w-full md:max-w-md lg:max-w-6xl mx-auto flex-wrap flex justify-center gap-4 px-3">
                    <div className="flex flex-col lg:flex-row lg:justify-center gap-10 min:gap-5 flex-wrap items-center">
                        <SingleReturn delay={0.6} />
                        <SingleReturn delay={0.8} />
                        <SingleReturn delay={1.0} />
                        <SingleReturn delay={1.2} />
                    </div>
                </main>
            </div>
        </Inner>
    )
}
