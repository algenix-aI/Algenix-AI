export default function SimpleFooter() {
  return (
    <footer className="bg-purple-950 border-t border-purple-800 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Algenix AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
