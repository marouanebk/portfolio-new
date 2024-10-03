// import { Inter } from "next/font/google"
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
import { useRouter } from "next/router"

// const inter = Inter({ subsets: ["latin"] })

export default function Root() {
    return <Home />
}

function Home() {
    return (
        <Inner>
            <Cont>
                <Navbar />
                <Intro />
            </Cont>
            <About />
            <Slider />
            <Work />
            <TechIUse />
            <Returns />
            <Form />
        </Inner>
    )
}
