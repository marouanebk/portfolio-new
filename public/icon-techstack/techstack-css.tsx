import { useState } from "react"

// Define color constants
const COLOR_0_PERCENT = "#4EBAE9"
const COLOR_50_PERCENT = "#1C76B8"
const COLOR_DEFAULT = "white"

export function CSS3SVG() {
    const [hover, setHover] = useState(false)

    // Generate unique IDs for gradients
    const uniqueId = Math.random().toString(36).substr(2, 9)
    const paint0Id = `paint0_linear_${uniqueId}`
    const paint1Id = `paint1_linear_${uniqueId}`
    const paint2Id = `paint2_linear_${uniqueId}`

    return (
        <svg
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            width="72"
            height="70"
            viewBox="0 0 72 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="1"
                y="0.5"
                width="70"
                height="69"
                rx="7.5"
                fill={`url(#${paint0Id})`}
                stroke={`url(#${paint1Id})`}
            />
            <path
                d="M19 17.5L21.9333 49.54L35.5 53.5L49.25 49.54L52 17.5H19ZM43.3833 43.96L35.5 46.3L27.6167 44.14L27.0667 38.56H30.9167L31.2833 41.26L35.5 42.34L39.7167 41.26L40.2667 35.86H26.8833L26.5167 32.26H40.6333L40.8167 28.66H26.3333L25.9667 25.06H45.4L43.5667 44.14L43.3833 43.96Z"
                fill={`url(#${paint2Id})`}
                style={{
                    transition: "transform 0.3s",
                    transform: hover ? "scale(1.2)" : "scale(1)",
                    transformOrigin: "center center",
                }}
            />
            <defs>
                <linearGradient
                    id={paint0Id}
                    x1="0.5"
                    y1="0"
                    x2="83.3599"
                    y2="19.4342"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2E2E2E" />
                    <stop offset="0.811667" stopColor="#222222" />
                </linearGradient>
                <linearGradient
                    id={paint1Id}
                    x1="0.5"
                    y1="0"
                    x2="74.4173"
                    y2="3.22953"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT}
                        offset="0%"
                    />
                    <stop
                        stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT}
                        offset="50%"
                    />
                    <stop stopColor="transparent" offset="100%" />
                </linearGradient>
                <linearGradient
                    id={paint2Id}
                  x1="19" y1="17.5" x2="51.3323" y2="54.09"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} />
                    <stop
                        offset="1"
                        stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT}
                        stopOpacity={hover ? "1" : "0"}
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}
