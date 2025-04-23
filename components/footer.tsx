"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-950 border-t border-purple-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Algenix AI Logo" width={32} height={32} />
              <span className="text-xl font-bold italic text-white">Algenix AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing the future with advanced artificial intelligence solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/algenixai"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/algenixai"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link href="mailto:info@algenix.ai" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://algenix.ai"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Neural Engine
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  AI Studio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Algenix AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
