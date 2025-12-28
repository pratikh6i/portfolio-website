import { profileData, assetPath } from '../data/content';

function HeroSection() {
    return (
        <section className="hero">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-3xl)' }}>
                    <div className="hero-content">
                        {/* Name */}
                        <h1 className="hero-name">{profileData.name}</h1>

                        {/* Title */}
                        <p className="hero-title">Cloud Security Engineer</p>

                        {/* Description */}
                        <p className="hero-description">
                            Securing enterprise cloud infrastructure across 500+ GCP projects.
                            Building automation tools that transform security operations.
                            2+ years safeguarding AMER, EMEA & APAC clients at Searce Inc.
                        </p>

                        {/* Stats */}
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <div className="hero-stat-value">{profileData.stats.yearsExp}</div>
                                <div className="hero-stat-label">Years Experience</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value">9+</div>
                                <div className="hero-stat-label">Enterprise Clients</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value">{profileData.stats.scripts}</div>
                                <div className="hero-stat-label">Automation Scripts</div>
                            </div>
                        </div>

                        {/* CTA Links */}
                        <div className="hero-links">
                            <a
                                href={profileData.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-link hero-link-primary"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                Connect on LinkedIn
                            </a>
                            <a
                                href={profileData.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-link hero-link-secondary"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View GitHub
                            </a>
                            <a
                                href={profileData.links.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-link hero-link-secondary"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Profile Image - Right Side */}
                    <div className="hero-image-wrapper" style={{
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            width: '280px',
                            height: '280px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)', /* More prominent shadow */
                        }}>
                            <img
                                src={`${assetPath}/profile.jpg`}
                                alt="Pratik Shetti"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transform: 'scale(1.25)', /* Zoom 1.25x */
                                    border: '1px solid rgba(0,0,0,0.05)', /* Subtle border */
                                }}
                                onError={(e) => {
                                    e.target.style.background = '#f1f5f9';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
