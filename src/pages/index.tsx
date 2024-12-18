import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Cont from "../components/cont"
import Navbar from "../components/navbar"
import Intro from "../components/home/intro"
import Inner from "@/components/Layout/Inner"
import About from "../components/about/about"
import { Work } from "@/components/work/work"
import { Slider } from "@/components/slider/slider"
import TechIUse from "@/components/techIUse/techIUse"
import { Returns } from "@/components/returns/returns"
import { Form } from "@/components/form/form"

// const inter = Inter({ subsets: ["latin"] })

export default function Root() {
    return <Home />
}

const sections = [
    {
        id: "cont",
        component: (
            <Cont>
                <Intro />
            </Cont>
        ),
    },
     { id: "about", component: <About /> },
     //{ id: "slider", component: <Slider /> },
     { id: "work", component: <Work /> },
     { id: "techIUse", component: <TechIUse /> },
     { id: "returns", component: <Returns /> },
    { id: "form", component: <Form /> },
]


function Home() {
    return (
        <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">

            {sections.map((section) => (
                <section
                    key={section.id}
                    className="snap-start h-screen"
                >
                    {section.component}
                </section>
            ))}
        </main>
    );
}
