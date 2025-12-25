import { useState } from 'react';
import { motion } from 'framer-motion';
import { pythonProjects, cloudProjects } from '../data/content';

function ProjectInventory() {
    const [activeTab, setActiveTab] = useState('python');

    const tabs = [
        { id: 'python', label: '🐍 Python Projects', projects: pythonProjects },
        { id: 'cloud', label: '☁️ Cloud Projects', projects: cloudProjects },
    ];

    const activeProjects = tabs.find(t => t.id === activeTab)?.projects || [];

    return (
        <section className="py-16" id="projects">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
                        📦 Project Inventory
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        A collection of personal and professional projects
                    </p>
                </motion.div>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-4 mb-10">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                                    : 'bg-white border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeProjects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            className="bg-white rounded-xl border border-[var(--border-subtle)] p-5 hover:shadow-md hover:border-[var(--accent-primary)] transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -2 }}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">{project.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Note */}
                <motion.p
                    className="text-center text-sm text-[var(--text-tertiary)] mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    💡 More projects on <a href="https://github.com/pratikh6i" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">GitHub</a>
                </motion.p>
            </div>
        </section>
    );
}

export default ProjectInventory;
