import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ChevronDown, ChevronUp, Lightbulb, Link as LinkIcon } from 'lucide-react'
import { cqAnswers } from '../data/cqData'

const CQPage = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Trả lời câu hỏi CQ
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Câu hỏi Chuyên đề</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Phân tích chi tiết các câu hỏi chuyên đề về dân tộc trong thời kỳ quá độ lên CNXH
          </p>
        </motion.div>

        {/* CQ Answers */}
        <div className="space-y-6">
          {cqAnswers.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full p-6 hover:bg-emerald-50 transition-colors duration-200 text-left"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      Câu hỏi CQ: {item.question}
                    </h2>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === item.id ? (
                      <ChevronUp className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 space-y-6">
                      {/* Main Answer */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trả lời:</h3>
                        <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                          {item.answer}
                        </div>
                      </div>

                      {/* Key Points */}
                      <div className="bg-emerald-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <Lightbulb className="w-5 h-5 text-emerald-600 mr-2" />
                          <h4 className="text-lg font-semibold text-gray-900">Những điểm chính:</h4>
                        </div>
                        <ul className="space-y-3">
                          {item.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-600 text-white text-sm font-semibold mr-3 flex-shrink-0">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Related Topics */}
                      <div>
                        <div className="flex items-center mb-4">
                          <LinkIcon className="w-5 h-5 text-teal-600 mr-2" />
                          <h4 className="text-lg font-semibold text-gray-900">Các chủ đề liên quan:</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {item.relatedTopics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium hover:bg-teal-200 transition-colors duration-200"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CQPage

