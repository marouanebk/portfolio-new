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

export default function TechIUse() {
    return (
        <Inner>
            <div className="px-2 pb-20 sm:px-3 md:px-12 text-white min-h-screen flex flex-col items-center justify-center">
                <header className="mb-10">
                    <h1 className="text-center text-4xl mb-2">Tech I Use</h1>
                    <div className="flex justify-center gap-4 items-center ">
                        <p className="text-grayText text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas, voluptatum?
                        </p>
                    </div>
                </header>
                <main className="flex flex-wrap justify-center gap-4 max-w-full md:max-w-md lg:max-w-6xl mx-auto">
                    <HTMLSVG />
                    <CSS3SVG />
                    <DjangoSVG />
                    <GitSVG />
                    <FlutterSVG />
                    <GithubSVG />
                    <PHPSVG />
                    <MongoDbSVG />
                </main>
            </div>
        </Inner>
    )
}
