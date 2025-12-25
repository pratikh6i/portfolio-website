import { motion } from 'framer-motion';
import { profileData } from '../data/content';

function HeroSection() {
    const stats = [
        { value: profileData.stats.yearsExp, label: profileData.stats.yearsLabel, color: '#4285f4' },
        { value: profileData.stats.clients, label: profileData.stats.clientsLabel, color: '#34a853' },
        { value: profileData.stats.scripts, label: profileData.stats.scriptsLabel, color: '#9333ea' },
        { value: profileData.stats.reports, label: profileData.stats.reportsLabel, color: '#f97316' },
    ];

    return (
        <section className="hero-section">
            {/* Hero Image with Fade */}
            <div className="hero-image-container">
                <img
                    src="/about-me/assets/profile.jpg"
                    alt="Pratik Shetti"
                    className="hero-image"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, rgba(248,250,252,1) 0%, rgba(248,250,252,0.8) 30%, transparent 60%)'
                    }}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 py-16 md:py-24">
                <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {profileData.currentRole} • {profileData.since}
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold gradient-text mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {profileData.name}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.h2
                        className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {profileData.tagline}
                    </motion.h2>

                    {/* Subtext - The Key Differentiator */}
                    <motion.p
                        className="text-lg text-[var(--accent-purple)] font-medium mb-4 flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span>🚀</span>
                        {profileData.subtext}
                    </motion.p>

                    {/* Location */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--border-subtle)] shadow-sm mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="text-lg">📍</span>
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                            {profileData.location}
                        </span>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="bg-white rounded-2xl p-4 border border-[var(--border-subtle)] shadow-sm"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: `0 10px 30px ${stat.color}20`
                                }}
                            >
                                <div className="text-3xl font-bold" style={{ color: stat.color }}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mt-8 flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a
                            href={profileData.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-white font-medium hover:shadow-lg transition-all hover:scale-105"
                        >
                            <span>💬</span>
                            Let's Collaborate
                        </a>
                        <a
                            href={profileData.links.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium hover:shadow-lg transition-all hover:scale-105"
                        >
                            <span>📄</span>
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
