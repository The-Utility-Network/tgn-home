'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Badge - Sheriff's star badge with authority visualization
export default function BadgeArt({ color }: ArtProps) {
    // Create star points
    const createStarPath = (cx: number, cy: number, outerR: number, innerR: number, points: number) => {
        const path = [];
        for (let i = 0; i < points * 2; i++) {
            const angle = (i * Math.PI / points) - Math.PI / 2;
            const r = i % 2 === 0 ? outerR : innerR;
            path.push(`${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`);
        }
        return `M${path.join(' L')} Z`;
    };

    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="badge-glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="50%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.7" />
                </linearGradient>
                <radialGradient id="badge-center" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.2" />
                </radialGradient>
            </defs>

            {/* Background glow */}
            <motion.circle
                cx="200" cy="145"
                r="90"
                fill="url(#badge-center)"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Outer ring */}
            <motion.circle
                cx="200" cy="145"
                r="85"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 3"
                opacity="0.4"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "145px" }}
            />

            {/* Main star badge - slowly rotating */}
            <motion.g
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ originX: "200px", originY: "145px" }}
            >
                {/* Star shadow/glow */}
                <motion.path
                    d={createStarPath(200, 145, 75, 35, 7)}
                    fill={color}
                    opacity="0.2"
                    filter="url(#badge-glow)"
                />

                {/* Main star */}
                <motion.path
                    d={createStarPath(200, 145, 70, 32, 7)}
                    fill="url(#badge-gradient)"
                    stroke={color}
                    strokeWidth="2"
                    filter="url(#badge-glow)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                />

                {/* Inner star outline */}
                <motion.path
                    d={createStarPath(200, 145, 55, 28, 7)}
                    fill="none"
                    stroke={color}
                    strokeWidth="1"
                    opacity="0.6"
                />
            </motion.g>

            {/* Center circle with emblem */}
            <motion.circle
                cx="200" cy="145"
                r="25"
                fill={color}
                opacity="0.9"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
            />
            <motion.circle
                cx="200" cy="145"
                r="20"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.8"
            />

            {/* SHERIFF text around center */}
            <motion.text
                x="200" y="150"
                textAnchor="middle"
                fill="white"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1"
            >
                LAW
            </motion.text>

            {/* Pulsing effect on star points */}
            {[...Array(7)].map((_, i) => {
                const angle = (i * 360 / 7 - 90) * Math.PI / 180;
                return (
                    <motion.circle
                        key={`pulse-${i}`}
                        cx={200 + Math.cos(angle) * 70}
                        cy={145 + Math.sin(angle) * 70}
                        r="4"
                        fill="white"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity
                        }}
                    />
                );
            })}

            {/* Orbiting justice scales */}
            <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "145px" }}
            >
                {/* Scale balance */}
                <motion.line
                    x1="200" y1="100"
                    x2="200" y2="80"
                    stroke={color}
                    strokeWidth="2"
                    opacity="0.6"
                />
                <motion.line
                    x1="175" y1="80"
                    x2="225" y2="80"
                    stroke={color}
                    strokeWidth="2"
                    opacity="0.6"
                />
                {/* Left pan */}
                <motion.path
                    d="M175 80 L165 95 L185 95 Z"
                    fill={color}
                    opacity="0.4"
                />
                {/* Right pan */}
                <motion.path
                    d="M225 80 L215 95 L235 95 Z"
                    fill={color}
                    opacity="0.4"
                />
            </motion.g>

            {/* Decorative corners */}
            {[
                { x: 80, y: 60 },
                { x: 320, y: 60 },
                { x: 80, y: 230 },
                { x: 320, y: 230 },
            ].map((corner, i) => (
                <motion.g key={`corner-${i}`}>
                    <motion.circle
                        cx={corner.x}
                        cy={corner.y}
                        r="8"
                        stroke={color}
                        strokeWidth="1"
                        fill="none"
                        opacity="0.4"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity
                        }}
                    />
                    <motion.circle
                        cx={corner.x}
                        cy={corner.y}
                        r="3"
                        fill={color}
                        opacity="0.5"
                    />
                </motion.g>
            ))}

            {/* Scanning laser effect */}
            <motion.line
                x1="100" y1="145"
                x2="300" y2="145"
                stroke={color}
                strokeWidth="1"
                opacity="0"
                animate={{
                    opacity: [0, 0.5, 0],
                    y1: [80, 210, 80],
                    y2: [80, 210, 80]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Bottom banner */}
            <motion.g>
                <motion.path
                    d="M140 265 L160 255 L240 255 L260 265 L240 275 L160 275 Z"
                    fill={color}
                    opacity="0.3"
                    stroke={color}
                    strokeWidth="1"
                />
                <motion.text
                    x="200" y="270"
                    textAnchor="middle"
                    fill={color}
                    fontSize="10"
                    fontFamily="monospace"
                    letterSpacing="2"
                    opacity="0.8"
                >
                    JUSTICE
                </motion.text>
            </motion.g>
        </svg>
    );
}
