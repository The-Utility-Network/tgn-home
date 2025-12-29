'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Genesis - Digital Singularity with cosmic birth visualization
export default function GenesisArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="genesis-glow-intense">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="genesis-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
                <radialGradient id="genesis-core-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={color} stopOpacity="1" />
                    <stop offset="50%" stopColor={color} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
                <linearGradient id="genesis-ray" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0" />
                    <stop offset="50%" stopColor={color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Background energy field */}
            <motion.circle
                cx="200" cy="150" r="120"
                fill="url(#genesis-core-grad)"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orbital rings with different speeds */}
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.ellipse
                    key={`orbit-${i}`}
                    cx="200" cy="150"
                    rx={30 + i * 22}
                    ry={12 + i * 8}
                    stroke={color}
                    strokeWidth={1.5 - i * 0.2}
                    fill="none"
                    opacity={0.6 - i * 0.1}
                    filter="url(#genesis-glow-intense)"
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{
                        duration: 8 + i * 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ originX: "200px", originY: "150px" }}
                />
            ))}

            {/* Central singularity */}
            <motion.circle
                cx="200" cy="150" r="15"
                fill={color}
                filter="url(#genesis-glow-intense)"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.9, 1, 0.9]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Inner core pulse */}
            <motion.circle
                cx="200" cy="150" r="8"
                fill="white"
                animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Energy particles orbiting */}
            {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const radius = 50 + (i % 3) * 20;
                return (
                    <motion.circle
                        key={`particle-${i}`}
                        cx={200 + Math.cos(angle) * radius}
                        cy={150 + Math.sin(angle) * radius * 0.4}
                        r={2 + (i % 2)}
                        fill={color}
                        filter="url(#genesis-glow-intense)"
                        animate={{
                            cx: [
                                200 + Math.cos(angle) * radius,
                                200 + Math.cos(angle + Math.PI) * radius,
                                200 + Math.cos(angle) * radius
                            ],
                            cy: [
                                150 + Math.sin(angle) * radius * 0.4,
                                150 + Math.sin(angle + Math.PI) * radius * 0.4,
                                150 + Math.sin(angle) * radius * 0.4
                            ],
                            opacity: [0.8, 0.3, 0.8]
                        }}
                        transition={{
                            duration: 6 + i * 0.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                );
            })}

            {/* Radial light rays */}
            {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                return (
                    <motion.line
                        key={`ray-${i}`}
                        x1={200 + Math.cos(angle) * 25}
                        y1={150 + Math.sin(angle) * 25}
                        x2={200 + Math.cos(angle) * 130}
                        y2={150 + Math.sin(angle) * 130}
                        stroke={color}
                        strokeWidth="1"
                        opacity={0.15}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            strokeWidth: [1, 2, 1]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.15,
                            repeat: Infinity
                        }}
                    />
                );
            })}

            {/* Data stream crosses */}
            <motion.path
                d="M200 30 L200 270 M80 150 L320 150"
                stroke={color}
                strokeWidth="0.5"
                opacity="0.3"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3 }}
            />

            {/* Scanline effect */}
            <motion.rect
                x="100" y="0" width="200" height="2"
                fill={color}
                opacity="0.1"
                animate={{ y: [0, 300, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    );
}
