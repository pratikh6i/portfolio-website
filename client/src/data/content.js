// Core content data for the portfolio
// All text content is in English - Google Translate widget handles other languages

export const profileData = {
    name: "Pratik Shetti",
    tagline: "Cloud Security Engineer | Automation Specialist | Vibe Coder",
    subtext: "Securing 300+ GCP Projects & Automating Operations with Python, Shell & Gemini",
    location: "Pune, Maharashtra, India",
    currentRole: "Cloud Security Engineer @ Searce",
    since: "May 2024",

    // Social Links
    links: {
        linkedin: "https://www.linkedin.com/in/pratikshetti/",
        github: "https://github.com/pratikh6i",
        twitter: "https://x.com/pratik_h6i",
        skillBoost: "https://www.skills.google/public_profiles/14a39d36-3d88-4a0c-85ec-9533ba770ac1",
        resume: "#", // Placeholder - update with actual resume link
    },

    // Stats
    stats: {
        yearsExp: "1.5+",
        yearsLabel: "Years in Security Ops",
        clients: "8+",
        clientsLabel: "Enterprise Clients",
        scripts: "15+",
        scriptsLabel: "Automation Scripts",
        reports: "200+",
        reportsLabel: "Security Reports",
    },
};

// 8 Client Case Studies
export const clientCaseStudies = [
    {
        id: "client-ael",
        icon: "🛒",
        title: "The Indian E-Commerce Giant",
        industry: "Retail",
        tagColor: "#1d4ed8",
        tagBg: "#dbeafe",
        duration: "Completed",
        metric: "80L+ requests/week",
        role: 'The "Eyes on the Glass" Analyst',
        mission: "Protecting one of India's largest retail platforms handling 80-120 Lakh requests weekly",
        responsibilities: [
            "Daily deep log analysis and threat hunting using Cloud Armor logs and Log Analytics",
            "Prepared daily IP Analysis reports covering 24-hour production traffic patterns",
            "Delivered 42+ weekly security reports analyzing SCC findings",
            "Stood firm during War Room scenarios during India-Pakistan tensions",
            "Supported critical Disaster Recovery drills during late-night windows",
            "Created 6 SOPs and demo documents for security operations",
        ],
        techStack: ["Cloud Armor", "SCC", "Tenable", "Log Analytics", "Google Workspace"],
        stats: { "Weekly Reports": "42+", "IP Reports": "12+", "SOPs": "6" },
    },
    {
        id: "client-awr",
        icon: "🚗",
        title: "Global Automotive & Lifestyle Group",
        industry: "UAE",
        tagColor: "#166534",
        tagBg: "#dcfce7",
        duration: "14+ months (Ongoing)",
        metric: "100+ GCP Projects",
        role: "WAF Operations Lead & Automation Builder",
        mission: "End-to-end security operations for a massive 100+ project GCP organization",
        responsibilities: [
            "Daily organization-level SCC checks for High/Critical findings with immediate remediation",
            "Primary owner of Cloud Armor WAF implementation and maintenance",
            "Monthly security reporting with project-wise finding analysis for management",
            "Regular VM patching across the organization with complete SOP documentation",
            "Deep WAF log analysis for true/false positives, verbose log debugging, HAR file analysis",
            "Resolved 80 of 130 technical tickets and numerous Teams channel requests",
            "Built Python/gcloud scripts for Cloud Armor analysis, SSL policies, bucket audits",
            "Customer call participation (4x/week) with MoM documentation since Jan 2025",
        ],
        techStack: ["Cloud Armor", "SCC", "Python", "Bash", "gcloud CLI", "Workspace"],
        stats: { "Tickets Resolved": "80/130", "Projects": "100+", "Months": "14+" },
    },
    {
        id: "client-pickme",
        icon: "🚕",
        title: "Ride-Hailing Superapp",
        industry: "Sri Lanka",
        tagColor: "#92400e",
        tagBg: "#fef3c7",
        duration: "Completed",
        metric: "Zero-Tool Assessment",
        role: "The Scripting Specialist",
        mission: "Security assessment for a client with no existing security tools",
        responsibilities: [
            "Created 7 custom Bash scripts to scan infrastructure from security perspective",
            "Scripts covered: Service account security, public IP exposure, Shielded VM status",
            "Audited Secure Boot, vTPM, Integrity Monitoring, OS Config, serial ports",
            "Generated 18 of 23 security reports single-handedly",
            "Conducted multiple POCs for security scenarios requested by client",
            "Attended weekly/monthly meetings with MoM documentation",
        ],
        techStack: ["Bash", "gcloud CLI", "Custom Scripts", "Shielded VM"],
        stats: { "Custom Scripts": "7", "Reports Created": "18/23" },
    },
    {
        id: "client-ntuc",
        icon: "🏢",
        title: "Leading Insurance Provider",
        industry: "Singapore",
        tagColor: "#7c3aed",
        tagBg: "#f3e8ff",
        duration: "Completed",
        metric: "120+ GCP Projects",
        role: "The Automation Builder",
        mission: "Scaling security operations across 120+ GCP projects with intelligent automation",
        responsibilities: [
            "Built Cloud Run + Pub/Sub automation for intelligent SCC alert routing",
            "Wrote Terraform code for the complete alerting infrastructure",
            "Created Google Chat webhook integration for team-specific notifications",
            "Developed IAM recommendation reports for least-privilege access across 100s of users",
            "Built Gemini-powered automation saving 30 mins per SCC report sheet",
            "Created escalation matrix with SOP and flowchart documentation",
            "Authored SCC user guide with screenshots for client teams",
        ],
        techStack: ["Cloud Run", "Pub/Sub", "Terraform", "Gemini", "Apps Script"],
        stats: { "Projects Analyzed": "120+", "Reports Created": "130+", "SOPs": "6" },
    },
    {
        id: "client-redcliff",
        icon: "🏥",
        title: "HealthTech Platform",
        industry: "India",
        tagColor: "#dc2626",
        tagBg: "#fee2e2",
        duration: "Completed",
        metric: "Deep Security Assessment",
        role: "Security Analyst & Tool Evaluator",
        mission: "One-time comprehensive security assessment with best practice recommendations",
        responsibilities: [
            "Conducted deep security assessment of entire GCP infrastructure",
            "Prepared executive-level security reports with affected resources",
            "Provided best practice recommendations for each finding category",
            "Led extensive POC of ThreatMapper security tool",
            "Created complete SOP for ThreatMapper installation with screenshots",
        ],
        techStack: ["SCC", "ThreatMapper", "Security Best Practices"],
        stats: { "Assessment Type": "Deep Dive", "Tool POC": "ThreatMapper" },
    },
    {
        id: "client-cxapp",
        icon: "💻",
        title: "Enterprise SaaS Platform",
        industry: "US/EU",
        tagColor: "#be185d",
        tagBg: "#fce7f3",
        duration: "Completed (5 hours)",
        metric: "5,000+ Findings Processed",
        role: "Solo Speed Run Execution",
        mission: "Urgent security analysis with zero GCP access - just raw data exports",
        responsibilities: [
            "Took complete ownership of raw SCC data dump from infrastructure team",
            "Processed 5,000+ findings across 50+ finding categories",
            "Used previously built automation scripts for data transformation",
            "Sorted, aligned, and added security best practices for each category",
            "Delivered production-ready SCC report in just 5 hours",
            "Met urgent director-level deadline with zero environment access",
        ],
        techStack: ["Python", "Apps Script", "SCC CSV Processing"],
        stats: { "Findings": "5,000+", "Categories": "50+", "Delivery Time": "5 hours" },
    },
    {
        id: "client-vitu",
        icon: "🔥",
        title: "Cloud NGFW Project",
        industry: "US",
        tagColor: "#ea580c",
        tagBg: "#ffedd5",
        duration: "Ongoing",
        metric: "Dev/Test/Prod Environments",
        role: "Firewall Policy Executor",
        mission: "Executing firewall strategies across multiple environments",
        responsibilities: [
            "Execute firewall policy strategies across Dev, Test, and Prod environments",
            "Daily infrastructure analysis, deep log monitoring, and threat hunting",
            "Run POCs in personal environment to validate configurations",
            "Available for critical maintenance windows and deployment calls",
            "Raised and resolved Google cases for complex issues",
        ],
        techStack: ["Cloud NGFW", "Firewall Policies", "Log Analysis"],
        stats: { "Environments": "3", "Type": "NGFW" },
    },
    {
        id: "client-ism",
        icon: "🎮",
        title: "EU Gaming Platform",
        industry: "EU",
        tagColor: "#0891b2",
        tagBg: "#cffafe",
        duration: "Ongoing",
        metric: "IaC-First Approach",
        role: "CNAPP Tool Specialist",
        mission: "Implementing Prowler CNAPP tool with full Terraform automation",
        responsibilities: [
            "Self-learned Prowler CNAPP tool from scratch",
            "Completed working POC in personal dev environment",
            "Debugged and fixed .env configuration issues with Gemini assistance",
            "Created complete Terraform code for customer's IaC-first approach",
            "Reviewed every line of Gemini-generated code before deployment",
            "Created SOP documentation for internal Prowler deployment reference",
        ],
        techStack: ["Prowler", "Terraform", "Gemini", "GCP"],
        stats: { "Tool Deployed": "Prowler", "Approach": "IaC" },
    },
];

