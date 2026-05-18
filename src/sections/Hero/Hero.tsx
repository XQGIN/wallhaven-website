import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero: React.FC = () => {
  const scrollToDownload = () => {
    const element = document.querySelector('#download')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToFeatures = () => {
    const element = document.querySelector('#features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-dot" />
            <span>v3.0 全新发布</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="gradient-text">WallHaven Go</span>
            <br />
            <span className="hero-subtitle-text">智能壁纸下载工具</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            基于 Electron + React 构建的高性能壁纸下载器
            <br />
            支持多平台运行，提供流畅的下载体验与精美的液态玻璃视觉效果
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button className="glass-button glass-button-primary hero-cta" onClick={scrollToDownload}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              立即下载
            </button>
            <button className="glass-button hero-secondary" onClick={scrollToFeatures}>
              了解更多
            </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="stat-item">
              <span className="stat-value">3</span>
              <span className="stat-label">平台支持</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">10K+</span>
              <span className="stat-label">日下载量</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">MIT</span>
              <span className="stat-label">开源协议</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="hero-app-preview">
            <div className="app-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close" />
                  <span className="control minimize" />
                  <span className="control maximize" />
                </div>
                <div className="window-title">WallHaven Go</div>
              </div>
              <div className="window-content">
                <div className="preview-sidebar">
                  <div className="sidebar-item active">
                    <span className="sidebar-icon">↓</span>
                    <span>下载</span>
                  </div>
                  <div className="sidebar-item">
                    <span className="sidebar-icon">◻</span>
                    <span>预览</span>
                  </div>
                  <div className="sidebar-item">
                    <span className="sidebar-icon">⚙</span>
                    <span>设置</span>
                  </div>
                </div>
                <div className="preview-main">
                  <div className="preview-card">
                    <div className="card-title">下载设置</div>
                    <div className="preview-form">
                      <div className="form-row">
                        <div className="form-label">下载方式</div>
                        <div className="form-options">
                          <span className="option active">分类</span>
                          <span className="option">最新</span>
                          <span className="option">搜索</span>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-label">类别</div>
                        <div className="form-checkboxes">
                          <span className="checkbox checked">✓ 一般</span>
                          <span className="checkbox checked">✓ 动漫</span>
                          <span className="checkbox">◻ 人物</span>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-label">下载目录</div>
                        <div className="form-input">/Users/Wallpapers</div>
                      </div>
                    </div>
                    <div className="preview-button">开始下载</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-glow" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>向下滚动</span>
      </motion.div>
    </section>
  )
}

export default Hero
