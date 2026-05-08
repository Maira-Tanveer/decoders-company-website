import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const mockResponses = {
  default: "Thanks for reaching out! We'd love to help. Could you tell us more about your project requirements?",
  greeting: "Hello! Welcome to Decoders Digital. How can we help you today? Feel free to ask about our services, pricing, or past work.",
  services: "We offer three core services:\n\n1. Custom Software Development - tailored solutions for your business\n2. SaaS Platform Development - scalable cloud-based products\n3. AI-Powered Solutions - intelligent automation & machine learning\n\nWhich one interests you?",
  pricing: "Our pricing depends on the project scope and complexity. Typically:\n\n- Small projects: $5K - $15K\n- Mid-size projects: $15K - $50K\n- Enterprise solutions: $50K+\n\nWe'd love to give you an accurate quote. Drop us a message at the Contact page!",
  portfolio: "We've delivered 50+ projects across industries including fintech, healthcare, e-commerce, and education. Check out our Works section to see some of our best projects!",
  tech: "Our tech stack includes:\n\n- Frontend: React, Next.js, Vue.js\n- Backend: Node.js, Python, Go\n- AI/ML: TensorFlow, PyTorch, OpenAI\n- Cloud: AWS, GCP, Azure\n\nWe pick the best tools for each project.",
  timeline: "Project timelines vary based on scope:\n\n- MVP / Prototype: 4-8 weeks\n- Full product: 3-6 months\n- Enterprise platform: 6-12 months\n\nWe follow agile methodology with bi-weekly demos.",
  contact: "You can reach us through:\n\n- Our Contact page on this website\n- Email: hello@decodersdigital.com\n\nWe typically respond within 24 hours!",
}

function getResponse(message) {
  const lower = message.toLowerCase()
  if (/^(hi|hello|hey|good morning|good evening)/.test(lower)) return mockResponses.greeting
  if (/servic|what (do|can) you|offer|build/.test(lower)) return mockResponses.services
  if (/pric|cost|budget|how much|rate|charge/.test(lower)) return mockResponses.pricing
  if (/portfolio|work|project|case stud|example/.test(lower)) return mockResponses.portfolio
  if (/tech|stack|language|framework|tool/.test(lower)) return mockResponses.tech
  if (/time|how long|duration|deadline|deliver/.test(lower)) return mockResponses.timeline
  if (/contact|email|reach|call|phone/.test(lower)) return mockResponses.contact
  return mockResponses.default
}

const quickQuestions = [
  { label: 'Our Services', value: 'What services do you offer?' },
  { label: 'Pricing', value: 'What is your pricing?' },
  { label: 'Portfolio', value: 'Show me your portfolio' },
  { label: 'Tech Stack', value: 'What tech stack do you use?' },
]

function BotAvatar() {
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
      style={{ background: 'linear-gradient(135deg, #765EED, #5A3FD6)' }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v2H8V6a4 4 0 014-4z" />
        <rect x="4" y="8" width="16" height="12" rx="3" />
        <circle cx="9" cy="14" r="1.5" fill="white" stroke="none" />
        <circle cx="15" cy="14" r="1.5" fill="white" stroke="none" />
      </svg>
    </div>
  )
}

const msgVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi there! I'm Decoders AI assistant. Ask me anything about our services, pricing, or tech stack." },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, typing])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const sendMessage = (text) => {
    const msg = text || input.trim()
    if (!msg) return

    setMessages((prev) => [...prev, { role: 'user', text: msg }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { role: 'bot', text: getResponse(msg) }])
    }, 800 + Math.random() * 600)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full
                   text-white text-[13px] font-semibold tracking-wide
                   shadow-[0_8px_32px_rgba(118,94,237,0.4)]
                   hover:shadow-[0_12px_40px_rgba(118,94,237,0.5)]
                   transition-shadow duration-300 cursor-pointer"
        style={{ background: 'linear-gradient(135deg, #765EED 0%, #5A3FD6 100%)' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
        Ask Decoders AI
      </motion.button>

      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[76px] right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] rounded-3xl overflow-hidden
                       bg-white flex flex-col"
            style={{
              height: '520px',
              maxHeight: 'calc(100vh - 140px)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.12), 0 8px 24px rgba(118,94,237,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
            }}
          >
            {/* Header */}
            <div
              className="relative px-5 py-4 flex items-center gap-3.5"
              style={{ background: 'linear-gradient(135deg, #765EED 0%, #5A3FD6 100%)' }}
            >
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)',
                }}
              />
              <div className="relative w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 014 4v2H8V6a4 4 0 014-4z" />
                  <rect x="4" y="8" width="16" height="12" rx="3" />
                  <circle cx="9" cy="14" r="1.5" fill="white" stroke="none" />
                  <circle cx="15" cy="14" r="1.5" fill="white" stroke="none" />
                </svg>
              </div>
              <div className="relative">
                <div className="text-white text-[15px] font-semibold tracking-tight">Decoders AI</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white/60 text-[11px] font-medium">Online now</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="relative ml-auto w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center
                           hover:bg-white/20 transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4"
              style={{ background: 'linear-gradient(180deg, #f8f7fc 0%, #ffffff 100%)' }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  variants={msgVariants}
                  initial="hidden"
                  animate="visible"
                  className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'bot' && <BotAvatar />}
                  <div
                    className={`max-w-[78%] px-4 py-3 text-[13px] leading-[1.6] whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'rounded-[18px] rounded-br-[4px] text-white font-medium'
                        : 'rounded-[18px] rounded-bl-[4px] text-dark bg-white border border-black-08'
                    }`}
                    style={
                      msg.role === 'user'
                        ? { background: 'linear-gradient(135deg, #765EED 0%, #5A3FD6 100%)' }
                        : { boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  variants={msgVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-end gap-2 justify-start"
                >
                  <BotAvatar />
                  <div
                    className="bg-white border border-black-08 rounded-[18px] rounded-bl-[4px] px-5 py-3.5 flex items-center gap-1.5"
                    style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-primary-300 rounded-full"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.span
                      className="w-2 h-2 bg-primary-300 rounded-full"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                    />
                    <motion.span
                      className="w-2 h-2 bg-primary-300 rounded-full"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick questions */}
            <AnimatePresence>
              {messages.length <= 1 && !typing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-3 flex flex-wrap gap-2 bg-white border-t border-black-08"
                >
                  <span className="w-full text-[11px] text-gray-muted font-medium pt-3 pb-1">Suggested questions</span>
                  {quickQuestions.map((q) => (
                    <button
                      key={q.value}
                      onClick={() => sendMessage(q.value)}
                      className="px-3.5 py-2 rounded-xl text-[12px] font-medium text-primary-700
                                 border border-primary-100 bg-primary-50
                                 hover:bg-primary-100 hover:border-primary-200 transition-all duration-200 cursor-pointer"
                    >
                      {q.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="px-3.5 py-3 border-t border-black-08 bg-white">
              <div
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-colors duration-200"
                style={{
                  borderColor: input.trim() ? 'rgba(118,94,237,0.3)' : 'rgba(0,0,0,0.06)',
                  background: input.trim() ? 'rgba(118,94,237,0.03)' : '#f8f8fa',
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 text-[13px] text-dark placeholder:text-gray-muted outline-none bg-transparent py-0.5"
                />
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center
                             transition-all duration-200 cursor-pointer shrink-0"
                  style={{
                    background: input.trim()
                      ? 'linear-gradient(135deg, #765EED 0%, #5A3FD6 100%)'
                      : 'linear-gradient(135deg, #765EED 0%, #5A3FD6 100%)',
                    opacity: input.trim() ? 1 : 0.5,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Footer branding */}
            <div className="px-4 pb-3 pt-0 bg-white">
              <div className="text-center text-[10px] text-gray-muted/50 font-medium">
                Powered by Decoders Digital
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
