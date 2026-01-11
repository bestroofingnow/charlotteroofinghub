'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Users, ArrowLeft, CheckCircle } from 'lucide-react'

export default function RegisterCrewPage() {
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
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for registering! Your profile will be reviewed and published within 24 hours.
            Roofing companies will be able to find and contact you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/crews"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              View All Crews
            </Link>
            <Link
              href="/jobs"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-secondary text-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/crews"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to crews
          </Link>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" />
            <h1 className="text-2xl md:text-3xl font-bold">Register as a Roofing Professional</h1>
          </div>
          <p className="mt-2 text-white/80">
            Create your profile and let companies find you
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <div className="space-y-6">
              {/* Personal Info */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name / Crew Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="John Smith or Smith Roofing Crew"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="(704) 555-0100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="Charlotte"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Info */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Professional Details</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      >
                        <option value="">Select type</option>
                        <option value="sales-rep">Sales Representative</option>
                        <option value="crew-leader">Crew Leader</option>
                        <option value="installer">Installer</option>
                        <option value="laborer">Laborer</option>
                        <option value="crew">Full Crew</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills (select all that apply) *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        'Shingles', 'Metal Roofing', 'Flat Roofs', 'TPO/EPDM',
                        'Slate', 'Cedar Shake', 'Gutters', 'Repairs',
                        'Storm Damage', 'Insurance Claims', 'Sales', 'Door-to-door'
                      ].map((skill) => (
                        <label key={skill} className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input type="checkbox" className="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary" />
                          <span className="text-sm">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio / About You
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="Tell roofing companies about yourself, your experience, and what makes you stand out..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="available"
                      defaultChecked
                      className="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                    />
                    <label htmlFor="available" className="text-sm text-gray-700">
                      I am currently available for work
                    </label>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  id="terms"
                  className="mt-1 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to be listed on Charlotte Roofing Hub and to be contacted by roofing companies.
                  My information will be reviewed before publishing.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition text-lg"
              >
                Create My Profile
              </button>

              <p className="text-sm text-gray-500 text-center">
                Profiles are reviewed within 24 hours before being published.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
