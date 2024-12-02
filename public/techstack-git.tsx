import { useState } from "react"

// Define color constants
const COLOR_0_PERCENT = "#FA9582"
const COLOR_50_PERCENT = "#F05539"
const COLOR_DEFAULT = "white"

export function GitSVG() {
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
                d="M52.3564 33.9848L37.5109 19.1415C37.3076 18.9381 37.0663 18.7768 36.8007 18.6667C36.535 18.5567 36.2503 18.5 35.9628 18.5C35.6753 18.5 35.3906 18.5567 35.1249 18.6667C34.8593 18.7768 34.618 18.9381 34.4147 19.1415L31.3334 22.2228L35.2435 26.1328C35.7046 25.9754 36.2007 25.9508 36.6752 26.0618C37.1497 26.1727 37.5834 26.4149 37.9268 26.7606C38.2703 27.1062 38.5096 27.5415 38.6176 28.0167C38.7255 28.4918 38.6977 28.9878 38.5373 29.4479L42.305 33.2177C42.8624 33.0214 43.4701 33.0208 44.0279 33.216C44.5857 33.4112 45.0604 33.7905 45.3738 34.2915C45.6873 34.7925 45.8208 35.3853 45.7524 35.9723C45.684 36.5593 45.4177 37.1054 44.9974 37.5209C44.5719 37.949 44.0111 38.2161 43.4105 38.2765C42.81 38.337 42.2072 38.1871 41.7049 37.8524C41.2026 37.5177 40.8322 37.0191 40.6567 36.4416C40.4813 35.8641 40.5118 35.2436 40.7431 34.6861L37.2304 31.1713V40.4216C37.7643 40.6859 38.1916 41.1252 38.4409 41.6663C38.6902 42.2074 38.7465 42.8176 38.6004 43.3952C38.4544 43.9727 38.1148 44.4828 37.6382 44.8404C37.1617 45.1979 36.577 45.3814 35.9816 45.3601C35.3863 45.3389 34.8161 45.1142 34.3663 44.7235C33.9165 44.3329 33.6142 43.7999 33.5097 43.2133C33.4052 42.6268 33.5049 42.0222 33.7922 41.5003C34.0795 40.9783 34.5369 40.5706 35.0884 40.3451V31.0098C34.7702 30.8794 34.481 30.6874 34.2375 30.4447C33.9939 30.2021 33.8007 29.9136 33.6692 29.596C33.5376 29.2783 33.4702 28.9378 33.4709 28.594C33.4716 28.2502 33.5403 27.9099 33.6731 27.5927L29.8204 23.7379L19.6415 33.9168C19.4381 34.1201 19.2768 34.3614 19.1667 34.6271C19.0567 34.8927 19 35.1774 19 35.4649C19 35.7525 19.0567 36.0372 19.1667 36.3028C19.2768 36.5684 19.4381 36.8098 19.6415 37.013L34.487 51.8585C34.6902 52.0619 34.9316 52.2232 35.1972 52.3333C35.4628 52.4434 35.7475 52.5 36.0351 52.5C36.3226 52.5 36.6073 52.4434 36.8729 52.3333C37.1386 52.2232 37.3799 52.0619 37.5832 51.8585L52.3585 37.0832C52.5619 36.8799 52.7232 36.6386 52.8333 36.3729C52.9434 36.1073 53 35.8226 53 35.5351C53 35.2475 52.9434 34.9628 52.8333 34.6972C52.7232 34.4316 52.5619 34.1902 52.3585 33.987"
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
               x1="19" y1="18.5" x2="49.0993" y2="55.6596" gradientUnits="userSpaceOnUse"
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
