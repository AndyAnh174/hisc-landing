import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: 'https://facebook.com/hcmute.isc', label: 'Facebook', icon: 'M16.5 8.25v-3a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3h-3a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h3z' },
    { href: 'https://github.com/hcmute-isc', label: 'Github', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z' },
  ]

  const quickLinks = [
    { href: '#about', label: 'Về chúng tôi' },
    { href: '#activities', label: 'Hoạt động' },
    { href: '#join', label: 'Tham gia' },
  ]

  return (
    <footer className="bg-cyber-dark border-t border-matrix/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold terminal-text mb-4">Liên hệ</h3>
            <div className="flex items-center space-x-2 text-matrix/80">
              <MapPinIcon className="h-5 w-5" />
              <p className="text-sm">1 Võ Văn Ngân, Linh Chiểu, Thủ Đức, TP.HCM</p>
            </div>
            <div className="flex items-center space-x-2 text-matrix/80">
              <EnvelopeIcon className="h-5 w-5" />
              <a href="mailto:isc@hcmute.edu.vn" className="text-sm hover:text-matrix">
                isc@hcmute.edu.vn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold terminal-text mb-4">Truy cập nhanh</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-matrix/80 hover:text-matrix transition-colors duration-200"
                  >
                    <span className="mr-2">&gt;</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold terminal-text mb-4">Kết nối</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-matrix/60 hover:text-matrix transition-colors duration-200"
                  aria-label={link.label}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={link.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-matrix/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-matrix/60 text-sm">
              &copy; {currentYear} HCMUTE-ISC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-matrix/60 hover:text-matrix text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="mx-2 text-matrix/30">|</span>
              <a
                href="#"
                className="text-matrix/60 hover:text-matrix text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 