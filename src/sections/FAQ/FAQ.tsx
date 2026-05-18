import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQ.css'

const faqs = [
  {
    question: 'WallHaven Go 是免费的吗？',
    answer: '是的，WallHaven Go 是完全免费的开源软件，采用 MIT 协议发布。你可以自由使用、修改和分发。',
  },
  {
    question: '需要 Wallhaven 账号吗？',
    answer: '基础功能不需要账号即可使用。但如果你想访问 NSFW 内容或提高 API 调用限制，建议注册 Wallhaven 账号并配置 API 密钥。',
  },
  {
    question: '支持哪些壁纸分辨率？',
    answer: 'WallHaven Go 支持所有 Wallhaven 提供的分辨率。你可以按横向、纵向、正方形筛选，也可以设置自定义比例。',
  },
  {
    question: '下载的壁纸保存在哪里？',
    answer: '默认保存在系统的下载文件夹中。你可以在设置中自定义下载目录，支持任意本地路径。',
  },
  {
    question: '如何更新到最新版本？',
    answer: 'Windows 和 macOS 版本支持自动更新检查。Linux 用户需要手动下载新版本。你也可以在 GitHub Releases 页面查看最新版本。',
  },
  {
    question: '遇到下载失败怎么办？',
    answer: '请检查网络连接和下载目录权限。如果问题持续，可以尝试降低并发下载数或开启高性能模式。你也可以在 GitHub Issues 寻求帮助。',
  },
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title">常见问题</h2>
          <p className="section-description">
            关于 WallHaven Go 的一些常见疑问解答
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
