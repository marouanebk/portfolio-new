import { useState } from "react"

export function DjangoSVG() {
    const [hover, setHover] = useState(false)
    return (
        <svg
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
                fill="url(#paint0_linear_79_280)"
                stroke="url(#paint1_linear_79_280)"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.8128 20H38.0558V29.5982C37.0941 29.3662 36.1067 29.2574 35.1175 29.2746C28.0564 29.273 23.5 33.4378 23.5 39.8582C23.5 46.5212 27.7959 49.9919 36.0479 50C38.8034 50 41.3518 49.7573 44.8128 49.1424V20ZM36.0139 34.5251C36.8488 34.5251 37.5025 34.606 38.2921 34.8487V44.9582C37.3277 45.0796 36.7194 45.12 35.9718 45.12C32.5092 45.12 30.6242 43.2722 30.6242 39.9261C30.6242 36.4878 32.5982 34.5251 36.0139 34.5251Z"
                fill="url(#paint2_linear_79_280)"
            />
            <defs>
                {/* background */}
                <linearGradient
                    id="paint0_linear_79_280"
                    x1="0.5"
                    y1="0"
                    x2="83.3599"
                    y2="19.4342"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#2E2E2E" />
                    <stop offset="0.811667" stop-color="#222222" />
                </linearGradient>
                {/* border */}
                <linearGradient
                    id="paint1_linear_79_280"
                    x1="0.5"
                    y1="0"
                    x2="74.4173"
                    y2="3.22953"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                {/* symbol */}
                <linearGradient
                    id="paint2_linear_79_280"
                    x1="23.5"
                    y1="20"
                    x2="50.4181"
                    y2="43.609"
                    gradientUnits="userSpaceOnUse"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{}}
                >
                    <stop stop-color="white" />
                    <stop offset="0.0001" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}
