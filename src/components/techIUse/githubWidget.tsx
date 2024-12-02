import { useState, useEffect } from "react";

interface CustomIconWidgetProps {
  iconPath: string;
  width?: number;
  height?: number;
  paintId?:string,
}

export function GithubWidget({ iconPath, width = 72, height = 70  }: CustomIconWidgetProps) {
  const [hover, setHover] = useState(false);
  const [svgPath, setSvgPath] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>("0 0 72 70");

  // 
  const uniqueId = Math.random().toString(36).substr(2, 9);
  const paintId = `paint0_linear_${uniqueId}`;
  const borderId = `border_gradient_${uniqueId}`;
  const logoId = `logo_gradient_${uniqueId}`;

  useEffect(() => {
    async function fetchSvgPath() {
      try {
        const response = await fetch(iconPath);
        const text = await response.text();
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, "image/svg+xml");
        const pathElement = svgDoc.querySelector("path");
        const svgElement = svgDoc.querySelector("svg");
        if (pathElement) {
          setSvgPath(pathElement.getAttribute("d"));
        }
        if (svgElement) {
          setViewBox(svgElement.getAttribute("viewBox") || "0 0 72 70");
        }
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    }

    fetchSvgPath();
  }, [iconPath]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        transform: hover ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s",
        filter: hover ? "drop-shadow(0px 0px 10px rgba(116, 216, 178, 0.8))" : "none",
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 72 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background */}
        <rect
          x="1"
          y="0.5"
          width="70"
          height="69"
          rx="7.5"
          fill={`url(#${paintId})`}
        />
        {/* Partial Border */}
        <rect
          x="1"
          y="0.5"
          width="70"
          height="69"
          rx="7.5"
          fill="none"
          stroke={`url(#border_gradient)`}
          strokeWidth="1.5"
        />
        {/* Icon (Logo) */}
        {svgPath && (
          <g transform="translate(25, 20)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={svgPath}
              fill={`url(#logo_gradient)`}
            />
          </g>
        )}
        <defs>
          {/* Background Gradient */}
          <linearGradient
            // id="paint0_linear_79_280"
            id = {paintId}
            x1="0" y1="0.5" x2="31.6777" y2="40.6946" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2E2E2E" />
            <stop offset="0.811667" stopColor="#222222" />
          </linearGradient>
          {/* Partial Border Gradient */}
          <linearGradient
            id="border_gradient"
            x1="0"
            y1="0"
            x2="72"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            {/* White section stays white, gradient for hover */}
            <stop stopColor={hover ? "#74D8B2" : "white"} offset="0%" />
            <stop stopColor={hover ? "#1E8A60" : "white"} offset="50%" />
            <stop stopColor="transparent" offset="100%" />
          </linearGradient>
          {/* Icon Gradient */}
          <linearGradient
            id="logo_gradient"
            x1="0"
            y1="0.5"
            x2="26.9181"
            y2="24.109"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={hover ? "#74D8B2" : "white"} />
            <stop offset="1" stopColor={hover ? "#1E8A60" : "white"} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}