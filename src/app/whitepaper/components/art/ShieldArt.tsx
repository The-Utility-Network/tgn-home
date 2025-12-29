'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Shield - Military/defense themed with protective barrier visualization
export default function ShieldArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="shield-glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                    <stop offset="50%" stopColor={color} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                </linearGradient>
                <radialGradient id="shield-radial" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Background energy field */}
            <motion.circle
                cx="200" cy="145"
                r="100"
                fill="url(#shield-radial)"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Main shield shape */}
            <motion.path
                d="M200 50 
                   L130 85 
                   L130 145 
                   C130 200 200 250 200 250 
                   C200 250 270 200 270 145 
                   L270 85 
                   Z"
                fill="url(#shield-gradient)"
                stroke={color}
                strokeWidth="3"
                filter="url(#shield-glow)"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Shield inner border */}
            <motion.path
                d="M200 65 
                   L145 95 
                   L145 145 
                   C145 190 200 230 200 230 
                   C200 230 255 190 255 145 
                   L255 95 
                   Z"
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                opacity="0.6"
            />

            {/* Cross emblem */}
            <motion.g>
                <motion.path
                    d="M200 90 L200 190"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.path
                    d="M155 130 L245 130"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                />
            </motion.g>

            {/* Central emblem node */}
            <motion.circle
                cx="200" cy="130"
                r="12"
                fill={color}
                opacity="0.8"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
                cx="200" cy="130"
                r="6"
                fill="white"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Protective barrier rings */}
            {[1, 2, 3].map((ring) => (
                <motion.ellipse
                    key={`barrier-${ring}`}
                    cx="200" cy="145"
                    rx={90 + ring * 15}
                    ry={100 + ring * 15}
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="10 5"
                    opacity={0.3 - ring * 0.08}
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3 - ring * 0.08, 0.5 - ring * 0.1, 0.3 - ring * 0.08]
                    }}
                    transition={{
                        duration: 2,
                        delay: ring * 0.3,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Orbiting defense nodes */}
            {[...Array(6)].map((_, i) => (
                <motion.g
                    key={`orbit-${i}`}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                    }}
                    style={{ originX: "200px", originY: "145px" }}
                >
                    <motion.rect
                        x={200 + Math.cos(i * 60 * Math.PI / 180) * 110 - 5}
                        y={145 + Math.sin(i * 60 * Math.PI / 180) * 110 - 5}
                        width="10"
                        height="10"
                        fill={color}
                        opacity="0.6"
                        transform={`rotate(45, ${200 + Math.cos(i * 60 * Math.PI / 180) * 110}, ${145 + Math.sin(i * 60 * Math.PI / 180) * 110})`}
                    />
                </motion.g>
            ))}

            {/* Impact ripples */}
            <motion.circle
                cx="200" cy="100"
                r="0"
                stroke={color}
                strokeWidth="2"
                fill="none"
                animate={{
                    r: [0, 30],
                    opacity: [0.8, 0]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                }}
            />

            {/* Star emblems at corners */}
            {[
                { x: 160, y: 100 },
                { x: 240, y: 100 },
                { x: 160, y: 160 },
                { x: 240, y: 160 },
            ].map((pos, i) => (
                <motion.polygon
                    key={`star-${i}`}
                    points={`${pos.x},${pos.y - 5} ${pos.x + 2},${pos.y - 2} ${pos.x + 5},${pos.y} ${pos.x + 2},${pos.y + 2} ${pos.x},${pos.y + 5} ${pos.x - 2},${pos.y + 2} ${pos.x - 5},${pos.y} ${pos.x - 2},${pos.y - 2}`}
                    fill={color}
                    opacity="0.5"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Bottom banner */}
            <motion.text
                x="200" y="280"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="3"
                opacity="0.5"
            >
                DEFEND
            </motion.text>
        </svg>
    );
}
