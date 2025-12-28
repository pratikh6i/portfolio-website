function ProjectsSection() {
    const projects = [
        // Completed / Active Projects
        {
            name: 'GCP SCC Cleaner',
            description: 'Auto-formats complex JSON security findings to clean CSV for executive reporting',
            tech: ['Apps Script', 'Google Sheets'],
            status: 'completed',
        },
        {
            name: 'Infrastructure Auditor',
            description: 'Scans 500+ projects for public IP exposure and firewall configuration gaps',
            tech: ['Bash', 'gcloud CLI'],
            status: 'completed',
        },
        {
            name: 'Cloud Armor Bulk Updater',
            description: 'Bulk updates WAF security policies across multiple projects in seconds',
            tech: ['Bash', 'GCP API'],
            status: 'completed',
        },
        {
            name: 'SCC Alert Router',
            description: 'Routes critical security alerts to Jira/Slack based on severity and project',
            tech: ['Python', 'Pub/Sub', 'Terraform'],
            status: 'completed',
        },
        {
            name: 'IP Blacklist Checker',
            description: 'Validates thousands of IPs against abuse databases automatically',
            tech: ['Apps Script', 'External APIs'],
            status: 'completed',
        },
        {
            name: 'Gemini Report Generator',
            description: 'Uses GenAI to summarize weekly security incidents for executive reporting',
            tech: ['Gemini AI', 'Apps Script'],
            status: 'completed',
        },
        // In Progress Projects
        {
            name: 'Prowler IaC Deployer',
            description: 'Complete Terraform infrastructure for automated CNAPP deployment',
            tech: ['Terraform', 'Cloud Build', 'Prowler'],
            status: 'in-progress',
        },
        {
            name: 'Cloud Security Dashboard',
            description: 'Real-time security posture dashboard with automated alerting',
            tech: ['Python', 'BigQuery', 'Looker'],
            status: 'in-progress',
        },
        {
            name: 'AWS Security Automation Suite',
            description: 'Cross-cloud security monitoring and compliance automation',
            tech: ['Python', 'AWS SDK', 'Terraform'],
            status: 'in-progress',
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Security Automation Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <span className="project-name">{project.name}</span>
                                <span className={`status-badge ${project.status === 'completed' ? 'status-completed' : 'status-in-progress'}`}>
                                    {project.status === 'completed' ? '✓ Live' : '◐ In Progress'}
                                </span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="project-tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
