'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import type { FAQ } from '@/types'

interface FAQSectionProps {
  title?: string
  faqs: FAQ[]
  showSchema?: boolean
}

export default function FAQSection({ title = "Frequently Asked Questions", faqs, showSchema = true }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }

  return (
    <section className="py-12 md:py-16">
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-white hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
