'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Hammer - Industrial forge/blacksmith visualization for Copper Cutters
export default function HammerArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="hammer-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="50%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="spark-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="50%" stopColor={color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Anvil base */}
            <motion.g>
                <motion.path
                    d="M130 230 L150 200 L250 200 L270 230 L280 230 L280 250 L120 250 L120 230 Z"
                    fill={color}
                    opacity="0.4"
                    stroke={color}
                    strokeWidth="2"
                />
                <motion.rect
                    x="160" y="180"
                    width="80" height="20"
                    fill={color}
                    opacity="0.6"
                    stroke={color}
                    strokeWidth="1"
                />
                {/* Anvil top surface */}
                <motion.rect
                    x="155" y="175"
                    width="90" height="8"
                    fill="url(#metal-gradient)"
                    stroke={color}
                    strokeWidth="1"
                />
            </motion.g>

            {/* Hammer with striking animation */}
            <motion.g
                animate={{
                    rotate: [0, -35, 0],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    ease: "easeOut"
                }}
                style={{ originX: "200px", originY: "80px" }}
            >
                {/* Hammer handle */}
                <motion.rect
                    x="195" y="80"
                    width="10" height="80"
                    fill={color}
                    opacity="0.7"
                    rx="2"
                />

                {/* Hammer head */}
                <motion.path
                    d="M160 50 L170 40 L230 40 L240 50 L240 75 L230 85 L170 85 L160 75 Z"
                    fill="url(#metal-gradient)"
                    stroke={color}
                    strokeWidth="2"
                    filter="url(#hammer-glow)"
                />

                {/* Hammer head detail */}
                <motion.line
                    x1="170" y1="50"
                    x2="170" y2="75"
                    stroke={color}
                    strokeWidth="1"
                    opacity="0.5"
                />
                <motion.line
                    x1="230" y1="50"
                    x2="230" y2="75"
                    stroke={color}
                    strokeWidth="1"
                    opacity="0.5"
                />
            </motion.g>

            {/* Sparks on impact */}
            {[...Array(12)].map((_, i) => {
                const angle = (i * 30 - 60) * Math.PI / 180;
                const distance = 30 + Math.random() * 40;
                return (
                    <motion.circle
                        key={`spark-${i}`}
                        cx="200"
                        cy="175"
                        r="2"
                        fill="url(#spark-gradient)"
                        animate={{
                            cx: [200, 200 + Math.cos(angle) * distance],
                            cy: [175, 175 + Math.sin(angle) * distance - 20],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0]
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.7 + i * 0.02,
                            repeat: Infinity,
                            repeatDelay: 1.4
                        }}
                    />
                );
            })}

            {/* Hot metal glow on anvil */}
            <motion.ellipse
                cx="200" cy="178"
                rx="25" ry="8"
                fill={color}
                filter="url(#hammer-glow)"
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                    rx: [20, 28, 20]
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 0.8
                }}
            />

            {/* Copper wire coils being made */}
            <motion.g>
                {[0, 1, 2].map((coil) => (
                    <motion.ellipse
                        key={`coil-${coil}`}
                        cx={320 + coil * 5}
                        cy={200 + coil * 15}
                        rx="20"
                        ry="8"
                        stroke={color}
                        strokeWidth="3"
                        fill="none"
                        opacity={0.8 - coil * 0.2}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            delay: coil * 0.3,
                            duration: 1
                        }}
                    />
                ))}
            </motion.g>

            {/* Raw copper ore on left */}
            <motion.g>
                {[
                    { x: 60, y: 220, size: 20 },
                    { x: 80, y: 235, size: 15 },
                    { x: 50, y: 240, size: 12 },
                ].map((ore, i) => (
                    <motion.polygon
                        key={`ore-${i}`}
                        points={`${ore.x},${ore.y - ore.size / 2} ${ore.x + ore.size / 2},${ore.y} ${ore.x + ore.size / 3},${ore.y + ore.size / 2} ${ore.x - ore.size / 3},${ore.y + ore.size / 2} ${ore.x - ore.size / 2},${ore.y}`}
                        fill={color}
                        opacity={0.5 - i * 0.1}
                        stroke={color}
                        strokeWidth="1"
                    />
                ))}
            </motion.g>

            {/* Rotating gear decoration */}
            <motion.circle
                cx="340" cy="80"
                r="30"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeDasharray="15 8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ originX: "340px", originY: "80px" }}
            />
            <motion.circle
                cx="340" cy="80"
                r="15"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.6"
            />
            <motion.circle
                cx="340" cy="80"
                r="5"
                fill={color}
                opacity="0.8"
            />

            {/* Heat waves */}
            {[0, 1, 2].map((wave) => (
                <motion.path
                    key={`wave-${wave}`}
                    d={`M${180 + wave * 15} 160 Q${185 + wave * 15} 150 ${190 + wave * 15} 160 Q${195 + wave * 15} 170 ${200 + wave * 15} 160`}
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                    animate={{
                        y: [-5, -20],
                        opacity: [0.4, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: wave * 0.3,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Label */}
            <motion.text
                x="200" y="280"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="3"
                opacity="0.5"
            >
                FORGE
            </motion.text>
        </svg>
    );
}
