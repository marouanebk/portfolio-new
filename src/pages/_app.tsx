import "@/styles/globals.css"
import "@/styles/form.css"
import "@/styles/testimonials.css"
import "@/components/Layout/Inner/inner.css"
import "@/components/slider/slider.css"
import "@/components/work/swiperStyles.css"
import "@/components/techIUse/techIUse.css"
import type { AppProps } from "next/app"
// import "@/components/work/work.css"
import { AnimatePresence } from "framer-motion"
export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <AnimatePresence mode="wait">
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </>
    )
}
