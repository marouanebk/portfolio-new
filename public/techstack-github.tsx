import { useState } from 'react';

// Define color constants
const COLOR_0_PERCENT = "#B5F29A";
const COLOR_50_PERCENT = "#5FC233";
const COLOR_DEFAULT = "white";

export function GithubSVG() {
  const [hover, setHover] = useState(false);

  
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
        fill="url(#paint0_linear_79_278)"
        stroke="url(#paint1_linear_79_278)"
      />
      <path
        d="M36 17C33.5705 17 31.1649 17.4771 28.9204 18.4042C26.6758 19.3312 24.6364 20.69 22.9185 22.403C19.4491 25.8624 17.5 30.5545 17.5 35.4469C17.5 43.6004 22.8095 50.518 30.154 52.9714C31.079 53.119 31.375 52.5471 31.375 52.0491V48.9316C26.2505 50.0384 25.159 46.4597 25.159 46.4597C24.308 44.3198 23.1055 43.748 23.1055 43.748C21.422 42.6043 23.235 42.6412 23.235 42.6412C25.085 42.7703 26.0655 44.5412 26.0655 44.5412C27.675 47.3451 30.3945 46.515 31.449 46.0723C31.6155 44.8732 32.0965 44.0616 32.6145 43.6004C28.5075 43.1392 24.197 41.5528 24.197 34.5245C24.197 32.4769 24.9 30.8352 26.1025 29.5254C25.9175 29.0643 25.27 27.1458 26.2875 24.6555C26.2875 24.6555 27.8415 24.1574 31.375 26.537C32.8365 26.1312 34.4275 25.9283 36 25.9283C37.5725 25.9283 39.1635 26.1312 40.625 26.537C44.1585 24.1574 45.7125 24.6555 45.7125 24.6555C46.73 27.1458 46.0825 29.0643 45.8975 29.5254C47.1 30.8352 47.803 32.4769 47.803 34.5245C47.803 41.5713 43.474 43.1208 39.3485 43.582C40.0145 44.1538 40.625 45.2791 40.625 46.9946V52.0491C40.625 52.5471 40.921 53.1374 41.8645 52.9714C49.209 50.4995 54.5 43.6004 54.5 35.4469C54.5 33.0244 54.0215 30.6256 53.0918 28.3876C52.1621 26.1495 50.7994 24.1159 49.0815 22.403C47.3636 20.69 45.3242 19.3312 43.0796 18.4042C40.8351 17.4771 38.4295 17 36 17Z"
        fill="url(#paint2_linear_79_278)"
        style={{
          transition: 'transform 0.3s',
          transform: hover ? 'scale(1.2)' : 'scale(1)',
          transformOrigin: 'center center',
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_79_278"
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
          id="paint1_linear_79_278"
          x1="0.5"
          y1="0"
          x2="74.4173"
          y2="3.22953"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} offset="0%" />
          <stop stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT} offset="50%" />
          <stop stopColor="transparent" offset="100%" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_79_278"
          x1="17.5"
          y1="17"
          x2="49.1777"
          y2="57.1946"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} />
          <stop offset="1" stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT} stopOpacity={hover ? "1" : "0"} />
        </linearGradient>
      </defs>
    </svg>
  );
}
