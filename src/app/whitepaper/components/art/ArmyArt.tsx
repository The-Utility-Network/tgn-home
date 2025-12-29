'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// TUC Army - Military command structure with tactical display
export default function ArmyArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="army-glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="army-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* Tactical display border */}
            <motion.rect
                x="50" y="30" width="300" height="240"
                stroke={color}
                strokeWidth="2"
                fill="none"
                opacity="0.4"
            />

            {/* Corner markers */}
            {[
                { x: 50, y: 30 },
                { x: 350, y: 30 },
                { x: 50, y: 270 },
                { x: 350, y: 270 },
            ].map((corner, i) => (
                <motion.g key={`corner-${i}`}>
                    <motion.line
                        x1={corner.x} y1={corner.y}
                        x2={corner.x + (i % 2 === 0 ? 20 : -20)} y2={corner.y}
                        stroke={color}
                        strokeWidth="3"
                    />
                    <motion.line
                        x1={corner.x} y1={corner.y}
                        x2={corner.x} y2={corner.y + (i < 2 ? 20 : -20)}
                        stroke={color}
                        strokeWidth="3"
                    />
                </motion.g>
            ))}

            {/* Hierarchy pyramid */}
            <motion.g>
                {/* General - top */}
                <motion.polygon
                    points="200,60 220,90 180,90"
                    stroke={color}
                    strokeWidth="2"
                    fill="url(#army-gradient)"
                    filter="url(#army-glow)"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                />
                <motion.text
                    x="200" y="82"
                    textAnchor="middle"
                    fill={color}
                    fontSize="8"
                    fontFamily="monospace"
                >
                    GEN
                </motion.text>

                {/* Captains - middle */}
                {[0, 1, 2].map((i) => (
                    <motion.g key={`captain-${i}`}>
                        <motion.rect
                            x={130 + i * 50}
                            y="110"
                            width="40"
                            height="25"
                            stroke={color}
                            strokeWidth="2"
                            fill="url(#army-gradient)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                        />
                        <motion.text
                            x={150 + i * 50}
                            y="127"
                            textAnchor="middle"
                            fill={color}
                            fontSize="8"
                            fontFamily="monospace"
                        >
                            CPT
                        </motion.text>
                    </motion.g>
                ))}

                {/* Enlisted - bottom */}
                {[...Array(6)].map((_, i) => (
                    <motion.circle
                        key={`enlisted-${i}`}
                        cx={100 + i * 40}
                        cy="170"
                        r="15"
                        stroke={color}
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.05 }}
                    />
                ))}

                {/* Connection lines */}
                <motion.path
                    d="M200 90 L150 110 M200 90 L200 110 M200 90 L250 110
                       M150 135 L120 155 M150 135 L140 155
                       M200 135 L180 155 M200 135 L220 155
                       M250 135 L260 155 M250 135 L280 155"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                />
            </motion.g>

            {/* Radar sweep */}
            <motion.g>
                <motion.circle
                    cx="320" cy="220"
                    r="40"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                />
                <motion.circle
                    cx="320" cy="220"
                    r="25"
                    stroke={color}
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.2"
                />
                <motion.circle
                    cx="320" cy="220"
                    r="10"
                    stroke={color}
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.2"
                />
                <motion.line
                    x1="320" y1="220"
                    x2="320" y2="180"
                    stroke={color}
                    strokeWidth="2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "320px", originY: "220px" }}
                    filter="url(#army-glow)"
                />
                {/* Radar blips */}
                {[
                    { x: 335, y: 205 },
                    { x: 305, y: 235 },
                    { x: 340, y: 230 },
                ].map((blip, i) => (
                    <motion.circle
                        key={`blip-${i}`}
                        cx={blip.x}
                        cy={blip.y}
                        r="3"
                        fill={color}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, delay: i * 0.3, repeat: Infinity }}
                    />
                ))}
            </motion.g>

            {/* Status panel */}
            <motion.g>
                <motion.rect
                    x="60" y="200"
                    width="100" height="60"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                />
                <motion.text x="70" y="218" fill={color} fontSize="8" fontFamily="monospace" fontWeight="bold">
                    FORCE STATUS
                </motion.text>
                <motion.text x="70" y="232" fill={color} fontSize="8" fontFamily="monospace" opacity="0.7">
                    Active: 24
                </motion.text>
                <motion.text x="70" y="244" fill={color} fontSize="8" fontFamily="monospace" opacity="0.7">
                    Reserve: 12
                </motion.text>
                <motion.circle
                    cx="145" cy="228"
                    r="5"
                    fill="#4CAF50"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            </motion.g>

            {/* Crossed swords emblem */}
            <motion.g transform="translate(200, 230)">
                <motion.line
                    x1="-20" y1="20"
                    x2="20" y2="-20"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <motion.line
                    x1="20" y1="20"
                    x2="-20" y2="-20"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <motion.circle
                    cx="0" cy="0"
                    r="8"
                    fill={color}
                    opacity="0.5"
                />
            </motion.g>

            {/* Title */}
            <motion.text
                x="200" y="285"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="3"
            >
                TUC ARMY
            </motion.text>
        </svg>
    );
}
