import { motion } from 'framer-motion';
import { techArsenal } from '../data/content';

function TechArsenal() {
    const categories = Object.values(techArsenal);

    return (
        <section className="py-16 bg-[var(--bg-tertiary)]" id="skills">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
                        ⚔️ Tech Arsenal
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Tools and technologies I wield daily
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            className="bg-white rounded-2xl p-6 border border-[var(--border-subtle)] hover:shadow-lg transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            whileHover={{ y: -4, boxShadow: `0 15px 40px ${category.color}15` }}
                        >
                            {/* Category Header */}
                            <h3
                                className="text-sm font-bold uppercase tracking-wider mb-4"
                                style={{ color: category.color }}
                            >
                                {category.title}
                            </h3>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium rounded-full border transition-all cursor-default"
                                        style={{
                                            borderColor: `${category.color}30`,
                                            color: category.color,
                                            background: `${category.color}08`
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                                        whileHover={{
                                            scale: 1.05,
                                            background: `${category.color}15`
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechArsenal;
