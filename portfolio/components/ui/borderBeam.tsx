"use client";

import { useEffect, useRef } from "react";

type BorderBeamProps = {
  color?: string;
  size?: number;
  duration?: number;
};

export default function BorderBeam({
  color = "#a855f7",
  size = 90,
  duration = 4,
}: BorderBeamProps) {
  const pathRef = useRef<SVGRectElement>(null);
  const beamRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!pathRef.current || !beamRef.current) return;

    const path = pathRef.current;
    const beam = beamRef.current;

    const length = path.getTotalLength();

    let frame = 0;
    let start = performance.now();

    const animate = (time: number) => {
      const progress = ((time - start) / 1000 / duration) % 1;

      const point = path.getPointAtLength(progress * length);

      beam.setAttribute("cx", point.x.toString());
      beam.setAttribute("cy", point.y.toString());

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [duration]);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      preserveAspectRatio="none"
    >
      <defs>
        <filter
          id="beam-glow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

            <rect
        ref={pathRef}
        x="1.5"
        y="1.5"
        width="calc(100% - 3px)"
        height="calc(100% - 3px)"
        rx="18"
        ry="18"
        fill="none"
        stroke="transparent"
        strokeWidth="2"
        pathLength={1000}
      />

      <circle
        ref={beamRef}
        r={size / 10}
        fill={color}
        filter="url(#beam-glow)"
      />

      <circle
        ref={beamRef}
        r={size / 22}
        fill="#ffffff"
      />

      <circle
        ref={beamRef}
        r={size / 6}
        fill="none"
        stroke={color}
        strokeOpacity="0.35"
        strokeWidth="2"
        filter="url(#beam-glow)"
      />