import { motion } from 'framer-motion';
import { automationArsenal } from '../data/content';

// Tech-based icons instead of emojis
const techIcons = {
    "Apps Script": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285f4">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
    ),
    "Python": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3776ab">
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
        </svg>
    ),
    "Bash": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4EAA25">
            <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM10 18H6v-2h4v2zm8-4H6v-2h12v2zm0-4H6V8h12v2z" />
        </svg>
    ),
    "Terraform": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#7B42BC">
            <path d="M1 8.5v7l6 3.5v-7l-6-3.5zM8.5 5v7l6 3.5v-7l-6-3.5zM16 12.5v7l6-3.5v-7l-6 3.5zM8.5 19v7l6-3.5v-7l-6 3.5z" />
        </svg>
    ),
    "Terraform + Python": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#7B42BC">
            <path d="M1 8.5v7l6 3.5v-7l-6-3.5zM8.5 5v7l6 3.5v-7l-6-3.5zM16 12.5v7l6-3.5v-7l-6 3.5zM8.5 19v7l6-3.5v-7l-6 3.5z" />
        </svg>
    ),
    "Apps Script + Gemini": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285f4">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
    ),
};

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
                        The Automation Arsenal
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
                                <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    {techIcons[tool.tech] || (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#6b7280">
                                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                                        </svg>
                                    )}
                                </div>
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        Built with Python, Bash, Terraform & Gemini
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AutomationArsenal;
