import React from 'react'
import { motion } from 'framer-motion'
import './Download.css'

const platforms = [
  {
    id: 'windows',
    name: 'Windows',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
      </svg>
    ),
    formats: [
      { name: '安装版 (NSIS)', size: '~85 MB', url: 'https://github.com/XQGIN/Wallhaven-Go/releases/download/V3.0.0/WallHaven.Go.Setup.3.0.0.exe' },
      { name: '便携版', size: '~85 MB', url: 'https://github.com/XQGIN/Wallhaven-Go/releases/download/V3.0.0/WallHaven.Go-Portable-3.0.0.zip' },
    ],
    requirements: 'Windows 10/11',
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    formats: [
      { name: 'Intel 版', size: '~90 MB', url: '#' },
      { name: 'Apple Silicon', size: '~90 MB', url: '#' },
    ],
    requirements: 'macOS 10.14+',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.41v.019c.002.089.008.179.074.402.023.077.08.142.147.18-.065.022-.132.04-.197.066-.086.03-.18.088-.284.133-.06.026-.088.03-.147.06a.99.99 0 01-.21-.335 1.665 1.665 0 01-.15-.706v-.024c-.004.02-.004.04-.004.06.008-.265.06-.465.166-.724.11-.201.248-.398.438-.533.188-.136.371-.198.584-.198z"/>
      </svg>
    ),
    formats: [
      { name: 'AppImage', size: '~95 MB', url: '#' },
      { name: 'deb 包', size: '~95 MB', url: '#' },
    ],
    requirements: 'Ubuntu 18.04+',
  },
]

const Download: React.FC = () => {
  return (
    <section id="download" className="download">
      <div className="download-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">下载</span>
          <h2 className="section-title">选择你的平台</h2>
          <p className="section-description">
            WallHaven Go 支持 Windows、macOS 和 Linux 三大主流平台
          </p>
        </motion.div>

        <div className="download-grid">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              className="download-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="download-card-header">
                <div className="platform-icon">{platform.icon}</div>
                <div className="platform-info">
                  <h3 className="platform-name">{platform.name}</h3>
                  <span className="platform-requirements">{platform.requirements}</span>
                </div>
              </div>

              <div className="download-formats">
                {platform.formats.map((format) => (
                  <a
                    key={format.name}
                    href={format.url}
                    className="download-format"
                  >
                    <div className="format-info">
                      <span className="format-name">{format.name}</span>
                      <span className="format-size">{format.size}</span>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="download-source"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>或者从源代码构建</p>
          <a
            href="https://github.com/XQGIN/Wallhaven-Go"
            target="_blank"
            rel="noopener noreferrer"
            className="source-link"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            查看 GitHub 仓库
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Download
