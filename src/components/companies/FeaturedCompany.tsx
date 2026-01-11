import { Star, Phone, Globe, MapPin, CheckCircle, Award } from 'lucide-react'
import Link from 'next/link'
import StarRating from '@/components/shared/StarRating'
import type { Company } from '@/types'

interface FeaturedCompanyProps {
  company: Company
}

export default function FeaturedCompany({ company }: FeaturedCompanyProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 featured-badge rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Featured Partner</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Charlotte&apos;s Premier Roofing Company
          </h2>
        </div>

        {/* Featured Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Logo/Image Area */}
            <div className="md:w-1/3 bg-primary p-8 flex flex-col items-center justify-center text-white">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mb-4">
                {company.logoUrl ? (
                  <img src={company.logoUrl} alt={company.name} className="w-20 h-20 object-contain" />
                ) : (
                  <span className="text-3xl font-bold text-primary">
                    {company.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{company.name}</h3>
              <div className="flex items-center gap-2">
                <StarRating rating={company.googleRating || 5} size="lg" showNumber={false} />
                <span className="font-semibold">{company.googleRating?.toFixed(1) || '5.0'}</span>
              </div>
              {company.reviewCount && (
                <span className="text-sm text-white/80 mt-1">
                  {company.reviewCount} Google Reviews
                </span>
              )}
            </div>

            {/* Right Side - Details */}
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {company.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {service}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {company.description || `${company.name} is Charlotte's premier roofing contractor, known for exceptional quality, customer service, and competitive pricing. Specializing in both residential and commercial roofing with a team of certified professionals.`}
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {company.phone && (
                  <a
                    href={`tel:${company.phone}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium">{company.phone}</span>
                  </a>
                )}
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="font-medium">Visit Website</span>
                  </a>
                )}
                {company.address && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg sm:col-span-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">{company.address}, {company.city}, {company.state}</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/companies/${company.slug}`}
                  className="flex-1 text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
                >
                  View Full Profile
                </Link>
                <a
                  href="https://instantroofestimate.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Free Estimates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Workmanship Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Financing Available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
