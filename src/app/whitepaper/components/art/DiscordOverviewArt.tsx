'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Discord Overview - Server structure visualization with channels
export default function DiscordOverviewArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="discord-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="channel-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* Server icon */}
            <motion.g>
                <motion.rect
                    x="50" y="80" width="60" height="60"
                    rx="15"
                    stroke={color}
                    strokeWidth="2"
                    fill={color}
                    fillOpacity="0.2"
                    filter="url(#discord-glow)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                />
                <motion.text
                    x="80" y="118"
                    textAnchor="middle"
                    fill={color}
                    fontSize="24"
                    fontWeight="bold"
                >
                    TUC
                </motion.text>
            </motion.g>

            {/* Channel list container */}
            <motion.rect
                x="130" y="40" width="140" height="220"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.3"
            />

            {/* Category headers and channels */}
            {[
                { y: 55, label: '▼ ADMINISTRATION', channels: ['# command-center', '# announcements'] },
                { y: 120, label: '▼ FACTIONS', channels: ['# army-hq', '# ciu-intel', '# sheriff-office'] },
                { y: 200, label: '▼ GENERAL', channels: ['# lobby', '# support'] },
            ].map((category, ci) => (
                <motion.g key={ci}>
                    <motion.text
                        x="140"
                        y={category.y}
                        fill={color}
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="bold"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 0.8, x: 0 }}
                        transition={{ delay: 0.3 + ci * 0.2 }}
                    >
                        {category.label}
                    </motion.text>
                    {category.channels.map((ch, i) => (
                        <motion.g key={i}>
                            <motion.rect
                                x="138"
                                y={category.y + 8 + i * 20}
                                width="120"
                                height="16"
                                fill="url(#channel-grad)"
                                rx="3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + ci * 0.2 + i * 0.1 }}
                            />
                            <motion.text
                                x="145"
                                y={category.y + 19 + i * 20}
                                fill={color}
                                fontSize="8"
                                fontFamily="monospace"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.7 }}
                                transition={{ delay: 0.6 + ci * 0.2 + i * 0.1 }}
                            >
                                {ch}
                            </motion.text>
                        </motion.g>
                    ))}
                </motion.g>
            ))}

            {/* Member list panel */}
            <motion.rect
                x="285" y="40" width="80" height="220"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.3"
            />

            {/* Member avatars */}
            {[...Array(8)].map((_, i) => (
                <motion.g key={`member-${i}`}>
                    <motion.circle
                        cx="305"
                        cy={65 + i * 25}
                        r="8"
                        stroke={color}
                        strokeWidth="1"
                        fill={color}
                        fillOpacity={0.3 - i * 0.02}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                    />
                    <motion.rect
                        x="320"
                        y={60 + i * 25}
                        width={30 + (i % 3) * 10}
                        height="10"
                        fill={color}
                        opacity={0.3 - i * 0.02}
                        rx="2"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 0.4, width: 30 + (i % 3) * 10 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                    />
                    {/* Online status dot */}
                    <motion.circle
                        cx="311"
                        cy={70 + i * 25}
                        r="3"
                        fill={i < 3 ? "#4CAF50" : i < 5 ? "#FFC107" : "#9E9E9E"}
                        animate={i < 3 ? { opacity: [1, 0.5, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.g>
            ))}

            {/* Connection lines from server to channels */}
            <motion.path
                d="M110 110 Q120 110 120 80 L130 80 M110 110 Q120 110 120 150 L130 150 M110 110 Q120 110 120 220 L130 220"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
            />

            {/* Notification badges */}
            {[75, 160].map((y, i) => (
                <motion.g key={`badge-${i}`}>
                    <motion.circle
                        cx="255"
                        cy={y}
                        r="8"
                        fill="#E53935"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, delay: i * 0.5, repeat: Infinity }}
                    />
                    <motion.text
                        x="255"
                        y={y + 3}
                        textAnchor="middle"
                        fill="white"
                        fontSize="8"
                        fontWeight="bold"
                    >
                        {i === 0 ? '3' : '7'}
                    </motion.text>
                </motion.g>
            ))}

            {/* Floating messages animation */}
            {[0, 1, 2].map((i) => (
                <motion.rect
                    key={`msg-${i}`}
                    width="60"
                    height="12"
                    rx="6"
                    fill={color}
                    opacity="0.2"
                    animate={{
                        x: [280, 320, 280],
                        y: [260 + i * 5, 250 + i * 5, 260 + i * 5],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Bottom label */}
            <motion.text
                x="200"
                y="285"
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="2"
                opacity="0.5"
            >
                SERVER STRUCTURE
            </motion.text>
        </svg>
    );
}
