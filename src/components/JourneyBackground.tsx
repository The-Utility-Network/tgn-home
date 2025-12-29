'use client';

import { useEffect, useRef } from 'react';

interface JourneyBackgroundProps {
    themeColor?: string;
}

export default function JourneyBackground({ themeColor = '#2ec7b5' }: JourneyBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Parse theme color
        const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 46, g: 199, b: 181 };
        };

        const rgb = hexToRgb(themeColor);

        // Journey particles (stars representing waypoints in the narrative)
        interface Star {
            x: number;
            y: number;
            z: number;
            size: number;
            speed: number;
            opacity: number;
            trail: { x: number; y: number; opacity: number }[];
        }

        const stars: Star[] = [];
        const numStars = 200;

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width - canvas.width / 2,
                y: Math.random() * canvas.height - canvas.height / 2,
                z: Math.random() * 1000,
                size: Math.random() * 2,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.3,
                trail: []
            });
        }

        // Journey paths (connecting lines representing narrative threads)
        interface Path {
            points: { x: number; y: number }[];
            progress: number;
            speed: number;
            opacity: number;
            color: string;
        }

        const paths: Path[] = [];
        const numPaths = 8;

        // Create flowing paths
        for (let i = 0; i < numPaths; i++) {
            const points: { x: number; y: number }[] = [];
            const numPoints = 20;
            const startX = (i / numPaths) * canvas.width;

            for (let j = 0; j < numPoints; j++) {
                points.push({
                    x: startX + j * 100 + (Math.random() - 0.5) * 80,
                    y: (j / numPoints) * canvas.height + (Math.random() - 0.5) * 100
                });
            }

            paths.push({
                points,
                progress: Math.random(),
                speed: 0.0005 + Math.random() * 0.0005,
                opacity: 0.1 + Math.random() * 0.15,
                color: i % 3 === 0 ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ` :
                    i % 3 === 1 ? 'rgba(242, 166, 90, ' :
                        'rgba(255, 229, 180, '
            });
        }

        let animationFrameId: number;

        const animate = () => {
            // Fade out the previous frame to create trails while maintaining transparency
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'source-over';

            // Draw and update paths
            paths.forEach(path => {
                path.progress += path.speed;
                if (path.progress > 1) path.progress = 0;

                ctx.strokeStyle = `${path.color}${path.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();

                for (let i = 0; i < path.points.length - 1; i++) {
                    const point = path.points[i];
                    const nextPoint = path.points[i + 1];

                    const segmentProgress = (path.progress * path.points.length) - i;
                    if (segmentProgress > 0 && segmentProgress < 2) {
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(nextPoint.x, nextPoint.y);
                    }
                }
                ctx.stroke();

                // Draw glowing waypoint at current progress
                const currentIndex = Math.floor(path.progress * (path.points.length - 1));
                const currentPoint = path.points[currentIndex];
                if (currentPoint) {
                    const gradient = ctx.createRadialGradient(
                        currentPoint.x, currentPoint.y, 0,
                        currentPoint.x, currentPoint.y, 8
                    );
                    gradient.addColorStop(0, `${path.color}0.6)`);
                    gradient.addColorStop(1, `${path.color}0)`);
                    ctx.fillStyle = gradient;
                    ctx.fillRect(currentPoint.x - 8, currentPoint.y - 8, 16, 16);
                }
            });

            // Draw and update stars (depth-based movement)
            stars.forEach(star => {
                star.z -= star.speed;
                if (star.z <= 0) {
                    star.z = 1000;
                    star.x = Math.random() * canvas.width - canvas.width / 2;
                    star.y = Math.random() * canvas.height - canvas.height / 2;
                    star.trail = [];
                }

                // Project 3D to 2D
                const k = 128 / star.z;
                const px = star.x * k + canvas.width / 2;
                const py = star.y * k + canvas.height / 2;

                // Add to trail
                if (star.trail.length > 5) star.trail.shift();
                star.trail.push({ x: px, y: py, opacity: star.opacity });

                // Draw trail
                star.trail.forEach((point, index) => {
                    const trailOpacity = (index / star.trail.length) * point.opacity;
                    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${trailOpacity * 0.3})`;
                    const trailSize = star.size * (index / star.trail.length);
                    ctx.fillRect(point.x - trailSize / 2, point.y - trailSize / 2, trailSize, trailSize);
                });

                // Draw star
                const size = star.size * (1 - star.z / 1000);
                ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${star.opacity})`;
                ctx.fillRect(px - size / 2, py - size / 2, size, size);

                // Glow
                if (size > 1) {
                    const gradient = ctx.createRadialGradient(px, py, 0, px, py, size * 2);
                    gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${star.opacity * 0.4})`);
                    gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
                    ctx.fillStyle = gradient;
                    ctx.fillRect(px - size * 2, py - size * 2, size * 4, size * 4);
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [themeColor]);

    return (
        <>
            {/* Background Image Layer */}
            <div
                className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/bannerog.jpg)',
                    opacity: 0.3
                }}
            />

            {/* Journey Animation Layer */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 pointer-events-none"
                style={{ background: 'transparent' }}
            />
        </>
    );
}
