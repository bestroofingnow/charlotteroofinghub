'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Briefcase, ArrowLeft, CheckCircle } from 'lucide-react'

export default function PostJobPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-12">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Submitted for Review</h1>
          <p className="text-gray-600 mb-6">
            Thank you for posting! Your job listing will be reviewed and published within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/jobs"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              View All Jobs
            </Link>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              Post Another Job
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to jobs
          </Link>
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8" />
            <h1 className="text-2xl md:text-3xl font-bold">Post a Roofing Job</h1>
          </div>
          <p className="mt-2 text-white/80">
            Reach qualified roofing professionals in Charlotte
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <div className="space-y-6">
              {/* Company Info */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Company Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your Roofing Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="hr@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="(704) 555-0100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Charlotte, NC"
                    />
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Job Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="e.g., Roofing Sales Representative"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Type *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select type</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="commission">Commission</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pay Range
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="e.g., $50,000 - $80,000/year"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Description *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Describe the job responsibilities, requirements, and qualifications..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Required Skills/Experience
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="e.g., 2+ years roofing experience, valid driver's license..."
                    />
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  id="terms"
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree that this job listing is accurate and I am authorized to post on behalf of my company.
                  Listings are subject to review before publishing.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition text-lg"
              >
                Submit Job Listing
              </button>

              <p className="text-sm text-gray-500 text-center">
                Job listings are reviewed within 24 hours before being published.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
