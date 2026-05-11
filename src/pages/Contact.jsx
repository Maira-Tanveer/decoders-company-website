import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import logo from '../assets/logo1.png'

const contactImages = {
  handshake: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=600&fit=crop&crop=center&q=100',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=center&q=100',
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

function ContactHero() {
  return (
    <section className="relative bg-dark overflow-hidden py-4 md:py-6">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-15 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #765EED, transparent 70%)' }}
      />
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-5 md:px-10 flex flex-col items-center text-center">
        <h1 className="font-display text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] leading-[1.1] tracking-tight text-white">
          <span className="block">
            <AnimatedChars text="Let's Built" />
            <InlineImage
              src={contactImages.handshake}
              alt="Handshake"
              delay={0.6}
              floatY={6}
              floatDuration={3.0}
              rotateDeg={2}
            />
            <span className="text-primary-light"><AnimatedChars text="Something" /></span>
          </span>
          <span className="block mt-1">
            <AnimatedChars text="Together" />
            <InlineImage
              src={contactImages.team}
              alt="Team collaboration"
              delay={0.9}
              floatY={7}
              floatDuration={3.5}
              rotateDeg={2.5}
            />
            <span className="text-primary-light"><AnimatedChars text="Contact" /></span>
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6, type: 'spring', damping: 20 }}
          className="text-white/45 text-[14px] md:text-[16px] leading-[1.8] max-w-[480px] mt-7"
        >
          Have a project, idea, or challenge? We'd love to hear it. Let's collaborate
          and bring something meaningful to life.
        </motion.p>
      </div>
    </section>
  )
}

const serviceOptions = [
  'Custom Software Development',
  'SaaS Product Development',
  'AI / Machine Learning',
  'Mobile App Development',
  'Web Application',
  'UI/UX Design',
  'Other',
]

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
      <path d="M4.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM1.8 5.2h2.4v9.3H1.8V5.2zM6.8 5.2H9v1.3h.03c.3-.58 1.1-1.5 2.4-1.5 2.55 0 3.02 1.68 3.02 3.86v4.64h-2.4V9.35c0-1.22-.02-2.8-1.7-2.8-1.7 0-1.96 1.33-1.96 2.71v5.24H6.8V5.2z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
      <path d="M9 1.5a7.5 7.5 0 00-2.37 14.62c.37.07.51-.16.51-.36v-1.3c-2.1.46-2.54-1.01-2.54-1.01-.34-.87-.84-1.1-.84-1.1-.69-.47.05-.46.05-.46.76.05 1.16.78 1.16.78.67 1.15 1.76.82 2.19.63.07-.49.26-.82.48-1.01-1.68-.19-3.44-.84-3.44-3.74 0-.83.3-1.5.78-2.03-.08-.19-.34-.96.07-2 0 0 .63-.2 2.07.78a7.2 7.2 0 013.76 0c1.44-.98 2.07-.78 2.07-.78.41 1.04.15 1.81.07 2 .49.53.78 1.2.78 2.03 0 2.91-1.77 3.55-3.45 3.74.27.23.51.69.51 1.4v2.07c0 .2.14.43.52.36A7.5 7.5 0 009 1.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
      <path d="M9 2.622c2.074 0 2.32.008 3.137.045.757.035 1.168.16 1.441.266.362.14.621.309.893.58.272.273.44.531.581.894.106.273.231.684.266 1.44.037.818.045 1.064.045 3.138s-.008 2.32-.045 3.137c-.035.757-.16 1.168-.266 1.441a2.406 2.406 0 01-.58.893 2.406 2.406 0 01-.894.581c-.273.106-.684.231-1.44.266-.818.037-1.064.045-3.138.045s-2.32-.008-3.137-.045c-.757-.035-1.168-.16-1.441-.266a2.406 2.406 0 01-.893-.58 2.406 2.406 0 01-.581-.894c-.106-.273-.231-.684-.266-1.44C2.63 11.304 2.622 11.058 2.622 9s.008-2.32.045-3.137c.035-.757.16-1.168.266-1.441.14-.362.309-.621.58-.893.273-.272.531-.44.894-.581.273-.106.684-.231 1.44-.266C6.666 2.63 6.912 2.622 9 2.622zM9 1.5c-2.11 0-2.374.009-3.203.047-.827.038-1.392.169-1.887.361a3.81 3.81 0 00-1.378.897A3.81 3.81 0 001.635 4.183c-.192.495-.323 1.06-.36 1.887C1.236 6.899 1.227 7.163 1.227 9.273s.009 2.374.047 3.203c.038.827.169 1.392.361 1.887.199.511.464.945.897 1.378.433.433.867.698 1.378.897.495.192 1.06.323 1.887.36.829.039 1.093.048 3.203.048s2.374-.009 3.203-.047c.827-.038 1.392-.169 1.887-.361a3.81 3.81 0 001.378-.897c.433-.433.698-.867.897-1.378.192-.495.323-1.06.36-1.887.039-.829.048-1.093.048-3.203s-.009-2.374-.047-3.203c-.038-.827-.169-1.392-.361-1.887a3.81 3.81 0 00-.897-1.378 3.81 3.81 0 00-1.378-.897c-.495-.192-1.06-.323-1.887-.36C11.374 1.509 11.11 1.5 9 1.5z" />
      <path d="M9 5.149A3.851 3.851 0 1012.851 9 3.854 3.854 0 009 5.149zM9 11.5A2.5 2.5 0 1111.5 9 2.503 2.503 0 019 11.5z" />
      <circle cx="13.011" cy="4.989" r=".9" />
    </svg>
  )
}

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mairakahloon/', Icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com', Icon: GitHubIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
]

