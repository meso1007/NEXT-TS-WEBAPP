"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
    Users,
    CheckCircle,
    Sparkles,
    Star,
    ArrowRight,
    Zap,
    MessageCircle,
    ShieldCheck,
    Handshake,
    Heart,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { type Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsSection() {
    const [, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 }); // Changed to `once: true`
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })


    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0], // "easeOut"に対応するcubic-bezier配列
            },
        },
    };
    const services = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
            title: "もしもの備えを",
            description:
                "国民全員がもしもの時に備えた準備をすることを目指します。",
            position: "left",
        },
        {
            icon: <Heart className="w-6 h-6" />,
            secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
            title: "心の安らぎ",
            description:
                "ご遺族の心残りを軽減し、故人とのつながりを感じる心の支えとなります。",
            position: "left",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
            title: "手軽な終活",
            description:
                "専門知識不要で、直感的な操作。終活を始めるハードルを下げ、誰もが気軽に備えられます。",
            position: "left",
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
            title: "永続性と安全性",
            description:
                "メッセージはサーバーに依存せず、QRコード自体が情報源。プライバシーに配慮し、半永久的に利用可能です。",
            position: "right",
        },
        {
            icon: <Users className="w-6 h-6" />,
            secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
            title: "啓発活動",
            description:
                "セミナーやワークショップを通じて、デジタル終活の重要性を広め、社会全体の意識向上に貢献します。",
            position: "right",
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
            title: "連携・協業",
            description:
                "自治体やNPO、企業と協力し、サービスを社会の公共財として確立することを目指します。",
            position: "right",
        },
    ]

    return (
        <motion.section
            id="about"
            ref={sectionRef} // refを追加
            className="w-full py-24 px-4 bg-gradient-to-b from-[#E1F9C9] to-[#F8F8F2] text-[#202e44] overflow-hidden relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // isInViewの状態に合わせてアニメーション
            variants={containerVariants}
        >
            {/* Decorative background elements */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#88734C]/5 blur-3xl"
                style={{ y: y1, rotate: rotate1 }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#A9BBC8]/5 blur-3xl"
                style={{ y: y2, rotate: rotate2 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#88734C]/30"
                animate={{
                    y: [0, -15, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#A9BBC8]/30"
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <motion.div
                className="container mx-auto max-w-6xl relative z-10 font-bold"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
                    <motion.span
                        className="text-[#88734C] font-medium mb-2 flex items-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Zap className="w-4 h-4" />
                        みらいメッセージ協会について
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl mb-4 text-center title">About Us</h2>
                    <motion.div
                        className="w-24 h-1 bg-[#91ED54]"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                </motion.div>

                <motion.p className="text-center max-w-4xl mx-auto mb-16 text-[#202e44]/80 text-lg" variants={itemVariants}>
                    私たちは、もしもの時の心残りをなくすことを使命とする、みらいメッセージ協会です。<br />
                    予期せぬ死が訪れる現代において、感謝の言葉を残すことで、ご本人とご遺族の心の支えとなります。<br />
                    その使命を胸に、心残りのない社会の実現を後押しし、未来の希望をかたちにしていきます。

                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Left Column */}
                    <div className="space-y-16">
                        {services
                            .filter((service) => service.position === "left")
                            .map((service, index) => (
                                <ServiceItem
                                    key={`left-${index}`}
                                    icon={service.icon}
                                    secondaryIcon={service.secondaryIcon}
                                    title={service.title}
                                    description={service.description}
                                    variants={itemVariants}
                                    delay={index * 0.2}
                                    direction="left"
                                />
                            ))}
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
                        <motion.div className="relative w-full max-w-xs text-center" variants={itemVariants}>
                            <motion.div
                                className="rounded-md overflow-hidden"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                            >
                                <Link href="/kokomo" className="cursor-pointer z-10">
                                    <Image src="/kokomo.png" width={2000} height={2000} alt="" className="object-cover" />
                                </Link>
                                <h2 className="text-xl title text-[#88734C] font-bold " >KOKOMO <span className="charLogo font-bold"> ココモ</span></h2>
                                <motion.div
                                    className="absolute inset-0 bg-transparent flex items-end justify-center p-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                >
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="absolute inset-0  rounded-md -m-3 z-[-1]"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            ></motion.div>

                            {/* Floating accent elements */}
                            <motion.div
                                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[#88734C]/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                style={{ y: y1 }}
                            ></motion.div>
                            <motion.div
                                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#A9BBC8]/15"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.1 }}
                                style={{ y: y2 }}
                            ></motion.div>

                            {/* Additional decorative elements */}
                            <motion.div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#88734C]"
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            ></motion.div>
                            <motion.div
                                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#A9BBC8]"
                                animate={{
                                    y: [0, 10, 0],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                            ></motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16">
                        {services
                            .filter((service) => service.position === "right")
                            .map((service, index) => (
                                <ServiceItem
                                    key={`right-${index}`}
                                    icon={service.icon}
                                    secondaryIcon={service.secondaryIcon}
                                    title={service.title}
                                    description={service.description}
                                    variants={itemVariants}
                                    delay={index * 0.2}
                                    direction="right"
                                />
                            ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

interface ServiceItemProps {
    icon: React.ReactNode
    secondaryIcon?: React.ReactNode
    title: string
    description: string
    // ここを修正
    variants: Variants
    delay: number
    direction: "left" | "right"
}
function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
    return (
        <motion.div
            className="flex flex-col group"
            variants={variants}
            transition={{ delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="flex items-center gap-3 mb-3"
                initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.2 }}
            >
                <motion.div
                    className="text-[#88734C] bg-[#88734C]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#88734C]/20 relative"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                >
                    {icon}
                    {secondaryIcon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#202e44] group-hover:text-[#88734C] transition-colors duration-300">
                    {title}
                </h3>
            </motion.div>
            <motion.p
                className="text-sm text-[#202e44]/80 leading-relaxed pl-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.4 }}
            >
                {description}
            </motion.p>
            <motion.div
                className="mt-3 pl-12 flex items-center text-[#88734C] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
            >
                <span className="flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3" />
                </span>
            </motion.div>
        </motion.div>
    )
}
