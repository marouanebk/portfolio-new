import { useState } from 'react';

// Define color constants
const COLOR_0_PERCENT = "#74D8B2";
const COLOR_50_PERCENT = "#1E8A60";
const COLOR_DEFAULT = "white";

export function DjangoSVG() {
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

      <path d="M44.3128 20.5H37.5558V30.0982C36.5941 29.8662 35.6067 29.7574 34.6175 29.7746C27.5564 29.773 23 33.9378 23 40.3582C23 47.0212 27.2959 50.4919 35.5479 50.5C38.3034 50.5 40.8518 50.2573 44.3128 49.6424V20.5ZM35.5139 35.0251C36.3488 35.0251 37.0025 35.106 37.7921 35.3487V45.4582C36.8277 45.5796 36.2194 45.62 35.4718 45.62C32.0092 45.62 30.1242 43.7722 30.1242 40.4261C30.1242 36.9878 32.0982 35.0251 35.5139 35.0251Z" 
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
         x1="23" y1="20.5" x2="49.9181" y2="44.109"
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
       x1="25" y1="17.5" x2="56.3282" y2="41.1358"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} />
          <stop offset="1" stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT} stopOpacity={hover ? "1" : "0"} />
        </linearGradient>
      </defs>
    </svg>
  );
}