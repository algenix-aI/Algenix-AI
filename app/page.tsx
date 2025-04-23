"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CodeSection from "@/components/code-section"
import WhitepaperSection from "@/components/whitepaper-section"
import MobilePreview from "@/components/mobile-preview"
import SimpleFooter from "@/components/simple-footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showMobilePreview, setShowMobilePreview] = useState(false)

  return (
    <main className="min-h-screen bg-purple-950">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CodeSection />
      <WhitepaperSection />
      <div className="container mx-auto py-8 text-center">
        <Button onClick={() => setShowMobilePreview(!showMobilePreview)} className="bg-purple-600 hover:bg-purple-700">
          {showMobilePreview ? "Hide Mobile Preview" : "Show Mobile Preview"}
        </Button>

        {showMobilePreview && <MobilePreview />}
      </div>
      <SimpleFooter />
    </main>
  )
}
