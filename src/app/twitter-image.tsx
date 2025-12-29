import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'The Grande Narrative - MMXRPG & Metaverse Engine';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    const primaryColor = '#2ec7b5';
    const accentColor = '#f2a65a';

    // Background - Use TGN banner
    const bgData = readFileSync(join(process.cwd(), 'public', 'bannerog.jpg'));
    const bgBase64 = `data:image/jpeg;base64,${bgData.toString('base64')}`;

    // TGN Medallion
    const medallionData = readFileSync(join(process.cwd(), 'public', 'Medallions', 'TGN.png'));
    const medallionBase64 = `data:image/png;base64,${medallionData.toString('base64')}`;

    return new ImageResponse(
        (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${bgBase64})`,
                backgroundSize: '100% 100%',
                backgroundColor: '#000000',
                position: 'relative',
                fontFamily: 'Helvetica, Arial, sans-serif'
            }}>
                {/* Dark overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />

                {/* Left Content (Glass Panel) */}
                <div style={{
                    position: 'absolute',
                    left: 40,
                    top: 80,
                    bottom: 80,
                    width: 520,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '40px',
                }}>
                    {/* Blurred background layer */}
                    <img src={bgBase64} width={1200} height={630} style={{
                        position: 'absolute',
                        left: -40,
                        top: -80,
                        width: 1200,
                        height: 630,
                        objectFit: 'cover',
                        filter: 'blur(30px) brightness(0.6)',
                        transform: 'scale(1.1)',
                    }} />
                    {/* Frosted glass overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.05)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.15)', borderRadius: '24px' }} />

                    <div style={{
                        position: 'relative',
                        zIndex: 10,
                        fontSize: 28,
                        fontWeight: 700,
                        color: 'white',
                        lineHeight: 1.3,
                        display: 'flex',
                        flexDirection: 'column',
                        textShadow: '0 4px 30px rgba(0,0,0,0.9)'
                    }}>
                        <span>"Not all those who</span>
                        <span>wander are lost."</span>
                    </div>
                    <div style={{
                        position: 'relative',
                        zIndex: 10,
                        fontSize: 16,
                        fontWeight: 700,
                        color: accentColor,
                        marginTop: 12,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        textShadow: '0 2px 10px black'
                    }}>
                        — J.R.R. Tolkien
                    </div>

                    <div style={{
                        position: 'relative',
                        zIndex: 10,
                        marginTop: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        borderLeft: `4px solid ${primaryColor}`,
                        paddingLeft: 20
                    }}>
                        <span style={{ fontSize: 14, color: '#9CA3AF', letterSpacing: '0.1em', fontWeight: 500 }}>DIMENSION GG4.261T</span>
                        <span style={{ fontSize: 14, color: primaryColor, letterSpacing: '0.1em', fontWeight: 700 }}>thegrandenarrative.com</span>
                    </div>
                </div>

                {/* Right Medallion */}
                <div style={{
                    position: 'absolute',
                    right: 60,
                    top: 90,
                    width: 450,
                    height: 450,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        border: `3px solid ${primaryColor}`,
                        boxShadow: `0 0 40px ${primaryColor}40`,
                        display: 'flex'
                    }} />
                    <img src={medallionBase64} width={400} height={400} style={{
                        position: 'relative',
                        width: 400,
                        height: 400,
                        objectFit: 'contain',
                    }} />
                </div>

                {/* HUD Corners */}
                <div style={{ position: 'absolute', top: 30, left: 30, width: 50, height: 50, borderTop: `4px solid ${primaryColor}`, borderLeft: `4px solid ${primaryColor}`, borderRadius: '12px 0 0 0', display: 'flex' }} />
                <div style={{ position: 'absolute', top: 30, right: 30, width: 50, height: 50, borderTop: `4px solid ${accentColor}`, borderRight: `4px solid ${accentColor}`, borderRadius: '0 12px 0 0', display: 'flex' }} />
                <div style={{ position: 'absolute', bottom: 30, left: 30, width: 50, height: 50, borderBottom: `4px solid ${accentColor}`, borderLeft: `4px solid ${accentColor}`, borderRadius: '0 0 0 12px', display: 'flex' }} />
                <div style={{ position: 'absolute', bottom: 30, right: 30, width: 50, height: 50, borderBottom: `4px solid ${primaryColor}`, borderRight: `4px solid ${primaryColor}`, borderRadius: '0 0 12px 0', display: 'flex' }} />

            </div>
        ),
        { ...size }
    );
}
