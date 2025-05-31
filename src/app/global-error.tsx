"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { globalErrorData } from "@/data/error-pages"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Animation */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-red-500/10 rounded-full animate-ping"></div>
            </div>

            {/* Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{globalErrorData.heading}</h1>
            <p className="text-xl text-gray-300 mb-2">{globalErrorData.subtitle}</p>
            <p className="text-lg text-gray-400 mb-8">{globalErrorData.description}</p>

            {/* Error details (only in development) */}
            {process.env.NODE_ENV === "development" && (
              <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-left">
                <h3 className="text-lg font-semibold text-red-400 mb-2">{globalErrorData.errorDetails.title}</h3>
                <p className="text-sm text-gray-300 font-mono break-all">{error.message}</p>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2">
                    {globalErrorData.errorDetails.errorIdLabel} {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={reset}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                {globalErrorData.buttons.primary.text}
              </Button>

              <Button
                onClick={() => (window.location.href = "/")}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                {globalErrorData.buttons.secondary.text}
              </Button>
            </div>

            {/* Support info */}
            <div className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">{globalErrorData.supportSection.title}</h3>
              <p className="text-gray-400 mb-4">{globalErrorData.supportSection.description}</p>
              <p className="text-sm text-gray-500">Email: {globalErrorData.supportSection.email}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
