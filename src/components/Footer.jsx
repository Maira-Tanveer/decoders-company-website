import logo from '../assets/logo.jpeg'

const navLinks = [
  { label: 'Overview', href: '#' },
  { label: 'Portfolio', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mairakahloon/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M4.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM1.8 5.2h2.4v9.3H1.8V5.2zM6.8 5.2H9v1.3h.03c.3-.58 1.1-1.5 2.4-1.5 2.55 0 3.02 1.68 3.02 3.86v4.64h-2.4V9.35c0-1.22-.02-2.8-1.7-2.8-1.7 0-1.96 1.33-1.96 2.71v5.24H6.8V5.2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9 1.5a7.5 7.5 0 00-2.37 14.62c.37.07.51-.16.51-.36v-1.3c-2.1.46-2.54-1.01-2.54-1.01-.34-.87-.84-1.1-.84-1.1-.69-.47.05-.46.05-.46.76.05 1.16.78 1.16.78.67 1.15 1.76.82 2.19.63.07-.49.26-.82.48-1.01-1.68-.19-3.44-.84-3.44-3.74 0-.83.3-1.5.78-2.03-.08-.19-.34-.96.07-2 0 0 .63-.2 2.07.78a7.2 7.2 0 013.76 0c1.44-.98 2.07-.78 2.07-.78.41 1.04.15 1.81.07 2 .49.53.78 1.2.78 2.03 0 2.91-1.77 3.55-3.45 3.74.27.23.51.69.51 1.4v2.07c0 .2.14.43.52.36A7.5 7.5 0 009 1.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9 2.622c2.074 0 2.32.008 3.137.045.757.035 1.168.16 1.441.266.362.14.621.309.893.58.272.273.44.531.581.894.106.273.231.684.266 1.44.037.818.045 1.064.045 3.138s-.008 2.32-.045 3.137c-.035.757-.16 1.168-.266 1.441a2.406 2.406 0 01-.58.893 2.406 2.406 0 01-.894.581c-.273.106-.684.231-1.44.266-.818.037-1.064.045-3.138.045s-2.32-.008-3.137-.045c-.757-.035-1.168-.16-1.441-.266a2.406 2.406 0 01-.893-.58 2.406 2.406 0 01-.581-.894c-.106-.273-.231-.684-.266-1.44C2.63 11.304 2.622 11.058 2.622 9s.008-2.32.045-3.137c.035-.757.16-1.168.266-1.441.14-.362.309-.621.58-.893.273-.272.531-.44.894-.581.273-.106.684-.231 1.44-.266C6.666 2.63 6.912 2.622 9 2.622zM9 1.5c-2.11 0-2.374.009-3.203.047-.827.038-1.392.169-1.887.361a3.81 3.81 0 00-1.378.897A3.81 3.81 0 001.635 4.183c-.192.495-.323 1.06-.36 1.887C1.236 6.899 1.227 7.163 1.227 9.273s.009 2.374.047 3.203c.038.827.169 1.392.361 1.887.199.511.464.945.897 1.378.433.433.867.698 1.378.897.495.192 1.06.323 1.887.36.829.039 1.093.048 3.203.048s2.374-.009 3.203-.047c.827-.038 1.392-.169 1.887-.361a3.81 3.81 0 001.378-.897c.433-.433.698-.867.897-1.378.192-.495.323-1.06.36-1.887.039-.829.048-1.093.048-3.203s-.009-2.374-.047-3.203c-.038-.827-.169-1.392-.361-1.887a3.81 3.81 0 00-.897-1.378 3.81 3.81 0 00-1.378-.897c-.495-.192-1.06-.323-1.887-.36C11.374 1.509 11.11 1.5 9 1.5z" />
        <path d="M9 5.149A3.851 3.851 0 1012.851 9 3.854 3.854 0 009 5.149zM9 11.5A2.5 2.5 0 1111.5 9 2.503 2.503 0 019 11.5z" />
        <circle cx="13.011" cy="4.989" r=".9" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#F2F2F2' }} className="pt-12 pb-6">
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <a href="#" className="shrink-0 block bg-black rounded-xl overflow-hidden px-4 py-2">
            <img
              src={logo}
              alt="Decoders Digital"
              className="h-[32px] md:h-[38px] w-auto object-contain"
              style={{ filter: 'hue-rotate(45deg) saturate(1.8) brightness(1.2)' }}
            />
          </a>

          {/* Nav links */}
          <nav className="flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-gray-subtle hover:text-dark transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-subtle hover:text-primary hover:border-primary transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-6" />

        {/* Copyright */}
        <p className="text-center text-[13px] text-gray-subtle font-medium">
          2024 Decodersdigital. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
