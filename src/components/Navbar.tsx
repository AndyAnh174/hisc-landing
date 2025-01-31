import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaFacebook, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#about', label: 'Về chúng tôi' },
    { href: '#activities', label: 'Hoạt động' },
    { href: '#join', label: 'Tham gia' },
  ]

  const socialLinks = [
    { href: 'https://www.facebook.com/hisc.fit.hcmute.edu.vn', label: 'Facebook', Icon: FaFacebook },
    { href: 'https://github.com/HCMUTE-ISC', label: 'Github', Icon: FaGithub },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="terminal-text text-2xl font-bold">
              <span className="text-matrix">&gt;</span> HCMUTE-ISC
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="terminal-text hover:text-matrix transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-matrix/30"></div>
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
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cyber-button p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-matrix" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-matrix" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden cyber-box mt-2 py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="terminal-text hover:text-matrix transition-colors duration-200 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-matrix mr-2">&gt;</span>
                  {item.label}
                </a>
              ))}
              <div className="h-px w-full bg-matrix/30 my-2"></div>
              <div className="flex space-x-6 px-4">
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
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 