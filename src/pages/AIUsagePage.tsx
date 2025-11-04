import { motion } from 'framer-motion'
import { Bot, CheckCircle, FileText, Lightbulb, Shield, Users } from 'lucide-react'

const AIUsagePage = () => {
  const aiTools = [
    {
      name: 'ChatGPT',
      purpose: 'Hỗ trợ nghiên cứu, tổng hợp thông tin về chính sách dân tộc',
      usage: 'Tạo nội dung ban đầu, gợi ý cấu trúc',
      verification: 'Đối chiếu với văn kiện Đảng, nghị quyết chính thống'
    },
    {
      name: 'Gemini AI',
      purpose: 'Phân tích văn bản, tổng hợp tài liệu lịch sử',
      usage: 'Hỗ trợ viết phần phân tích, tóm tắt',
      verification: 'Kiểm chứng bằng sách giáo khoa, tài liệu học thuật'
    },
    {
      name: 'Augment AI',
      purpose: 'Hỗ trợ lập trình website',
      usage: 'Gợi ý code, tối ưu hóa giao diện',
      verification: 'Kiểm tra code, test chức năng'
    }
  ]

  const prompts = [
    {
      category: 'Nghiên cứu nội dung',
      examples: [
        'Phân tích chính sách dân tộc của Việt Nam trong thời kỳ quá độ lên CNXH',
        'Tổng hợp 5 chính sách cơ bản về bảo tồn văn hóa dân tộc thiểu số',
        'So sánh cương lĩnh dân tộc Mác-Lênin với chính sách dân tộc Việt Nam'
      ]
    },
    {
      category: 'Phát triển website',
      examples: [
        'Tạo component React cho timeline lịch sử với animation',
        'Thiết kế giao diện trang chủ với Tailwind CSS',
        'Xây dựng chatbot AI về vấn đề dân tộc'
      ]
    }
  ]

  const responsibilities = [
    {
      icon: Shield,
      title: 'Kiểm chứng thông tin',
      description: 'Mọi thông tin do AI tạo ra đều được đối chiếu với nguồn chính thống: Văn kiện Đảng, Nghị quyết, Luật Lịch sử Chính trị (LLCT)',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Chịu trách nhiệm nội dung',
      description: 'Sinh viên chịu trách nhiệm hoàn toàn về nội dung cuối cùng, AI chỉ là công cụ hỗ trợ',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Sáng tạo có chủ đích',
      description: 'AI hỗ trợ tạo sơ đồ, video, chatbot nhưng không thay thế hoàn toàn công việc nghiên cứu',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Minh bạch quy trình',
      description: 'Ghi rõ phần nào do AI tạo, phần nào do sinh viên chỉnh sửa và bổ sung',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const aiOutputs = [
    {
      section: 'Phần CQ - 5 chính sách dân tộc',
      aiGenerated: 'Nội dung ban đầu về 5 chính sách (70%)',
      studentEdited: 'Bổ sung chi tiết, điều chỉnh ngôn ngữ, thêm ví dụ cụ thể (30%)',
      sources: ['Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH', 'Nghị quyết Đại hội Đảng']
    },
    {
      section: 'Timeline lịch sử',
      aiGenerated: 'Gợi ý cấu trúc, các mốc thời gian chính (50%)',
      studentEdited: 'Nghiên cứu, bổ sung chi tiết sự kiện, xác minh ngày tháng (50%)',
      sources: ['Lịch sử Đảng Cộng sản Việt Nam', 'Sách giáo khoa Lịch sử 12']
    },
    {
      section: 'Giao diện website',
      aiGenerated: 'Code mẫu, component cơ bản (60%)',
      studentEdited: 'Tùy chỉnh thiết kế, tối ưu UX, thêm animation (40%)',
      sources: ['React Documentation', 'Tailwind CSS Docs']
    },
    {
      section: 'Chatbot AI Dân tộc',
      aiGenerated: 'Xây dựng logic chatbot, training data (80%)',
      studentEdited: 'Tinh chỉnh câu trả lời, thêm ngữ cảnh Việt Nam (20%)',
      sources: ['Tài liệu về chính sách dân tộc', 'Văn kiện Đảng']
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Bot className="w-4 h-4 mr-2" />
            Minh bạch sử dụng AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">AI Usage - Sử dụng AI có trách nhiệm</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cam kết minh bạch, có trách nhiệm và sáng tạo trong việc sử dụng AI để phát triển dự án
          </p>
        </motion.div>

        {/* AI Tools Used */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Công cụ AI đã sử dụng</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Mục đích:</span>
                    <p className="text-gray-600">{tool.purpose}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Cách sử dụng:</span>
                    <p className="text-gray-600">{tool.usage}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Kiểm chứng:</span>
                    <p className="text-gray-600">{tool.verification}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Prompts */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prompt chính đã sử dụng</h2>
          <div className="space-y-6">
            {prompts.map((prompt, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{prompt.category}</h3>
                <ul className="space-y-2">
                  {prompt.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nguyên tắc sử dụng AI có trách nhiệm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((resp, index) => {
              const Icon = resp.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resp.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{resp.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{resp.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* AI Output vs Student Edit */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Phân biệt AI Output và Chỉnh sửa của Sinh viên</h2>
          <div className="space-y-6">
            {aiOutputs.map((output, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                  <h3 className="text-xl font-bold">{output.section}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                        AI
                      </span>
                    </div>
                    <p className="text-gray-700">{output.aiGenerated}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                        Sinh viên
                      </span>
                    </div>
                    <p className="text-gray-700">{output.studentEdited}</p>
                  </div>
                  <div className="border-t pt-4">
                    <span className="font-semibold text-gray-700">Nguồn kiểm chứng:</span>
                    <ul className="mt-2 space-y-1">
                      {output.sources.map((source, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIUsagePage

