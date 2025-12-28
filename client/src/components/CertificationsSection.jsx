import { certifications, assetPath } from '../data/content';

function CertificationsSection() {
    // All certifications with status
    const allCerts = [
        // Completed certifications (from existing data)
        {
            name: 'Associate Cloud Engineer',
            provider: 'Google Cloud',
            badge: `${assetPath}/ace-badge.png`,
            verifyUrl: 'https://www.credly.com/badges/fad5ab70-4178-45e9-90f3-aa0050f1ec42',
            status: 'completed',
        },
        {
            name: 'Cloud Digital Leader',
            provider: 'Google Cloud',
            badge: `${assetPath}/cdl-badge.png`,
            verifyUrl: 'https://www.credly.com/badges/7ea201f9-eed7-45a2-8358-b5269184a4ad',
            status: 'completed',
        },
        {
            name: 'AWS Cloud Practitioner',
            provider: 'AWS',
            badge: `${assetPath}/aws-ccp-badge.png`,
            verifyUrl: 'https://www.credly.com/badges/e0fdc077-9ae3-43e5-a19e-8f74210c401d',
            status: 'completed',
        },
        // In Progress certifications
        {
            name: 'Professional Cloud Security Engineer',
            provider: 'Google Cloud',
            badge: null,
            verifyUrl: null,
            status: 'in-progress',
        },
        {
            name: 'AWS Security Specialty',
            provider: 'AWS',
            badge: null,
            verifyUrl: null,
            status: 'in-progress',
        },
        {
            name: 'Azure Security Engineer (AZ-500)',
            provider: 'Microsoft Azure',
            badge: null,
            verifyUrl: null,
            status: 'in-progress',
        },
        {
            name: 'CompTIA Security+',
            provider: 'CompTIA',
            badge: null,
            verifyUrl: null,
            status: 'in-progress',
        },
    ];

    return (
        <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="cert-grid">
                    {allCerts.map((cert, index) => (
                        <div key={index} className="cert-card">
                            {/* Badge or Placeholder */}
                            {cert.badge ? (
                                <img
                                    src={cert.badge}
                                    alt={cert.name}
                                    className="cert-badge"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            ) : (
                                <div
                                    className="cert-badge"
                                    style={{
                                        background: 'var(--bg-primary)',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-secondary)',
                                        fontSize: '1.25rem',
                                    }}
                                >
                                    📋
                                </div>
                            )}

                            <div className="cert-info">
                                <div className="cert-name">
                                    {cert.name}
                                    {cert.verifyUrl && (
                                        <a
                                            href={cert.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                marginLeft: '8px',
                                                color: 'var(--text-accent)',
                                                fontSize: '0.75rem',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            ↗
                                        </a>
                                    )}
                                </div>
                                <div className="cert-provider">{cert.provider}</div>
                                <span className={`status-badge ${cert.status === 'completed' ? 'status-completed' : 'status-in-progress'}`}>
                                    {cert.status === 'completed' ? '✓ Verified' : '◐ In Progress'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CertificationsSection;
