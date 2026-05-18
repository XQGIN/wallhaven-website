import React from 'react'
import './Footer.css'

const footerLinks = [
  {
    title: '产品',
    links: [
      { label: '功能特性', href: '#features' },
      { label: '下载', href: '#download' },
      { label: '更新日志', href: '#' },
    ],
  },
  {
    title: '资源',
    links: [
      { label: 'GitHub', href: 'https://github.com/XQGIN/Wallhaven-Go' },
      { label: '问题反馈', href: 'https://github.com/XQGIN/Wallhaven-Go/issues' },
      { label: '文档', href: '#' },
    ],
  },
  {
    title: '关于',
    links: [
      { label: '关于我们', href: '#' },
      { label: '许可证', href: '#' },
      { label: '致谢', href: '#' },
    ],
  },
]

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <svg viewBox="0 0 100 100" width="32" height="32">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="50" r="8" fill="currentColor"/>
              </svg>
              <span>WallHaven Go</span>
            </a>
            <p className="footer-description">
              基于 Electron + React 构建的高性能壁纸下载工具
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/XQGIN/Wallhaven-Go"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="footer-links">
              <h4 className="footer-links-title">{group.title}</h4>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WallHaven Go. Open source under MIT License.</p>
          <p>
            Made with ❤️ by{' '}
            <a
              href="https://github.com/XQGIN"
              target="_blank"
              rel="noopener noreferrer"
            >
              XQGIN
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
