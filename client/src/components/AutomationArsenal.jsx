import { motion } from 'framer-motion';
import { automationArsenal } from '../data/content';

function AutomationArsenal() {
    return (
        <section className="py-16" id="automation">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
                        🛠️ The Automation Arsenal
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Most security engineers just monitor. <span className="font-semibold text-[var(--accent-primary)]">I build.</span> Here are custom tools I've created to automate the boring stuff.
                    </p>
                </motion.div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {automationArsenal.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6 hover:shadow-lg hover:border-[var(--accent-primary)] transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <motion.span
                                    className="text-3xl"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {tool.icon}
                                </motion.span>
                                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                                    {tool.tech}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                {tool.name}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                                {tool.description}
                            </p>

                            {/* GitHub Link */}
                            {tool.githubLink !== "#" ? (
                                <a
                                    href={tool.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] hover:underline"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            ) : (
                                <span className="text-xs text-[var(--text-tertiary)] italic">
                                    Private/Internal Tool
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-10 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        These tools have saved hundreds of hours of manual work across multiple clients.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium">
                        <span>⚡</span>
                        Built with Python, Bash, Terraform & Gemini
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AutomationArsenal;
