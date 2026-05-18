import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Screenshots.css'

const screenshots = [
  {
    id: 1,
    title: '下载设置',
    description: '直观的下载配置界面，支持多种下载方式和筛选条件',
  },
  {
    id: 2,
    title: '图片预览',
    description: '实时预览已下载的壁纸，支持分页浏览和管理',
  },
  {
    id: 3,
    title: '应用设置',
    description: '丰富的设置选项，支持主题切换和性能优化',
  },
]

const Screenshots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="screenshots" className="screenshots">
      <div className="screenshots-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">界面预览</span>
          <h2 className="section-title">精美的用户界面</h2>
          <p className="section-description">
            采用 Fluent Design 设计语言，配合液态玻璃效果，带来极致的视觉体验
          </p>
        </motion.div>

        <div className="screenshots-showcase">
          <motion.div
            className="screenshot-main"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="screenshot-frame">
              <div className="frame-header">
                <div className="frame-controls">
                  <span className="control" />
                  <span className="control" />
                  <span className="control" />
                </div>
                <div className="frame-title">WallHaven Go</div>
              </div>
              <div className="frame-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="screenshot-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`mock-screen screen-${screenshots[activeIndex].id}`}>
                      {activeIndex === 0 && (
                        <div className="mock-download">
                          <div className="mock-sidebar">
                            <div className="mock-nav-item active">↓ 下载</div>
                            <div className="mock-nav-item">◻ 预览</div>
                            <div className="mock-nav-item">⚙ 设置</div>
                            <div className="mock-nav-item">ⓘ 关于</div>
                          </div>
                          <div className="mock-main">
                            <div className="mock-card">
                              <div className="mock-card-title">下载设置</div>
                              <div className="mock-form">
                                <div className="mock-form-row">
                                  <label>下载方式</label>
                                  <div className="mock-radio-group">
                                    <span className="mock-radio active">● 分类</span>
                                    <span className="mock-radio">○ 最新</span>
                                    <span className="mock-radio">○ 搜索</span>
                                  </div>
                                </div>
                                <div className="mock-form-row">
                                  <label>类别</label>
                                  <div className="mock-check-group">
                                    <span className="mock-check checked">☑ 一般</span>
                                    <span className="mock-check checked">☑ 动漫</span>
                                    <span className="mock-check">☐ 人物</span>
                                  </div>
                                </div>
                                <div className="mock-form-row">
                                  <label>纯度</label>
                                  <div className="mock-check-group">
                                    <span className="mock-check checked">☑ SFW</span>
                                    <span className="mock-check">☐ Sketchy</span>
                                  </div>
                                </div>
                                <div className="mock-form-row">
                                  <label>下载目录</label>
                                  <div className="mock-input">/Users/Wallpapers</div>
                                </div>
                              </div>
                              <button className="mock-btn">开始下载</button>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeIndex === 1 && (
                        <div className="mock-download">
                          <div className="mock-sidebar">
                            <div className="mock-nav-item">↓ 下载</div>
                            <div className="mock-nav-item active">◻ 预览</div>
                            <div className="mock-nav-item">⚙ 设置</div>
                            <div className="mock-nav-item">ⓘ 关于</div>
                          </div>
                          <div className="mock-main">
                            <div className="mock-preview-header">
                              <span>总数: 24</span>
                              <span>成功: 24</span>
                              <span>失败: 0</span>
                            </div>
                            <div className="mock-grid">
                              {[...Array(6)].map((_, i) => (
                                <div key={i} className="mock-thumb" />
                              ))}
                            </div>
                            <div className="mock-pagination">
                              <span>第 1 页 / 共 4 页</span>
                              <div className="mock-page-btns">
                                <button>上一页</button>
                                <button>下一页</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeIndex === 2 && (
                        <div className="mock-download">
                          <div className="mock-sidebar">
                            <div className="mock-nav-item">↓ 下载</div>
                            <div className="mock-nav-item">◻ 预览</div>
                            <div className="mock-nav-item active">⚙ 设置</div>
                            <div className="mock-nav-item">ⓘ 关于</div>
                          </div>
                          <div className="mock-main">
                            <div className="mock-card">
                              <div className="mock-card-title">应用设置</div>
                              <div className="mock-form">
                                <div className="mock-form-row">
                                  <label>主题</label>
                                  <div className="mock-select">深色 ▼</div>
                                </div>
                                <div className="mock-form-row">
                                  <label>语言</label>
                                  <div className="mock-select">简体中文 ▼</div>
                                </div>
                                <div className="mock-form-row">
                                  <label>API 密钥</label>
                                  <div className="mock-input">••••••••••••</div>
                                </div>
                                <div className="mock-form-row">
                                  <label>并发下载数</label>
                                  <div className="mock-slider">
                                    <div className="mock-slider-track">
                                      <div className="mock-slider-fill" style={{ width: '50%' }} />
                                    </div>
                                    <span>5</span>
                                  </div>
                                </div>
                                <div className="mock-toggle-row">
                                  <span>高性能模式</span>
                                  <div className="mock-toggle active">
                                    <div className="mock-toggle-dot" />
                                  </div>
                                </div>
                              </div>
                              <button className="mock-btn">保存设置</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="screenshot-glow" />
          </motion.div>

          <div className="screenshot-nav">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                className={`screenshot-nav-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="nav-item-content">
                  <span className="nav-item-number">0{index + 1}</span>
                  <div className="nav-item-text">
                    <span className="nav-item-title">{screenshot.title}</span>
                    <span className="nav-item-desc">{screenshot.description}</span>
                  </div>
                </div>
                <div className="nav-item-indicator" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Screenshots
