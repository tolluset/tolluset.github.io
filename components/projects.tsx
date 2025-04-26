import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">주요 프로젝트</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold text-blue-700 mb-2">CABIoT</h3>
            <p className="text-gray-700 mb-4">IoT 센서들의 데이터 시각화 대시보드 서비스 (B2B)</p>
            <div className="flex flex-wrap mb-4">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Redux</span>
              <span className="tag">Highcharts</span>
            </div>
            <Link
              href="https://www.nito.co.jp/guide/cabiot/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              프로젝트 안내 보기 (일본어)
            </Link>
            <br />
            <Link
              href="https://demo.cabiot.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              데모 앱 보기 (일본어)
            </Link>
          </div>


          <div className="card">

            <h3 className="text-xl font-bold text-blue-700 mb-2">Antoon</h3>
            <p className="text-gray-700 mb-4">여러 웹툰 플랫폼의 정보를 모아서 볼 수 있는 커뮤니티 서비스</p>
            <div className="flex flex-wrap mb-4">
              <span className="tag">Next.js</span>
              <span className="tag">AWS Lambda@Edge</span>
              <span className="tag">CI/CD</span>
              <span className="tag">Mixpanel</span>
            </div>
            <Link
              href="https://github.com/depromeet/antoon-web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub 저장소 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
