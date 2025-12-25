import { motion } from 'framer-motion';
import { achievements, personalInterests, vibeCoderProjects } from '../data/content';

function AchievementsAndInterests() {
    return (
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" id="about">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Achievements */}
                    <motion.div
                        className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                            <span>🏆</span> Achievements
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.title}
                                    className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">{achievement.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-amber-900">{achievement.title}</h4>
                                            <p className="text-sm text-amber-700 mt-1">{achievement.description}</p>
                                            <div className="flex items-center gap-3 mt-2 text-xs text-amber-600">
                                                <span>📍 {achievement.venue}</span>
                                                <span>📅 {achievement.year}</span>
                                                <span className="font-semibold text-green-600">💰 {achievement.prize}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Personal Interests */}
                    <motion.div
                        className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                            <span>🎯</span> When Not Building/Securing
                        </h3>
                        <div className="space-y-4">
                            {personalInterests.map((interest, index) => (
                                <motion.div
                                    key={interest.title}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <span className="text-xl">{interest.icon}</span>
                                    <div>
                                        <h4 className="font-medium text-[var(--text-primary)]">{interest.title}</h4>
                                        <p className="text-sm text-[var(--text-secondary)]">{interest.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Vibe Coder Projects */}
                    <motion.div
                        className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                            <span>⚡</span> Vibe Coder Projects
                        </h3>
                        <div className="space-y-4">
                            {vibeCoderProjects.map((project, index) => (
                                <motion.a
                                    key={project.title}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200 hover:shadow-md transition-all group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">{project.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-purple-900 group-hover:text-purple-600 transition-colors">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm text-purple-700 mt-1">{project.description}</p>
                                            <span className="text-xs text-purple-500 mt-2 inline-block">
                                                View Project →
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Vibe Coder Badge */}
                        <motion.div
                            className="mt-6 flex justify-center"
                            animate={{
                                boxShadow: ['0 0 0 rgba(168,85,247,0)', '0 0 20px rgba(168,85,247,0.4)', '0 0 0 rgba(168,85,247,0)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
                                ⚡ Vibe Coder Mode: ON
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AchievementsAndInterests;
