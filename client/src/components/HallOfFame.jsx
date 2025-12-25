import { motion } from 'framer-motion';
import { hallOfFame, certifications } from '../data/content';

function HallOfFame() {
    return (
        <section className="py-16 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50" id="achievements">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
                        🏆 Hall of Fame
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Certifications, achievements, and recognition
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Cloud Hero Card */}
                    <motion.div
                        className="bg-gradient-to-br from-yellow-100 via-amber-100 to-yellow-200 rounded-3xl p-8 border-2 border-yellow-300 relative overflow-hidden"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Shimmer */}
                        <div className="absolute inset-0 shimmer pointer-events-none opacity-50" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <motion.span
                                    className="text-6xl"
                                    animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    🏆
                                </motion.span>
                                <div>
                                    <h3 className="text-2xl font-bold text-amber-900">
                                        {hallOfFame.cloudHero.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full">
                                            #3
                                        </span>
                                        <span className="text-amber-700 font-semibold">
                                            {hallOfFame.cloudHero.subtitle}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-amber-800 mb-4">
                                {hallOfFame.cloudHero.description}
                            </p>

                            <div className="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
                                <img
                                    src="/about-me/assets/cloudhero.png"
                                    alt="Cloud Hero Achievement"
                                    className="w-full rounded-lg"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>

                            <p className="text-sm text-amber-700 mt-3 font-medium">
                                📅 {hallOfFame.cloudHero.year}
                            </p>
                        </div>
                    </motion.div>

                    {/* Skill Boost Card */}
                    <motion.a
                        href={hallOfFame.skillBoost.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden block"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{hallOfFame.skillBoost.title}</h3>
                                    <p className="text-blue-200">{hallOfFame.skillBoost.tier}</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold">{hallOfFame.skillBoost.labs}</div>
                                    <div className="text-xs text-blue-200">Labs Completed</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold">{hallOfFame.skillBoost.points}</div>
                                    <div className="text-xs text-blue-200">Total Points</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                    <div className="text-2xl font-bold">{hallOfFame.skillBoost.courses}</div>
                                    <div className="text-xs text-blue-200">Courses</div>
                                </div>
                            </div>

                            {/* Screenshot */}
                            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                                <img
                                    src="/about-me/assets/skillboost.png"
                                    alt="Skill Boost Profile"
                                    className="w-full rounded-lg"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>

                            <p className="text-blue-200 mt-4 text-sm">
                                Click to view full profile →
                            </p>
                        </div>
                    </motion.a>
                </div>

                {/* Certifications */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">
                        🎓 Verified Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6 text-center hover:shadow-lg transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                {/* Badge Image */}
                                <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-[var(--bg-tertiary)] flex items-center justify-center">
                                    <img
                                        src={`/about-me${cert.badge}`}
                                        alt={cert.name}
                                        className="w-full h-full object-contain p-2"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<span style="font-size: 2rem; color: ${cert.color}">🎓</span>`;
                                        }}
                                    />
                                </div>

                                <h4 className="font-bold text-[var(--text-primary)] mb-1">
                                    {cert.name}
                                </h4>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">
                                    {cert.provider}
                                </p>

                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                                    style={{ background: `${cert.color}15`, color: cert.color }}
                                >
                                    <span>✓</span>
                                    Verify on Credly
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Swag Gallery */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">
                        🎁 Google Cloud Arcade Champion - Swag Gallery
                    </h3>
                    <p className="text-center text-[var(--text-secondary)] mb-6">
                        Champion tier finisher 4 times with hands-on cloud experience
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        {hallOfFame.arcade.swags.map((swag, index) => (
                            <motion.div
                                key={index}
                                className="w-48 h-48 rounded-2xl overflow-hidden bg-white border border-[var(--border-subtle)] shadow-sm"
                                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                            >
                                <img
                                    src={`/about-me${swag}`}
                                    alt={`Google Cloud Swag ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 text-4xl">🎁</div>`;
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HallOfFame;
