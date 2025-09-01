"use client"

import React from "react"
import { ArrowRight, Apple, Mail, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeaderSection from "@/components/Header"
import AboutUsSection from '@/pages/about-us-section'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import Footer from '@/components/Footer/Footer'
import FounderMessage from '@/pages/founder-section'
import SectionWrapper from "@/pages/section-wrapper"

export default function MiraiMessageAssociation() {

  const containerVariants: Variants = {
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
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <div id='home' className="min-h-screen bg-gray-50" style={{ backgroundColor: '#FFFFFF' }}>
      <HeaderSection />
      <section className="w-full h-screen flex items-center justify-start overflow-hidden relative">
        {/* Background Image - The 'priority' prop is good for LCP */}
        <Image
          alt='hero-bg'
          src="/hero-bg.png"
          width={1000}
          height={1000}
          className="absolute top-0 inset-0 w-full h-screen bg-cover bg-center bg-no-repeat pb-10 px-10 object-cover"
          priority
        />
        {/* Content Overlay */}
        <div className="z-10 max-w-7xl mb-20 mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Use motion.div as the container for the staggered animation */}
          <motion.div
            className="max-w-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-8">
              <div>
                <motion.h1
                  className="text-8xl title font-bold text-gray-800 mb-4 leading-tight"
                  variants={itemVariants}
                >
                  Mirai<br />
                  Message<br />
                  Association<br />
                </motion.h1>
                <motion.p
                  className="text-2xl text-gray-600 mb-2 font-bold"
                  variants={itemVariants}
                >
                  みらいメッセージ協会
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <button className="eng px-8 py-4 bg-[#91ED54] rounded-xl border-2 border-[#242424] text-[#242424] font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:bg-[#94E76F] text-xl cursor-pointer">
                  OTODOKE LIFE
                </button>
                <button className="px-8 py-4 bg-[#EBEBEE] rounded-xl text-black border-2 border-black font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:bg-[#DEDEE2] text-lg cursor-pointer">
                  協会について詳しく
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <div>
        <Image src="/connect-1.svg" width={2000} height={2000} alt="" />
      </div>
      <AboutUsSection />
      
      {/* OTODOKE LIFE Section with SectionWrapper */}
      <SectionWrapper
        id="otodoke"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8F8F2] to-[#FAFAFA]"
      >
        <motion.div
          className="flex flex-col items-center mb-6"
          variants={itemVariants}
        >
          <motion.span
            className="text-[#88734C] font-medium mb-2 flex items-center gap-2"
            variants={itemVariants}
          >
            <Apple className="w-4 h-4" />
            提供サービス
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center title">Services</h2>
          <motion.div
            className="w-24 h-1 bg-[#91ED54]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto border-2 rounded-xl border-black"
          variants={containerVariants}
        >
          <div className="bg-[#FFFAF8] rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  className="title2 text-4xl font-bold text-gray-800 mb-6 eng"
                  variants={itemVariants}
                >
                  OTODOKE LIFE
                </motion.h3>
                <motion.p
                  className="text-gray-800 font-semibold mb-6 text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  私たちの中心サービス「OTODOKE LIFE」は、もしもの時に大切な人へ感謝のメッセージを届けるWebサービスです。<br />
                  普段は言えない「ありがとう」の気持ちを、安全に保管し、適切なタイミングでお届けします。
                </motion.p>
                <motion.button variants={itemVariants}>
                  <Link
                    href="https://www.otodokelife.com/"
                    className="px-8 py-3 rounded-xl border-2 border-black text-black font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center group"
                    style={{ backgroundColor: '#91ED54' }}
                  >
                    サービスを始める
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.button>
              </div>
              <motion.div className="relative border-2 shadow-4" variants={itemVariants}>
                <Image alt='otodoke' src="/otodoke.png" width={2000} height={2000} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
      
      <div>
        <Image src="/connect-2.svg" width={2000} height={2000} alt="" />
      </div>

      <FounderMessage />

      {/* Contact Section with SectionWrapper */}
      <SectionWrapper
        id="contact"
        className="bg-[#E4E4E4] py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
            <motion.span
              className="text-[#88734C] font-medium mb-2 flex items-center gap-2"
              variants={itemVariants}
            >
              <Mail className="w-4 h-4" />
              お問い合わせ
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-center title">Contact</h2>
            <motion.div
              className="w-24 h-1 bg-[#91ED54]"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </motion.div>
          <motion.div className="bg-white rounded-2xl shadow-xl p-8" variants={itemVariants}>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <motion.div className='text-center' variants={itemVariants}>
                <h4 className="text-xl font-bold mb-4 text-gray-800">一般お問い合わせ</h4>
                <p className="text-gray-600 mb-2 hover:underline"><Link href="mailto:diegoshoya2017@gmail.com">メール: diegoshoya2017@gmail.com</Link></p>
                <p className="text-gray-600 mb-4 hover:underline"><Link href="tel:070-8458-6447">電話: 070-8458-6447</Link></p>
              </motion.div>
              <motion.div className='text-center' variants={itemVariants}>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">OTODOKE LIFEについて</h4>
                <p className="text-gray-600 mb-2 hover:underline"><Link href="mailto:otodokelife@gmail.com=">メール: otodokelife@gmail.com</Link></p>
                <p className="text-gray-600 mb-4">ご対応時間: 平日 9:00-18:00</p>
              </motion.div>
            </div>
            <motion.button variants={itemVariants}>
              <Link href="/contact" className="px-8 py-3 rounded-xl border-2 border-black text-black font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center group" style={{ backgroundColor: '#91ED54' }}>
                お問い合わせフォームへ
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </SectionWrapper>
      
      <div>
        <Image src="/connect-3.svg" width={2000} height={2000} alt="" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}