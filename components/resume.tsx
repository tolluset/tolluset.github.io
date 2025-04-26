export default function Resume() {
  return (
    <section id="resume" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">경력</h2>

        <div className="card">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-700">CLASSMETHOD</h3>
            <span className="text-gray-600">2020년 4월 ~ 현재</span>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">웹 프론트엔드 개발자</h4>
            <p className="text-gray-600 mb-2">2021년 1월 ~ 현재</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">입사 후 신입 연수</h4>
            <p className="text-gray-600 mb-2">2020년 4월 ~ 2020년 12월</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">CLASSMETHOD KOREA 법인 이동</h4>
            <p className="text-gray-600">2021년 7월 ~ 현재</p>
          </div>
        </div>

        <h2 className="section-title mt-12">프로젝트</h2>

        <div className="card">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-700">CABIoT</h3>
            <span className="text-gray-600">2021년 1월 ~ 현재</span>
          </div>

          <p className="mb-4">IoT 센서들의 데이터 시각화 대시보드 서비스 (B2B)</p>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">사용 기술</h4>
            <div className="flex flex-wrap">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Redux</span>
              <span className="tag">Tanstack-Query</span>
              <span className="tag">Highcharts</span>
              <span className="tag">Playwright</span>
              <span className="tag">AWS CDK</span>
              <span className="tag">AWS CloudFront</span>
              <span className="tag">CircleCI</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">
                • 기존 스타일에 변경이 없게 점진적으로 적용하기 위해 Playwright로 Visual Regression Test 추가
              </h4>
              <p className="text-gray-700">
                PoC에서 빠르게 만들기 위해 크롬 데스크탑 유저들을 대상으로 만들었던 서비스였습니다. 이후에 태블릿,
                모바일 유저들도 쉽게 사용하기 위한 반응형 스타일 적용 및 크로스 브라우저를 대응하는 과정을 점진적으로
                적용하였습니다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                • Image Regression Test 테스트 시간 약 12분 {"->"} 3분 (비용 약 40% 절감)
              </h4>
              <p className="text-gray-700">
                프론트엔드 CI/CD의 파이프라인 속도와 비용을 개선해나갔습니다. Playwright를 통해 Image Regression Test를
                진행하였는데, 테스트가 늘어남에 따라 CI/CD 테스트 시간과 서버 비용이 급격하게 늘기 시작하였습니다.
                직렬적으로 테스트하던 파이프라인을 병렬적으로 처리하게 변경하여 속도를 개선하였습니다. 또한 사용자가
                많은 브라우저와 적은 브라우저를 확인하고 사용자가 적은 브라우저는 하루에 한번 테스트하여 개발팀이 확인할
                수 있게 자동으로 PR을 생성하는 방식을 만들어 CI/CD 서버의 비용을 개선했습니다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                • 약 40 페이지 이상의 메뉴얼을 수동으로 작업시 8분 이상 걸리던 작업을 15초 이내로 단축
              </h4>
              <p className="text-gray-700">
                여러 페이지로 이루어진 서비스의 메뉴얼 페이지를 하나의 PDF로 만드는 자동화를 하였습니다. 기존에 메뉴얼이
                변경될 때 마다 수동으로 페이지를 하나씩 PDF로 다운로드 하고 다운로드 한 PDF 들을 하나의 PDF로 병합하는
                작업을 Playwright를 이용하여 자동화 시켰습니다.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">• 점진적인 통합 테스트 추가</h4>
              <p className="text-gray-700">
                서비스가 발전하면서 점점 서비스의 사양도, 코드베이스도 복잡해져 테스트를 견고하게 추가했습니다. 해결이
                필요한 과제는 두 가지로 기존 레거시 코드와 현재의 복잡한 사양이 제대로 구현 되었는지 알 수 있는
                것이었습니다. 기존 레거시 코드들에 대해 React Testing Library로 통합 테스트를 추가해 리팩토링을 현재
                코드와 결이 맞게 개선해 나갔습니다. 현재의 복잡한 사양은 Playwright로 여러 페이지에 걸친 사용자의
                플로우가 제대로 동작하고 있는지 검증할 수 있게 하여, 저도 팀원들도 안심하고 작업할 수 있게 되었습니다.
              </p>
            </div>
          </div>
        </div>

        <h2 className="section-title mt-12">활동</h2>

        <div className="card">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-700">디프만 11기 (사이드 프로젝트 동아리)</h3>
            <span className="text-gray-600">2022년 3월 - 2022년 7월</span>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Antoon</h4>
            <p className="mb-2">여러 웹툰 플랫폼의 정보를 모아서 볼 수 있는 커뮤니티 서비스</p>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>캐러셀 공통 컴포넌트</li>
            <li>AWS Lambda@Edge로 Next.js 서버 배포</li>
            <li>태그 기반 CI/CD로 운영 환경 배포</li>
            <li>IaC를 이용하여 개발/운영 환경 분리</li>
            <li>Mixpanel로 유저 이벤트 수집</li>
          </ul>

          <div className="mt-4">
            <a
              href="https://github.com/depromeet/antoon-web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Repo: https://github.com/depromeet/antoon-web
            </a>
          </div>
        </div>

        <h2 className="section-title mt-12">자격증</h2>

        <div className="card">
          <h3 className="text-xl font-bold text-blue-700 mb-4">AWS 자격증</h3>

          <p className="mb-4 text-gray-700">업무에서 AWS를 사용하는 일이 많아 취득에 도전하게 되었습니다.</p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>AWS CLP (2020/05)</li>
            <li>AWS SAA (2020/07)</li>
            <li>AWS DVA (2021/06)</li>
            <li>AWS SOA (2021/07)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