// Automation Arsenal - Tools Built
export const automationArsenal = [
    {
        name: "GCP SCC Cleaner",
        description: "Auto-formatting complex JSON to clean CSV for executive reporting",
        tech: "Apps Script",
        icon: "📊",
        githubLink: "#", // Placeholder
    },
    {
        name: "Cloud Armor Log Batcher",
        description: "Python script to bulk-generate time-range-specific log links for weekly security reports",
        tech: "Python",
        icon: "🔗",
        githubLink: "#",
    },
    {
        name: "Infrastructure Auditor",
        description: "Bash script auditing Shielded VM, IP exposure, OS Config, serial ports across instances",
        tech: "Bash",
        icon: "🔍",
        githubLink: "#",
    },
    {
        name: "Prowler Deployer",
        description: "Complete Terraform code to deploy Prowler CNAPP tool on GCP (built with Gemini)",
        tech: "Terraform",
        icon: "🚀",
        githubLink: "#",
    },
    {
        name: "IP Blacklist Checker",
        description: "Python script integrating 3rd party API for comprehensive IP analysis",
        tech: "Python",
        icon: "🕵️",
        githubLink: "#",
    },
    {
        name: "Cloud Armor Bulk Updater",
        description: "Bash script for bulk updating policies, enabling adaptive protection across org",
        tech: "Bash",
        icon: "🛡️",
        githubLink: "#",
    },
    {
        name: "SSL Policy Manager",
        description: "Bulk SSL policy updates with customizable signature configurations",
        tech: "Bash",
        icon: "🔐",
        githubLink: "#",
    },
    {
        name: "SCC Alert Router",
        description: "Cloud Run + Pub/Sub automation for intelligent team-specific alert routing",
        tech: "Terraform + Python",
        icon: "📬",
        githubLink: "#",
    },
    {
        name: "IAM Recommender Parser",
        description: "Python script to extract IAM recommendations from complex JSON to actionable tables",
        tech: "Python",
        icon: "🔑",
        githubLink: "#",
    },
    {
        name: "Gemini Report Generator",
        description: "Workspace automation using Gemini to cut SCC report prep time by 30 mins/sheet",
        tech: "Apps Script + Gemini",
        icon: "✨",
        githubLink: "#",
    },
];

