"use client";

import { useMemo } from "react";

type ShapeType = "circle" | "triangle" | "cross" | "square" | "star" | "zigzag" | "donut" | "diamond";

interface FloatingShape {
  type: ShapeType;
  color: string;
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  rotation: number;
  opacity: number;
  mobileHidden?: boolean;
}

function Shape({ type, color, size }: { type: ShapeType; color: string; size: number }) {
  switch (type) {
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill={color} />
        </svg>
      );
    case "donut":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="none" stroke={color} strokeWidth="5" />
        </svg>
      );
    case "triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <polygon points="20,4 38,36 2,36" fill={color} />
        </svg>
      );
    case "cross":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <rect x="15" y="4" width="10" height="32" rx="3" fill={color} />
          <rect x="4" y="15" width="32" height="10" rx="3" fill={color} />
        </svg>
      );
    case "square":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <rect x="4" y="4" width="32" height="32" rx="4" fill={color} />
        </svg>
      );
    case "star":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <polygon
            points="20,2 25,15 38,15 27,23 31,37 20,28 9,37 13,23 2,15 15,15"
            fill={color}
          />
        </svg>
      );
    case "zigzag":
      return (
        <svg width={size} height={size * 0.5} viewBox="0 0 60 20">
          <polyline
            points="2,18 12,4 22,18 32,4 42,18 52,4"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "diamond":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <polygon points="20,2 38,20 20,38 2,20" fill={color} />
        </svg>
      );
  }
}

const colors = {
  rose: "var(--color-pastel-rose)",
  blue: "var(--color-pastel-blue)",
  lavender: "var(--color-pastel-lavender)",
  mint: "var(--color-pastel-mint)",
  yellow: "var(--color-pastel-yellow)",
};

const shapes: FloatingShape[] = [
  // Left side
  { type: "triangle", color: colors.yellow, size: 32, top: "8%", left: "3%", delay: 0, duration: 6, rotation: 15, opacity: 0.8 },
  { type: "circle", color: colors.rose, size: 18, top: "25%", left: "8%", delay: 1.2, duration: 5, rotation: 0, opacity: 0.7 },
  { type: "cross", color: colors.blue, size: 26, top: "55%", left: "5%", delay: 0.8, duration: 7, rotation: 20, opacity: 0.7 },
  { type: "donut", color: colors.mint, size: 30, top: "75%", left: "10%", delay: 2, duration: 6.5, rotation: -10, opacity: 0.6 },
  { type: "star", color: colors.yellow, size: 22, top: "85%", left: "3%", delay: 1.5, duration: 5.5, rotation: 30, opacity: 0.7 },

  // Right side
  { type: "square", color: colors.mint, size: 20, top: "10%", left: "92%", delay: 0.5, duration: 5.5, rotation: 45, opacity: 0.7 },
  { type: "zigzag", color: colors.rose, size: 40, top: "30%", left: "88%", delay: 1, duration: 7, rotation: -15, opacity: 0.6 },
  { type: "circle", color: colors.lavender, size: 24, top: "60%", left: "93%", delay: 0.3, duration: 6, rotation: 0, opacity: 0.8 },
  { type: "diamond", color: colors.blue, size: 22, top: "78%", left: "90%", delay: 1.8, duration: 5, rotation: 10, opacity: 0.7 },
  { type: "triangle", color: colors.rose, size: 20, top: "90%", left: "95%", delay: 2.2, duration: 6, rotation: -25, opacity: 0.6 },

  // Top scattered
  { type: "donut", color: colors.blue, size: 22, top: "3%", left: "25%", delay: 0.7, duration: 6.5, rotation: 0, opacity: 0.5, mobileHidden: true },
  { type: "diamond", color: colors.lavender, size: 16, top: "5%", left: "70%", delay: 1.3, duration: 5.5, rotation: 20, opacity: 0.6, mobileHidden: true },
  { type: "cross", color: colors.yellow, size: 18, top: "12%", left: "50%", delay: 2.5, duration: 7, rotation: -30, opacity: 0.45, mobileHidden: true },

  // Bottom scattered
  { type: "star", color: colors.lavender, size: 20, top: "88%", left: "35%", delay: 0.4, duration: 6, rotation: 15, opacity: 0.5, mobileHidden: true },
  { type: "square", color: colors.yellow, size: 14, top: "92%", left: "60%", delay: 1.6, duration: 5.5, rotation: 30, opacity: 0.55, mobileHidden: true },
  { type: "circle", color: colors.rose, size: 12, top: "82%", left: "75%", delay: 2.8, duration: 6.5, rotation: 0, opacity: 0.4, mobileHidden: true },
];

export default function AnimatedBooks() {
  const renderedShapes = useMemo(() => shapes, []);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      {renderedShapes.map((shape, i) => (
        <div
          key={i}
          className={shape.mobileHidden ? "hidden md:block" : undefined}
          style={{
            position: "absolute",
            top: shape.top,
            left: shape.left,
            opacity: shape.opacity,
            transform: `rotate(${shape.rotation}deg)`,
          }}
        >
          <div
            style={{
              animation: `float-shape ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
            }}
          >
            <Shape type={shape.type} color={shape.color} size={shape.size} />
          </div>
        </div>
      ))}
    </div>
  );
}
