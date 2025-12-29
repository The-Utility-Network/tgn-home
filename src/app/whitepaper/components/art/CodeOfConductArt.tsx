'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Code of Conduct - Rules and regulations document visualization
export default function CodeOfConductArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="conduct-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="scroll-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.15" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.05" />
                </linearGradient>
            </defs>

            {/* Main scroll/document */}
            <motion.g>
                {/* Document background */}
                <motion.rect
                    x="120" y="30"
                    width="160" height="220"
                    rx="4"
                    stroke={color}
                    strokeWidth="2"
                    fill="url(#scroll-grad)"
                    filter="url(#conduct-glow)"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ originY: "30px" }}
                />

                {/* Top roll */}
                <motion.ellipse
                    cx="200" cy="30"
                    rx="85" ry="8"
                    fill={color}
                    opacity="0.3"
                />

                {/* Bottom roll */}
                <motion.ellipse
                    cx="200" cy="250"
                    rx="85" ry="8"
                    fill={color}
                    opacity="0.3"
                />

                {/* Title */}
                <motion.text
                    x="200" y="60"
                    textAnchor="middle"
                    fill={color}
                    fontSize="12"
                    fontFamily="monospace"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    CODE OF CONDUCT
                </motion.text>

                {/* Underline */}
                <motion.line
                    x1="140" y1="68"
                    x2="260" y2="68"
                    stroke={color}
                    strokeWidth="1"
                    opacity="0.5"
                />

                {/* Rules list */}
                {[
                    'I. Respect All Members',
                    'II. No Harassment',
                    'III. Follow Guidelines',
                    'IV. Report Violations',
                    'V. Support Community',
                    'VI. Act With Honor',
                ].map((rule, i) => (
                    <motion.g key={`rule-${i}`}>
                        <motion.rect
                            x="135"
                            y={82 + i * 25}
                            width="130"
                            height="18"
                            fill={color}
                            opacity="0.05"
                            rx="2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 0.08, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                        />
                        <motion.text
                            x="145"
                            y={95 + i * 25}
                            fill={color}
                            fontSize="9"
                            fontFamily="monospace"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                        >
                            {rule}
                        </motion.text>
                    </motion.g>
                ))}

                {/* Seal */}
                <motion.circle
                    cx="240" cy="225"
                    r="20"
                    stroke={color}
                    strokeWidth="2"
                    fill={color}
                    fillOpacity="0.2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                />
                <motion.text
                    x="240" y="228"
                    textAnchor="middle"
                    fill={color}
                    fontSize="8"
                    fontFamily="monospace"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 1.7 }}
                >
                    TUC
                </motion.text>
            </motion.g>

            {/* Floating checkmarks */}
            {[
                { x: 70, y: 80 },
                { x: 330, y: 100 },
                { x: 60, y: 180 },
                { x: 340, y: 200 },
            ].map((pos, i) => (
                <motion.g key={`check-${i}`}>
                    <motion.circle
                        cx={pos.x} cy={pos.y}
                        r="15"
                        stroke={color}
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.2 }}
                    />
                    <motion.path
                        d={`M${pos.x - 6} ${pos.y} L${pos.x - 2} ${pos.y + 5} L${pos.x + 7} ${pos.y - 5}`}
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.4 + i * 0.2, duration: 0.3 }}
                    />
                </motion.g>
            ))}

            {/* Violation X marks */}
            {[
                { x: 50, y: 130 },
                { x: 350, y: 150 },
            ].map((pos, i) => (
                <motion.g key={`x-${i}`} opacity="0.3">
                    <motion.circle
                        cx={pos.x} cy={pos.y}
                        r="12"
                        stroke="#E53935"
                        strokeWidth="1"
                        fill="none"
                    />
                    <motion.path
                        d={`M${pos.x - 5} ${pos.y - 5} L${pos.x + 5} ${pos.y + 5} M${pos.x + 5} ${pos.y - 5} L${pos.x - 5} ${pos.y + 5}`}
                        stroke="#E53935"
                        strokeWidth="2"
                        fill="none"
                    />
                </motion.g>
            ))}

            {/* Quill pen */}
            <motion.g transform="translate(300, 60)">
                <motion.path
                    d="M0 40 Q10 20 5 0 Q15 15 30 20 Q10 25 0 40"
                    stroke={color}
                    strokeWidth="1.5"
                    fill={color}
                    fillOpacity="0.2"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ originX: "0px", originY: "40px" }}
                />
            </motion.g>

            {/* Bottom label */}
            <motion.text
                x="200" y="280"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="2"
                opacity="0.5"
            >
                BINDING AGREEMENT
            </motion.text>
        </svg>
    );
}
