import { useState } from 'react';

// Define color constants
const COLOR_0_PERCENT = "#FFA27A";
const COLOR_50_PERCENT = "#E5552D";
const COLOR_DEFAULT = "white";

export function HTMLSVG() {
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

<path d="M19 17.5L21.9333 49.54L35.5 53.5L49.25 49.54L52 17.5H19ZM44.6667 28.3H30L30.3667 31.9H44.6667L43.5667 43.78L35.8667 46.3L27.9833 43.78L27.4333 38.38H31.1L31.4667 40.9L35.8667 42.34L40.0833 41.08L40.6333 35.68H27.0667L26.3333 24.7H45.4L44.6667 28.3Z" 


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
          x1="19" y1="17.5" x2="51.3323" y2="54.09"           gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} />
          <stop offset="1" stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT} stopOpacity={hover ? "1" : "0"} />
        </linearGradient>
      </defs>
    </svg>
  );
}