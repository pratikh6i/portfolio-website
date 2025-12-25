import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { assetPath } from '../data/content';

const ChristmasGreeting = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Popup vanishes in 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.97)' }} // Website 3% transparent
                >
                    <motion.div
                        className="w-full h-full"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <img
                            src={`${assetPath}/christmas-greeting.png`}
                            alt="Merry Christmas"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Optional: Subtle Vignette to keep it elegant */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(255,255,255,0.5)]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ChristmasGreeting;
