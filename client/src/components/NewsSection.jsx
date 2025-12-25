import { motion } from 'framer-motion';
import { newsUpdates } from '../data/content';

function NewsSection() {
    return (
        <section className="py-16 bg-white" id="news">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
                        What's New
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Latest updates from my professional journey
                    </p>
                </motion.div>

                {/* News Cards */}
                <div className="max-w-2xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--border-subtle)]"></div>

                        {/* News Items */}
                        {newsUpdates.map((news, index) => (
                            <motion.div
                                key={news.title}
                                className="relative pl-12 pb-8"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] border-2 border-white shadow-sm"></div>

                                {/* Content */}
                                <div className="bg-[var(--bg-tertiary)] rounded-xl p-5 hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                                            {news.date}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        {news.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
