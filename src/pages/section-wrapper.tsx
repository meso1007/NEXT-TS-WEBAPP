"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  initial?: string
  animate?: string
  variants?: Variants
  once?: boolean
  amount?: number
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export default function SectionWrapper({
  id,
  children,
  className,
  variants = defaultVariants,
  once = true,
  amount = 0.1,
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.section>
  )
}