import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const inlineImages = {
  software: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=600&fit=crop&crop=top&q=100',
  saas:     'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop&crop=center&q=100',
  ai:       'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=600&fit=crop&crop=center&q=100',
}

const charReveal = {
  hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.3 + i * 0.018,
      duration: 0.4,
      ease: [0.44, 0, 0.56, 1],
    },
  }),
}

function AnimatedChars({ text }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          variants={charReveal}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  )
}

function InlineImage({ src, alt, delay, floatY = 6, floatDuration = 3.2, rotateDeg = 2 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, y: 14, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      transition={{ delay, duration: 0.9, ease: [0.09, 0.89, 0.36, 0.96] }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        margin: '0 7px',
        verticalAlign: 'middle',
        position: 'relative',
        top: '-2px',
      }}
    >
      <motion.span
        animate={{
          y: [-floatY / 2, floatY / 2, -floatY / 2],
          rotate: [-rotateDeg, rotateDeg, -rotateDeg],
        }}
        transition={{
          duration: floatDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          delay: delay * 0.3,
        }}
        style={{ display: 'inline-flex', position: 'relative' }}
      >
        {/* Spinning conic accent ring */}
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background:
              'conic-gradient(from 0deg, transparent 60%, rgba(124,58,237,0.55) 80%, transparent 100%)',
            zIndex: 0,
          }}
        />
        {/* White separator ring */}
        <span
          style={{
            position: 'absolute',
            inset: '-1.5px',
            borderRadius: '50%',
            background: 'white',
            zIndex: 1,
          }}
        />
        <img
          src={src}
          alt={alt}
          style={{
            position: 'relative',
            zIndex: 2,
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
            boxShadow:
              '0 10px 40px rgba(109,40,217,0.20), 0 2px 10px rgba(0,0,0,0.10)',
          }}
          className="
            w-[26px]  h-[26px]
            sm:w-[36px] sm:h-[36px]
            md:w-[46px] md:h-[46px]
            lg:w-[56px] lg:h-[56px]
          "
        />
      </motion.span>
    </motion.span>
  )
}

function HoverWord({ children, className }) {
  return (
    <motion.span
      className={`inline-block cursor-default ${className || ''}`}
      whileHover={{
        scale: 1.06,
        color: '#765EED',
        transition: { type: 'spring', stiffness: 400, damping: 15 },
      }}
    >
      {children}
    </motion.span>
  )
}

function HoverAccentWord({ children }) {
  return (
    <motion.span
      className="inline-block cursor-default text-primary"
      whileHover={{
        scale: 1.06,
        filter: 'brightness(1.2)',
        transition: { type: 'spring', stiffness: 400, damping: 15 },
      }}
    >
      {children}
    </motion.span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  const headlineY = useTransform(smoothProgress, [0, 1], [0, -60])
  const subY = useTransform(smoothProgress, [0, 1], [0, -30])
  const btnY = useTransform(smoothProgress, [0, 1], [0, -15])
  const headlineOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0])
  const headlineScale = useTransform(smoothProgress, [0, 0.5], [1, 0.96])
  const bgGradientOpacity = useTransform(smoothProgress, [0, 0.5], [0.4, 0])

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      <motion.div
        style={{ opacity: bgGradientOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-10 pt-6 md:pt-8 pb-4 md:pb-6 flex flex-col items-center">

        <motion.h1
          style={{ y: headlineY, opacity: headlineOpacity, scale: headlineScale }}
          className="font-display font-medium text-center text-[28px] sm:text-[38px] md:text-[50px] lg:text-[62px] leading-[1.15] tracking-tight text-dark"
        >

          {/* Line 1 — Custom [code editor] Software, */}
          <span className="block">
            <HoverWord><AnimatedChars text="Custom" /></HoverWord>
            <InlineImage
              src={inlineImages.software}
              alt="Software development"
              delay={0.65}
              floatY={7}
              floatDuration={3.0}
              rotateDeg={2.5}
            />
            <HoverAccentWord><AnimatedChars text="Software," /></HoverAccentWord>
          </span>

          {/* Line 2 — SaaS [product UI] & AI-Powered */}
          <span className="block mt-1">
            <HoverWord><AnimatedChars text="SaaS" /></HoverWord>
            <InlineImage
              src={inlineImages.saas}
              alt="SaaS platform"
              delay={0.95}
              floatY={8}
              floatDuration={3.7}
              rotateDeg={3}
            />
            <HoverWord><AnimatedChars text=" & " /></HoverWord>
            <HoverAccentWord><AnimatedChars text="AI-Powered" /></HoverAccentWord>
          </span>

          {/* Line 3 — Solutions [ai] for Business */}
          <span className="block mt-1">
            <HoverWord><AnimatedChars text="Solutions" /></HoverWord>
            <InlineImage
              src={inlineImages.ai}
              alt="AI solutions"
              delay={1.25}
              floatY={6}
              floatDuration={2.8}
              rotateDeg={2}
            />
            <HoverAccentWord><AnimatedChars text="for Business" /></HoverAccentWord>
          </span>
        </motion.h1>

        <motion.p
          style={{ y: subY }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6, type: 'spring', damping: 20 }}
          className="text-center text-dark text-[14px] md:text-[16px] leading-6 max-w-[520px] mt-4 md:mt-5"
        >
          Custom software, SaaS platforms, and AI-powered solutions
          built to grow modern businesses.
        </motion.p>

        <motion.div
          style={{ y: btnY }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, type: 'spring', damping: 20 }}
          className="mt-5 md:mt-6"
        >
          <motion.a
            href="#works"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                       bg-primary text-white text-[14px] font-medium
                       hover:bg-primary-dark transition-colors duration-300
                       shadow-[0_4px_24px_rgba(118,94,237,0.25)]
                       hover:shadow-[0_8px_32px_rgba(118,94,237,0.4)]"
          >
            View Our Work
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
