"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

interface JobRoleProps {
  title: string
  department: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

export function JobRole({ title, department, description, requirements, responsibilities }: JobRoleProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-all"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600">{department}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-1 p-6 bg-gray-50 rounded-lg">
          <p className="mb-4 text-gray-800">{description}</p>

          <h4 className="font-bold text-lg mb-2">Requirements:</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            {requirements.map((req, i) => (
              <li key={i} className="text-gray-700">
                {req}
              </li>
            ))}
          </ul>

          <h4 className="font-bold text-lg mb-2">Responsibilities:</h4>
          <ul className="list-disc pl-5 mb-6 space-y-1">
            {responsibilities.map((resp, i) => (
              <li key={i} className="text-gray-700">
                {resp}
              </li>
            ))}
          </ul>

          <div className="flex justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary text-black px-6 py-3 font-medium transition-all hover:scale-105"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
