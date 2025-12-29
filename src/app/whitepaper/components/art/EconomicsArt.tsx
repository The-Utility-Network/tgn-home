'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Economics - Financial charts and crypto visualization
export default function EconomicsArt({ color }: ArtProps) {
    const chartPoints = [
        { x: 80, y: 200 },
        { x: 120, y: 170 },
        { x: 160, y: 190 },
        { x: 200, y: 130 },
        { x: 240, y: 150 },
        { x: 280, y: 90 },
        { x: 320, y: 110 },
    ];

    const pathD = chartPoints.map((p, i) =>
        i === 0 ? `M${p.x} ${p.y}` : `L${p.x} ${p.y}`
    ).join(' ');

    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="econ-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="chart-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
                <linearGradient id="bar-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="1" />
                </linearGradient>
            </defs>

            {/* Grid lines */}
            {[...Array(5)].map((_, i) => (
                <line
                    key={`hline-${i}`}
                    x1="60" y1={80 + i * 35}
                    x2="340" y2={80 + i * 35}
                    stroke={color}
                    strokeWidth="0.5"
                    opacity="0.15"
                />
            ))}
            {[...Array(7)].map((_, i) => (
                <line
                    key={`vline-${i}`}
                    x1={80 + i * 40} y1="60"
                    x2={80 + i * 40} y2="230"
                    stroke={color}
                    strokeWidth="0.5"
                    opacity="0.15"
                />
            ))}

            {/* Chart area fill */}
            <motion.path
                d={`${pathD} L320 220 L80 220 Z`}
                fill="url(#chart-fill)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Main chart line */}
            <motion.path
                d={pathD}
                stroke={color}
                strokeWidth="3"
                fill="none"
                filter="url(#econ-glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Chart data points */}
            {chartPoints.map((point, i) => (
                <motion.g key={`point-${i}`}>
                    <motion.circle
                        cx={point.x} cy={point.y}
                        r="6"
                        fill="black"
                        stroke={color}
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                    />
                    <motion.circle
                        cx={point.x} cy={point.y}
                        r="10"
                        stroke={color}
                        strokeWidth="1"
                        fill="none"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity
                        }}
                    />
                </motion.g>
            ))}

            {/* Crypto symbol (stylized) */}
            <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <motion.circle
                    cx="320" cy="70"
                    r="25"
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                    filter="url(#econ-glow)"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.text
                    x="320" y="77"
                    textAnchor="middle"
                    fill={color}
                    fontSize="20"
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    ₿
                </motion.text>
            </motion.g>

            {/* Rising indicator arrow */}
            <motion.path
                d="M290 100 L310 80 L305 85 M310 80 L315 85"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={{
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Bar chart elements on bottom */}
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.rect
                    key={`bar-${i}`}
                    x={95 + i * 50}
                    y={250}
                    width="20"
                    height="0"
                    fill="url(#bar-grad)"
                    animate={{
                        height: [0, 30 + i * 8, 20 + i * 5],
                        y: [250, 250 - (30 + i * 8), 250 - (20 + i * 5)]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: i * 0.15,
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                />
            ))}

            {/* Axis lines */}
            <line x1="60" y1="220" x2="340" y2="220" stroke={color} strokeWidth="1" opacity="0.5" />
            <line x1="60" y1="60" x2="60" y2="220" stroke={color} strokeWidth="1" opacity="0.5" />

            {/* Floating numbers */}
            {['$', '%', '↑'].map((symbol, i) => (
                <motion.text
                    key={`symbol-${i}`}
                    x={100 + i * 100}
                    y={50}
                    fill={color}
                    fontSize="12"
                    fontFamily="monospace"
                    opacity="0.3"
                    animate={{
                        y: [45, 55, 45],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 0.5,
                        repeat: Infinity
                    }}
                >
                    {symbol}
                </motion.text>
            ))}
        </svg>
    );
}
