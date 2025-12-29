'use client';

import { motion } from 'framer-motion';

interface ArtProps {
    color: string;
}

// Elections - Voting and democratic leadership visualization
export default function ElectionsArt({ color }: ArtProps) {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
                <filter id="election-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <linearGradient id="ballot-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.05" />
                </linearGradient>
            </defs>

            {/* Ballot box */}
            <motion.g>
                <motion.rect
                    x="150" y="150"
                    width="100" height="100"
                    rx="8"
                    stroke={color}
                    strokeWidth="3"
                    fill="url(#ballot-grad)"
                    filter="url(#election-glow)"
                />
                {/* Slot */}
                <motion.rect
                    x="170" y="155"
                    width="60" height="8"
                    fill={color}
                    opacity="0.5"
                    rx="2"
                />
                {/* Box label */}
                <motion.text
                    x="200" y="210"
                    textAnchor="middle"
                    fill={color}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    VOTES
                </motion.text>
            </motion.g>

            {/* Falling ballots */}
            {[0, 1, 2].map((i) => (
                <motion.g key={`ballot-${i}`}>
                    <motion.rect
                        width="30"
                        height="20"
                        rx="2"
                        stroke={color}
                        strokeWidth="1.5"
                        fill={color}
                        fillOpacity="0.15"
                        animate={{
                            x: [180 + i * 10, 185 + i * 5],
                            y: [40 + i * 20, 155],
                            rotate: [0, -10, 10, 0],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.8,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    />
                    <motion.path
                        d="M5 10 L10 15 L20 5"
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                        animate={{
                            x: [180 + i * 10, 185 + i * 5],
                            y: [40 + i * 20, 155],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.8,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    />
                </motion.g>
            ))}

            {/* Candidate podiums */}
            {[
                { x: 70, label: 'A', votes: 45 },
                { x: 330, label: 'B', votes: 38 },
            ].map((candidate, i) => (
                <motion.g key={`candidate-${i}`}>
                    {/* Podium */}
                    <motion.rect
                        x={candidate.x - 25}
                        y={180}
                        width="50"
                        height="70"
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                    />
                    {/* Avatar */}
                    <motion.circle
                        cx={candidate.x}
                        cy={150}
                        r="25"
                        stroke={color}
                        strokeWidth="2"
                        fill={color}
                        fillOpacity="0.2"
                    />
                    <motion.text
                        x={candidate.x}
                        y={157}
                        textAnchor="middle"
                        fill={color}
                        fontSize="18"
                        fontWeight="bold"
                    >
                        {candidate.label}
                    </motion.text>
                    {/* Vote count */}
                    <motion.text
                        x={candidate.x}
                        y={220}
                        textAnchor="middle"
                        fill={color}
                        fontSize="14"
                        fontFamily="monospace"
                        fontWeight="bold"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        {candidate.votes}%
                    </motion.text>
                    {/* Vote bar */}
                    <motion.rect
                        x={candidate.x - 20}
                        y={230}
                        height="8"
                        fill={color}
                        opacity="0.6"
                        rx="4"
                        initial={{ width: 0 }}
                        animate={{ width: candidate.votes * 0.8 }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                    />
                </motion.g>
            ))}

            {/* Crown/winner indicator */}
            <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <motion.path
                    d="M55 120 L60 100 L70 115 L80 90 L90 115 L100 100 L105 120 Z"
                    stroke={color}
                    strokeWidth="2"
                    fill={color}
                    fillOpacity="0.3"
                    transform="translate(-15, 0)"
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.g>

            {/* Polling stats */}
            <motion.g>
                <motion.rect
                    x="140" y="40"
                    width="120" height="50"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                    rx="5"
                />
                <motion.text
                    x="200" y="58"
                    textAnchor="middle"
                    fill={color}
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    LIVE RESULTS
                </motion.text>
                <motion.text
                    x="200" y="75"
                    textAnchor="middle"
                    fill={color}
                    fontSize="8"
                    fontFamily="monospace"
                    opacity="0.7"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    1,247 votes cast
                </motion.text>
            </motion.g>

            {/* Decorative stars */}
            {[...Array(5)].map((_, i) => (
                <motion.polygon
                    key={`star-${i}`}
                    points="0,-8 2,-2 8,-2 3,2 5,8 0,4 -5,8 -3,2 -8,-2 -2,-2"
                    fill={color}
                    opacity="0.3"
                    transform={`translate(${100 + i * 50}, ${280})`}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                />
            ))}

            {/* Progress ring */}
            <motion.circle
                cx="200" cy="200"
                r="75"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeDasharray="471"
                strokeDashoffset="471"
                opacity="0.2"
                animate={{ strokeDashoffset: 100 }}
                transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Title */}
            <motion.text
                x="200" y="25"
                textAnchor="middle"
                fill={color}
                fontSize="12"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="3"
            >
                DEMOCRATIC ELECTION
            </motion.text>
        </svg>
    );
}
