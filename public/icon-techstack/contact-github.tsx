import { useState } from "react"

// Define color constants
const COLOR_0_PERCENT = "#C172FF"
const COLOR_DEFAULT = "white"

export function GithubContactSVG() {
    const [hover, setHover] = useState(false)

    // Generate unique IDs for gradients
    const uniqueId = Math.random().toString(36).substr(2, 9)
    const paint0Id = `paint0_linear_${uniqueId}`
    const paint1Id = `paint1_linear_${uniqueId}`
    const paint2Id = `paint2_linear_${uniqueId}`
    const filterId = `filter0_f_${uniqueId}`

    return (
        <svg
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transition: "transform 0.3s",
                transform: hover ? "scale(1.15)" : "scale(1)",
                transformOrigin: "center center",
            }}

        >
            {/* <g filter={hover ? `url(#${filterId})` : "none"}>
                <rect
                    x="19"
                    y="18.5"
                    width="34"
                    height="33"
                    rx="16.5"
                    fill="url(#paint0_linear_107_1536)"
                />
            </g> */}
            <rect
                x="0.5"
                y="1"
                width="43"
                height="42"
                rx="21"
                fill={`url(#${paint0Id})`}
                stroke={`url(#${paint1Id})`}
            />
            <path
                d="M22 10.5C20.4241 10.5 18.8637 10.8048 17.4078 11.3971C15.9519 11.9894 14.629 12.8575 13.5147 13.9519C11.2643 16.1621 10 19.1598 10 22.2855C10 27.4947 13.444 31.9143 18.208 33.4817C18.808 33.576 19 33.2107 19 32.8925V30.9007C15.676 31.6078 14.968 29.3215 14.968 29.3215C14.416 27.9543 13.636 27.589 13.636 27.589C12.544 26.8583 13.72 26.8819 13.72 26.8819C14.92 26.9644 15.556 28.0958 15.556 28.0958C16.6 29.8872 18.364 29.3568 19.048 29.074C19.156 28.3079 19.468 27.7893 19.804 27.4947C17.14 27.2001 14.344 26.1865 14.344 21.6962C14.344 20.388 14.8 19.3391 15.58 18.5024C15.46 18.2077 15.04 16.982 15.7 15.391C15.7 15.391 16.708 15.0728 19 16.5931C19.948 16.3338 20.98 16.2042 22 16.2042C23.02 16.2042 24.052 16.3338 25 16.5931C27.292 15.0728 28.3 15.391 28.3 15.391C28.96 16.982 28.54 18.2077 28.42 18.5024C29.2 19.3391 29.656 20.388 29.656 21.6962C29.656 26.1983 26.848 27.1883 24.172 27.4829C24.604 27.8483 25 28.5672 25 29.6632V32.8925C25 33.2107 25.192 33.5878 25.804 33.4817C30.568 31.9025 34 27.4947 34 22.2855C34 20.7378 33.6896 19.2053 33.0866 17.7754C32.4835 16.3455 31.5996 15.0463 30.4853 13.9519C29.371 12.8575 28.0481 11.9894 26.5922 11.3971C25.1363 10.8048 23.5759 10.5 22 10.5Z"
                fill={`url(#${paint2Id})`}
                style={{
                    transition: "transform 0.3s",
                    transform: hover ? "scale(1.2)" : "scale(1)",
                    transformOrigin: "center center",
                }}
            />
            <defs>
                {/* <filter
                    id="filter0_f_107_1536"
                    x="0.6"
                    y="0.1"
                    width="70.8"
                    height="69.8"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="9.2"
                        result="effect1_foregroundBlur_107_1536"
                    />
                </filter> */}
                <linearGradient
                    id={paint0Id}
                    x1="0"
                    y1="0.5"
                    x2="51.3023"
                    y2="12.639"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2E2E2E" />
                    <stop offset="0.811667" stopColor="#222222" />
                </linearGradient>
                <linearGradient
                    id={paint1Id}
                    x1="0"
                    y1="0.5"
                    x2="37.8759"
                    y2="48.3478"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT}
                        offset="0%"
                    />
                    {/* <stop
                        stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT}
                        offset="50%"
                    /> */}
                    <stop stopColor="transparent" offset="100%" />
                </linearGradient>
                <linearGradient
                    id={paint2Id}
                    x1="10"
                    y1="10.5"
                    x2="30.1647"
                    y2="36.4771"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={hover ? COLOR_0_PERCENT : "white"} />
                    <stop
                        offset="1"
                        stopColor={hover ? COLOR_0_PERCENT : "white"}
                        stopOpacity="0"
                    />

                    {/* <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} /> */}
                    {/* <stop
                        offset="1"
                        stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT}
                        stopOpacity={hover ? "1" : "0"}
                    /> */}
                </linearGradient>
                <linearGradient
                    id="paint3_linear_107_1536"
                    x1="24"
                    y1="18.5"
                    x2="44.1647"
                    y2="44.4771"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D7A3FF" />
                    <stop offset="1" stop-color="#AC42FF" />
                </linearGradient>
                {/* <linearGradient
                    id="paint3_linear_107_1536"
                    x1="24"
                    y1="18.5"
                    x2="44.1647"
                    y2="44.4771"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#D7A3FF" />
                    <stop offset="1" stop-color="#AC42FF" />
                </linearGradient> */}
            </defs>
        </svg>
    )
}
