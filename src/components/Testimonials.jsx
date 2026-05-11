import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Robert Wilson',
    role: 'Chief Marketing Officer, InnovateCorp',
    quote: 'Innovative, reliable, and results-driven—Decodersdigital is a fantastic tech partner.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&q=90',
  },
  {
    id: 2,
    name: 'Emily Scott',
    role: 'Director of IT, Nexus Systems',
    quote: 'Exceptional service & technical excellence. Decodersdigital consistently impresses.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&q=90',
  },
  {
    id: 3,
    name: 'David Turner',
    role: 'VP of Product Dev, AlphaTech',
    quote: 'Professional, efficient, and always on point. Truly impressed by Decodersdigital!',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&q=90',
  },
]

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

function TestimonialCard({ testimonial, isHovered, onHover, index, isInView }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ y: -3, scale: 1.015 }}
      onMouseEnter={onHover}
      className={`relative bg-white rounded-2xl p-4 sm:p-5 pl-6 flex items-start gap-3
                  border-[1.5px] border-black/10 transition-shadow duration-300 cursor-default overflow-hidden
                  ${isHovered
                    ? 'shadow-[0_4px_24px_rgba(118,94,237,0.12)]'
                    : 'shadow-[0_2px_12px_rgba(0,0,0,0.05)]'
                  }`}
    >
      {/* Left border indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-[10px] rounded-r-full bg-gradient-to-r from-primary to-primary/20" />

      {/* Avatar */}
      <div className={`shrink-0 rounded-full p-[2px] transition-all duration-300 ${isHovered ? 'ring-2 ring-primary/40 ring-offset-2' : ''}`}>
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-100"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-[15px] sm:text-[16px] text-dark leading-tight tracking-[-0.01em]">
          {testimonial.name}
        </h4>
        <p className="text-[12px] font-medium text-dark mt-0.5 mb-2.5">
          {testimonial.role}
        </p>
        <p className="text-[13px] sm:text-[14px] text-dark leading-[1.7] font-normal">
          {testimonial.quote}
        </p>
      </div>

      {/* Quote mark */}
      <motion.div
        className="absolute top-4 right-5"
        initial={false}
        animate={{ color: isHovered ? '#765EED' : 'rgba(0,0,0,0.08)', scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <svg width="30" height="24" viewBox="0 0 30 24" fill="currentColor">
          <path d="M0 14.4C0 8.4 3.6 3.6 9.6 0l2.4 3.6C7.2 6 5.4 9 5.4 12H12v12H0V14.4ZM18 14.4C18 8.4 21.6 3.6 27.6 0L30 3.6C25.2 6 23.4 9 23.4 12H30v12H18V14.4Z" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headingRef = useRef(null)
  const cardsRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-80px' })
  const isCardsInView = useInView(cardsRef, { once: true, margin: '-60px' })
  const [hoveredIndex, setHoveredIndex] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = useCallback(() => {
    setHoveredIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [isPaused, nextTestimonial])

  return (
    <section className="relative bg-white py-0">
      <div className="w-full max-w-[1060px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Right — Heading & Description */}
          <div ref={headingRef} className="order-1 md:order-2 md:pl-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200/50">
                <motion.span
                  className="w-[6px] h-[6px] rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="text-[11px] text-primary-600 font-semibold tracking-[0.14em] uppercase">Testimonials</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-10 h-[2.5px] rounded-full bg-gradient-to-r from-primary to-primary-300 mb-5 origin-left"
            />

            <motion.h2
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={isHeadingInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="text-[24px] sm:text-[28px] md:text-[34px] font-medium leading-[1.15] tracking-[-0.025em] text-dark mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              What Our Valuable
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary-400">
                Customers
              </span>{' '}
              Say
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="text-[13px] sm:text-[14px] text-dark leading-[1.75] max-w-[360px]"
            >
              At Decodersdigital, customer satisfaction is our top
              priority. We take pride in the trust and appreciation
              our clients have for our services. Through their
              feedback, we continuously strive to improve and innovate.
            </motion.p>
          </div>

          {/* Left — Stacked Cards (staggered layout) */}
          <div
            ref={cardsRef}
            className="flex flex-col gap-3 order-2 md:order-1"
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials.map((testimonial, i) => {
              const offsets = ['md:ml-4 lg:ml-8 md:mr-0', 'md:-ml-4 lg:-ml-10 md:mr-4 lg:mr-10', 'md:ml-4 lg:ml-8 md:mr-0']
              return (
                <div key={testimonial.id} className={offsets[i % offsets.length]}>
                  <TestimonialCard
                    testimonial={testimonial}
                    isHovered={i === hoveredIndex}
                    onHover={() => { setHoveredIndex(i); setIsPaused(true) }}
                    index={i}
                    isInView={isCardsInView}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
