// components/About/FounderMessage.tsx

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sun } from 'lucide-react';
import SectionWrapper from './section-wrapper';

export default function FounderMessage() {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0], // 'easeOut' を cubic-bezier に修正
            },
        },
    };

    return (
        <SectionWrapper
            id="founder-message"
            className="py-20 md:py-32 bg-[#F8F7F4] text-gray-800"
        >
            <motion.div
                className="flex flex-col items-center mb-6"
                variants={containerVariants}
            >
                <motion.span
                    className="text-[#88734C] font-medium mb-2 flex items-center gap-2"
                    variants={itemVariants}
                >
                    <Sun className="w-4 h-4" />
                    目指す未来
                </motion.span>
                <motion.h2
                    className="text-4xl md:text-5xl font-light mb-4 text-center title"
                    variants={itemVariants}
                >
                    Our Mission
                </motion.h2>
                <motion.div
                    className="w-24 h-1 bg-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
            </motion.div>
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-12"
                    variants={containerVariants}
                >
                    {/* 左側に写真 */}
                    <motion.div className="w-full md:w-2/5 flex-shrink-0" variants={itemVariants}>
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden border-4 border-orange-500 shadow-lg">
                            <Image
                                src="/mission.png"
                                alt="Founder Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                    {/* 右側にテキスト */}
                    <div className="w-full md:w-3/5 font-bold">
                        <motion.div className="space-y-6" variants={containerVariants}>
                            <motion.p
                                className="text-xl text-gray-700 leading-relaxed"
                                variants={itemVariants}
                            >
                                私たちの目標は、
                                <span className="font-bold text-2xl text-orange-600">
                                    ご本人もご遺族も心残りを残さない社会
                                </span>
                                を築き上げることです。
                            </motion.p>

                            <motion.p
                                className="text-xl text-gray-700 leading-relaxed"
                                variants={itemVariants}
                            >
                                これを単なる夢で終わらせず、社会の当たり前の文化に。
                            </motion.p>
                            <motion.p
                                className="text-xl text-gray-700 leading-relaxed"
                                variants={itemVariants}
                            >
                                私たちはデジタル終活を通じて、温かいメッセージが世代を超えて届く仕組みを創り、人と人との絆が未来へつながる社会を、皆様と一緒に実現してまいります。
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}