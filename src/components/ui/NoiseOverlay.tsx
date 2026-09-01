import React from "react";

export const NoiseOverlay: React.FC = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.035] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="cammannNoiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#cammannNoiseFilter)" />
    </svg>
  );
};
