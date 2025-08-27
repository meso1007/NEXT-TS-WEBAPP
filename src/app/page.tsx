"use client"
import React, { useState } from 'react';
import { ChevronDown, Heart, Users, MessageCircle, Shield, ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header2 from '@/components/Header';
import AboutUsSection from '@/pages/about-us-section';
import { motion } from 'framer-motion';

export default function MiraiMessageAssociation() {

const containerVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will apply the delay to child elements
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};


  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundColor: '#FFFFFF' }}>
      <Header2 />
      <section className="w-full h-screen flex items-center justify-start overflow-hidden relative">
      {/* Background Image - The 'priority' prop is good for LCP */}
      <Image
        alt='hero-bg'
        src="/hero-bg2.png"
        width={1000}
        height={1000}
        className="absolute top-0 inset-0 w-full h-screen bg-cover bg-center bg-no-repeat py-10 px-10 object-cover"
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
                className="text-2xl text-gray-600 mb-2"
                variants={itemVariants}
              >
                みらいメッセージ協会
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <button className="eng px-8 py-4 bg-[#AFE995] rounded-xl border-2 border-[#242424] text-[#2C2D2C] font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:bg-[#94E76F] text-xl cursor-pointer">
                OTODOKE LIFE
              </button>
              <button className="px-8 py-4 bg-[#EBEBEE] rounded-xl text-black border-2 border-black font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:bg-[#DEDEE2] text-lg cursor-pointer">
                協会について詳しく
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
      <div>
        <Image src="/connect-1.svg" width={2000} height={2000} alt=""/>
      </div>
      <AboutUsSection />

      {/* OTODOKE LIFE Section */}
      <section id="otodoke" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8F8F2] to-[#FFFFFF]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-gray-800 mb-6 eng">OTODOKE LIFE</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  私たちの中心サービス「OTODOKE LIFE」は、もしもの時に大切な人へ感謝のメッセージを届けるWebサービスです。
                  普段は言えない「ありがとう」の気持ちを、安全に保管し、適切なタイミングでお届けします。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#AFE995' }}></div>
                    <span className="text-gray-700">簡単なメッセージ作成</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#AFE995' }}></div>
                    <span className="text-gray-700">安全な保管システム</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#AFE995' }}></div>
                    <span className="text-gray-700">確実な配信保証</span>
                  </li>
                </ul>
                <button>
                  <Link href="https://www.otodokelife.com/" className="px-8 py-3 rounded-full text-[#FFFFFF] font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center group" style={{ backgroundColor: '#AFE995' }}>
                    サービスを始める
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </button>
              </div>
              <div className="relative border-2 shadow-4">
                <Image alt='otodoke' src="/otodoke.png" width={2000} height={2000} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">その他のサービス</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              OTODOKE LIFEを中心に、様々な形で感謝を届けるサービスを展開しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#F4EDFF' }}>
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">メッセージカード作成</h4>
              <p className="text-gray-600">
                デジタルとアナログを融合した、特別なメッセージカードの作成サービス
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#F4EDFF' }}>
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">コミュニティ支援</h4>
              <p className="text-gray-600">
                地域コミュニティでの感謝を伝える活動やイベントの企画・運営
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#F4EDFF' }}>
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">相談サポート</h4>
              <p className="text-gray-600">
                感謝の気持ちを伝えるための相談やアドバイスサービス
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">お問い合わせ</h3>
          <p className="text-gray-600 mb-8 text-lg">
            ご質問やご相談がございましたら、お気軽にお声かけください。
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">一般お問い合わせ</h4>
                <p className="text-gray-600 mb-2">メール: info@mirai-message.org</p>
                <p className="text-gray-600 mb-4">電話: 03-XXXX-XXXX</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">OTODOKE LIFEについて</h4>
                <p className="text-gray-600 mb-2">メール: otodoke@mirai-message.org</p>
                <p className="text-gray-600 mb-4">サポート時間: 平日 9:00-18:00</p>
              </div>
            </div>
            <button className="mt-8 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1" style={{ backgroundColor: '#AFE995' }}>
              お問い合わせフォームへ
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#AFE995' }}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-bold">みらいメッセージ協会</h5>
                  <p className="text-gray-400 text-sm">Future Message Association</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                感謝の気持ちを未来に届け、人と人とのつながりを大切にする社会を目指しています。
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">サービス</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">OTODOKE LIFE</a></li>
                <li><a href="#" className="hover:text-white transition-colors">メッセージカード</a></li>
                <li><a href="#" className="hover:text-white transition-colors">コミュニティ支援</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">協会について</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">理念・活動</a></li>
                <li><a href="#" className="hover:text-white transition-colors">メンバー紹介</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 みらいメッセージ協会. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}