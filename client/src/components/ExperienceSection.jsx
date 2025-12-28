import { clientCaseStudies } from '../data/content';

function ExperienceSection() {
    // Key highlights from client work
    const highlights = [
        {
            role: 'Cloud Security Engineer',
            company: 'Searce Inc',
            duration: 'May 2024 - Present',
            description: 'Started as a fresh graduate and grew into handling security operations for 9+ enterprise clients across AMER, EMEA, and APAC regions.',
            achievements: [
                'Securing 500+ GCP projects with daily SCC monitoring and remediation',
                'Built 20+ automation scripts saving 30+ hours weekly on security operations',
                'Worked on Cloud Armor WAF protecting 80L+ weekly requests for major e-commerce platform',
                'Created 25+ SOPs for security operations and incident response',
                'Deployed Prowler CNAPP with Terraform for IaC-first security scanning',
            ],
        },
    ];

    // Client highlights (anonymized) - Total: 9 clients
    const clientWork = [
        { region: 'AMER', projects: '2', focus: 'Cloud NGFW, SCC Analysis' },
        { region: 'EMEA', projects: '2', focus: 'WAF, Security Operations' },
        { region: 'APAC', projects: '5', focus: 'Threat Hunting, Automation' },
    ];

    return (
        <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Experience</h2>

                {/* Main Role */}
                {highlights.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-header">
                            <div>
                                <div className="experience-role">{exp.role}</div>
                                <div className="experience-company">{exp.company}</div>
                            </div>
                            <div className="experience-duration">{exp.duration}</div>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)', fontSize: '0.9375rem' }}>
                            {exp.description}
                        </p>
                        <ul className="experience-highlights">
                            {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Client Regions Summary */}
                <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: 'var(--spacing-lg)', color: 'var(--text-primary)' }}>
                        Client Portfolio
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {clientWork.map((client, index) => (
                            <div key={index} className="card" style={{ padding: 'var(--spacing-lg)' }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-accent)', marginBottom: 'var(--spacing-xs)' }}>
                                    {client.region}
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: 'var(--spacing-xs)' }}>
                                    {client.projects}
                                </div>
                                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                                    {client.focus}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
