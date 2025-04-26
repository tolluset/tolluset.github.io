"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            이병현
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              소개
            </Link>
            <Link href="#resume" className="text-gray-700 hover:text-blue-600 transition-colors">
              이력서
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
              프로젝트
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              연락처
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 bg-white shadow-sm pt-4 pb-2 space-y-3 px-4">
            <Link
              href="#about"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              소개
            </Link>
            <Link
              href="#resume"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              이력서
            </Link>
            <Link
              href="#projects"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              프로젝트
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              연락처
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
