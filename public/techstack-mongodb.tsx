import { useState } from 'react';

// Define color constants
const COLOR_0_PERCENT = "#4AE088";
const COLOR_50_PERCENT = "#089442";
const COLOR_DEFAULT = "white";

export function MongoDbSVG() {
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

      <path d="M36.9131 17.8902C36.7971 17.7673 36.6561 17.6691 36.4989 17.6019C36.3417 17.5347 36.1717 17.5 36 17.5C35.8282 17.5 35.6582 17.5347 35.501 17.6019C35.3438 17.6691 35.2028 17.7673 35.0868 17.8902L28.5787 24.7779C26.3976 27.0849 25.1327 30.0685 25.0099 33.1962C24.887 36.3238 25.9142 39.3921 27.9081 41.8533L34.7627 50.3153V53.5H37.2372V50.3153L44.0918 41.8533C46.0854 39.3926 47.1126 36.325 46.9902 33.1978C46.8678 30.0707 45.6038 27.0874 43.4237 24.7803L36.9131 17.8902ZM37.2372 24.7012C37.2372 24.3829 37.1069 24.0777 36.8748 23.8527C36.6428 23.6276 36.3281 23.5012 36 23.5012C35.6718 23.5012 35.3571 23.6276 35.1251 23.8527C34.893 24.0777 34.7627 24.3829 34.7627 24.7012V42.7004C34.7627 43.0187 34.893 43.3239 35.1251 43.5489C35.3571 43.774 35.6718 43.9004 36 43.9004C36.3281 43.9004 36.6428 43.774 36.8748 43.5489C37.1069 43.3239 37.2372 43.0187 37.2372 42.7004V24.7012Z"


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