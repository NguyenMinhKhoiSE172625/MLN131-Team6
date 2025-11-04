import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  ExternalLink,
  Calendar,
  Filter,
  Search,
  BookOpen,
  Scale,
  ScrollText,
  UserCheck,
  BarChart3,
  Star,
  Users,
  // Clock, // Unused for now
  Globe
} from 'lucide-react'
import { historicalDocuments } from '../data/documentsData'
import type { HistoricalDocument } from '../types'

const DocumentsPage = () => {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedImportance, setSelectedImportance] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const documentTypes = [
    { value: 'all', label: 'Tất cả', icon: FileText },
    { value: 'agreement', label: 'Tác phẩm', icon: Scale },
    { value: 'law', label: 'Văn kiện', icon: ScrollText },
    { value: 'report', label: 'Báo cáo', icon: BarChart3 },
    { value: 'memoir', label: 'Hồi ký', icon: UserCheck },
    { value: 'study', label: 'Nghiên cứu', icon: BookOpen }
  ]

  const importanceLevels = [
    { value: 'all', label: 'Tất cả mức độ', color: 'bg-gray-500' },
    { value: 'primary', label: 'Chính', color: 'bg-red-500' },
    { value: 'secondary', label: 'Phụ', color: 'bg-yellow-500' },
    { value: 'supplementary', label: 'Bổ sung', color: 'bg-green-500' }
  ]

  const filteredDocuments = historicalDocuments.filter(doc => {
    const matchesType = selectedType === 'all' || doc.type === selectedType
    const matchesImportance = selectedImportance === 'all' || doc.importance === selectedImportance
    const matchesSearch = searchTerm === '' ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesType && matchesImportance && matchesSearch
  })

  const getDocumentIcon = (type: HistoricalDocument['type']) => {
    switch (type) {
      case 'agreement': return Scale
      case 'law': return ScrollText
      case 'report': return BarChart3
      case 'memoir': return UserCheck
      case 'study': return BookOpen
      default: return FileText
    }
  }

  const getImportanceColor = (importance: HistoricalDocument['importance']) => {
    switch (importance) {
      case 'primary': return 'border-red-500 bg-red-50'
      case 'secondary': return 'border-yellow-500 bg-yellow-50'
      case 'supplementary': return 'border-green-500 bg-green-50'
      default: return 'border-gray-500 bg-gray-50'
    }
  }

  const getImportanceBadge = (importance: HistoricalDocument['importance']) => {
    switch (importance) {
      case 'primary': return { label: 'Chính', color: 'bg-red-500 text-white' }
      case 'secondary': return { label: 'Phụ', color: 'bg-yellow-500 text-white' }
      case 'supplementary': return { label: 'Bổ sung', color: 'bg-green-500 text-white' }
      default: return { label: 'Khác', color: 'bg-gray-500 text-white' }
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-orange-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Tài liệu tham khảo
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Nguồn tài liệu về dân tộc</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tổng hợp các tác phẩm, văn kiện và nghiên cứu học thuật đáng tin cậy
            về vấn đề dân tộc, cương lĩnh dân tộc Mác-Lênin và chính sách dân tộc Việt Nam.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm tài liệu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Lọc theo loại tài liệu</h3>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {documentTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedType === type.value
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{type.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Importance Filter */}
            <div className="flex items-center space-x-3 mb-4">
              <Star className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Lọc theo mức độ quan trọng</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {importanceLevels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setSelectedImportance(level.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedImportance === level.value
                      ? `${level.color} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <span className="text-gray-600">
              Hiển thị <span className="font-semibold text-blue-600">{filteredDocuments.length}</span> tài liệu
              {searchTerm && (
                <span> cho từ khóa "<span className="font-semibold">{searchTerm}</span>"</span>
              )}
            </span>
          </div>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredDocuments.map((document, index) => {
              const Icon = getDocumentIcon(document.type)
              const importanceBadge = getImportanceBadge(document.importance)

              return (
                <motion.div
                  key={document.id}
                  className={`bg-white rounded-2xl shadow-lg hover-lift cursor-pointer border-l-4 ${getImportanceColor(document.importance)} document-card overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-500">{document.date}</span>
                          </div>
                        </div>
                      </div>

                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${importanceBadge.color}`}>
                        {importanceBadge.label}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {document.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {document.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        {document.type === 'agreement' && <Scale className="w-4 h-4 text-blue-600" />}
                        {document.type === 'law' && <ScrollText className="w-4 h-4 text-purple-600" />}
                        {document.type === 'report' && <BarChart3 className="w-4 h-4 text-green-600" />}
                        {document.type === 'memoir' && <UserCheck className="w-4 h-4 text-orange-600" />}
                        {document.type === 'study' && <BookOpen className="w-4 h-4 text-indigo-600" />}
                        <span className="text-sm font-medium text-gray-700 capitalize">
                          {documentTypes.find(t => t.value === document.type)?.label}
                        </span>
                      </div>

                      {document.url && (
                        <a
                          href={document.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="text-sm font-medium">Xem</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Không tìm thấy tài liệu
            </h3>
            <p className="text-gray-600 mb-6">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm để xem thêm kết quả.
            </p>
            <button
              onClick={() => {
                setSelectedType('all')
                setSelectedImportance('all')
                setSearchTerm('')
              }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Xóa bộ lọc
            </button>
          </motion.div>
        )}

        {/* Statistics */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Thống kê tài liệu
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {historicalDocuments.length}
              </div>
              <div className="text-purple-100">Tổng số tài liệu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {historicalDocuments.filter(d => d.importance === 'primary').length}
              </div>
              <div className="text-purple-100">Tài liệu chính</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {historicalDocuments.filter(d => d.url).length}
              </div>
              <div className="text-purple-100">Có liên kết</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {documentTypes.length - 1}
              </div>
              <div className="text-purple-100">Loại tài liệu</div>
            </div>
          </div>
        </motion.div>

        {/* Context Evidence Section */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BarChart3 className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-gray-900">Dẫn chứng từ bối cảnh kinh tế - xã hội</h3>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Chính sách dân tộc trong thời kỳ quá độ lên CNXH được thể hiện rõ qua các dẫn chứng thực tế
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Economic Development */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Phát triển kinh tế</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Chương trình 135:</strong> Hỗ trợ phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi (1998-nay)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Giảm nghèo:</strong> Tỷ lệ hộ nghèo vùng dân tộc thiểu số giảm từ 75% (1993) xuống 35% (2015)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Cơ sở hạ tầng:</strong> 95% xã vùng dân tộc có đường ô tô đến trung tâm (2020)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Thu nhập:</strong> Thu nhập bình quân đầu người vùng dân tộc tăng gấp 3 lần (2010-2020)</span>
                </li>
              </ul>
            </motion.div>

            {/* Social Development */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Phát triển xã hội</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Giáo dục:</strong> Tỷ lệ biết chữ vùng dân tộc tăng từ 60% (1990) lên 92% (2020)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Y tế:</strong> 100% xã vùng dân tộc có trạm y tế (2018), tuổi thọ trung bình tăng 10 năm</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Văn hóa:</strong> Bảo tồn 54 ngôn ngữ dân tộc, 15 loại chữ viết riêng được công nhận</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Chính trị:</strong> 17% đại biểu Quốc hội là người dân tộc thiểu số (2021)</span>
                </li>
              </ul>
            </motion.div>

            {/* Cultural Preservation */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Bảo tồn văn hóa</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Di sản UNESCO:</strong> Không gian văn hóa Cồng chiêng Tây Nguyên (2005)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Lễ hội:</strong> Hơn 200 lễ hội truyền thống được tổ chức hàng năm</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Bảo tàng:</strong> Bảo tàng Dân tộc học Việt Nam lưu giữ 15,000+ hiện vật</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Truyền thông:</strong> Đài Tiếng nói Việt Nam phát sóng bằng 14 ngôn ngữ dân tộc</span>
                </li>
              </ul>
            </motion.div>

            {/* Policy Implementation */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-3">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Chính sách pháp luật</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Hiến pháp 2013:</strong> Khẳng định bình đẳng, đoàn kết, tương trợ giữa các dân tộc</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Nghị quyết 24-NQ/TW:</strong> Công tác dân tộc trong tình hình mới (2019)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Chính sách ưu đãi:</strong> Miễn giảm học phí, hỗ trợ nhà ở, đất sản xuất</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Đào tạo cán bộ:</strong> Hơn 50,000 cán bộ dân tộc được đào tạo (2015-2020)</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 mr-2" />
              <h4 className="text-xl font-bold">Nguồn dẫn chứng</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Văn kiện chính thống:</p>
                <ul className="space-y-1 text-blue-100">
                  <li>• Nghị quyết Đại hội Đảng toàn quốc</li>
                  <li>• Báo cáo Tổng kết công tác dân tộc</li>
                  <li>• Niên giám thống kê Việt Nam</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Nguồn học thuật:</p>
                <ul className="space-y-1 text-blue-100">
                  <li>• Viện Dân tộc học - Viện Hàn lâm KHXH VN</li>
                  <li>• Ủy ban Dân tộc Việt Nam</li>
                  <li>• Tạp chí Nghiên cứu Dân tộc</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Lưu ý về tài liệu</h3>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Các tài liệu được sưu tập và phân loại dựa trên mức độ tin cậy và giá trị lịch sử.
              Tài liệu "Chính" là những nguồn có giá trị cao nhất, "Phụ" hỗ trợ phân tích,
              và "Bổ sung" cung cấp thông tin tham khảo thêm.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DocumentsPage
