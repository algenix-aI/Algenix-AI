"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Twitter, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Navbar() {
  const [isPhantomInstalled, setIsPhantomInstalled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Check if Phantom wallet is installed
  useEffect(() => {
    const checkPhantomWallet = async () => {
      try {
        // @ts-ignore
        const isPhantomInstalled = window.phantom?.solana?.isPhantom
        setIsPhantomInstalled(!!isPhantomInstalled)
      } catch (error) {
        console.error("Error checking Phantom wallet:", error)
        setIsPhantomInstalled(false)
      }
    }

    checkPhantomWallet()
  }, [])

  const connectWallet = async () => {
    try {
      // @ts-ignore
      const provider = window.phantom?.solana

      if (provider?.isPhantom) {
        const response = await provider.connect()
        const publicKey = response.publicKey.toString()
        alert(`Connected with: ${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`)
      } else {
        window.open("https://phantom.app/", "_blank")
      }
    } catch (error) {
      console.error("Error connecting to Phantom wallet:", error)
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-purple-900/90 backdrop-blur-sm border-b border-purple-800"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Algenix AI Logo" width={40} height={40} className="animate-pulse" />
            <span className="text-xl font-bold italic text-white">Algenix AI</span>
          </Link>

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>

              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute top-16 left-0 right-0 bg-purple-900 border-b border-purple-800 p-4"
                >
                  <div className="flex flex-col gap-4">
                    <Link
                      href="#features"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:text-purple-300"
                    >
                      Features
                    </Link>
                    <Link
                      href="#code"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:text-purple-300"
                    >
                      Code
                    </Link>
                    <Link
                      href="#whitepaper"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:text-purple-300"
                    >
                      Whitepaper
                    </Link>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="https://x.com/algenix_ai" target="_blank">
                          <Twitter className="h-5 w-5 text-white" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="https://github.com/algenix-aI/Algenix-AI" target="_blank">
                          <Github className="h-5 w-5 text-white" />
                        </Link>
                      </Button>
                    </div>
                    <Button onClick={connectWallet} className="bg-purple-600 hover:bg-purple-700">
                      {isPhantomInstalled ? "Connect Phantom" : "Install Phantom"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <>
              <div className="hidden md:flex items-center gap-6">
                <Link href="#features" className="text-white hover:text-purple-300 transition-colors">
                  Features
                </Link>
                <Link href="#code" className="text-white hover:text-purple-300 transition-colors">
                  Code
                </Link>
                <Link href="#whitepaper" className="text-white hover:text-purple-300 transition-colors">
                  Whitepaper
                </Link>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://x.com/algenix_ai" target="_blank">
                    <Twitter className="h-5 w-5 text-white" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/algenix-aI/Algenix-AI" target="_blank">
                    <Github className="h-5 w-5 text-white" />
                  </Link>
                </Button>
                <Button onClick={connectWallet} className="bg-purple-600 hover:bg-purple-700">
                  {isPhantomInstalled ? "Connect Phantom" : "Install Phantom"}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
