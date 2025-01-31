import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaFacebook, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: 'https://www.facebook.com/hisc.fit.hcmute.edu.vn', label: 'Facebook', Icon: FaFacebook },
    { href: 'https://github.com/HCMUTE-ISC', label: 'Github', Icon: FaGithub },
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
              <a href="mailto:clb.antoanthongtin@student.hcmute.edu.vn" className="text-sm hover:text-matrix">
                clb.antoanthongtin@student.hcmute.edu.vn
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
              {socialLinks.map((link) => {
                const Icon = link.Icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-matrix/60 hover:text-matrix transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-matrix/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-matrix/60 text-sm">
              &copy; {currentYear} HCMUTE-ISC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 