'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Growth - Circuit Tree / Cannabis Plant hybrid visualization
export default function GrowthArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="growth-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="stem-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="1" />
                </linearGradient>
                <radialGradient id="leaf-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Ground/base */}
            <motion.ellipse
                cx="200" cy="280" rx="60" ry="10"
                fill={color}
                opacity="0.3"
                animate={{ rx: [55, 65, 55] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Main stem with pulse animation */}
            <motion.path
                d="M200 280 L200 140"
                stroke="url(#stem-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                filter="url(#growth-glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
            />

            {/* Energy pulse up the stem */}
            <motion.circle
                r="4"
                fill="white"
                filter="url(#growth-glow)"
                animate={{
                    cy: [280, 140, 280],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <animate attributeName="cx" values="200;200" dur="2s" repeatCount="indefinite" />
            </motion.circle>

            {/* Left branches */}
            {[0, 1, 2].map((i) => (
                <motion.path
                    key={`left-${i}`}
                    d={`M200 ${240 - i * 40} Q${150 - i * 10} ${220 - i * 40} ${130 - i * 15} ${200 - i * 50}`}
                    stroke={color}
                    strokeWidth={4 - i * 0.5}
                    fill="none"
                    filter="url(#growth-glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1, delay: 1 + i * 0.3 }}
                />
            ))}

            {/* Right branches */}
            {[0, 1, 2].map((i) => (
                <motion.path
                    key={`right-${i}`}
                    d={`M200 ${240 - i * 40} Q${250 + i * 10} ${220 - i * 40} ${270 + i * 15} ${200 - i * 50}`}
                    stroke={color}
                    strokeWidth={4 - i * 0.5}
                    fill="none"
                    filter="url(#growth-glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1, delay: 1.15 + i * 0.3 }}
                />
            ))}

            {/* Cannabis-style leaves with circuit pattern */}
            {[
                { x: 115, y: 195, rot: -30, scale: 1 },
                { x: 285, y: 195, rot: 30, scale: 1 },
                { x: 100, y: 145, rot: -45, scale: 0.9 },
                { x: 300, y: 145, rot: 45, scale: 0.9 },
                { x: 90, y: 90, rot: -50, scale: 0.8 },
                { x: 310, y: 90, rot: 50, scale: 0.8 },
            ].map((leaf, i) => (
                <motion.g
                    key={`leaf-${i}`}
                    transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rot}) scale(${leaf.scale})`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: leaf.scale }}
                    transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                >
                    {/* Leaf shape */}
                    <motion.path
                        d="M0 0 Q-8 -15 -5 -30 Q0 -35 5 -30 Q8 -15 0 0"
                        fill={color}
                        opacity="0.6"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    />
                    {/* Circuit vein */}
                    <motion.path
                        d="M0 0 L0 -25"
                        stroke="white"
                        strokeWidth="1"
                        opacity="0.6"
                    />
                    {/* Node at leaf tip */}
                    <motion.circle
                        cx="0" cy="-28"
                        r="2"
                        fill="white"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    />
                </motion.g>
            ))}

            {/* Top crown/bud with glow */}
            <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
            >
                <motion.circle
                    cx="200" cy="120"
                    r="30"
                    fill="url(#leaf-glow)"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                    d="M200 140 Q180 110 190 80 Q200 70 210 80 Q220 110 200 140"
                    fill={color}
                    filter="url(#growth-glow)"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Energy sparkles */}
                {[...Array(5)].map((_, i) => (
                    <motion.circle
                        key={`sparkle-${i}`}
                        cx={190 + i * 5}
                        cy={100 + (i % 2) * 20}
                        r="2"
                        fill="white"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0.5]
                        }}
                        transition={{
                            duration: 1,
                            delay: i * 0.3,
                            repeat: Infinity
                        }}
                    />
                ))}
            </motion.g>

            {/* Floating particles rising */}
            {[...Array(8)].map((_, i) => (
                <motion.circle
                    key={`particle-${i}`}
                    cx={180 + (i % 4) * 15}
                    r="2"
                    fill={color}
                    opacity="0.5"
                    animate={{
                        cy: [280, 40],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: 4,
                        delay: i * 0.6,
                        repeat: Infinity
                    }}
                />
            ))}
        </svg>
    );
}
