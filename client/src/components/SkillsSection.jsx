
function SkillsSection() {
    const skillCategories = [
        {
            title: 'Cloud Security',
            skills: ['Security Command Center', 'Cloud Armor WAF', 'IAM & Policies', 'VPC & Firewall', 'Cloud NGFW', 'Audit Logs'],
        },
        {
            title: 'Cloud Platforms',
            skills: ['Google Cloud Platform', 'Amazon Web Services', 'Terraform', 'Linux'],
        },
        {
            title: 'Scripting & Automation',
            skills: ['Python', 'Bash', 'Apps Script', 'gcloud CLI'],
        },
        {
            title: 'Security Tools',
            skills: ['Prowler', 'ThreatMapper', 'Tenable', 'SIEM'],
        },
        {
            title: 'Workspace & Reporting',
            skills: ['Google Sheets', 'Apps Script', 'Documentation', 'Security Reports'],
        },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
