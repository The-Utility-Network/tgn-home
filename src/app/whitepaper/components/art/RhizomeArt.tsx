'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ArtProps {
    color: string;
}

// Rhizome - Decentralized underground network visualization
export default function RhizomeArt({ color }: ArtProps) {
    const nodes = useMemo(() => [
        { x: 200, y: 150, size: 12, depth: 0 },
        { x: 130, y: 100, size: 8, depth: 1 },
        { x: 270, y: 100, size: 8, depth: 1 },
        { x: 130, y: 200, size: 8, depth: 1 },
        { x: 270, y: 200, size: 8, depth: 1 },
        { x: 80, y: 70, size: 5, depth: 2 },
        { x: 160, y: 50, size: 5, depth: 2 },
        { x: 240, y: 50, size: 5, depth: 2 },
        { x: 320, y: 70, size: 5, depth: 2 },
        { x: 60, y: 150, size: 5, depth: 2 },
        { x: 340, y: 150, size: 5, depth: 2 },
        { x: 80, y: 230, size: 5, depth: 2 },
        { x: 160, y: 250, size: 5, depth: 2 },
        { x: 240, y: 250, size: 5, depth: 2 },
        { x: 320, y: 230, size: 5, depth: 2 },
    ], []);

    const connections = useMemo(() => [
        [0, 1], [0, 2], [0, 3], [0, 4],
        [1, 5], [1, 6], [2, 7], [2, 8],
        [1, 9], [2, 10],
        [3, 9], [3, 11], [3, 12], [4, 10], [4, 13], [4, 14],
        [5, 6], [7, 8], [11, 12], [13, 14],
    ], []);

    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="rhizome-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <radialGradient id="rhizome-node-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor={color} stopOpacity="1" />
                </radialGradient>
                <pattern id="rhizome-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <rect width="30" height="30" fill="none" stroke={color} strokeWidth="0.3" opacity="0.15" />
                </pattern>
            </defs>

            {/* Background grid */}
            <rect width="100%" height="100%" fill="url(#rhizome-grid)" />

            {/* Underground connection lines with pulse */}
            {connections.map(([from, to], i) => (
                <g key={`conn-${i}`}>
                    {/* Base connection */}
                    <motion.path
                        d={`M${nodes[from].x} ${nodes[from].y} 
                           Q${(nodes[from].x + nodes[to].x) / 2 + (Math.random() - 0.5) * 20} 
                            ${(nodes[from].y + nodes[to].y) / 2 + (Math.random() - 0.5) * 20} 
                            ${nodes[to].x} ${nodes[to].y}`}
                        stroke={color}
                        strokeWidth={nodes[from].depth === 0 || nodes[to].depth === 0 ? 2 : 1}
                        fill="none"
                        opacity={0.4}
                    />
                    {/* Pulse traveling along connection */}
                    <motion.circle
                        r="3"
                        fill={color}
                        filter="url(#rhizome-glow)"
                        animate={{
                            cx: [nodes[from].x, nodes[to].x],
                            cy: [nodes[from].y, nodes[to].y],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                            repeatDelay: 3
                        }}
                    />
                </g>
            ))}

            {/* Rhizome nodes */}
            {nodes.map((node, i) => (
                <g key={`node-${i}`}>
                    {/* Outer pulse ring */}
                    <motion.circle
                        cx={node.x} cy={node.y}
                        r={node.size + 5}
                        stroke={color}
                        strokeWidth="1"
                        fill="none"
                        opacity="0.3"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0, 0.3]
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Infinity
                        }}
                    />
                    {/* Node body */}
                    <motion.circle
                        cx={node.x} cy={node.y}
                        r={node.size}
                        fill={node.depth === 0 ? "url(#rhizome-node-grad)" : color}
                        filter="url(#rhizome-glow)"
                        opacity={1 - node.depth * 0.2}
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity
                        }}
                    />
                    {/* Inner core for main node */}
                    {node.depth === 0 && (
                        <motion.circle
                            cx={node.x} cy={node.y}
                            r="5"
                            fill="white"
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                    )}
                </g>
            ))}

            {/* Spreading effect from center */}
            {[1, 2, 3].map((ring) => (
                <motion.circle
                    key={`spread-${ring}`}
                    cx="200" cy="150"
                    r={30 + ring * 40}
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0"
                    animate={{
                        r: [20, 150],
                        opacity: [0.5, 0]
                    }}
                    transition={{
                        duration: 4,
                        delay: ring * 1.2,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
            ))}

            {/* Floating spores/particles */}
            {[...Array(12)].map((_, i) => (
                <motion.circle
                    key={`spore-${i}`}
                    cx={80 + (i % 6) * 50}
                    cy={50 + Math.floor(i / 6) * 180}
                    r="2"
                    fill={color}
                    opacity="0.4"
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                        duration: 3 + i * 0.3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Label */}
            <motion.text
                x="200" y="285"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                opacity="0.5"
                letterSpacing="3"
            >
                DECENTRALIZED
            </motion.text>
        </svg>
    );
}