// Certifications with verification
export const certifications = [
    {
        name: "Associate Cloud Engineer",
        provider: "Google Cloud",
        badge: "/assets/ace-badge.png",
        color: "#4285f4",
        verifyUrl: "https://www.credly.com/badges/fad5ab70-4178-45e9-90f3-aa0050f1ec42",
    },
    {
        name: "Cloud Digital Leader",
        provider: "Google Cloud",
        badge: "/assets/cdl-badge.png",
        color: "#34a853",
        verifyUrl: "https://www.credly.com/badges/7ea201f9-eed7-45a2-8358-b5269184a4ad",
    },
    {
        name: "AWS Cloud Practitioner",
        provider: "AWS",
        badge: "/assets/aws-ccp-badge.png",
        color: "#ff9900",
        verifyUrl: "https://www.credly.com/badges/e0fdc077-9ae3-43e5-a19e-8f74210c401d",
    },
];

// Tech Arsenal - Updated Skills
export const techArsenal = {
    cloudSecurity: {
        title: "Cloud Security (GCP)",
        color: "#ea4335",
        skills: [
            "Security Command Center (SCC)",
            "Cloud Armor WAF",
            "Identity & Access Management",
            "VPC & Firewall Rules",
            "Cloud NGFW",
            "Load Balancing",
            "Cloud Logging & Monitoring",
            "Organization Policies",
            "Cloud Audit Logs",
        ],
    },
    cnapp: {
        title: "CNAPP Tools",
        color: "#9333ea",
        skills: ["Prowler", "ThreatMapper", "Tenable"],
    },
    automation: {
        title: "Scripting & Automation",
        color: "#4285f4",
        skills: ["Python", "Bash", "Google Apps Script", "gcloud CLI"],
    },
    iac: {
        title: "Infrastructure as Code",
        color: "#34a853",
        skills: ["Terraform (Basic)"],
    },
    infrastructure: {
        title: "Infrastructure",
        color: "#f97316",
        skills: ["Network Security", "Linux", "GCP", "AWS"],
    },
    workspace: {
        title: "Google Workspace",
        color: "#fbbc04",
        skills: ["Google Sheets", "Google Docs", "Apps Script Automation"],
    },
};

