// components/SuccessModal.tsx
import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  message: string;
}

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20,
    rotateX: -15
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    y: -10,
    transition: {
      duration: 0.2
    }
  },
}as Variants;;

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      delay: 0.2
    }
  }
}as Variants;;

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, isSuccess, message }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
        >
          {/* Enhanced backdrop with blur */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(8px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
          />
          
          <motion.div
            className={`
              relative z-10 w-full max-w-md mx-auto
              ${isSuccess 
                ? 'bg-gradient-to-br from-emerald-50/90 via-white/95 to-teal-50/90' 
                : 'bg-gradient-to-br from-rose-50/90 via-white/95 to-red-50/90'
              }
              backdrop-blur-xl rounded-3xl p-8 shadow-2xl
              border border-white/20
              before:absolute before:inset-0 before:rounded-3xl 
              before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none
            `}
            variants={modalVariants}
            style={{ perspective: '1000px' }}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 
                         backdrop-blur-sm transition-all duration-200 group  cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
            </motion.button>

            {/* Icon with enhanced animation */}
            <motion.div 
              className="flex justify-center mb-6"
              variants={iconVariants}
            >
              <div className={`
                relative p-4 rounded-full
                ${isSuccess 
                  ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/25' 
                  : 'bg-gradient-to-br from-rose-400 to-red-500 shadow-lg shadow-red-500/25'
                }
              `}>
                {isSuccess ? (
                  <CheckCircle className="w-12 h-12 text-white drop-shadow-lg" />
                ) : (
                  <XCircle className="w-12 h-12 text-white drop-shadow-lg" />
                )}
                
                {/* Pulse effect */}
                <motion.div
                  className={`
                    absolute inset-0 rounded-full
                    ${isSuccess ? 'bg-emerald-400' : 'bg-rose-400'}
                  `}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Title with gradient text */}
            <motion.h3 
              className={`
                text-3xl font-bold mb-4 text-center
                bg-gradient-to-r ${isSuccess 
                  ? 'from-emerald-600 via-teal-600 to-emerald-700' 
                  : 'from-rose-600 via-red-600 to-rose-700'
                }
                bg-clip-text text-transparent
              `}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {isSuccess ? '送信完了' : '送信失敗'}
            </motion.h3>

            {/* Message */}
            <motion.p 
              className="text-gray-700 mb-8 text-lg leading-relaxed text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {message}
            </motion.p>

            {/* Enhanced button */}
            <motion.button
              onClick={onClose}
              className={`
                w-full py-4 px-8 rounded-2xl font-semibold text-lg
                bg-gradient-to-r ${isSuccess 
                  ? 'from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700' 
                  : 'from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700'
                }
                text-white shadow-lg  cursor-pointer
                ${isSuccess ? 'shadow-emerald-500/25' : 'shadow-red-500/25'}
                transition-all duration-300 transform
                hover:shadow-xl ${isSuccess ? 'hover:shadow-emerald-500/30' : 'hover:shadow-red-500/30'}
                focus:outline-none focus:ring-4 focus:ring-white/30
                relative overflow-hidden
              `}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent cursor-pointer"
                animate={{
                  x: [-100, 300],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
              閉じる
            </motion.button>

            {/* Floating particles effect */}
            {isSuccess && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-70"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [-10, -20, -10],
                      opacity: [0.7, 0.3, 0.7],
                      scale: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;