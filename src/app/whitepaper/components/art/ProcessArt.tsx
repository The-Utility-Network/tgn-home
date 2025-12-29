'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Process - Industrial gears and data loop visualization
export default function ProcessArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="process-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="process-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0" />
                    <stop offset="50%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Large gear - left */}
            <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ originX: "140px", originY: "150px" }}
            >
                <circle cx="140" cy="150" r="50" stroke={color} strokeWidth="2" fill="none" opacity="0.3" />
                <circle cx="140" cy="150" r="35" stroke={color} strokeWidth="3" fill="none" />
                {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    return (
                        <rect
                            key={`gear1-tooth-${i}`}
                            x={140 + Math.cos(angle) * 45 - 6}
                            y={150 + Math.sin(angle) * 45 - 6}
                            width="12"
                            height="12"
                            fill={color}
                            opacity="0.8"
                            transform={`rotate(${i * 45 + 22.5}, ${140 + Math.cos(angle) * 45}, ${150 + Math.sin(angle) * 45})`}
                        />
                    );
                })}
                <circle cx="140" cy="150" r="10" fill={color} opacity="0.5" />
            </motion.g>

            {/* Medium gear - right */}
            <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ originX: "260px", originY: "150px" }}
            >
                <circle cx="260" cy="150" r="40" stroke={color} strokeWidth="2" fill="none" opacity="0.3" />
                <circle cx="260" cy="150" r="28" stroke={color} strokeWidth="3" fill="none" />
                {[...Array(6)].map((_, i) => {
                    const angle = (i * 60) * Math.PI / 180;
                    return (
                        <rect
                            key={`gear2-tooth-${i}`}
                            x={260 + Math.cos(angle) * 36 - 5}
                            y={150 + Math.sin(angle) * 36 - 5}
                            width="10"
                            height="10"
                            fill={color}
                            opacity="0.8"
                            transform={`rotate(${i * 60 + 30}, ${260 + Math.cos(angle) * 36}, ${150 + Math.sin(angle) * 36})`}
                        />
                    );
                })}
                <circle cx="260" cy="150" r="8" fill={color} opacity="0.5" />
            </motion.g>

            {/* Small gear - top */}
            <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "80px" }}
            >
                <circle cx="200" cy="80" r="25" stroke={color} strokeWidth="2" fill="none" />
                {[...Array(6)].map((_, i) => {
                    const angle = (i * 60) * Math.PI / 180;
                    return (
                        <rect
                            key={`gear3-tooth-${i}`}
                            x={200 + Math.cos(angle) * 22 - 4}
                            y={80 + Math.sin(angle) * 22 - 4}
                            width="8"
                            height="8"
                            fill={color}
                            opacity="0.8"
                            transform={`rotate(${i * 60}, ${200 + Math.cos(angle) * 22}, ${80 + Math.sin(angle) * 22})`}
                        />
                    );
                })}
                <circle cx="200" cy="80" r="6" fill={color} opacity="0.5" />
            </motion.g>

            {/* Circular data flow around center */}
            <motion.circle
                cx="200" cy="150"
                r="75"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.2"
                strokeDasharray="10 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "150px" }}
            />

            {/* Orbiting data points */}
            {[...Array(4)].map((_, i) => (
                <motion.circle
                    key={`orbit-point-${i}`}
                    r="4"
                    fill={color}
                    filter="url(#process-glow)"
                    animate={{
                        cx: [
                            200 + Math.cos(i * 90 * Math.PI / 180) * 75,
                            200 + Math.cos((i * 90 + 360) * Math.PI / 180) * 75
                        ],
                        cy: [
                            150 + Math.sin(i * 90 * Math.PI / 180) * 75,
                            150 + Math.sin((i * 90 + 360) * Math.PI / 180) * 75
                        ]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Center console display */}
            <motion.rect
                x="175" y="130" width="50" height="40"
                stroke={color}
                strokeWidth="2"
                fill="none"
                filter="url(#process-glow)"
            />

            {/* Console text animation */}
            <motion.text
                x="182" y="155"
                fill={color}
                fontSize="14"
                fontFamily="monospace"
                fontWeight="bold"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                RUN
            </motion.text>

            {/* Progress bar inside console */}
            <motion.rect
                x="180" y="160" width="0" height="4"
                fill={color}
                animate={{ width: [0, 40, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Connection lines between gears */}
            <motion.path
                d="M185 150 L150 150 M215 150 L250 150 M200 105 L200 130"
                stroke={color}
                strokeWidth="2"
                opacity="0.4"
                strokeDasharray="5 3"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            {/* Status indicators */}
            {[
                { x: 120, y: 220 },
                { x: 200, y: 230 },
                { x: 280, y: 220 },
            ].map((pos, i) => (
                <motion.g key={`status-${i}`}>
                    <motion.circle
                        cx={pos.x} cy={pos.y}
                        r="6"
                        fill={color}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, delay: i * 0.3, repeat: Infinity }}
                    />
                    <motion.circle
                        cx={pos.x} cy={pos.y}
                        r="10"
                        stroke={color}
                        strokeWidth="1"
                        fill="none"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                    />
                </motion.g>
            ))}
        </svg>
    );
}
