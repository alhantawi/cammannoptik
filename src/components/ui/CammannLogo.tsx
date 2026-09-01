import React from "react";

interface CammannLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "color" | "white" | "dark";
  className?: string;
}

export const CammannLogo: React.FC<CammannLogoProps> = ({
  variant = "color",
  className = "h-8 w-auto",
  ...props
}) => {
  const isWhite = variant === "white";
  const isDark = variant === "dark";

  const textColor = isWhite ? "#FFFFFF" : isDark ? "#161719" : "#C5221F";
  const arcColor = isWhite ? "#E5E7EB" : isDark ? "#4B5563" : "#8E9094";

  return (
    <svg
      viewBox="0 0 540 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cammann Optik Logo"
      {...props}
    >
      <defs>
        <linearGradient id={`lensGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={arcColor} stopOpacity="0.4" />
          <stop offset="25%" stopColor={arcColor} stopOpacity="0.95" />
          <stop offset="50%" stopColor={arcColor} stopOpacity="1" />
          <stop offset="75%" stopColor={arcColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={arcColor} stopOpacity="0.4" />
        </linearGradient>

        {!isWhite && !isDark && (
          <linearGradient id="cammannRedAccent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D62B28" />
            <stop offset="100%" stopColor="#A81512" />
          </linearGradient>
        )}
      </defs>

      {/* Top Lens Arc (Crescent Tapered) */}
      <path
        d="M 312 24 C 365 7, 455 7, 510 24 C 455 12, 365 12, 312 24 Z"
        fill={`url(#lensGrad-${variant})`}
      />

      {/* Bottom Lens Arc (Crescent Tapered) */}
      <path
        d="M 312 76 C 365 93, 455 93, 510 76 C 455 88, 365 88, 312 76 Z"
        fill={`url(#lensGrad-${variant})`}
      />

      {/* CAMMANN Text */}
      <text
        x="18"
        y="61"
        fontFamily="var(--font-outfit), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="44"
        fontWeight="500"
        letterSpacing="5"
        fill={isWhite || isDark ? textColor : "url(#cammannRedAccent)"}
      >
        CAMMANN
      </text>

      {/* OPTIK Text (Centered within lens arcs) */}
      <text
        x="332"
        y="61"
        fontFamily="var(--font-outfit), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="44"
        fontWeight="500"
        letterSpacing="5"
        fill={isWhite || isDark ? textColor : "url(#cammannRedAccent)"}
      >
        OPTIK
      </text>
    </svg>
  );
};
