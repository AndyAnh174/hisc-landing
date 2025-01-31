import { AcademicCapIcon, TrophyIcon, BugAntIcon, BeakerIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Activities = () => {
  const [activeActivity, setActiveActivity] = useState(0)

  const activities = [
    {
      icon: AcademicCapIcon,
      title: 'Học tập và nghiên cứu',
      shortDesc: 'Tham gia các buổi training và nghiên cứu chuyên sâu về ATTT',
      content: 'Đây là hoạt động cơ bản nhất và là nền tảng cho mọi hoạt động khác khi tham gia CLB. Các thành viên được tạo điều kiện tham gia các khóa huấn luyện do CLB tổ chức. Bên cạnh đó, tự học chính là chìa khóa dẫn đến thành công. Thành viên có thể theo học chương trình đào tạo của CLB hoặc tùy chỉnh theo nhu cầu và định hướng riêng.'
    },
    {
      icon: TrophyIcon,
      title: 'Thi đấu CTF',
      shortDesc: 'Tham gia các cuộc thi CTF trong và ngoài nước',
      content: 'Capture The Flag (CTF) là hoạt động thi đấu học thuật về An toàn thông tin được công nhận rộng rãi tại Việt Nam và quốc tế. Hằng năm, nhiều cuộc thi lớn nhỏ trong và ngoài nước diễn ra liên tục. CLB thường xuyên cập nhật thông tin và phát động tham gia phù hợp với tình hình thực tế. Các thành viên cũng có thể chủ động đăng ký tham gia khi có nhu cầu. CTF không đơn thuần là một cuộc thi mà còn là cơ hội để học hỏi kiến thức, nâng cao kỹ năng chuyên môn, đánh giá năng lực bản thân và tích lũy kinh nghiệm quý báu cho sự nghiệp tương lai.'
    },
    {
      icon: BugAntIcon,
      title: 'Bug bounty hunting',
      shortDesc: 'Tham gia các chương trình Bug Bounty',
      content: 'Bug bounty hunting là hoạt động tìm kiếm và báo cáo lỗi bảo mật trong các hệ thống, website của các tổ chức và doanh nghiệp. Đây là một hình thức nghiên cứu thực tế, vừa giúp nâng cao kỹ năng chuyên môn vừa có thể tạo ra thu nhập. CLB khuyến khích các thành viên tham gia các chương trình bug bounty uy tín để áp dụng kiến thức vào thực tiễn và phát triển nghề nghiệp. Các bạn có năng lực sẽ được team Điều Hành sắp xếp vào team Bug Bounty Hunters của CLB, nơi hội tụ các bạn có chung niềm đam mê và được hướng dẫn chi tiết để nhanh chóng tiếp cận.'
    },
    {
      icon: BeakerIcon,
      title: 'Thực hiện các dự án và nghiên cứu khoa học',
      shortDesc: 'Thực hiện các dự án và nghiên cứu khoa học',
      content: 'CLB luôn khuyến khích và tạo điều kiện cho các thành viên thực hiện các dự án nghiên cứu khoa học, phát triển công cụ và ứng dụng trong lĩnh vực An toàn thông tin. Đây là cơ hội để các thành viên vận dụng kiến thức vào thực tiễn, rèn luyện kỹ năng làm việc nhóm và tạo ra các sản phẩm có giá trị. Các dự án xuất sắc sẽ được CLB hỗ trợ để công bố tại các hội nghị khoa học hoặc phát triển thành các sản phẩm thương mại.'
    }
  ]

  const ActiveIcon = activities[activeActivity].icon

  return (
    <section id="activities" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 glitch-text text-center">
          <span className="text-matrix mr-2">&gt;</span>
          Các hoạt động chính
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activity Cards */}
          <div className="space-y-4">
            {activities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <div
                  key={index}
                  className={`cyber-box cursor-pointer transition-all duration-300 ${
                    activeActivity === index ? 'border-matrix' : 'border-matrix/30'
                  }`}
                  onClick={() => setActiveActivity(index)}
                >
                  <div className="flex items-center space-x-4">
                    <Icon className={`h-8 w-8 ${
                      activeActivity === index ? 'text-matrix' : 'text-matrix/60'
                    }`} />
                    <div>
                      <h3 className="text-xl font-bold terminal-text">{activity.title}</h3>
                      <p className="text-sm text-matrix/60">{activity.shortDesc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Activity Details */}
          <div className="cyber-box min-h-[400px] flex flex-col">
            <div className="flex items-center space-x-4 mb-6">
              <ActiveIcon className="h-12 w-12 text-matrix" />
              <h3 className="text-2xl font-bold glitch-text">
                {activities[activeActivity].title}
              </h3>
            </div>
            <div className="terminal-text leading-relaxed text-matrix/90 flex-grow">
              <p className="whitespace-pre-wrap">
                {activities[activeActivity].content}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="text-matrix/60 font-mono animate-terminal-blink">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities 