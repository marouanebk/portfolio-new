import React from "react"
import Cont from "../../components/cont"
import Inner from "@/components/Layout/Inner"
import Image from "next/image"

type CardTypes = {
    title: string
    number: number
}

type SectionItemTypes = {
    title: string
    description: string
}
const Card = ({ title, number }: CardTypes) => (
    <div className="md:w-[193px] md:h-[98px]  rounded-lg border-solid  border-white border p-2 flex flex-col items-center justify-center  bg-linearBlack">
        <span className="text-4xl md:text-[48px] text-white font-kalnia leading-10">
            +{number}
        </span>
        <span className=" text-center md:text-left text-grayText font-dosis">
            {title}
        </span>
    </div>
)

const SectionItem = ({ title, description }: SectionItemTypes) => (
    <div className="flex justify-start items-start gap-3 mb-2 ">
        <div>
            <Image
                width={10}
                height={3}
                className="mt-3.5 min-w-3"
                src="/-.svg"
                alt="-"
            />
        </div>
        <div className="">
            <h3 className="text-lg font-normal text-white font-Dosis ">
                {title}
            </h3>
            <p className="text-grayText font-Dosis">{description}</p>
        </div>
    </div>
)

const About = () => (
    <Inner>
        <div
            className="px-2 sm:px-3 md:px-12 xl:px-20 flex flex-col items-center justify-start py-20 min-h-screen w-full scroll-snap-start" // Added min-h-screen and w-full
            style={{
                background:
                    "linear-gradient(103.02deg, #2E2E2E 0%, #222222 81.17%)", // bro.. we have tailwind...
            }}
        >
            {/* <Cont> */}
            {/* <h1 className="text-white text-3xl text-center mb-8">About</h1> */}
            <div className="flex gap-3 md:gap-10 justify-center flex-row w-full">
                <Card title="Successful Projects" number={30} />
                <Card title="Years of Experience" number={4} />
                <Card title="Worldwide Clients" number={10} />
            </div>
            <div className="min-w-full flex justify-around  flex-col lg:flex-row gap-8 my-12 mt-28 px-3">
                <div className="max-w-[568px]">
                    <h1 className="text-3xl md:text-4xl text-center md:text-left  mb-4 text-white  kalnia-font">
                        Education
                    </h1>
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                    />
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                    />
                    {/* <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                    />
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                    /> */}
                </div>

                <div className="max-w-[568px]">
                    <h1 className="text-3xl md:text-4xl text-center md:text-left  mb-4 text-white  kalnia-font">
                        Experience
                    </h1>
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                    />
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                    />
                    {/* <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                    />
                    <SectionItem
                        title="Lorem ipsum dolor sit amet consectetur."
                        description="Lorem ipsum dolor sit amet consectetur. Nunc fermentum neque mauris volutpat mi lacus. Elit rhoncus egestas felis proin nibh ut. Non."
                    /> */}
                </div>
            </div>
            {/* </Cont> */}
        </div>
    </Inner>
)

export default About
