import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            scrollSnapType: {
                mandatory: "y mandatory",
            },
            scrollSnapAlign: {
                start: "start",
            },
            fontFamily: {
                kalnia: "Kalnia, serif",
                Dosis: "Dosis, sans-serif",
            },
            colors: {
                whiteAlpha: "#ffffffa6",
                grayText: "#686868",
                dark: "#111111",
                red: "#F05539",
                purple: "#C172FF",
            },
            backgroundImage: {
                gradientPurple:
                    "linear-gradient(140.99deg, #D7A3FF 0%, #AC42FF 100%)",
                linearWhiteStroke:
                    "linear-gradient(28deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)",
                linearBlack:
                    "linear-gradient(249deg, rgba(46,46,46,1) 0%, rgba(34,34,34,1) 81%);",
            },
        },
    },
    plugins: [],
}
export default config
