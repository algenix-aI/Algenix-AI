"use client"

import { motion } from "framer-motion"
import { Brain, Code, Database, Lock, Zap, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-purple-400" />,
    title: "Advanced AI Models",
    description: "Leverage state-of-the-art neural networks and machine learning algorithms.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-400" />,
    title: "Lightning Fast",
    description: "Optimized for speed with real-time processing and minimal latency.",
  },
  {
    icon: <Code className="h-10 w-10 text-purple-400" />,
    title: "Developer Friendly",
    description: "Comprehensive APIs and SDKs for seamless integration into your projects.",
  },
  {
    icon: <Database className="h-10 w-10 text-purple-400" />,
    title: "Scalable Infrastructure",
    description: "Built to handle enterprise-level workloads with distributed computing.",
  },
  {
    icon: <Lock className="h-10 w-10 text-purple-400" />,
    title: "Secure & Private",
    description: "End-to-end encryption and privacy-preserving computation techniques.",
  },
  {
    icon: <Share2 className="h-10 w-10 text-purple-400" />,
    title: "Cross-Platform",
    description: "Works seamlessly across web, mobile, and desktop environments.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-purple-950/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="italic">Powerful</span> Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what makes Algenix AI the leading platform for artificial intelligence solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-purple-900/50 border-purple-800 h-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
