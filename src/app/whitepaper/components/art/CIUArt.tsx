'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// CIU - Intelligence agency with surveillance network
export default function CIUArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="ciu-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <radialGradient id="ciu-eye-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="30%" stopColor={color} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Central all-seeing eye */}
            <motion.g>
                {/* Eye outer shape */}
                <motion.path
                    d="M100 150 Q200 70 300 150 Q200 230 100 150"
                    stroke={color}
                    strokeWidth="3"
                    fill="none"
                    filter="url(#ciu-glow)"
                    animate={{
                        d: [
                            "M100 150 Q200 70 300 150 Q200 230 100 150",
                            "M100 150 Q200 100 300 150 Q200 200 100 150",
                            "M100 150 Q200 70 300 150 Q200 230 100 150"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Iris */}
                <motion.circle
                    cx="200" cy="150"
                    r="40"
                    stroke={color}
                    strokeWidth="2"
                    fill="url(#ciu-eye-grad)"
                />

                {/* Pupil */}
                <motion.circle
                    cx="200" cy="150"
                    r="20"
                    fill={color}
                    animate={{
                        r: [20, 25, 20],
                        cx: [200, 205, 195, 200]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Core */}
                <motion.circle
                    cx="200" cy="150"
                    r="8"
                    fill="white"
                />

                {/* Iris patterns */}
                {[...Array(8)].map((_, i) => {
                    const angle = i * 45 * Math.PI / 180;
                    return (
                        <motion.line
                            key={`iris-${i}`}
                            x1={200 + Math.cos(angle) * 22}
                            y1={150 + Math.sin(angle) * 22}
                            x2={200 + Math.cos(angle) * 38}
                            y2={150 + Math.sin(angle) * 38}
                            stroke={color}
                            strokeWidth="1"
                            opacity="0.4"
                        />
                    );
                })}
            </motion.g>

            {/* Surveillance nodes */}
            {[
                { x: 80, y: 60 },
                { x: 320, y: 60 },
                { x: 50, y: 150 },
                { x: 350, y: 150 },
                { x: 80, y: 240 },
                { x: 320, y: 240 },
            ].map((node, i) => (
                <motion.g key={`node-${i}`}>
                    {/* Connection to eye */}
                    <motion.line
                        x1={node.x}
                        y1={node.y}
                        x2="200"
                        y2="150"
                        stroke={color}
                        strokeWidth="0.5"
                        strokeDasharray="4 2"
                        opacity="0.3"
                    />
                    {/* Node */}
                    <motion.rect
                        x={node.x - 12}
                        y={node.y - 12}
                        width="24"
                        height="24"
                        stroke={color}
                        strokeWidth="1.5"
                        fill="none"
                        animate={{ rotate: 45 }}
                        style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
                    />
                    <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="6"
                        fill={color}
                        opacity="0.5"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    />
                    {/* Data stream to eye */}
                    <motion.circle
                        r="3"
                        fill={color}
                        animate={{
                            cx: [node.x, 200],
                            cy: [node.y, 150],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.5,
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                    />
                </motion.g>
            ))}

            {/* Rotating scan circles */}
            {[1, 2].map((ring) => (
                <motion.circle
                    key={`scan-${ring}`}
                    cx="200" cy="150"
                    r={60 + ring * 40}
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="15 10"
                    opacity={0.3 - ring * 0.1}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "200px", originY: "150px" }}
                />
            ))}

            {/* Data readouts - left */}
            <motion.g>
                <motion.rect
                    x="20" y="80"
                    width="50" height="80"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                />
                {[...Array(6)].map((_, i) => (
                    <motion.rect
                        key={`bar-${i}`}
                        x="25"
                        y={88 + i * 12}
                        width="0"
                        height="8"
                        fill={color}
                        opacity="0.5"
                        animate={{ width: [0, 20 + Math.random() * 20, 0] }}
                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    />
                ))}
            </motion.g>

            {/* Data readouts - right */}
            <motion.g>
                <motion.rect
                    x="330" y="80"
                    width="50" height="80"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                />
                {[...Array(6)].map((_, i) => (
                    <motion.rect
                        key={`bar-r-${i}`}
                        x="335"
                        y={88 + i * 12}
                        width="0"
                        height="8"
                        fill={color}
                        opacity="0.5"
                        animate={{ width: [0, 15 + Math.random() * 25, 0] }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.2, repeat: Infinity }}
                    />
                ))}
            </motion.g>

            {/* Classification stamp */}
            <motion.g>
                <motion.rect
                    x="140" y="260"
                    width="120" height="25"
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                />
                <motion.text
                    x="200" y="277"
                    textAnchor="middle"
                    fill={color}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="2"
                >
                    CLASSIFIED
                </motion.text>
            </motion.g>

            {/* CIU text at top */}
            <motion.text
                x="200" y="30"
                textAnchor="middle"
                fill={color}
                fontSize="12"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="5"
                opacity="0.7"
            >
                CENTRAL INTELLIGENCE UTILITY
            </motion.text>
        </svg>
    );
}
