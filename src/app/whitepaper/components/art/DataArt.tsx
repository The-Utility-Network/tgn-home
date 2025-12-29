'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Data - Intelligence/surveillance visualization with data streams
export default function DataArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="data-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="data-stream" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0" />
                    <stop offset="50%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Central eye/monitor */}
            <motion.g filter="url(#data-glow)">
                {/* Outer eye shape */}
                <motion.path
                    d="M120 150 Q200 80 280 150 Q200 220 120 150"
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                    animate={{
                        d: [
                            "M120 150 Q200 80 280 150 Q200 220 120 150",
                            "M120 150 Q200 100 280 150 Q200 200 120 150",
                            "M120 150 Q200 80 280 150 Q200 220 120 150"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Iris */}
                <motion.circle
                    cx="200" cy="150"
                    r="35"
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Pupil */}
                <motion.circle
                    cx="200" cy="150"
                    r="18"
                    fill={color}
                    opacity="0.8"
                    animate={{
                        r: [18, 22, 18],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Inner core */}
                <motion.circle
                    cx="200" cy="150"
                    r="8"
                    fill="white"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.g>

            {/* Scanning rings */}
            {[1, 2, 3].map((ring) => (
                <motion.circle
                    key={`scan-${ring}`}
                    cx="200" cy="150"
                    r={50 + ring * 25}
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="8 4"
                    opacity={0.4 - ring * 0.1}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{
                        duration: 15 + ring * 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ originX: "200px", originY: "150px" }}
                />
            ))}

            {/* Data bars - left side */}
            {[...Array(8)].map((_, i) => (
                <motion.rect
                    key={`bar-left-${i}`}
                    x="40"
                    y={60 + i * 25}
                    width="0"
                    height="15"
                    fill={color}
                    opacity="0.6"
                    animate={{
                        width: [0, 30 + Math.random() * 30, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: i * 0.15,
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            ))}

            {/* Data bars - right side */}
            {[...Array(8)].map((_, i) => (
                <motion.rect
                    key={`bar-right-${i}`}
                    x={360 - (30 + i * 3)}
                    y={60 + i * 25}
                    width="0"
                    height="15"
                    fill={color}
                    opacity="0.6"
                    animate={{
                        width: [0, 30 + Math.random() * 30, 0],
                        x: [360, 360 - (30 + Math.random() * 30), 360]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: i * 0.15 + 0.5,
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            ))}

            {/* Connecting data streams to center */}
            {[
                { start: { x: 40, y: 100 }, end: { x: 120, y: 150 } },
                { start: { x: 40, y: 200 }, end: { x: 120, y: 150 } },
                { start: { x: 360, y: 100 }, end: { x: 280, y: 150 } },
                { start: { x: 360, y: 200 }, end: { x: 280, y: 150 } },
            ].map((stream, i) => (
                <motion.g key={`stream-${i}`}>
                    <motion.line
                        x1={stream.start.x}
                        y1={stream.start.y}
                        x2={stream.end.x}
                        y2={stream.end.y}
                        stroke={color}
                        strokeWidth="1"
                        opacity="0.3"
                        strokeDasharray="5 3"
                    />
                    <motion.circle
                        r="3"
                        fill={color}
                        filter="url(#data-glow)"
                        animate={{
                            cx: [stream.start.x, stream.end.x],
                            cy: [stream.start.y, stream.end.y],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.3,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    />
                </motion.g>
            ))}

            {/* Binary text decoration */}
            {[...Array(5)].map((_, i) => (
                <motion.text
                    key={`binary-${i}`}
                    x={80 + i * 60}
                    y="40"
                    fill={color}
                    fontSize="8"
                    fontFamily="monospace"
                    opacity="0.3"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{
                        duration: 1,
                        delay: i * 0.2,
                        repeat: Infinity
                    }}
                >
                    {i % 2 === 0 ? '10110' : '01001'}
                </motion.text>
            ))}

            {/* Status indicators */}
            {[
                { x: 200, y: 40, label: 'ACTIVE' },
                { x: 200, y: 260, label: 'MONITORING' },
            ].map((status, i) => (
                <motion.g key={`status-${i}`}>
                    <motion.circle
                        cx={status.x - 35}
                        cy={status.y}
                        r="4"
                        fill={color}
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.text
                        x={status.x}
                        y={status.y + 4}
                        textAnchor="middle"
                        fill={color}
                        fontSize="10"
                        fontFamily="monospace"
                        letterSpacing="2"
                        opacity="0.6"
                    >
                        {status.label}
                    </motion.text>
                </motion.g>
            ))}

            {/* Corner brackets */}
            {[
                { x: 95, y: 70, r: 0 },
                { x: 305, y: 70, r: 90 },
                { x: 305, y: 230, r: 180 },
                { x: 95, y: 230, r: 270 },
            ].map((corner, i) => (
                <motion.path
                    key={`bracket-${i}`}
                    d="M0 0 L15 0 M0 0 L0 15"
                    stroke={color}
                    strokeWidth="2"
                    opacity="0.5"
                    transform={`translate(${corner.x}, ${corner.y}) rotate(${corner.r})`}
                />
            ))}
        </svg>
    );
}
