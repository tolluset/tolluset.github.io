import { Github, Linkedin, BookOpen, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">연락처</h2>

        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://github.com/tolluset"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Github size={24} className="text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-600">github.com/tolluset</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/tolluset"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Linkedin size={24} className="text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-600">linkedin.com/in/tolluset</p>
              </div>
            </a>

            <a
              href="https://dev.classmethod.jp/author/lee-byonghun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <BookOpen size={24} className="text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">Blog</h3>
                <p className="text-gray-600">dev.classmethod.jp/author/lee-byonghun</p>
              </div>
            </a>


            <a
              href="mailto:dlqud19@gmail.com"
              className="flex items-center p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Mail size={24} className="text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">이메일</h3>
                <p className="text-gray-600">dlqud19@gmail.com</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
