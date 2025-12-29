'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Admin Genesis - Command center initialization with holographic displays
export default function AdminGenesisArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="admin-genesis-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="admin-screen-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.05" />
                </linearGradient>
            </defs>

            {/* Main command screen frame */}
            <motion.rect
                x="80" y="50" width="240" height="160"
                stroke={color}
                strokeWidth="3"
                fill="url(#admin-screen-grad)"
                filter="url(#admin-genesis-glow)"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Screen inner border */}
            <motion.rect
                x="90" y="60" width="220" height="140"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.5"
            />

            {/* Boot sequence text */}
            <motion.text
                x="100" y="85"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.3 }}
            >
                {'> INITIALIZING ADMIN PROTOCOL...'}
            </motion.text>

            <motion.text
                x="100" y="100"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 1, duration: 0.3 }}
            >
                {'> LOADING FACTION MODULES...'}
            </motion.text>

            <motion.text
                x="100" y="115"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 1.5, duration: 0.3 }}
            >
                {'> ESTABLISHING SECURE CHANNELS...'}
            </motion.text>

            <motion.text
                x="100" y="130"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 2, duration: 1, repeat: Infinity }}
            >
                {'> SYSTEM READY_'}
            </motion.text>

            {/* Progress bar */}
            <motion.rect
                x="100" y="150" width="200" height="8"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.5"
            />
            <motion.rect
                x="101" y="151"
                height="6"
                fill={color}
                initial={{ width: 0 }}
                animate={{ width: 198 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* Status indicators */}
            {['ARMY', 'CIU', 'SHERIFF'].map((label, i) => (
                <motion.g key={label}>
                    <motion.circle
                        cx={130 + i * 70}
                        cy="180"
                        r="6"
                        fill={color}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ delay: 2.5 + i * 0.3, duration: 1, repeat: Infinity }}
                    />
                    <motion.text
                        x={130 + i * 70}
                        y="195"
                        textAnchor="middle"
                        fill={color}
                        fontSize="8"
                        fontFamily="monospace"
                        opacity="0.7"
                    >
                        {label}
                    </motion.text>
                </motion.g>
            ))}

            {/* Side decorative elements */}
            {[0, 1, 2, 3].map((i) => (
                <motion.rect
                    key={`side-left-${i}`}
                    x="50"
                    y={70 + i * 35}
                    width="20"
                    height="25"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
                />
            ))}

            {[0, 1, 2, 3].map((i) => (
                <motion.rect
                    key={`side-right-${i}`}
                    x="330"
                    y={70 + i * 35}
                    width="20"
                    height="25"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ delay: i * 0.2 + 0.5, duration: 2, repeat: Infinity }}
                />
            ))}

            {/* Top bar indicators */}
            {[...Array(8)].map((_, i) => (
                <motion.rect
                    key={`top-${i}`}
                    x={100 + i * 25}
                    y="35"
                    width="15"
                    height="8"
                    fill={color}
                    opacity="0.3"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                />
            ))}

            {/* Corner brackets */}
            {[
                { x: 75, y: 45, r: 0 },
                { x: 325, y: 45, r: 90 },
                { x: 325, y: 215, r: 180 },
                { x: 75, y: 215, r: 270 },
            ].map((corner, i) => (
                <motion.path
                    key={`corner-${i}`}
                    d="M0 0 L15 0 M0 0 L0 15"
                    stroke={color}
                    strokeWidth="2"
                    transform={`translate(${corner.x}, ${corner.y}) rotate(${corner.r})`}
                    filter="url(#admin-genesis-glow)"
                />
            ))}

            {/* Bottom status bar */}
            <motion.text
                x="200" y="245"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="3"
                opacity="0.6"
            >
                ADMIN CONTROL CENTER
            </motion.text>

            {/* Scanning line */}
            <motion.line
                x1="90" x2="300"
                stroke={color}
                strokeWidth="1"
                opacity="0.3"
                animate={{
                    y1: [60, 200, 60],
                    y2: [60, 200, 60]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    );
}
