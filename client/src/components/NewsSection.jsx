import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newsUpdates } from '../data/content';

function NewsSection() {
    const [showAll, setShowAll] = useState(false);
    const visibleUpdates = showAll ? newsUpdates : newsUpdates.slice(0, 3);

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
                        <AnimatePresence mode='popLayout'>
                            {visibleUpdates.map((news, index) => (
                                <motion.div
                                    key={news.title}
                                    className="relative pl-12 pb-8"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    layout
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
                                        {/* Added bullets to description as requested */}
                                        <ul className="list-disc list-inside text-sm text-[var(--text-secondary)] pl-1">
                                            <li>{news.description}</li>
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Show More / Show Less Button */}
                    {newsUpdates.length > 3 && (
                        <div className="text-center mt-4 relative z-10 bg-white pt-2">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-6 py-2 rounded-full border border-[var(--border-subtle)] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                {showAll ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
