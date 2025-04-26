import Hero from "@/components/hero"
import Resume from "@/components/resume"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
}
