'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Web3 Architecture - Blockchain layers and smart contract visualization
export default function Web3ArchitectureArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="web3-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="block-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* Blockchain - chain of blocks */}
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.g key={`block-${i}`}>
                    {/* Block */}
                    <motion.rect
                        x={60 + i * 65}
                        y="60"
                        width="50"
                        height="35"
                        rx="4"
                        stroke={color}
                        strokeWidth="2"
                        fill="url(#block-gradient)"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                    />
                    {/* Block hash lines */}
                    <motion.rect
                        x={65 + i * 65}
                        y="68"
                        width="40"
                        height="3"
                        fill={color}
                        opacity="0.5"
                    />
                    <motion.rect
                        x={65 + i * 65}
                        y="75"
                        width="30"
                        height="3"
                        fill={color}
                        opacity="0.3"
                    />
                    <motion.rect
                        x={65 + i * 65}
                        y="82"
                        width="35"
                        height="3"
                        fill={color}
                        opacity="0.4"
                    />

                    {/* Chain link */}
                    {i < 4 && (
                        <motion.line
                            x1={110 + i * 65}
                            y1="77"
                            x2={125 + i * 65}
                            y2="77"
                            stroke={color}
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.5 + i * 0.15 }}
                        />
                    )}
                </motion.g>
            ))}

            {/* New block being mined */}
            <motion.rect
                x="385" y="60"
                width="50" height="35"
                rx="4"
                stroke={color}
                strokeWidth="2"
                strokeDasharray="5 3"
                fill="none"
                opacity="0.5"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Smart Contract Layer */}
            <motion.g>
                <motion.rect
                    x="120" y="120"
                    width="160" height="80"
                    rx="8"
                    stroke={color}
                    strokeWidth="2"
                    fill="url(#block-gradient)"
                    filter="url(#web3-glow)"
                />
                <motion.text
                    x="200" y="145"
                    textAnchor="middle"
                    fill={color}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    SMART CONTRACT
                </motion.text>

                {/* Code lines */}
                {[0, 1, 2].map((i) => (
                    <motion.rect
                        key={`code-${i}`}
                        x="135"
                        y={155 + i * 12}
                        width={80 + (i % 2) * 30}
                        height="6"
                        fill={color}
                        opacity={0.4 - i * 0.1}
                        animate={{ width: [80 + (i % 2) * 30, 100 + (i % 2) * 20, 80 + (i % 2) * 30] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    />
                ))}
            </motion.g>

            {/* Connection lines to I3AS nodes */}
            <motion.path
                d="M200 200 L120 240 M200 200 L200 240 M200 200 L280 240"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1 }}
            />

            {/* I3AS Nodes */}
            {[
                { x: 120, label: 'AUTOMATION' },
                { x: 200, label: 'SERVICE' },
                { x: 280, label: 'PROTOCOL' },
            ].map((node, i) => (
                <motion.g key={`node-${i}`}>
                    <motion.circle
                        cx={node.x}
                        cy="255"
                        r="20"
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5 + i * 0.2, type: "spring" }}
                    />
                    <motion.circle
                        cx={node.x}
                        cy="255"
                        r="8"
                        fill={color}
                        opacity="0.6"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    />
                    <motion.text
                        x={node.x}
                        y="285"
                        textAnchor="middle"
                        fill={color}
                        fontSize="7"
                        fontFamily="monospace"
                        opacity="0.6"
                    >
                        {node.label}
                    </motion.text>
                </motion.g>
            ))}

            {/* Data packets flowing */}
            {[0, 1, 2].map((i) => (
                <motion.circle
                    key={`packet-${i}`}
                    r="4"
                    fill={color}
                    filter="url(#web3-glow)"
                    animate={{
                        cx: [200, 120 + i * 80],
                        cy: [200, 255],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 2 + i * 0.5,
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                />
            ))}

            {/* Ethereum logo suggestion */}
            <motion.g transform="translate(340, 140)">
                <motion.path
                    d="M0 0 L15 25 L30 0 L15 10 Z"
                    stroke={color}
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.5"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "15px", originY: "12px" }}
                />
                <motion.path
                    d="M0 5 L15 30 L30 5 L15 15 Z"
                    stroke={color}
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.3"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "15px", originY: "17px" }}
                />
            </motion.g>

            {/* Side decoration - hex pattern */}
            {[0, 1, 2].map((i) => (
                <motion.polygon
                    key={`hex-${i}`}
                    points="40,140 50,130 60,140 60,155 50,165 40,155"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity={0.3 - i * 0.08}
                    transform={`translate(0, ${i * 40})`}
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                />
            ))}
        </svg>
    );
}
