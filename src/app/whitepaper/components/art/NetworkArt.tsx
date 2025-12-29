'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ArtProps {
    color: string;
}

// Network - Cyber mesh with data pulses and node connections
export default function NetworkArt({ color }: ArtProps) {
    // Generate stable node positions
    const nodes = useMemo(() => [
        { x: 120, y: 80 },
        { x: 200, y: 60 },
        { x: 280, y: 90 },
        { x: 100, y: 150 },
        { x: 200, y: 150 },
        { x: 300, y: 150 },
        { x: 130, y: 220 },
        { x: 200, y: 240 },
        { x: 270, y: 210 },
    ], []);

    const connections = useMemo(() => [
        [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
        [3, 4], [4, 5], [3, 6], [4, 7], [5, 8],
        [6, 7], [7, 8], [0, 4], [2, 4], [4, 6], [4, 8]
    ], []);

    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="network-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="data-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0" />
                    <stop offset="50%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
                <radialGradient id="node-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="50%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.5" />
                </radialGradient>
            </defs>

            {/* Background grid pattern */}
            <pattern id="network-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke={color} strokeWidth="0.3" opacity="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#network-grid)" />

            {/* Connection lines */}
            {connections.map(([from, to], i) => (
                <g key={`conn-${i}`}>
                    <motion.line
                        x1={nodes[from].x}
                        y1={nodes[from].y}
                        x2={nodes[to].x}
                        y2={nodes[to].y}
                        stroke={color}
                        strokeWidth="1.5"
                        opacity="0.3"
                    />
                    {/* Animated data pulse along connection */}
                    <motion.circle
                        r="3"
                        fill={color}
                        filter="url(#network-glow)"
                        animate={{
                            cx: [nodes[from].x, nodes[to].x],
                            cy: [nodes[from].y, nodes[to].y],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 1.5 + (i % 3) * 0.5,
                            delay: i * 0.3,
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                    />
                </g>
            ))}

            {/* Network nodes */}
            {nodes.map((node, i) => (
                <g key={`node-${i}`}>
                    {/* Node outer ring */}
                    <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="12"
                        stroke={color}
                        strokeWidth="1"
                        fill="none"
                        opacity="0.5"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity
                        }}
                    />
                    {/* Node core */}
                    <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r={i === 4 ? 8 : 5}
                        fill="url(#node-grad)"
                        filter="url(#network-glow)"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.15,
                            repeat: Infinity
                        }}
                    />
                    {/* Center node special effect */}
                    {i === 4 && (
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="20"
                            stroke={color}
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5 5"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
                        />
                    )}
                </g>
            ))}

            {/* Floating data packets */}
            {[...Array(6)].map((_, i) => (
                <motion.rect
                    key={`packet-${i}`}
                    width="6"
                    height="4"
                    fill={color}
                    opacity="0.6"
                    animate={{
                        x: [80 + i * 40, 280 - i * 20, 80 + i * 40],
                        y: [50 + i * 30, 200 - i * 20, 50 + i * 30],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 4 + i,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Binary code rain effect */}
            {[...Array(8)].map((_, i) => (
                <motion.text
                    key={`binary-${i}`}
                    x={80 + i * 35}
                    y={0}
                    fill={color}
                    fontSize="8"
                    fontFamily="monospace"
                    opacity="0.3"
                    animate={{ y: [0, 300] }}
                    transition={{
                        duration: 5 + i * 0.5,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {i % 2 === 0 ? '1010' : '0101'}
                </motion.text>
            ))}
        </svg>
    );
}