// Python Projects Inventory
export const pythonProjects = [
    { name: "Password Manager", desc: "Secure password generator and encrypted storage application", icon: "🔐" },
    { name: "Interactive Quiz (API)", desc: "Trivia quiz application using external API integration", icon: "❓" },
    { name: "Snake Game (GUI)", desc: "Classic arcade Snake game with Tkinter GUI", icon: "🐍" },
    { name: "US States Game", desc: "Educational geography game for identifying US states", icon: "🗺️" },
    { name: "Birthday Wisher (API)", desc: "Automated birthday email system using SMTP", icon: "🎂" },
    { name: "Weather Email Updates", desc: "Script fetching weather data and sending email updates", icon: "🌤️" },
    { name: "GCP SCC Processor", desc: "JSON to CSV transformation for security reports", icon: "📊" },
    { name: "IP Blacklist Checker", desc: "IP analysis tool with 3rd party API integration", icon: "🕵️" },
    { name: "Cloud Armor Analyzer", desc: "Bulk log link generator for security analysis", icon: "🔗" },
];

// Cloud Projects Inventory
export const cloudProjects = [
    { name: "AWS Terraform Architecture", desc: "Secure cloud architecture with EC2, S3, RDS, and ELB using IaC", icon: "🏗️" },
    { name: "AWS VPC Setup", desc: "Scalable network with subnets, IGW, route tables, and security groups", icon: "🌐" },
    { name: "Elastic Beanstalk Deployment", desc: "Web app with automated provisioning, load balancing, and scaling", icon: "🌱" },
    { name: "Serverless Blog", desc: "Cost-effective architecture using S3, Lambda, DynamoDB, API Gateway, Cognito", icon: "📝" },
    { name: "S3 Static Hosting", desc: "Website deployment using HTML/CSS/JS on S3", icon: "🌍" },
    { name: "Serverless Image Processor", desc: "Lambda function for image B&W conversion with S3 triggers and email notifications", icon: "🖼️" },
    { name: "CloudWatch Monitoring", desc: "Monitoring and notification setup for key AWS resource metrics", icon: "📈" },
    { name: "SCC Alert Automation", desc: "Cloud Run + Pub/Sub for intelligent security alert routing", icon: "📬" },
    { name: "Prowler IaC Deployment", desc: "Complete Terraform code for CNAPP tool deployment", icon: "🚀" },
];

// Achievements
export const achievements = [
    {
        title: "Smart India Hackathon Winner",
        description: "Presented prototype solution for global water management system",
        venue: "IIT Roorkee",
        year: "2022",
        prize: "₹1 Lakh",
        icon: "🏆",
    },
    {
        title: "Problem to Prosperity - 2nd Runner Up",
        description: "LPG leakage detection and management solution",
        venue: "PCCOE",
        year: "2020",
        prize: "Sponsorship + ₹1 Lakh",
        icon: "🥉",
    },
];

// Personal Interests
export const personalInterests = [
    { icon: "🗺️", title: "Google Maps Contributor", desc: "9+ years, inspired 15+ to join" },
    { icon: "🇪🇸", title: "Learning Spanish", desc: "Since 2022" },
    { icon: "🔭", title: "Astrophysics Enthusiast", desc: "Fascinated by the Universe" },
    { icon: "♟️", title: "Chess Player", desc: "Strategic thinking" },
    { icon: "🏏", title: "Cricket Player", desc: "Team sports" },
];

// Vibe Coder Projects
export const vibeCoderProjects = [
    {
        title: "Hardware Reseller Site",
        description: "Product showcase for local business, increasing customer engagement",
        url: "https://pratikh6i.github.io/RutvikPatilBussinesGroup/",
        icon: "🛒",
    },
    {
        title: "EdTech WebApp",
        description: "React-based web app with CI/CD pipelines via GitHub",
        url: "https://risinghelixx.com",
        icon: "📚",
    },
];

// Hall of Fame Data
export const hallOfFame = {
    cloudHero: {
        title: "Cloud Hero Champion",
        subtitle: "Top 3 in APAC",
        description: "Ranked 3rd in Cloud Hero GenAI Infrastructure Implementation challenge",
        year: "Dec 2025",
        image: "/assets/cloudhero.png",
    },
    skillBoost: {
        title: "Google Cloud Skills",
        labs: "120+",
        points: "78,750",
        courses: "38+",
        tier: "Tier 1: Expert",
        image: "/assets/skillboost.png",
        profileUrl: "https://www.skills.google/public_profiles/14a39d36-3d88-4a0c-85ec-9533ba770ac1",
    },
    arcade: {
        title: "Google Cloud Arcade Champion",
        description: "Champion tier finisher 4 times with hands-on cloud experience",
        swags: ["/assets/swag-1.jpg", "/assets/swag-2.jpg"],
    },
};
