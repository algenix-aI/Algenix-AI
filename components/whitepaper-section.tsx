"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Download, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function WhitepaperSection() {
  return (
    <section id="whitepaper" className="py-20 bg-gradient-to-b from-purple-950 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="italic">Technical</span> Whitepaper
            </h2>

            <p className="text-xl text-gray-300 mb-6">
              Dive deep into the technical architecture and innovative algorithms that power Algenix AI. Our
              comprehensive whitepaper details our approach to solving complex AI challenges.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-purple-800/50 p-2 rounded-full mt-1">
                  <FileText className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Advanced Neural Architecture</h3>
                  <p className="text-gray-300">
                    Learn about our proprietary neural network design that achieves state-of-the-art performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-800/50 p-2 rounded-full mt-1">
                  <FileText className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Optimization Techniques</h3>
                  <p className="text-gray-300">
                    Discover how we optimize for both performance and efficiency in resource-constrained environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-800/50 p-2 rounded-full mt-1">
                  <FileText className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Security & Privacy Framework</h3>
                  <p className="text-gray-300">
                    Understand our approach to ensuring data security and privacy in AI applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <a
                  href="https://drive.google.com/file/d/1QBZARQcJ6iYZZBdVDYk4_GMyUPbdWk_r/view?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Whitepaper <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/50" asChild>
                <a
                  href="https://github.com/algenix-aI/Algenix-AI/blob/main/Algenix%20AI%20Performance%20Benchmarks.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Research <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <Card className="bg-white p-8 rounded-lg shadow-xl">
              <CardContent className="p-0">
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">Algenix AI Technical Whitepaper</h3>

                  <div className="text-gray-700 space-y-4">
                    <p className="font-medium">Abstract</p>
                    <p>
                      This paper introduces Algenix AI, a novel artificial intelligence framework designed to address
                      the challenges of modern AI applications. We present our architecture, training methodology, and
                      benchmark results across various domains.
                    </p>

                    <p className="font-medium">1. Introduction</p>
                    <p>
                      Artificial intelligence has transformed numerous industries, from healthcare to finance. However,
                      existing solutions often face limitations in scalability, efficiency, and adaptability. Algenix AI
                      addresses these challenges through...
                    </p>

                    <p className="font-medium">2. Technical Architecture</p>
                    <p>
                      Our system employs a multi-layered approach with specialized components for data processing,
                      feature extraction, and decision making. The core neural engine utilizes...
                    </p>

                    <p className="font-medium">3. Performance Benchmarks</p>
                    <p>
                      In comparative evaluations against leading AI systems, Algenix AI demonstrated superior
                      performance in 87% of test cases, with particular strengths in...
                    </p>
                  </div>

                  <div className="mt-6 text-right">
                    <span className="text-purple-600 font-medium cursor-pointer hover:underline">
                      Continue reading...
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
