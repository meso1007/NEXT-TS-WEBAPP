// `use client` ディレクティブはファイルの先頭に維持
"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import SuccessModal from "@/components/Modal/modal"; // パスを適宜修正

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isModalSuccess, setIsModalSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        try {
            const response = await fetch("https://formspree.io/f/xkgvvjpj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsModalSuccess(true);
                setModalMessage("お問い合わせを送信しました！");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setIsModalSuccess(false);
                setModalMessage("送信に失敗しました。もう一度お試しください。");
            }
        } catch (error) {
            console.error("送信中にエラーが発生しました:", error);
            setIsModalSuccess(false);
            setModalMessage("送信中にエラーが発生しました。");
        } finally {
            setIsModalOpen(true);
        }
    };

    const router = useRouter();
    const handleClick = () => {
        router.back();
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-100 flex items-center justify-center p-6 relative">
            {/* 戻るボタン */}
            <button
                onClick={handleClick}
                className="absolute top-4 left-4 flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded hover:bg-gray-100 transition z-50 cursor-pointer"
                type="button"
            >
                <ArrowLeftIcon size={20} />
                <span className="title">BACK</span>
            </button>

            <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center justify-center">
                {/* 左側：テキストコンテンツ */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div>
                        <p className="text-s eng font-medium text-gray-500 tracking-widest uppercase mb-4">
                            WE’RE HERE TO SUPPORT YOU
                        </p>
                        <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                            お気軽に
                            <br />
                            <span className="font-normal">お問い合わせ</span>
                            <br />
                            ください
                        </h1>
                    </div>

                    <p className="text-lg text-gray-600 font-light leading-relaxed max-w-xl">
                        ご質問やご相談がございましたら、お気軽にお声がけください。 <br />
                        丁寧にサポートいたします。
                    </p>

                    {/* 連絡先情報 */}
                    <div className="space-y-6 pt-8 eng">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <Link href="mailto:otodokelife@gmail.com">
                                    <p className="text-sm text-gray-500 font-medium">Email</p>
                                    <p className="text-gray-900 font-light hover:underline hover:text-blue-500 cursor-pointer">
                                        otodokelife@gmail.com</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <Link href="tel:+817084586447">
                                    <p className="text-sm text-gray-500 font-medium">Phone number</p>
                                    <p className="text-gray-900 font-light hover:underline hover:text-blue-500 cursor-pointer">
                                        +81 70-8458-6447
                                    </p>
                                </Link>
                                <p className="text-sm">
                                    緊急時以外はメールでのお問い合わせをお願いいたします。
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 右側：フォーム */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/70  backdrop-blur-sm border border-white/30 rounded-3xl p-8 lg:p-10 shadow-[0_20px_60px_rgb(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgb(0,0,0,0.12)] transition-all duration-500 space-y-6"
                >
                    {/* 名前フィールド */}
                    <div className="space-y-2">
                        <label className="block title text-md font-medium text-gray-700 tracking-wide">
                            NAME
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-50/50 border border-gray-200/50 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-2 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-300 text-base"
                            placeholder="お名前を入力してください"
                        />
                    </div>

                    {/* メールフィールド */}
                    <div className="space-y-2">
                        <label className="block title text-md font-medium text-gray-700 tracking-wide">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-50/50 border border-gray-200/50 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-2 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-300 text-base"
                            placeholder="メールアドレスを入力してください"
                        />
                    </div>

                    {/* メッセージフィールド */}
                    <div className="space-y-2">
                        <label className="block title text-md font-medium text-gray-700 tracking-wide">
                            MESSAGE
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            className="w-full bg-gray-50/50 border border-gray-200/50 rounded-xl px-4 py-4 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-2 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-300 text-base resize-none"
                            placeholder="お気軽にメッセージをお送りください..."
                        ></textarea>
                    </div>

                    {/* 送信ボタン */}
                    <div className="pt-4">
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group cursor-pointer text-xl relative w-full bg-blue-500 text-white font-medium py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-200 flex items-center justify-center space-x-2"
                        >
                            <span className="tracking-wide title font-light">GET A SOLUTION</span>
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </motion.button>
                    </div>
                </motion.form>
            </div>
            <SuccessModal
                isOpen={isModalOpen}
                onClose={closeModal}
                isSuccess={isModalSuccess}
                message={modalMessage}
            />
        </div>
    );
}