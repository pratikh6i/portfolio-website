import { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData, assetPath } from '../data/content';

// ==========================================
// VARIATION 1: CLASSIC / CURRENT (Refined)
// ==========================================
function HeroV1() {
    const stats = [
        { value: profileData.stats.yearsExp, label: profileData.stats.yearsLabel, color: '#4285f4' },
        { value: profileData.stats.clients, label: profileData.stats.clientsLabel, color: '#34a853' },
        { value: profileData.stats.scripts, label: profileData.stats.scriptsLabel, color: '#9333ea' },
        { value: profileData.stats.sops, label: profileData.stats.sopsLabel, color: '#f97316' },
    ];

    return (
        <section className="relative min-h-[90vh] flex items-center bg-blue-50/30 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/50 to-transparent pointer-events-none" />

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                <div className="order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {profileData.currentRole}
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
                            {profileData.name} <br />
                            <span className="gradient-text text-4xl md:text-5xl mt-2 block">
                                {profileData.tagline.split('|')[0]}
                            </span>
                        </h1>

                        <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-lg leading-relaxed">
                            {profileData.subtext}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href={profileData.links.linkedin} target="_blank" className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-1">
                                Let's Collaborate
                            </a>
                            <a href={profileData.links.resume} target="_blank" className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:shadow-lg transition-all hover:-translate-y-1">
                                View Resume
                            </a>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</span>
                                    <span className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">{stat.label.split(' ')[0]}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 bottom-0 h-40" />
                    <img
                        src={`${assetPath}/profile.jpg`}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl mask-image-b transform rotate-2 hover:rotate-0 transition-transform duration-700"
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />
                </div>
            </div>
        </section>
    );
}

// ==========================================
// VARIATION 2: MODERN / MINIMAL (Centered)
// ==========================================
function HeroV2() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white py-20">
            <div className="container text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500">
                        <img src={`${assetPath}/profile.jpg`} className="w-full h-full object-cover rounded-full border-4 border-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    I Build & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Secure</span> Clouds.
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {profileData.subtext}. Based in {profileData.location.split(',')[0]}.
                </motion.p>

                <motion.div
                    className="flex justify-center gap-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
                        Contact Me
                    </button>
                    <button className="px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors">
                        Works
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

// ==========================================
// VARIATION 3: BOLD / CREATIVE (Split)
// ==========================================
function HeroV3() {
    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-slate-950 text-white overflow-hidden">
            <div className="lg:col-span-7 flex items-center p-12 lg:p-24 relative">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                <div className="relative z-10">
                    <h2 className="text-blue-400 font-mono mb-4">01. INTRODUCTION</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-none">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Pratik Shetti.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-12 border-l-2 border-slate-800 pl-6">
                        {profileData.subtext}
                    </p>

                    <div className="flex gap-8 items-center">
                        <div className="flex -space-x-4">
                            {/* Mock avatars or icons */}
                            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center">☁️</div>
                            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center">🔒</div>
                            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center">⚡</div>
                        </div>
                        <div className="text-sm font-mono text-slate-500">
                            TRUSTED BY <br /> 8+ ENTERPRISES
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 relative bg-blue-900/20">
                <img
                    src={`${assetPath}/profile.jpg`}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </div>
        </section>
    );
}

export default function HeroVariations() {
    const [variation, setVariation] = useState(1);

    return (
        <div className="relative group">
            {/* Switcher Controls - Floating */}
            <div className="fixed top-24 right-4 z-50 flex flex-col gap-2 bg-white/90 backdrop-blur p-2 rounded-lg shadow-xl border border-gray-200 opacity-20 hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-gray-500 uppercase px-2">Hero Style</span>
                <button onClick={() => setVariation(1)} className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${variation === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>1. Clean</button>
                <button onClick={() => setVariation(2)} className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${variation === 2 ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>2. Minimal</button>
                <button onClick={() => setVariation(3)} className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${variation === 3 ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>3. Dark</button>
            </div>

            {variation === 1 && <HeroV1 />}
            {variation === 2 && <HeroV2 />}
            {variation === 3 && <HeroV3 />}
        </div>
    );
}
