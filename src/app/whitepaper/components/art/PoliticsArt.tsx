'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Politics - Interconnected hexagonal governance structure
export default function PoliticsArt({ color }: ArtProps) {
    // Hexagon path helper
    const hexPath = (cx: number, cy: number, size: number) => {
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angle = (i * 60 - 30) * Math.PI / 180;
            points.push(`${cx + Math.cos(angle) * size},${cy + Math.sin(angle) * size}`);
        }
        return `M${points.join(' L')} Z`;
    };

    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="politics-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* Background honeycomb pattern */}
            <pattern id="honeycomb" width="52" height="45" patternUnits="userSpaceOnUse">
                <path
                    d={hexPath(15, 15, 14)}
                    fill="none"
                    stroke={color}
                    strokeWidth="0.5"
                    opacity="0.1"
                />
                <path
                    d={hexPath(41, 15, 14)}
                    fill="none"
                    stroke={color}
                    strokeWidth="0.5"
                    opacity="0.1"
                />
                <path
                    d={hexPath(28, 37, 14)}
                    fill="none"
                    stroke={color}
                    strokeWidth="0.5"
                    opacity="0.1"
                />
            </pattern>
            <rect width="100%" height="100%" fill="url(#honeycomb)" />

            {/* Central hexagon cluster */}
            {[
                { x: 200, y: 150, size: 35, delay: 0, main: true },
                { x: 155, y: 120, size: 25, delay: 0.1 },
                { x: 245, y: 120, size: 25, delay: 0.15 },
                { x: 155, y: 180, size: 25, delay: 0.2 },
                { x: 245, y: 180, size: 25, delay: 0.25 },
                { x: 200, y: 90, size: 22, delay: 0.3 },
                { x: 200, y: 210, size: 22, delay: 0.35 },
            ].map((hex, i) => (
                <motion.g key={`hex-${i}`}>
                    {/* Outer glow ring */}
                    <motion.path
                        d={hexPath(hex.x, hex.y, hex.size + 5)}
                        fill="none"
                        stroke={color}
                        strokeWidth="1"
                        opacity="0.3"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 3,
                            delay: hex.delay,
                            repeat: Infinity
                        }}
                    />
                    {/* Main hexagon */}
                    <motion.path
                        d={hexPath(hex.x, hex.y, hex.size)}
                        fill={hex.main ? "url(#hex-gradient)" : "none"}
                        stroke={color}
                        strokeWidth={hex.main ? 3 : 2}
                        filter={hex.main ? "url(#politics-glow)" : undefined}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: hex.delay, type: "spring" }}
                    />
                    {/* Inner detail */}
                    {hex.main && (
                        <motion.path
                            d={hexPath(hex.x, hex.y, hex.size * 0.5)}
                            fill="none"
                            stroke={color}
                            strokeWidth="1"
                            opacity="0.6"
                            animate={{ rotate: 30 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{ originX: `${hex.x}px`, originY: `${hex.y}px` }}
                        />
                    )}
                </motion.g>
            ))}

            {/* Connection lines between hexagons */}
            {[
                { from: { x: 200, y: 150 }, to: { x: 155, y: 120 } },
                { from: { x: 200, y: 150 }, to: { x: 245, y: 120 } },
                { from: { x: 200, y: 150 }, to: { x: 155, y: 180 } },
                { from: { x: 200, y: 150 }, to: { x: 245, y: 180 } },
                { from: { x: 200, y: 150 }, to: { x: 200, y: 90 } },
                { from: { x: 200, y: 150 }, to: { x: 200, y: 210 } },
            ].map((line, i) => (
                <motion.line
                    key={`line-${i}`}
                    x1={line.from.x}
                    y1={line.from.y}
                    x2={line.to.x}
                    y2={line.to.y}
                    stroke={color}
                    strokeWidth="1.5"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                />
            ))}

            {/* Central power node */}
            <motion.circle
                cx="200" cy="150"
                r="8"
                fill="white"
                filter="url(#politics-glow)"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Orbiting vote indicators */}
            {[...Array(6)].map((_, i) => (
                <motion.g
                    key={`vote-${i}`}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ originX: "200px", originY: "150px" }}
                >
                    <motion.circle
                        cx={200 + Math.cos(i * 60 * Math.PI / 180) * 70}
                        cy={150 + Math.sin(i * 60 * Math.PI / 180) * 70}
                        r="4"
                        fill={color}
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Infinity
                        }}
                    />
                </motion.g>
            ))}

            {/* Outer ring */}
            <motion.circle
                cx="200" cy="150"
                r="100"
                stroke={color}
                strokeWidth="1"
                fill="none"
                strokeDasharray="10 5"
                opacity="0.3"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "150px" }}
            />

            {/* Corner decorations */}
            {[
                { x: 50, y: 50 },
                { x: 350, y: 50 },
                { x: 50, y: 250 },
                { x: 350, y: 250 },
            ].map((corner, i) => (
                <motion.path
                    key={`corner-${i}`}
                    d={hexPath(corner.x, corner.y, 15)}
                    fill="none"
                    stroke={color}
                    strokeWidth="1"
                    opacity="0.2"
                    animate={{ rotate: i % 2 === 0 ? 30 : -30 }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                    style={{ originX: `${corner.x}px`, originY: `${corner.y}px` }}
                />
            ))}
        </svg>
    );
}
