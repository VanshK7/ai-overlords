import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search } from "lucide-react"
import { notFoundData } from "@/data/error-pages"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            {notFoundData.title}
          </div>
          <div className="absolute inset-0 text-9xl font-bold text-blue-500/20 animate-ping">{notFoundData.title}</div>
        </div>

        {/* AI-themed illustration */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
            <Search className="w-16 h-16 text-white animate-bounce" />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{notFoundData.heading}</h1>
        <p className="text-xl text-gray-300 mb-2">{notFoundData.subtitle}</p>
        <p className="text-lg text-gray-400 mb-8">{notFoundData.description}</p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href={notFoundData.buttons.primary.href}>
              <Home className="w-5 h-5 mr-2" />
              {notFoundData.buttons.primary.text}
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            <Link href={notFoundData.buttons.secondary.href}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              {notFoundData.buttons.secondary.text}
            </Link>
          </Button>
        </div>

        {/* Additional help */}
        <div className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">{notFoundData.helpSection.title}</h3>
          <p className="text-gray-400 mb-4">{notFoundData.helpSection.description}</p>
          <Button asChild variant="ghost" className="text-blue-400 hover:text-blue-300">
            <Link href={notFoundData.helpSection.contactHref}>{notFoundData.helpSection.contactText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
