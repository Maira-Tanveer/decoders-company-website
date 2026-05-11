import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const contactInfo = [
  {
    label: 'Call Us',
    value: '+1 786 9104615',
    href: 'tel:+17869104615',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: 'Chat Instantly',
    href: 'https://wa.me/17869104615',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'shahbazdev0@gmail.com',
    href: 'mailto:shahbazdev0@gmail.com',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
  {
    label: 'Office',
    value: '1395 Brickell Ave Suite 800, Miami FL 33131',
    href: 'https://maps.google.com/?q=1395+Brickell+Ave+Suite+800+Miami+FL+33131',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-white py-0 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #765EED, transparent 70%)' }}
      />

      <div ref={ref} className="w-full max-w-[1060px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 35, stiffness: 180 }}
          className="relative rounded-3xl bg-white px-6 md:px-16 py-14 md:py-20 overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
            <div className="absolute top-6 left-6 w-12 h-px bg-gradient-to-r from-primary/20 to-transparent" />
            <div className="absolute top-6 left-6 w-px h-12 bg-gradient-to-b from-primary/20 to-transparent" />
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
            <div className="absolute top-6 right-6 w-12 h-px bg-gradient-to-l from-primary/20 to-transparent" />
            <div className="absolute top-6 right-6 w-px h-12 bg-gradient-to-b from-primary/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none">
            <div className="absolute bottom-6 left-6 w-12 h-px bg-gradient-to-r from-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 w-px h-12 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none">
            <div className="absolute bottom-6 right-6 w-12 h-px bg-gradient-to-l from-primary/20 to-transparent" />
            <div className="absolute bottom-6 right-6 w-px h-12 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] pointer-events-none opacity-[0.06] blur-[60px]"
            style={{ background: 'radial-gradient(ellipse, #765EED, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100">
                <motion.span
                  className="w-[6px] h-[6px] rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="text-[11px] text-primary-600 font-semibold tracking-[0.14em] uppercase">Start a Project</span>
              </span>
            </motion.div>

            {/* ✦ ACCENT LINE REMOVED ✦ */}

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] tracking-tight text-dark max-w-[600px]"
            >
              Let's Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary-400">
                Something Great
              </span>{' '}
              Together
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-[14px] md:text-[16px] text-gray-subtle leading-[1.75] max-w-[440px]"
            >
              Whether it's an MVP, a full product, or scaling your engineering
              team — we're ready to turn your vision into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center gap-3.5 mt-9"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                             bg-primary text-white text-[14px] font-medium
                             hover:bg-dark transition-colors duration-300
                             shadow-[0_12px_24px_-6px_rgba(118,94,237,0.35)]"
                >
                  Start a Conversation
                  <svg
                    width="15" height="15" viewBox="0 0 16 16" fill="none"
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>

              <motion.a
                href="#works"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                           bg-white text-dark text-[14px] font-medium
                           border-[1.5px] border-black/10
                           hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                View Our Work
              </motion.a>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[520px] h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mt-14 mb-12 origin-center"
            />

            {/* Contact heading badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100">
                <span className="w-[6px] h-[6px] rounded-full bg-primary" />
                <span className="text-[11px] text-primary-600 font-semibold tracking-[0.14em] uppercase">Reach Out Anytime</span>
              </span>
            </motion.div>

            {/* ✦ PREMIUM CONTACT CARDS ✦ */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-3.5 w-full">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col items-start text-left
                             px-3.5 sm:px-5 py-4 sm:py-[22px] cursor-pointer overflow-hidden
                             bg-[#fafafa] rounded-[20px]
                             border border-[#f0f0f0]
                             hover:bg-white
                             hover:border-primary/20
                             hover:shadow-[0_8px_24px_-4px_rgba(118,94,237,0.10)]
                             transition-all duration-500 ease-out"
                >
                  {/* Purple bottom glow on hover */}
                  <div className="absolute bottom-0 left-[10%] right-[10%] h-[3px] rounded-full
                                  bg-primary opacity-0 blur-[2px]
                                  group-hover:opacity-60
                                  transition-opacity duration-500 ease-out" />

                  {/* Icon box */}
                  <div
                    className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-[12px] sm:rounded-[14px] flex items-center justify-center mb-3 sm:mb-[18px]
                               bg-white border border-[#ebebeb]
                               group-hover:bg-primary group-hover:border-primary
                               group-hover:shadow-[0_6px_20px_rgba(118,94,237,0.30)]
                               transition-all duration-400 ease-out"
                  >
                    <span className="text-primary group-hover:text-white transition-colors duration-400">
                      {item.icon}
                    </span>
                  </div>

                  {/* Label */}
                  <span
                    className="text-[11px] sm:text-[10px] font-semibold tracking-[0.1em] uppercase
                               text-gray-400 group-hover:text-primary
                               transition-colors duration-300 mb-[5px]"
                  >
                    {item.label}
                  </span>

                  {/* Value */}
                  <span className="text-[11px] sm:text-[12.5px] text-dark font-medium leading-[1.5] break-words">
                    {item.value}
                  </span>

                  {/* Arrow — top right, slides in on hover */}
                  <span
                    className="absolute top-5 right-4 opacity-0 -translate-x-1
                               group-hover:opacity-100 group-hover:translate-x-0
                               transition-all duration-350"
                  >
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="#765EED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}