import { useState } from 'react';

// Define color constants
const COLOR_0_PERCENT = "#ACE5FF";
const COLOR_50_PERCENT = "#0F60A0";
const COLOR_DEFAULT = "white";

export function FlutterSVG() {
  const [hover, setHover] = useState(false);

  // Generate unique IDs for gradients
  const uniqueId = Math.random().toString(36).substr(2, 9);
  const paint0Id = `paint0_linear_${uniqueId}`;
  const paint1Id = `paint1_linear_${uniqueId}`;
  const paint2Id = `paint2_linear_${uniqueId}`;

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
        d="M26.3558 40.3693L21 35L38.3277 17.5H49L26.3558 40.3693ZM38.3277 52.5L28.9944 43.0739L38.3277 33.6477H49L39.6667 43.0739L49 52.5H38.3277Z"
        fill={`url(#${paint2Id})`}
        style={{
          transition: 'transform 0.3s',
          transform: hover ? 'scale(1.2)' : 'scale(1)',
          transformOrigin: 'center center',
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
          <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} offset="0%" />
          <stop stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT} offset="50%" />
          <stop stopColor="transparent" offset="100%" />
        </linearGradient>
        <linearGradient
          id={paint2Id}
          x1="21"
          y1="17.5"
          x2="52.6726"
          y2="48.7815"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} />
          <stop offset="1" stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT} stopOpacity={hover ? "1" : "0"} />
        </linearGradient>
      </defs>
    </svg>
  );
}