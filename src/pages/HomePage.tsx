import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  Users,
  Globe,
  // BookOpen, // Removed since using Award icon for quiz link
  Target,
  // Lightbulb,
  Heart,
  Award,
  Flag,
  Star,
  Sword,
  Bot,
  Shield,
  CheckCircle
} from 'lucide-react'

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const keyPoints = [
    {
      icon: Target,
      title: 'Mục tiêu nghiên cứu',
      description: 'Tìm hiểu vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội, từ lý thuyết đến thực tiễn'
    },
    {
      icon: Calendar,
      title: 'Quá trình phát triển',
      description: 'Từ cương lĩnh dân tộc Mác-Lênin đến chính sách dân tộc của Việt Nam hiện đại'
    },
    {
      icon: Globe,
      title: 'Bối cảnh lịch sử',
      description: 'Thời kỳ phong trào giải phóng dân tộc và xây dựng chủ nghĩa xã hội ở các nước'
    },
    {
      icon: Users,
      title: 'Ý nghĩa thời đại',
      description: 'Tác động của chính sách dân tộc đến sự phát triển bền vững và đoàn kết quốc gia'
    }
  ]

  // const features = [
  //   {
  //     icon: BookOpen,
  //     title: 'Tài liệu đầy đủ',
  //     description: 'Dựa trên các nguồn tài liệu lịch sử chính thức và đáng tin cậy',
  //     color: 'from-blue-500 to-cyan-500'
  //   },
  //   {
  //     icon: Lightbulb,
  //     title: 'Công nghệ hiện đại',
  //     description: 'Ứng dụng AI và công nghệ web để tăng trải nghiệm học tập',
  //     color: 'from-purple-500 to-pink-500'
  //   },
  //   {
  //     icon: Heart,
  //     title: 'Dễ tiếp cận',
  //     description: 'Thiết kế thân thiện, phù hợp với mọi đối tượng người dùng',
  //     color: 'from-green-500 to-emerald-500'
  //   },
  //   {
  //     icon: Award,
  //     title: 'Khoa học khách quan',
  //     description: 'Phân tích dựa trên dữ kiện lịch sử và phương pháp khoa học',
  //     color: 'from-orange-500 to-red-500'
  //   }
  // ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-background">
        <div className="absolute inset-0 animated-bg opacity-15"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 float-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full opacity-25 float-animation-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 float-animation"></div>

        {/* Vietnam flag inspired decorative elements */}
        <div className="absolute top-1/3 right-10 w-8 h-8 vietnam-flag-colors rounded-full opacity-40 float-animation-delayed"></div>
        <div className="absolute bottom-1/3 left-16 w-6 h-6 vietnam-flag-colors rounded-full opacity-50 float-animation"></div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-8">
                <Award className="w-4 h-4 mr-2" />
                Sản phẩm môn học Lịch sử Đảng Cộng sản Việt Nam
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              <span className="text-gradient-solid">DÂN TỘC TRONG THỜI KỲ</span>
              <br />
              <motion.span
                className="text-3xl md:text-4xl text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Quá độ lên Chủ nghĩa Xã hội
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Khám phá và tìm hiểu vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội,
              từ cương lĩnh dân tộc Mác-Lênin đến chính sách dân tộc của Việt Nam,
              với sự hỗ trợ của công nghệ hiện đại và trí tuệ nhân tạo.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/timeline"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 pulse-glow"
                >
                  Khám phá dòng thời gian
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Key Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Những điểm quan trọng
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tìm hiểu về quá trình hình thành và phát triển tư tưởng của Chủ tịch Hồ Chí Minh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg pulse-glow">
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đặc điểm nổi bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Website được thiết kế với các tính năng hiện đại và phương pháp tiếp cận khoa học
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Historical Context with Images Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dân tộc Việt Nam - Đặc điểm và Chính sách
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá cấu trúc, phân bố, văn hóa và chính sách phát triển của 54 dân tộc Việt Nam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 54 Ethnic Groups */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/54-dan-toc.jpg"
                  alt="54 dân tộc Việt Nam"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Users className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">54 dân tộc</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">54 Dân tộc Việt Nam</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Việt Nam có 54 dân tộc với đặc điểm riêng biệt. Dân tộc Kinh chiếm 85,7%,
                  53 dân tộc thiểu số chiếm 14,3% dân số nhưng ¾ diện tích lãnh thổ.
                </p>
              </div>
            </motion.div>

            {/* Ethnic Distribution */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/phan-bo-dan-toc.jpg"
                  alt="Phân bố dân tộc"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Globe className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Phân bố địa lý</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phân bố Dân tộc</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Các dân tộc thiểu số phân bố ở vùng biên giới, hải đảo, vùng sâu vùng xa.
                  Cư trú xen kẽ, không dân tộc nào có lãnh thổ riêng biệt.
                </p>
              </div>
            </motion.div>

            {/* Ethnic Solidarity Tradition */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/doan-ket-dan-toc.jpg"
                  alt="Đoàn kết dân tộc"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Flag className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Đoàn kết</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Truyền thống Đoàn kết Dân tộc</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Các dân tộc Việt Nam có lịch sử cộng đồng: cùng dựng nước và giữ nước.
                  Đoàn kết dân tộc là nguồn sức mạnh quyết định mọi thắng lợi lịch sử.
                </p>
              </div>
            </motion.div>

            {/* Ethnic Culture */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/van-hoa-dan-toc.jpg"
                  alt="Văn hóa dân tộc"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Heart className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Văn hóa</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bản sắc Văn hóa Dân tộc</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nền văn hóa Việt Nam thống nhất trong đa dạng. Mỗi dân tộc có bản sắc riêng
                  nhưng gắn bó với bản sắc chung của cộng đồng các dân tộc.
                </p>
              </div>
            </motion.div>

            {/* Ethnic Policy */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/chinh-sach-dan-toc.jpg"
                  alt="Chính sách dân tộc"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Star className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Chính sách</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Chính sách Dân tộc Việt Nam</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng tiến bộ.
                  Xóa bỏ khoảng cách phát triển giữa các dân tộc.
                </p>
              </div>
            </motion.div>

            {/* Ethnic Development */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/phat-trien-dan-toc.jpg"
                  alt="Phát triển dân tộc"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <Sword className="w-6 h-6 mb-1" />
                  <p className="text-xs font-semibold">Phát triển</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phát triển Bền vững Dân tộc</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nâng cao đời sống vật chất và tinh thần cho đồng bào dân tộc thiểu số.
                  Phát huy bản sắc văn hóa và truyền thống đoàn kết.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Assistant Feature Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Tính năng AI sáng tạo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Trò chuyện với AI Dân tộc</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trải nghiệm học tập tương tác độc đáo với AI Assistant được huấn luyện về vấn đề dân tộc trong thời kỳ quá độ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* AI Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Chuyên gia dân tộc</h3>
                    <p className="text-gray-600 text-sm">
                      Trò chuyện với AI được huấn luyện chuyên sâu về vấn đề dân tộc,
                      cung cấp thông tin chính xác về cương lĩnh dân tộc Mác-Lênin và chính sách dân tộc Việt Nam
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Kiến thức phong phú</h3>
                    <p className="text-gray-600 text-sm">
                      Được huấn luyện trên các tác phẩm, bài viết và tài liệu
                      về vấn đề dân tộc, chủ nghĩa Mác-Lênin và chính sách dân tộc
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Tương tác thông minh</h3>
                    <p className="text-gray-600 text-sm">
                      Hỗ trợ giọng nói tiếng Việt, câu hỏi gợi ý thông minh
                      và phân tích sâu sắc về vấn đề dân tộc
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                {/* Mock chat interface */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center space-x-3">
                  <img
                    src="/images/img2.svg"
                    alt="AI Dân tộc Việt Nam"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div>
                    <h4 className="font-semibold">AI Dân tộc</h4>
                    <p className="text-xs opacity-90">Trợ lý AI chuyên về vấn đề dân tộc</p>
                  </div>
                </div>

                <div className="p-4 space-y-4 h-64 overflow-hidden">
                                    <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none max-w-xs">
                      <p className="text-sm text-gray-800">
                        Xin chào! Tôi là AI Dân tộc, được huấn luyện chuyên sâu về
                        vấn đề dân tộc, cương lĩnh dân tộc Mác-Lênin và chính sách dân tộc. Bạn muốn tìm hiểu về vấn đề gì?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-none max-w-xs">
                      <p className="text-sm">
                        Dạ, cương lĩnh dân tộc Mác-Lênin có nội dung gì ạ?
                      </p>
                    </div>
                  </div>

                                    <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none max-w-xs">
                      <p className="text-sm text-gray-800">
                        Cương lĩnh dân tộc Mác-Lênin có ba nội dung cơ bản: bình đẳng dân tộc,
                        quyền tự quyết dân tộc, và liên hiệp công nhân...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-100 rounded-xl p-3">
                      <p className="text-sm text-gray-500">Đặt câu hỏi về vấn đề dân tộc...</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 float-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60 float-animation-delayed"></div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sẵn sàng khám phá vấn đề dân tộc với AI?
              </h3>
                            <p className="text-gray-600 mb-6">
                Nhấn vào biểu tượng chat ở góc dưới bên phải để bắt đầu cuộc trò chuyện
                với AI và khám phá những kiến thức về dân tộc và chính sách dân tộc!
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  Trò chuyện tự nhiên
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  Hỗ trợ giọng nói
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                  Phân tích thông minh
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Vấn đề nghiên cứu
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic leading-relaxed">
                "Dân tộc là kết quả của quá trình phát triển lâu dài của xã hội loài người.
                Vấn đề dân tộc là một trong những vấn đề cơ bản của cách mạng xã hội chủ nghĩa."
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Bình đẳng</div>
                <div className="text-gray-600">Dân tộc</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">Đoàn kết</div>
                <div className="text-gray-600">Phát triển</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Tôn trọng</div>
                <div className="text-gray-600">Văn hóa</div>
              </div>
            </div>

            {/* AI Usage Section */}
            <motion.div
              className="mb-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Bot className="w-10 h-10 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold">Sử dụng AI có trách nhiệm</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center mb-2">
                    <Shield className="w-6 h-6 mb-2" />
                    <h4 className="font-semibold">Minh bạch</h4>
                  </div>
                  <p className="text-sm text-blue-100 text-center">
                    Công khai công cụ AI, prompt và kết quả sử dụng
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center mb-2">
                    <CheckCircle className="w-6 h-6 mb-2" />
                    <h4 className="font-semibold">Kiểm chứng</h4>
                  </div>
                  <p className="text-sm text-blue-100 text-center">
                    Đối chiếu với văn kiện Đảng, nghị quyết chính thống
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center mb-2">
                    <Users className="w-6 h-6 mb-2" />
                    <h4 className="font-semibold">Trách nhiệm</h4>
                  </div>
                  <p className="text-sm text-blue-100 text-center">
                    Sinh viên chịu trách nhiệm nội dung cuối cùng
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link
                  to="/ai-usage"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Xem chi tiết AI Usage
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Tầm quan trọng của vấn đề dân tộc:</strong>
              </p>
              <ul className="text-left space-y-2 max-w-2xl mx-auto pl-32">
                <li>• Bảo đảm bình đẳng, đoàn kết giữa các dân tộc</li>
                <li>• Phát triển bền vững vùng dân tộc thiểu số</li>
                <li>• Nền tảng xây dựng quốc gia mạnh, dân giàu, xã hội công bằng</li>
              </ul>
            </div>

            <motion.div
              className="mt-12"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/timeline"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Bắt đầu khám phá
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
