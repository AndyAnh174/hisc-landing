import { AcademicCapIcon, TrophyIcon, BugAntIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const About = () => {
  const [activeSection, setActiveSection] = useState<number>(0)

  const sections = [
    {
      title: 'CLB An Toàn Thông Tin - HCMUTE ISC là gì?',
      content: 'CLB An Toàn Thông Tin - HCMUTE ISC là đơn vị trực thuộc khoa Công Nghệ Thông Tin, trường ĐH Sư Phạm Kỹ Thuật TPHCM. Được thành lập vào tháng 11 năm 2023, CLB mang sứ mệnh là tổ chức tiên phong trong lĩnh vực An Toàn Thông Tin của nhà trường. CLB là nơi quy tụ các sinh viên đam mê hacking và bảo mật, là cái nôi ươm mầm cho các tài năng trẻ và là nguồn lực nòng cốt trong các cuộc thi học thuật về An toàn Thông tin. CLB tự hào đại diện cho HCMUTE tham gia tranh tài tại nhiều giải đấu trong và ngoài nước.'
    },
    {
      title: 'Tham gia CLB thì sẽ có được lợi ích gì?',
      content: 'Khi tham gia CLB, bạn sẽ được đào tạo kiến thức chuyên sâu về An Toàn Thông Tin, được học hỏi từ các anh chị có kinh nghiệm và được tham gia các cuộc thi CTF trong và ngoài nước. Bên cạnh đó, bạn sẽ có cơ hội kết nối với cộng đồng sinh viên cùng đam mê, mở rộng network và tích lũy kinh nghiệm thực tế thông qua các dự án của CLB. Tham gia CLB là một cơ hội quý giá cho bất kỳ sinh viên nào có niềm đam mê và mong muốn theo đuổi ngành An Toàn Thông Tin.'
    }
  ]

  const activities = [
    {
      icon: AcademicCapIcon,
      title: 'Học tập và nghiên cứu',
      description: 'Tham gia các buổi training và nghiên cứu chuyên sâu về ATTT'
    },
    {
      icon: TrophyIcon,
      title: 'Tham gia thi đấu CTF',
      description: 'Tham gia các cuộc thi CTF trong và ngoài nước'
    },
    {
      icon: BugAntIcon,
      title: 'Bug Bounty',
      description: 'Tham gia các chương trình Bug Bounty'
    }
  ]

  const joinSteps = [
    'CLB sẽ mở đợt tuyển thành viên chính thức vào tháng 01 hằng năm',
    'Điền form đăng ký với các thông tin được yêu cầu',
    'Tham gia vòng phỏng vấn và test năng lực (CTF)',
    'Danh sách thành viên được kết nạp sẽ được đăng tải trên fanpage'
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* About Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className={`cyber-box hover:border-matrix/80 transition-colors duration-300 cursor-pointer ${
                  activeSection === index ? 'border-matrix' : 'border-matrix/30'
                }`}
                onMouseEnter={() => setActiveSection(index)}
              >
                <h3 className="text-2xl font-bold mb-4 glitch-text">
                  <span className="text-matrix mr-2">&gt;</span>
                  {section.title}
                </h3>
                <p className="terminal-text leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Activities */}
          <div className="cyber-box">
            <h3 className="text-2xl font-bold mb-8 glitch-text text-center">
              <span className="text-matrix mr-2">&gt;</span>
              Tham gia CLB thì sẽ làm những gì?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <div key={index} className="p-4 border border-matrix/30 rounded-lg hover:border-matrix transition-colors duration-300">
                    <Icon className="h-12 w-12 text-matrix mb-4" />
                    <h4 className="text-lg font-bold mb-2 terminal-text">{activity.title}</h4>
                    <p className="text-sm text-matrix/80">{activity.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Join Steps */}
          <div className="cyber-box">
            <h3 className="text-2xl font-bold mb-8 glitch-text text-center">
              <span className="text-matrix mr-2">&gt;</span>
              Làm sao để gia nhập CLB?
            </h3>
            <div className="space-y-4">
              {joinSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-matrix font-mono text-xl">{index + 1}.</span>
                  <p className="terminal-text">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 