import Link from 'next/link'
import { Building2, Briefcase, Users, ArrowRight, Home as HomeIcon, Warehouse, DollarSign, FileText, CheckCircle, Star } from 'lucide-react'
import Hero from '@/components/shared/Hero'
import FeaturedCompany from '@/components/companies/FeaturedCompany'
import CompanyCard from '@/components/companies/CompanyCard'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { companies, getFeaturedCompany, getRegularCompanies } from '@/data/companies'

// Homepage FAQs - Voice Search Optimized
const homepageFAQs = [
  {
    question: "Who is the best roofing company in Charlotte NC?",
    answer: "Best Roofing Now LLC is Charlotte's featured roofing company, with a perfect 5.0 Google rating and over 125 reviews. However, Charlotte Roofing Hub lists 25+ top-rated roofing companies all with 4.8+ star ratings, so you can find the perfect roofer for your specific needs."
  },
  {
    question: "How much does a new roof cost in Charlotte NC?",
    answer: "The average cost for a new roof in Charlotte ranges from $8,000 to $25,000 for residential homes, depending on size, materials, and complexity. Asphalt shingles cost $3.50-$7.00 per square foot, while metal roofing ranges from $7-$14 per square foot. Get an instant estimate at InstantRoofEstimate.ai for a more accurate price."
  },
  {
    question: "What roofing materials are best for Charlotte's climate?",
    answer: "For Charlotte's hot, humid summers and occasional severe storms, architectural shingles are the most popular choice due to their durability and wind resistance. Metal roofing is excellent for heat reflection and longevity. Both materials handle Charlotte's climate well, with proper installation being key."
  },
  {
    question: "How do I find roofing jobs in Charlotte?",
    answer: "Charlotte Roofing Hub features a dedicated job board where local roofing companies post open positions. You can find jobs for sales reps, crew leaders, installers, and laborers. Visit our Jobs section to browse current openings or register as a crew member to be discovered by employers."
  },
  {
    question: "How long does a roof replacement take in Charlotte?",
    answer: "Most residential roof replacements in Charlotte take 1-3 days, depending on the size of your home, weather conditions, and material complexity. Simple asphalt shingle replacements on average-sized homes typically complete in one day. Metal or tile roofing may take 3-5 days."
  }
]

// Stats for the hub
const stats = [
  { label: 'Top-Rated Companies', value: '25+', icon: Building2 },
  { label: 'Average Rating', value: '4.9', icon: Star },
  { label: 'Cities Served', value: '15+', icon: HomeIcon },
  { label: 'Jobs Posted', value: '50+', icon: Briefcase },
]

export default function HomePage() {
  const featuredCompany = getFeaturedCompany()
  const topCompanies = getRegularCompanies().slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Company Section */}
      {featuredCompany && <FeaturedCompany company={featuredCompany} />}

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-xl">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Roofing Companies Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Top-Rated Roofing Companies in Charlotte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All companies listed have 4.8+ star Google ratings. We feature quality roofers that deserve more visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCompanies.map((company, index) => (
              <CompanyCard key={company.id} company={company} rank={index + 2} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              View All {companies.length} Companies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instant Estimate CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <InstantEstimateCTA variant="inline" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Everything Roofing in Charlotte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your complete resource for residential and commercial roofing information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/residential" className="group p-6 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition">
              <HomeIcon className="w-10 h-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-white">Residential Roofing</h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">
                Guide to home roofing services, materials, and what to expect
              </p>
            </Link>

            <Link href="/commercial" className="group p-6 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition">
              <Warehouse className="w-10 h-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-white">Commercial Roofing</h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">
                TPO, EPDM, and flat roofing solutions for businesses
              </p>
            </Link>

            <Link href="/materials" className="group p-6 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition">
              <DollarSign className="w-10 h-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-white">Materials & Pricing</h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">
                Compare roofing materials and average costs in Charlotte
              </p>
            </Link>

            <Link href="/blog" className="group p-6 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition">
              <FileText className="w-10 h-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-white">Roofing Blog</h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">
                Tips, guides, and news about roofing in Charlotte
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Jobs & Crews Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Companies */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Roofing Companies</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Looking to hire experienced roofers, sales reps, or crews? Post your job openings and connect with qualified professionals in Charlotte.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Post unlimited job listings
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Browse available crews
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Get featured on our platform
                </li>
              </ul>
              <Link
                href="/jobs/post"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
              >
                Post a Job
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* For Crews */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Sales Reps & Crews</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Looking for work with a roofing company in Charlotte? Register your profile and let companies find you, or browse current openings.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Create your profile for free
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Browse job listings
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Get discovered by employers
                </li>
              </ul>
              <div className="flex gap-3">
                <Link
                  href="/crews/register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                >
                  View Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Charlotte Roofers */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Charlotte Roofing Hub?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Only 4.8+ Star Companies</h3>
              <p className="text-gray-600">
                We only list roofing companies with verified 4.8+ star Google ratings. Quality guaranteed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Discover Hidden Gems</h3>
              <p className="text-gray-600">
                We feature quality local roofers who deserve more visibility, not just the big advertisers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Charlotte Focused</h3>
              <p className="text-gray-600">
                100% focused on Charlotte and surrounding areas. Local expertise you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <FAQSection
          title="Common Questions About Roofing in Charlotte"
          faqs={homepageFAQs}
        />
      </section>

      {/* Final CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Find Your Perfect Roofer?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our curated list of Charlotte&apos;s best roofing companies, or get an instant estimate for your roof today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/companies"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Browse Companies
            </Link>
            <a
              href="https://instantroofestimate.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Get Instant Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
