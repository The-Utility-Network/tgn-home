import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'The Grande Narrative - MMXRPG & Metaverse Engine';
export const size = { width: 2400, height: 1260 };
export const contentType = 'image/png';

export default async function Image() {
    const primaryColor = '#2ec7b5';
    const accentColor = '#f2a65a';

    // Background - Use TGN banner
    const bgData = readFileSync(join(process.cwd(), 'public', 'bannerog.jpg'));
    const bgBase64 = `data:image/jpeg;base64,${bgData.toString('base64')}`;

    // Use TGN medallion
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
                {/* Dark overlay for readability */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />

                {/* Left Wing (Glass) */}
                <div style={{
                    position: 'absolute',
                    left: 200,
                    top: 480,
                    width: 800,
                    height: 320,
                    borderRadius: '40px 0 0 40px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    padding: '40px 260px 40px 40px',
                    boxShadow: 'inset 2px 2px 20px rgba(255,255,255,0.2)',
                }}>
                    {/* Blurred background layer */}
                    <img src={bgBase64} width={2400} height={1260} style={{
                        position: 'absolute',
                        left: -200,
                        top: -480,
                        width: 2400,
                        height: 1260,
                        objectFit: 'cover',
                        filter: 'blur(40px) brightness(0.7)',
                        transform: 'scale(1.1)',
                    }} />
                    {/* Frosted glass overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.2)', borderRight: 'none', borderRadius: '40px 0 0 40px' }} />

                    {/* Content */}
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', zIndex: 10 }}>
                        <div style={{
                            fontSize: 38,
                            fontWeight: 700,
                            color: 'white',
                            lineHeight: 1.3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            textAlign: 'right',
                            textShadow: '0 4px 30px rgba(0,0,0,0.9)'
                        }}>
                            <span>"All the world's a stage,</span>
                            <span>and all the men and women</span>
                            <span>merely players."</span>
                        </div>
                        <div style={{
                            fontSize: 24,
                            fontWeight: 700,
                            color: accentColor,
                            marginTop: 16,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textShadow: '0 2px 20px black'
                        }}>
                            — William Shakespeare
                        </div>
                    </div>
                </div>

                {/* Right Wing (Glass) */}
                <div style={{
                    position: 'absolute',
                    right: 200,
                    top: 480,
                    width: 800,
                    height: 320,
                    borderRadius: '0 40px 40px 0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '40px 40px 40px 260px',
                    boxShadow: 'inset -2px 2px 20px rgba(255,255,255,0.2)',
                }}>
                    {/* Blurred background layer */}
                    <img src={bgBase64} width={2400} height={1260} style={{
                        position: 'absolute',
                        right: -200,
                        top: -480,
                        width: 2400,
                        height: 1260,
                        objectFit: 'cover',
                        filter: 'blur(40px) brightness(0.7)',
                        transform: 'scale(1.1)',
                    }} />
                    {/* Frosted glass overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.2)', borderLeft: 'none', borderRadius: '0 40px 40px 0' }} />

                    {/* Content */}
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 10 }}>
                        <div style={{ fontSize: 44, color: 'white', fontWeight: 300, lineHeight: 1.2, display: 'flex', flexDirection: 'column', maxWidth: 500, textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
                            <span>Shape Your Destiny.</span>
                            <span style={{ color: accentColor }}>Choose Your Faction.</span>
                        </div>
                        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12, borderLeft: `6px solid ${primaryColor}`, paddingLeft: 30 }}>
                            <span style={{ fontSize: 24, color: '#D1D5DB', letterSpacing: '0.15em', fontWeight: 500, textShadow: '0 2px 10px black' }}>DIMENSION GG4.261T</span>
                            <span style={{ fontSize: 24, color: primaryColor, letterSpacing: '0.15em', fontWeight: 700, textShadow: '0 2px 10px black' }}>thegrandenarrative.com</span>
                        </div>
                    </div>
                </div>

                {/* Center Medallion Ring (Blurred) */}
                <div style={{
                    position: 'absolute',
                    left: 810,
                    top: 240,
                    width: 780,
                    height: 780,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    zIndex: 40,
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.3)',
                    border: `4px solid ${primaryColor}`
                }}>
                    <img src={bgBase64} width={2400} height={1260} style={{
                        position: 'absolute',
                        left: -810,
                        top: -240,
                        width: 2400,
                        height: 1260,
                        objectFit: 'cover',
                        filter: 'blur(30px) brightness(0.6)',
                        transform: 'scale(1.1)',
                    }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
                </div>

                {/* Center Medallion (Visual) */}
                <div style={{
                    position: 'absolute',
                    left: 850,
                    top: 280,
                    width: 700,
                    height: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 50
                }}>
                    {/* Theme Ring */}
                    <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `4px solid ${primaryColor}`, boxShadow: `0 0 50px ${primaryColor}60`, display: 'flex' }} />

                    <img src={medallionBase64} width={700} height={700} style={{ position: 'relative', width: 700, height: 700, objectFit: 'contain', padding: 30 }} />
                </div>

                {/* GLASS FRAME - TOP */}
                <div style={{ position: 'absolute', left: 40, top: 40, width: 2320, height: 40, overflow: 'hidden', borderRadius: '24px 24px 0 0', display: 'flex', zIndex: 5, boxShadow: 'inset 0 0 10px rgba(255,255,255,0.2)' }}>
                    <img src={bgBase64} width={2400} height={1260} style={{ position: 'absolute', left: -40, top: -40, objectFit: 'cover', filter: 'blur(20px) brightness(0.6)', transform: 'scale(1.1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.15)', borderBottom: 'none' }} />
                </div>
                {/* GLASS FRAME - BOTTOM */}
                <div style={{ position: 'absolute', left: 40, top: 1180, width: 2320, height: 40, overflow: 'hidden', borderRadius: '0 0 24px 24px', display: 'flex', zIndex: 5, boxShadow: 'inset 0 0 10px rgba(255,255,255,0.2)' }}>
                    <img src={bgBase64} width={2400} height={1260} style={{ position: 'absolute', left: -40, top: -1180, objectFit: 'cover', filter: 'blur(20px) brightness(0.6)', transform: 'scale(1.1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.15)', borderTop: 'none' }} />
                </div>
                {/* GLASS FRAME - LEFT */}
                <div style={{ position: 'absolute', left: 40, top: 80, width: 40, height: 1100, overflow: 'hidden', display: 'flex', zIndex: 5, boxShadow: 'inset 0 0 10px rgba(255,255,255,0.2)' }}>
                    <img src={bgBase64} width={2400} height={1260} style={{ position: 'absolute', left: -40, top: -80, objectFit: 'cover', filter: 'blur(20px) brightness(0.6)', transform: 'scale(1.1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.15)', borderTop: 'none', borderBottom: 'none' }} />
                </div>
                {/* GLASS FRAME - RIGHT */}
                <div style={{ position: 'absolute', left: 2320, top: 80, width: 40, height: 1100, overflow: 'hidden', display: 'flex', zIndex: 5, boxShadow: 'inset 0 0 10px rgba(255,255,255,0.2)' }}>
                    <img src={bgBase64} width={2400} height={1260} style={{ position: 'absolute', left: -2320, top: -80, objectFit: 'cover', filter: 'blur(20px) brightness(0.6)', transform: 'scale(1.1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
                    <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.15)', borderTop: 'none', borderBottom: 'none' }} />
                </div>

                {/* HUD Corners */}
                <div style={{ position: 'absolute', top: 60, left: 60, width: 80, height: 80, borderTop: `8px solid ${primaryColor}`, borderLeft: `8px solid ${primaryColor}`, borderRadius: '24px 0 0 0', display: 'flex' }} />
                <div style={{ position: 'absolute', top: 60, right: 60, width: 80, height: 80, borderTop: `8px solid ${accentColor}`, borderRight: `8px solid ${accentColor}`, borderRadius: '0 24px 0 0', display: 'flex' }} />
                <div style={{ position: 'absolute', bottom: 60, left: 60, width: 80, height: 80, borderBottom: `8px solid ${accentColor}`, borderLeft: `8px solid ${accentColor}`, borderRadius: '0 0 0 24px', display: 'flex' }} />
                <div style={{ position: 'absolute', bottom: 60, right: 60, width: 80, height: 80, borderBottom: `8px solid ${primaryColor}`, borderRight: `8px solid ${primaryColor}`, borderRadius: '0 0 24px 0', display: 'flex' }} />

            </div>
        ),
        { ...size }
    );
}