function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section ref={ref} style={{ backgroundColor: '#F2F2F2' }} className="py-12 md:py-16">
      <div className="w-full max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[13px] text-gray-muted font-medium tracking-wide">(Contact)</span>
            <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-dark mt-2 mb-7">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-dark">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full bg-transparent border-b border-gray-300 pb-2.5 text-[14px] text-dark
                             placeholder:text-gray-muted/60 outline-none
                             focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-dark">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter the Email"
                  className="w-full bg-transparent border-b border-gray-300 pb-2.5 text-[14px] text-dark
                             placeholder:text-gray-muted/60 outline-none
                             focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-dark">How can we help?</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 pb-3 text-[14px] text-dark
                               outline-none appearance-none cursor-pointer
                               focus:border-primary transition-colors duration-300"
                  >
                    <option value="" disabled>Select</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-0 top-1 w-4 h-4 text-gray-muted pointer-events-none"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-dark">Project Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Type Here...."
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-300 pb-2.5 text-[14px] text-dark
                             placeholder:text-gray-muted/60 outline-none resize-none
                             focus:border-primary transition-colors duration-300"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-full py-3.5 rounded-full bg-gray-200 text-dark text-[14px] font-semibold
                           hover:bg-primary hover:text-white transition-all duration-300
                           border border-gray-300 hover:border-primary mt-1"
              >
                Send Now!
              </motion.button>
            </form>
          </motion.div>

          {/* Right — Logo Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end lg:pt-10"
          >
            <div
              className="relative w-full max-w-[400px] aspect-[3/4] rounded-3xl bg-dark overflow-hidden
                          shadow-[0_24px_64px_rgba(0,0,0,0.15)]
                          flex flex-col items-center justify-between py-10"
            >
              {/* Top ambient glow */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 20%, #765EED 0%, transparent 65%)' }}
              />

              {/* Bottom ambient glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, #765EED 0%, transparent 70%)' }}
              />

              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Corner accents */}
              <div className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-white/10 rounded-tl-lg pointer-events-none" />
              <div className="absolute top-5 right-5 w-8 h-8 border-r-2 border-t-2 border-white/10 rounded-tr-lg pointer-events-none" />
              <div className="absolute bottom-5 left-5 w-8 h-8 border-l-2 border-b-2 border-white/10 rounded-bl-lg pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-white/10 rounded-br-lg pointer-events-none" />

              {/* Top tagline */}
              <div className="relative z-10 flex flex-col items-center gap-1 px-6 text-center">
                <span className="text-white/20 text-[11px] tracking-[0.2em] uppercase font-medium">
                  Decoders Digital
                </span>
                <div className="w-8 h-[1px] bg-white/10 mt-1" />
              </div>

              {/* Center — Logo fills the middle */}
              <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-8">
                {/* Soft glow behind logo */}
                <div
                  className="absolute w-[220px] h-[220px] rounded-full opacity-10 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #765EED, transparent 70%)' }}
                />
                {/* Logo card */}
                <div
                  className="relative z-10 w-full rounded-2xl overflow-hidden flex items-center justify-center py-8 px-6"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  <img
                    src={logo}
                    alt="Decoders Digital"
                    className="w-full max-w-[320px] h-auto object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(52%) saturate(2800%) hue-rotate(237deg) brightness(97%) contrast(93%)' }}
                  />
                </div>
              </div>

              {/* Bottom — Connect label + social icons */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <span className="text-white/20 text-[11px] tracking-[0.15em] uppercase">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center
                                 text-white/50 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function MapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative bg-white py-14 md:py-20">
      <div className="w-full max-w-[1100px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
        >
          <div>
            <span className="text-[13px] text-gray-muted font-medium tracking-wide">(Location)</span>
            <h2 className="font-display text-[26px] md:text-[36px] leading-[1.15] tracking-tight text-dark mt-1.5">
              Visit Our Office
            </h2>
          </div>
          <a
            href="https://maps.google.com/?q=1395+Brickell+Ave+Suite+800+Miami+FL+33131"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-primary hover:text-primary-600 transition-colors duration-300"
          >
            Get Directions
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden border border-black/[0.06]
                     shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        >
          <iframe
            title="Decoders Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-80.1918!3d25.7585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6a4b9d4c8e7%3A0x0!2s1395+Brickell+Ave+Suite+800%2C+Miami%2C+FL+33131!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[380px] md:h-[420px]"
          />

          <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-xl
                          px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-black/[0.04]
                          max-w-[300px]">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#765EED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-dark leading-tight">Decoders Digital</p>
                <p className="text-[12px] text-gray-muted leading-relaxed mt-0.5">
                  1395 Brickell Ave Suite 800,<br />Miami FL 33131
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <MapSection />
      <Footer />
    </>
  )
}