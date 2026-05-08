import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'

const serviceImages = {
  strategy: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&q=100',
  build: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop&crop=center&q=100',
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

function InlineImage({ src, alt, delay, floatY = 5, floatDuration = 3.2, rotateDeg = 2 }) {
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
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, transparent 60%, rgba(118,94,237,0.55) 80%, transparent 100%)',
            zIndex: 0,
          }}
        />
        <span
          style={{
            position: 'absolute',
            inset: '-1.5px',
            borderRadius: '50%',
            background: '#0a0a0a',
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
            boxShadow: '0 10px 40px rgba(109,40,217,0.25), 0 2px 10px rgba(0,0,0,0.2)',
          }}
          className="w-[30px] h-[30px] sm:w-[44px] sm:h-[44px] md:w-[58px] md:h-[58px] lg:w-[70px] lg:h-[70px]"
        />
      </motion.span>
    </motion.span>
  )
}

function ServicesHero() {
  return (
    <section className="relative bg-dark overflow-hidden py-16 md:py-24">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-15 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #765EED, transparent 70%)' }}
      />
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-5 md:px-10 flex flex-col items-center text-center">
        <h1 className="font-display text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] leading-[1.1] tracking-tight text-white">
          <span className="block">
            <AnimatedChars text="What We" />
            <InlineImage
              src={serviceImages.strategy}
              alt="Strategy"
              delay={0.6}
              floatY={6}
              floatDuration={3.0}
              rotateDeg={2}
            />
            <span className="text-primary-light"><AnimatedChars text="Deliver" /></span>
          </span>
          <span className="block mt-1">
            <AnimatedChars text="Our" />
            <InlineImage
              src={serviceImages.build}
              alt="Building"
              delay={0.9}
              floatY={7}
              floatDuration={3.5}
              rotateDeg={2.5}
            />
            <span className="text-primary-light"><AnimatedChars text="Services" /></span>
          </span>
        </h1>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <Services />
      <Footer />
    </>
  )
}
