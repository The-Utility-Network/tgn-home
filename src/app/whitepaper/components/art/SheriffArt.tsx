'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Sheriff Department - Law and order with scales and authority
export default function SheriffArt({ color }: ArtProps) {
    // 5-point star path
    const starPath = (cx: number, cy: number, outerR: number, innerR: number) => {
        const points = [];
        for (let i = 0; i < 10; i++) {
            const angle = (i * 36 - 90) * Math.PI / 180;
            const r = i % 2 === 0 ? outerR : innerR;
            points.push(`${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`);
        }
        return `M${points.join(' L')} Z`;
    };

    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="sheriff-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="sheriff-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.8" />
                </linearGradient>
            </defs>

            {/* Main sheriff star */}
            <motion.g>
                <motion.path
                    d={starPath(200, 130, 65, 30)}
                    fill="url(#sheriff-grad)"
                    stroke={color}
                    strokeWidth="3"
                    filter="url(#sheriff-glow)"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                />

                {/* Inner circle */}
                <motion.circle
                    cx="200" cy="130"
                    r="22"
                    stroke={color}
                    strokeWidth="2"
                    fill={color}
                    fillOpacity="0.3"
                />

                {/* Center text */}
                <motion.text
                    x="200" y="127"
                    textAnchor="middle"
                    fill={color}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    TUC
                </motion.text>
                <motion.text
                    x="200" y="140"
                    textAnchor="middle"
                    fill={color}
                    fontSize="8"
                    fontFamily="monospace"
                >
                    SHERIFF
                </motion.text>
            </motion.g>

            {/* Scales of justice below */}
            <motion.g>
                {/* Center pole */}
                <motion.line
                    x1="200" y1="195"
                    x2="200" y2="250"
                    stroke={color}
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />

                {/* Balance beam */}
                <motion.line
                    x1="140" y1="210"
                    x2="260" y2="210"
                    stroke={color}
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                />

                {/* Balance pivot */}
                <motion.polygon
                    points="200,195 195,205 205,205"
                    fill={color}
                />

                {/* Left scale */}
                <motion.g
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <motion.line x1="140" y1="210" x2="140" y2="235" stroke={color} strokeWidth="1.5" />
                    <motion.path
                        d="M120 235 Q140 250 160 235"
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                    />
                </motion.g>

                {/* Right scale */}
                <motion.g
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <motion.line x1="260" y1="210" x2="260" y2="240" stroke={color} strokeWidth="1.5" />
                    <motion.path
                        d="M240 240 Q260 255 280 240"
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                    />
                </motion.g>

                {/* Base */}
                <motion.rect
                    x="180" y="250"
                    width="40" height="8"
                    fill={color}
                    opacity="0.6"
                />
            </motion.g>

            {/* Deputy stars - smaller orbiting */}
            {[...Array(4)].map((_, i) => {
                const angle = (i * 90 + 45) * Math.PI / 180;
                const x = 200 + Math.cos(angle) * 120;
                const y = 130 + Math.sin(angle) * 90;
                return (
                    <motion.g key={`deputy-${i}`}>
                        <motion.path
                            d={starPath(x, y, 20, 10)}
                            stroke={color}
                            strokeWidth="1.5"
                            fill="none"
                            opacity="0.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + i * 0.15 }}
                        />
                        <motion.circle
                            cx={x} cy={y}
                            r="6"
                            fill={color}
                            opacity="0.4"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                        />
                    </motion.g>
                );
            })}

            {/* Authority pulse rings */}
            {[0, 1, 2].map((ring) => (
                <motion.circle
                    key={`ring-${ring}`}
                    cx="200" cy="130"
                    r="65"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    animate={{
                        r: [65, 100 + ring * 20],
                        opacity: [0.5, 0]
                    }}
                    transition={{
                        duration: 2,
                        delay: ring * 0.6,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Corner handcuff icons */}
            {[
                { x: 60, y: 60 },
                { x: 340, y: 60 },
            ].map((pos, i) => (
                <motion.g key={`cuff-${i}`}>
                    <motion.circle
                        cx={pos.x - 10} cy={pos.y}
                        r="12"
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                    />
                    <motion.circle
                        cx={pos.x + 10} cy={pos.y}
                        r="12"
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                    />
                    <motion.line
                        x1={pos.x - 10} y1={pos.y + 12}
                        x2={pos.x + 10} y2={pos.y + 12}
                        stroke={color}
                        strokeWidth="2"
                        opacity="0.4"
                    />
                </motion.g>
            ))}

            {/* Bottom banner */}
            <motion.g>
                <motion.path
                    d="M130 275 L150 265 L250 265 L270 275 L250 285 L150 285 Z"
                    stroke={color}
                    strokeWidth="1"
                    fill={color}
                    fillOpacity="0.15"
                />
                <motion.text
                    x="200" y="280"
                    textAnchor="middle"
                    fill={color}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="2"
                >
                    LAW & ORDER
                </motion.text>
            </motion.g>
        </svg>
    );
}
