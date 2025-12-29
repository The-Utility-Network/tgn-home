'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Horizon - Cyberpunk grid horizon with sunset/sunrise
export default function HorizonArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="horizon-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="sky-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="70%" stopColor={color} stopOpacity="0.1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="sun-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="50%" stopColor={color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
                <clipPath id="below-horizon">
                    <rect x="0" y="150" width="400" height="150" />
                </clipPath>
            </defs>

            {/* Sky gradient */}
            <rect x="0" y="0" width="400" height="150" fill="url(#sky-gradient)" />

            {/* Sun/moon on horizon */}
            <motion.g filter="url(#horizon-glow)">
                <motion.circle
                    cx="200" cy="150"
                    r="40"
                    fill={color}
                    opacity="0.3"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.circle
                    cx="200" cy="150"
                    r="30"
                    fill={color}
                    opacity="0.6"
                />
                <motion.circle
                    cx="200" cy="150"
                    r="20"
                    fill="white"
                    opacity="0.8"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.g>

            {/* Horizon line */}
            <motion.line
                x1="0" y1="150"
                x2="400" y2="150"
                stroke={color}
                strokeWidth="3"
                filter="url(#horizon-glow)"
            />

            {/* Perspective grid lines - vertical */}
            {[...Array(15)].map((_, i) => {
                const x = 200 + (i - 7) * 30;
                const endX = 200 + (i - 7) * 80;
                return (
                    <motion.line
                        key={`vline-${i}`}
                        x1={x} y1="150"
                        x2={endX} y2="300"
                        stroke={color}
                        strokeWidth="1"
                        opacity={0.6 - Math.abs(i - 7) * 0.05}
                    />
                );
            })}

            {/* Perspective grid lines - horizontal */}
            {[...Array(8)].map((_, i) => {
                const y = 155 + i * 20;
                const xOffset = i * 15;
                return (
                    <motion.line
                        key={`hline-${i}`}
                        x1={-xOffset} y1={y}
                        x2={400 + xOffset} y2={y}
                        stroke={color}
                        strokeWidth="1"
                        opacity={0.5 - i * 0.05}
                    />
                );
            })}

            {/* Animated scan line going up the grid */}
            <motion.line
                x1="-50" x2="450"
                stroke={color}
                strokeWidth="2"
                opacity="0.5"
                filter="url(#horizon-glow)"
                animate={{
                    y1: [300, 150],
                    y2: [300, 150],
                    opacity: [0.8, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />

            {/* Stars in the sky */}
            {[...Array(20)].map((_, i) => (
                <motion.circle
                    key={`star-${i}`}
                    cx={30 + (i * 19) % 340}
                    cy={20 + (i * 7) % 110}
                    r="1"
                    fill={color}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                        duration: 2 + (i % 3),
                        delay: i * 0.15,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Mountain silhouettes */}
            <motion.path
                d="M0 150 L50 120 L100 145 L150 100 L200 130 L250 90 L300 140 L350 110 L400 150"
                stroke={color}
                strokeWidth="2"
                fill="none"
                opacity="0.4"
            />

            {/* Flying data streams */}
            {[0, 1, 2].map((i) => (
                <motion.rect
                    key={`stream-${i}`}
                    y={30 + i * 35}
                    width="40"
                    height="2"
                    fill={color}
                    opacity="0.5"
                    animate={{
                        x: [-50, 450]
                    }}
                    transition={{
                        duration: 3 + i,
                        delay: i * 0.8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Reflection of sun on grid */}
            <motion.ellipse
                cx="200" cy="200"
                rx="60" ry="20"
                fill={color}
                opacity="0.15"
                animate={{
                    rx: [55, 65, 55],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Corner frame elements */}
            {[
                { x: 10, y: 10, rotate: 0 },
                { x: 390, y: 10, rotate: 90 },
                { x: 390, y: 290, rotate: 180 },
                { x: 10, y: 290, rotate: 270 },
            ].map((corner, i) => (
                <motion.path
                    key={`corner-${i}`}
                    d="M0 0 L20 0 M0 0 L0 20"
                    stroke={color}
                    strokeWidth="1"
                    opacity="0.4"
                    transform={`translate(${corner.x}, ${corner.y}) rotate(${corner.rotate})`}
                />
            ))}

            {/* Text overlay */}
            <motion.text
                x="200" y="280"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                opacity="0.4"
                letterSpacing="5"
            >
                HORIZON
            </motion.text>
        </svg>
    );
}
