import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, Variants } from 'framer-motion';
import { Instagram, Linkedin, Github, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: [0.25, 0.1, 0.25, 1.0], // "easeOut"に対応するcubic-bezier配列
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <motion.footer
      ref={footerRef}
      className="bg-stone-300 py-20 px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Logo */}
        <motion.div className="mb-12" variants={itemVariants}>
          <motion.div
            className="w-24 h-24 bg-[#91ED54] rounded-full mx-auto flex items-center justify-center mb-8 cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              backgroundColor: "#91ED54"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.6
            }}
          >
            <motion.div
              className="text-gray-800 font-bold text-2xl"
              initial={{ rotate: -12 }}
              whileHover={{
                rotate: 12,
                scale: 1.2,
                color: "#ffffff"
              }}
              transition={{ duration: 0.3 }}
            >
              //
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.nav className="mb-16" variants={containerVariants}>
          <ul className="flex title flex-wrap justify-center items-center gap-8 md:gap-12 text-black">
            <motion.li variants={itemVariants}>
              <Link href="/" className="text-2xl font-medium hover:text-[#91ED54] hover:underline transition-colors duration-300">
                Home
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#about" className="text-2xl font-medium hover:text-[#91ED54] hover:underline transition-colors duration-300">
                About
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#otodoke" className="text-2xl font-medium hover:text-[#91ED54] hover:underline transition-colors duration-300">
                Services
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="#contact" className="text-2xl font-medium hover:text-[#91ED54] hover:underline transition-colors duration-300">
                Contact
              </Link>
            </motion.li>
            <motion.button variants={itemVariants}>
              <Link href="https://www.otodokelife.com/" className="title text-xl px-8 py-3 rounded-xl border-2 border-black text-black font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 bg-[#91ED54] hover:bg-[#9CDF5A] flex items-center group">
                OTODOKE Life
              </Link>
            </motion.button>
          </ul>
        </motion.nav>

        {/* Social Links */}
        <motion.div className="flex justify-center gap-6 mb-16" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Link href="https://www.instagram.com/sh02__nmi/" className="group bg-black hover:bg-white hover:border-2 hover:border-pink-700 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Instagram className="w-6 h-6 text-gray-100 group-hover:text-pink-600 transition-colors" />
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="#" className="group bg-black hover:bg-white hover:border-2 hover:border-red-700 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Youtube className="w-6 h-6 text-gray-100 group-hover:text-red-600 transition-colors" />
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="https://www.linkedin.com/in/shoya-horiuchi-83b785278/" className="group bg-black hover:bg-white hover:border-2 hover:border-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-gray-100 group-hover:text-blue-700 transition-colors" />
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="https://github.com/meso1007" className="group w-14 h-14 bg-black hover:bg-white hover:border-2 hover:border-purple-700 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-gray-100 group-hover:text-purple-500 transition-colors" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div className="text-stone-800 text-sm" variants={itemVariants}>
          © 2024 Mirai Message Association. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;