"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function MobilePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-12 flex justify-center"
    >
      <div className="relative w-[300px] h-[600px] bg-black rounded-[36px] border-8 border-gray-800 overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 right-0 h-6 bg-black flex justify-center">
          <div className="w-20 h-4 bg-black rounded-b-xl"></div>
        </div>

        <div className="h-full overflow-y-auto bg-purple-950">
          {/* Mobile Header */}
          <div className="sticky top-0 bg-purple-900 p-3 flex items-center justify-between border-b border-purple-800">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Algenix AI Logo" width={24} height={24} />
              <span className="text-sm font-bold text-white">Algenix AI</span>
            </div>
            <Phone className="h-4 w-4 text-purple-300" />
          </div>

          {/* Mobile Content */}
          <div className="p-4">
            <h2 className="text-xl font-bold text-white mb-3">Algenix AI</h2>
            <p className="text-sm text-gray-300 mb-4">Advanced AI solutions for your business needs</p>

            <div className="bg-purple-900/50 rounded-lg p-3 mb-4">
              <h3 className="text-sm font-semibold text-white mb-2">Features</h3>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Advanced Neural Networks</li>
                <li>• Real-time Processing</li>
                <li>• Secure & Private</li>
                <li>• Cross-Platform Support</li>
              </ul>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-3 mb-4">
              <h3 className="text-sm font-semibold text-white mb-2">Code Example</h3>
              <pre className="text-xs text-gray-300 overflow-x-auto">
                <code>
                  {`import algenix

model = algenix.Model()
result = model.predict(data)`}
                </code>
              </pre>
            </div>

            <div className="bg-white rounded-lg p-3">
              <h3 className="text-sm font-semibold text-purple-900 mb-2">Whitepaper</h3>
              <p className="text-xs text-gray-700">
                Our technical whitepaper details our approach to solving complex AI challenges...
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
