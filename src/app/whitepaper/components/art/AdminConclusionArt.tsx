'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Admin Conclusion - Future vision with ascending pathway
export default function AdminConclusionArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="conclusion-glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="path-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.8" />
                </linearGradient>
                <radialGradient id="sun-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="30%" stopColor={color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Rising sun/beacon at top */}
            <motion.g>
                <motion.circle
                    cx="200" cy="50"
                    r="35"
                    fill="url(#sun-gradient)"
                    filter="url(#conclusion-glow)"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Radiating lines */}
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * Math.PI / 180;
                    return (
                        <motion.line
                            key={`ray-${i}`}
                            x1={200 + Math.cos(angle) * 40}
                            y1={50 + Math.sin(angle) * 40}
                            x2={200 + Math.cos(angle) * 70}
                            y2={50 + Math.sin(angle) * 70}
                            stroke={color}
                            strokeWidth="1.5"
                            opacity="0.4"
                            animate={{
                                opacity: [0.2, 0.5, 0.2],
                                x2: [200 + Math.cos(angle) * 70, 200 + Math.cos(angle) * 80, 200 + Math.cos(angle) * 70],
                                y2: [50 + Math.sin(angle) * 70, 50 + Math.sin(angle) * 80, 50 + Math.sin(angle) * 70]
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.1,
                                repeat: Infinity
                            }}
                        />
                    );
                })}
            </motion.g>

            {/* Ascending stairway/path */}
            <motion.g>
                {[...Array(8)].map((_, i) => (
                    <motion.rect
                        key={`step-${i}`}
                        x={140 + i * 8}
                        y={250 - i * 22}
                        width={120 - i * 16}
                        height="15"
                        stroke={color}
                        strokeWidth="1.5"
                        fill="url(#path-gradient)"
                        fillOpacity={0.3 + i * 0.08}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    />
                ))}
            </motion.g>

            {/* Three pillars representing factions */}
            {[
                { x: 80, label: 'ARMY', height: 100 },
                { x: 200, label: 'CIU', height: 120 },
                { x: 320, label: 'SHERIFF', height: 110 },
            ].map((pillar, i) => (
                <motion.g key={`pillar-${i}`}>
                    <motion.rect
                        x={pillar.x - 25}
                        y={260 - pillar.height}
                        width="50"
                        height={pillar.height}
                        stroke={color}
                        strokeWidth="2"
                        fill={color}
                        fillOpacity="0.15"
                        initial={{ height: 0 }}
                        animate={{ height: pillar.height }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                        style={{ originY: "260px" }}
                    />
                    <motion.text
                        x={pillar.x}
                        y={270 - pillar.height}
                        textAnchor="middle"
                        fill={color}
                        fontSize="8"
                        fontFamily="monospace"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ delay: 1 + i * 0.2 }}
                    >
                        {pillar.label}
                    </motion.text>
                    {/* Pillar glow */}
                    <motion.circle
                        cx={pillar.x}
                        cy={260 - pillar.height - 10}
                        r="8"
                        fill={color}
                        filter="url(#conclusion-glow)"
                        animate={{
                            opacity: [0.4, 0.8, 0.4],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity
                        }}
                    />
                </motion.g>
            ))}

            {/* Connecting arc between pillars */}
            <motion.path
                d="M80 140 Q200 80 320 130"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            />

            {/* Flying particles upward */}
            {[...Array(10)].map((_, i) => (
                <motion.circle
                    key={`particle-${i}`}
                    cx={150 + (i % 5) * 25}
                    r="2"
                    fill={color}
                    animate={{
                        cy: [280, 30],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 0.4,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Foundation line */}
            <motion.line
                x1="40" y1="260"
                x2="360" y2="260"
                stroke={color}
                strokeWidth="3"
                opacity="0.5"
            />

            {/* Future vision text */}
            <motion.text
                x="200" y="285"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                THE PATH FORWARD
            </motion.text>
        </svg>
    );
}
