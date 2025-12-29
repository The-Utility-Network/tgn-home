'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Discord Moderation - Moderation tools and engagement visualization
export default function ModerationArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="mod-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Central moderation hub */}
            <motion.circle
                cx="200" cy="150"
                r="50"
                stroke={color}
                strokeWidth="3"
                fill="none"
                filter="url(#mod-glow)"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle
                cx="200" cy="150"
                r="35"
                stroke={color}
                strokeWidth="1"
                fill={color}
                fillOpacity="0.1"
            />

            {/* Gavel icon in center */}
            <motion.g transform="translate(180, 130)">
                <motion.rect
                    x="8" y="5" width="24" height="8"
                    fill={color}
                    opacity="0.8"
                    animate={{ rotate: [-15, 15, -15] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                    style={{ originX: "20px", originY: "25px" }}
                />
                <motion.rect
                    x="17" y="13" width="6" height="25"
                    fill={color}
                    opacity="0.6"
                    animate={{ rotate: [-15, 15, -15] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                    style={{ originX: "20px", originY: "25px" }}
                />
            </motion.g>

            {/* Moderation action indicators around hub */}
            {[
                { angle: -60, icon: '⚠', label: 'WARN' },
                { angle: 0, icon: '🔇', label: 'MUTE' },
                { angle: 60, icon: '👢', label: 'KICK' },
                { angle: 120, icon: '🔨', label: 'BAN' },
                { angle: 180, icon: '📝', label: 'LOG' },
                { angle: 240, icon: '✓', label: 'APPROVE' },
            ].map((action, i) => {
                const rad = action.angle * Math.PI / 180;
                const x = 200 + Math.cos(rad) * 100;
                const y = 150 + Math.sin(rad) * 80;
                return (
                    <motion.g key={i}>
                        {/* Connection line */}
                        <motion.line
                            x1="200" y1="150"
                            x2={x} y2={y}
                            stroke={color}
                            strokeWidth="1"
                            strokeDasharray="5 3"
                            opacity="0.3"
                        />
                        {/* Action node */}
                        <motion.circle
                            cx={x} cy={y}
                            r="25"
                            stroke={color}
                            strokeWidth="2"
                            fill="none"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        />
                        <motion.circle
                            cx={x} cy={y}
                            r="18"
                            fill={color}
                            opacity="0.15"
                        />
                        <motion.text
                            x={x} y={y + 4}
                            textAnchor="middle"
                            fontSize="14"
                        >
                            {action.icon}
                        </motion.text>
                        <motion.text
                            x={x} y={y + 38}
                            textAnchor="middle"
                            fill={color}
                            fontSize="7"
                            fontFamily="monospace"
                            opacity="0.6"
                        >
                            {action.label}
                        </motion.text>
                    </motion.g>
                );
            })}

            {/* Activity pulses */}
            {[0, 1, 2].map((i) => (
                <motion.circle
                    key={`pulse-${i}`}
                    cx="200" cy="150"
                    r="50"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    animate={{
                        r: [50, 120],
                        opacity: [0.5, 0]
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 0.7,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* Queue counter */}
            <motion.g>
                <motion.rect
                    x="320" y="40" width="60" height="40"
                    rx="5"
                    stroke={color}
                    strokeWidth="1"
                    fill={color}
                    fillOpacity="0.1"
                />
                <motion.text
                    x="350" y="55"
                    textAnchor="middle"
                    fill={color}
                    fontSize="8"
                    fontFamily="monospace"
                    opacity="0.7"
                >
                    QUEUE
                </motion.text>
                <motion.text
                    x="350" y="72"
                    textAnchor="middle"
                    fill={color}
                    fontSize="16"
                    fontFamily="monospace"
                    fontWeight="bold"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    12
                </motion.text>
            </motion.g>

            {/* Stats panel */}
            <motion.g>
                <motion.rect
                    x="20" y="40" width="70" height="70"
                    rx="5"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                />
                <motion.text x="28" y="58" fill={color} fontSize="8" fontFamily="monospace">
                    TODAY:
                </motion.text>
                <motion.text x="28" y="72" fill={color} fontSize="8" fontFamily="monospace" opacity="0.7">
                    Warns: 5
                </motion.text>
                <motion.text x="28" y="84" fill={color} fontSize="8" fontFamily="monospace" opacity="0.7">
                    Mutes: 3
                </motion.text>
                <motion.text x="28" y="96" fill={color} fontSize="8" fontFamily="monospace" opacity="0.7">
                    Bans: 1
                </motion.text>
            </motion.g>

            {/* Bottom status bar */}
            <motion.rect
                x="80" y="265" width="240" height="20"
                rx="10"
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity="0.3"
            />
            <motion.rect
                x="85" y="270" width="0" height="10"
                rx="5"
                fill={color}
                opacity="0.5"
                animate={{ width: [0, 180, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.text
                x="200" y="278"
                textAnchor="middle"
                fill={color}
                fontSize="8"
                fontFamily="monospace"
                opacity="0.7"
            >
                PROCESSING REPORTS...
            </motion.text>
        </svg>
    );
}
