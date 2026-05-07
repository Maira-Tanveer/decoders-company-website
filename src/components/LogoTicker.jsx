import { motion } from 'framer-motion'

const logos = [
  {
    name: 'React',
    svg: (
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none">
        <circle cx="14" cy="18" r="3" fill="#61DAFB" />
        <ellipse cx="14" cy="18" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1" fill="none" />
        <ellipse cx="14" cy="18" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 14 18)" />
        <ellipse cx="14" cy="18" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 14 18)" />
        <text x="30" y="24" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#4A5568" letterSpacing="0.5">React</text>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none">
        <circle cx="14" cy="18" r="12" fill="#000" />
        <path d="M10 12v12l9-12" fill="#fff" />
        <line x1="20" y1="12" x2="20" y2="24" stroke="#fff" strokeWidth="1.5" />
        <text x="30" y="24" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#2D3748" letterSpacing="-0.5">Next.js</text>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none">
        <path d="M14 4L26 11v14l-12 7L2 25V11z" fill="#339933" opacity="0.15" stroke="#339933" strokeWidth="1.2" />
        <text x="14" y="22" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#339933" textAnchor="middle">JS</text>
        <text x="32" y="24" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#4A5568" letterSpacing="0.3">Node.js</text>
      </svg>
    ),
  },
  {
    name: 'Python',
    svg: (
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none">
        <rect x="4" y="8" width="10" height="10" rx="2" fill="#3776AB" opacity="0.8" />
        <rect x="14" y="18" width="10" height="10" rx="2" fill="#FFD43B" opacity="0.8" />
        <circle cx="8" cy="12" r="1.2" fill="#fff" />
        <circle cx="20" cy="24" r="1.2" fill="#fff" />
        <text x="30" y="24" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#4A5568" letterSpacing="0.3">Python</text>
      </svg>
    ),
  },
  {
    name: 'TensorFlow',
    svg: (
      <svg width="160" height="36" viewBox="0 0 160 36" fill="none">
        <path d="M14 6v24M8 12l6-6 6 6M8 18h12M8 24l6 6 6-6" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round" />
        <text x="28" y="24" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="600" fill="#4A5568" letterSpacing="0.3">TensorFlow</text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    svg: (
      <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
        <path d="M4 22l8-14 8 14" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 26c6-2 14-2 20 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        <text x="28" y="24" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800" fill="#232F3E" letterSpacing="1">AWS</text>
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    svg: (
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none">
        <circle cx="14" cy="18" r="10" stroke="#10A37F" strokeWidth="1.5" fill="none" />
        <path d="M9 18c0-3 2-5 5-5s5 2 5 5-2 5-5 5" stroke="#10A37F" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2" fill="#10A37F" />
        <text x="30" y="24" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#4A5568" letterSpacing="0.3">OpenAI</text>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    svg: (
      <svg width="145" height="36" viewBox="0 0 145 36" fill="none">
        <path d="M8 28L12 6l5 10-5 4z" fill="#FFA000" opacity="0.8" />
        <path d="M8 28l4-8 8 4z" fill="#F57C00" opacity="0.8" />
        <path d="M12 20l3-14 5 10z" fill="#FFCA28" opacity="0.8" />
        <text x="28" y="24" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="600" fill="#4A5568" letterSpacing="0.3">Firebase</text>
      </svg>
    ),
  },
]

export default function LogoTicker() {
  return (
    <section className="relative bg-white py-10 md:py-14 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-52 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-52 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="flex">
        <motion.div
          className="flex items-center shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ x: { duration: 30, repeat: Infinity, ease: 'linear' } }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="shrink-0 mx-10 md:mx-16 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-400 cursor-default"
            >
              {logo.svg}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
