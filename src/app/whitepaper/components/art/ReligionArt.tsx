'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Religion - Sacred geometry with cyber elements
export default function ReligionArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="religion-glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <radialGradient id="sacred-center" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="50%" stopColor={color} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Outer mandala circles */}
            {[1, 2, 3].map((ring) => (
                <motion.circle
                    key={`outer-${ring}`}
                    cx="200" cy="150"
                    r={40 + ring * 30}
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray={ring % 2 === 0 ? "8 4" : "12 6"}
                    opacity={0.4 - ring * 0.1}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 30 + ring * 10, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "200px", originY: "150px" }}
                />
            ))}

            {/* Flower of life pattern - intersecting circles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.circle
                    key={`flower-${i}`}
                    cx={200 + Math.cos(angle * Math.PI / 180) * 35}
                    cy={150 + Math.sin(angle * Math.PI / 180) * 35}
                    r="35"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                />
            ))}

            {/* Central circle of flower */}
            <motion.circle
                cx="200" cy="150"
                r="35"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
            />

            {/* Inner triangle - upward */}
            <motion.polygon
                points="200,100 155,185 245,185"
                stroke={color}
                strokeWidth="2"
                fill="none"
                filter="url(#religion-glow)"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            />

            {/* Inner triangle - downward (Star of David effect) */}
            <motion.polygon
                points="200,200 155,115 245,115"
                stroke={color}
                strokeWidth="2"
                fill="none"
                filter="url(#religion-glow)"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
            />

            {/* Inner rotating square */}
            <motion.rect
                x="170" y="120"
                width="60" height="60"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "150px" }}
            />

            {/* Secondary rotating square (45 degrees offset) */}
            <motion.rect
                x="170" y="120"
                width="60" height="60"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "150px" }}
                transform="rotate(45, 200, 150)"
            />

            {/* Center sacred glow */}
            <motion.circle
                cx="200" cy="150"
                r="25"
                fill="url(#sacred-center)"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Eye symbol at center */}
            <motion.g>
                <motion.ellipse
                    cx="200" cy="150"
                    rx="15" ry="8"
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                    filter="url(#religion-glow)"
                />
                <motion.circle
                    cx="200" cy="150"
                    r="5"
                    fill={color}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                    cx="200" cy="150"
                    r="2"
                    fill="white"
                />
            </motion.g>

            {/* Radiating light rays */}
            {[...Array(12)].map((_, i) => {
                const angle = i * 30 * Math.PI / 180;
                return (
                    <motion.line
                        key={`ray-${i}`}
                        x1={200 + Math.cos(angle) * 45}
                        y1={150 + Math.sin(angle) * 45}
                        x2={200 + Math.cos(angle) * 120}
                        y2={150 + Math.sin(angle) * 120}
                        stroke={color}
                        strokeWidth="1"
                        opacity="0.15"
                        animate={{
                            opacity: [0.1, 0.25, 0.1],
                            strokeWidth: [1, 2, 1]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.15,
                            repeat: Infinity
                        }}
                    />
                );
            })}

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
                <motion.circle
                    key={`particle-${i}`}
                    cx={200 + Math.cos(i * 45 * Math.PI / 180) * 80}
                    cy={150 + Math.sin(i * 45 * Math.PI / 180) * 80}
                    r="2"
                    fill={color}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 0.25,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Om symbol suggestion (stylized) */}
            <motion.path
                d="M195 260 Q190 255 195 250 Q205 245 210 255 Q215 265 205 265 Q195 265 195 260"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
                filter="url(#religion-glow)"
            />
        </svg>
    );
}
