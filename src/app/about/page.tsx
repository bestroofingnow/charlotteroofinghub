import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Building2, Star, Target, Heart, Shield, ArrowRight, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Charlotte Roofing Hub | Your Trusted Roofing Resource',
  description: 'Charlotte Roofing Hub is the definitive resource for finding top-rated roofing companies in Charlotte, NC. Learn about our mission.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Charlotte Roofing Hub
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Your trusted source for finding quality roofing companies
              in Charlotte, North Carolina.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 text-center mb-8">
              Charlotte Roofing Hub was created to help Charlotte homeowners and businesses
              find quality roofing contractors they can trust. We believe that excellent local
              roofers deserve visibility - not just the companies with the biggest marketing budgets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <Heart className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Supporting Local Roofers</h3>
                <p className="text-gray-600 text-sm">
                  We spotlight quality local roofing companies that might not have huge marketing
                  budgets but deliver exceptional work. If you have a 4.8+ star rating, you belong here.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Quality Standards</h3>
                <p className="text-gray-600 text-sm">
                  Every company listed on our platform must have a 4.8+ star Google rating.
                  We verify ratings and only feature contractors we'd trust with our own roofs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Company Directory</h3>
              <p className="text-sm text-gray-600">
                25+ handpicked roofing companies with verified 4.8+ star ratings serving Charlotte
                and surrounding areas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Roofing Guides</h3>
              <p className="text-sm text-gray-600">
                In-depth guides on residential, commercial, and specialty roofing
                to help you make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Expert Content</h3>
              <p className="text-sm text-gray-600">
                Comprehensive information on roofing materials, costs, and what to expect when
                hiring a roofer in Charlotte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partner */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Featured Partner
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
              <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                B
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Roofing Now LLC</h3>
              <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-gray-700 font-semibold ml-1">5.0</span>
              </div>
              <p className="text-gray-600 mb-6">
                Charlotte&apos;s premier roofing contractor, known for exceptional quality,
                customer service, and competitive pricing. Serving residential and commercial
                customers across the Charlotte metro area.
              </p>
              <a
                href="https://bestroofingnow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
              >
                Visit Website
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Get Involved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Roofing Companies</h3>
              <p className="text-sm text-gray-600 mb-4">
                Have a 4.8+ star rating? Get listed on Charlotte Roofing Hub and reach more customers.
              </p>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition text-sm"
              >
                Request Listing
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Homeowners</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get an instant roof estimate or browse our directory to find your perfect roofer.
              </p>
              <a
                href="https://instantroofestimate.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-red-600 transition text-sm"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-white/90 mb-8">
            We&apos;d love to hear from you. Reach out with questions, suggestions, or partnership inquiries.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
