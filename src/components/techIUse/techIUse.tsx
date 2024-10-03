import Image from "next/image"
import { motion } from "framer-motion"
import { DjangoSVG } from "../../../public/techstack-django"
import { GitSVG } from "../../../public/techstack-git"
import { GithubSVG } from "../../../public/techstack-github"
import { PHPSVG } from "../../../public/techstack-php"
import { MongoDbSVG } from "../../../public/techstack-mongodb"

Image
export default function TechIUse() {
    return (
        <>
            <div className="px-2 pb-20 sm:px-3 md:px-12  text-white">
                <header>
                    <h1 className="text-center text-4xl mb-2">Tech I Use</h1>
                    <div className="flex justify-center gap-4 items-center ">
                        <p className="text-grayText text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas, voluptatum?
                        </p>
                    </div>
                </header>
                <main className="my-5 max-w-full md:max-w-md lg:max-w-6xl mx-auto flex-wrap flex justify-center gap-4 px-3">
                    <DjangoSVG />
                    <GitSVG />
                    <GithubSVG />
                    <PHPSVG />
                    <MongoDbSVG />
                </main>
            </div>
        </>
    )
}
export const GradientBorderElement = ({
    img,
    color,
}: {
    img: string
    color: string
}) => {
    return (
        <>
            <div
                className={`gradient--outline bg-gradient-to-tr from-transparent to-whiteAlpha rounded-lg w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] flex justify-center items-center hover:before:bg-${color}`} // Made icons smaller
            >
                <div
                    className="gradient--inner z-10 rounded-lg w-[39px] h-[39px] md:w-[49px]  md:h-[49px] lg:w-[59px] lg:h-[59px] flex justify-center items-center"
                    style={{
                        background:
                            "linear-gradient(103.02deg, #2E2E2E 0%, #222222 81.17%)",
                    }}
                >
                    <motion.img
                        src={img}
                        width={20} // Made icon image smaller
                        height={20} // Made icon image smaller
                        alt=""
                        className="gradient--img h-[20px] w-[20px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] grid items-center"
                    />
                </div>
            </div>
        </>
    )
}
