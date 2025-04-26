import Link from "next/link"
import { Github, Linkedin, BookOpen } from "lucide-react"

export default function Hero() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">이병현</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">웹 프론트엔드 개발자</h2>

        <p className="text-lg mb-8">
          사용자가 만족하는 서비스를 만들려 노력합니다.
          <br />
          복잡한 문제를 쉽게 풀어내 해결하는 것을 좋아합니다.
        </p>

        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/tolluset"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Github className="mr-2" size={20} />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/tolluset"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="mr-2" size={20} />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://dev.classmethod.jp/author/lee-byonghun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <BookOpen className="mr-2" size={20} />
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
