import { useState, useEffect, useRef } from 'react'
import { FaFacebook, FaInfoCircle } from 'react-icons/fa'

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%'
    const characters = matrix.split('')
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(26, 255, 26, 0.35)'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-50" />
}

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'HCMUTE-ISC'
  const description = 'Câu lạc bộ An toàn thông tin - Trường Đại học Sư phạm Kỹ thuật TP.HCM'
  const [descText, setDescText] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        let descIndex = 0
        const descInterval = setInterval(() => {
          if (descIndex <= description.length) {
            setDescText(description.slice(0, descIndex))
            descIndex++
          } else {
            clearInterval(descInterval)
          }
        }, 50)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <MatrixRain />
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="hero-content text-center cyber-box w-full max-w-4xl mx-4 backdrop-blur-md relative">
          <div className="w-full">
            <div className="relative inline-block">
              <h1 className="text-6xl font-bold glitch-text mb-8">
                {text}<span className="animate-terminal-blink">_</span>
              </h1>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-full h-1 bg-matrix/10 animate-scan"></div>
              </div>
            </div>
            <p className="py-6 terminal-text text-xl">
              {descText}<span className="animate-terminal-blink">|</span>
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a 
                href="https://www.facebook.com/hisc.fit.hcmute.edu.vn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cyber-button bg-matrix/15 hover:bg-matrix/20 border-matrix/50 text-matrix/90 font-cyber px-6 py-3 flex items-center"
              >
                <FaFacebook className="mr-2" />
                Tham gia ngay
              </a>
              <a 
                href="#about"
                className="cyber-button bg-transparent hover:bg-matrix/10 border-matrix/35 text-matrix/70 font-cyber px-6 py-3 flex items-center"
              >
                <FaInfoCircle className="mr-2" />
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 