import { useState } from 'react';

// Define color constants
const COLOR_0_PERCENT = "#8CC3EF";
const COLOR_50_PERCENT = "#0F60A0";
const COLOR_DEFAULT = "white";
const COLOR_HOVER_3_START = "#FFEAA1";
const COLOR_HOVER_3_END = "#FFC702";

export function PythonSVG() {
  const [hover, setHover] = useState(false);

  // Generate unique IDs for gradients
  const uniqueId = Math.random().toString(36).substr(2, 9);
  const paint0Id = `paint0_linear_${uniqueId}`;
  const paint1Id = `paint1_linear_${uniqueId}`;
  const paint2Id = `paint2_linear_${uniqueId}`;
  const paint3Id = `paint3_linear_${uniqueId}`;

  return (
    <svg
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      width="71"
      height="70"
      viewBox="0 0 71 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="70"
        height="69"
        rx="7.5"
        fill={`url(#${paint0Id})`}
        stroke={`url(#${paint1Id})`}
      />
      <path
        d="M35.7239 17.1558C27.1697 17.2343 27.7373 20.9579 27.7373 20.9579L27.7826 24.821L35.9438 24.746L35.9545 25.9056L24.5548 26.0102C24.5548 26.0102 19.0746 25.4358 19.1542 34.1112C19.2339 42.7865 24.0079 42.4338 24.0079 42.4338L26.8575 42.4077L26.8205 38.383C26.8205 38.383 26.6234 33.5835 31.4789 33.5389L39.5728 33.4646C39.5728 33.4646 44.1215 33.4959 44.0803 29.0038L44.0121 21.575C44.0121 21.575 44.6614 17.0737 35.7239 17.1558ZM31.2474 19.7941C32.0588 19.7866 32.7218 20.4404 32.7293 21.2574C32.7368 22.073 32.0859 22.7388 31.2746 22.7462C30.4632 22.7537 29.8002 22.0999 29.7927 21.2844C29.7852 20.4674 30.4347 19.8016 31.2474 19.7941Z"
        fill={`url(#${paint2Id})`}
        style={{
          transition: 'transform 0.3s',
          transform: hover ? 'scale(1.2)' : 'scale(1)',
          transformOrigin: 'center center',
        }}
      />
      <path
        d="M36.2764 50.8443C44.8279 50.7658 44.2603 47.0422 44.2603 47.0422L44.215 43.1791L36.0537 43.254L36.0431 42.0945L47.4455 41.9898C47.4455 41.9898 52.9258 42.5642 52.8461 33.8889C52.7665 25.2135 47.9911 25.5662 47.9911 25.5662L45.1415 25.5924L45.1784 29.617C45.1784 29.617 45.3755 34.4166 40.5201 34.4611L32.4276 34.5354C32.4276 34.5354 27.8789 34.5042 27.9201 38.9963L27.9883 46.4251C27.9883 46.4251 27.3389 50.9263 36.2764 50.8443ZM40.7529 48.206C39.9402 48.2134 39.2786 47.5597 39.2711 46.7427C39.2636 45.9271 39.9131 45.2613 40.7258 45.2538C41.5372 45.2464 42.2002 45.9001 42.2077 46.7157C42.2152 47.5327 41.5643 48.1985 40.7529 48.206Z"
        fill={`url(#${paint3Id})`}
        style={{
          transition: 'transform 0.3s',
          transform: hover ? 'scale(1.2)' : 'scale(1)',
          transformOrigin: 'center center',
        }}
      />
      <defs>
        <linearGradient id={paint0Id} x1="0" y1="0" x2="82.8599" y2="19.4342" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E2E2E" />
          <stop offset="0.811667" stopColor="#222222" />
        </linearGradient>
        <linearGradient id={paint1Id} x1="0" y1="0" x2="73.9173" y2="3.22953" gradientUnits="userSpaceOnUse">
          <stop stopColor={hover ? "#097BD5" : "white"} />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <linearGradient id={paint2Id} x1="19" y1="17.3093" x2="41.567" y2="44.4507" gradientUnits="userSpaceOnUse">
          <stop stopColor={hover ? COLOR_0_PERCENT : COLOR_DEFAULT} />
          <stop offset="1" stopColor={hover ? COLOR_50_PERCENT : COLOR_DEFAULT} stopOpacity={hover ? "1" : "0"} />
        </linearGradient>
        <linearGradient id={paint3Id} x1="24.1321" y1="27.956" x2="50.3004" y2="55.9041" gradientUnits="userSpaceOnUse">
          <stop offset="0.235734" stopColor={hover ? COLOR_HOVER_3_START : COLOR_DEFAULT} />
          <stop offset="0.800117" stopColor={hover ? COLOR_HOVER_3_END : COLOR_DEFAULT} stopOpacity={hover ? "1" : "0"} />
        </linearGradient>
      </defs>
    </svg>
  );
}