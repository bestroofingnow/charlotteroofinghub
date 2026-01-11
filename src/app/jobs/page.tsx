import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, MapPin, Clock, DollarSign, Building2, ArrowRight, Search } from 'lucide-react'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'

export const metadata: Metadata = {
  title: 'Roofing Jobs in Charlotte NC | Now Hiring',
  description: 'Find roofing jobs in Charlotte, NC. Browse job listings for sales reps, crew leaders, installers, and laborers. Top roofing companies are hiring now!',
  keywords: [
    'roofing jobs charlotte nc',
    'roofing careers charlotte',
    'roofing sales jobs charlotte',
    'roof installer jobs charlotte',
    'roofing crew jobs near me'
  ],
}

// Sample job listings (would come from database in production)
const sampleJobs = [
  {
    id: '1',
    title: 'Roofing Sales Representative',
    company: 'Best Roofing Now LLC',
    type: 'Full-time',
    payRange: '$50,000 - $120,000/year',
    location: 'Charlotte, NC',
    description: 'Looking for experienced roofing sales reps to join our growing team. Commission-based with uncapped earning potential.',
    postedDays: 2,
    featured: true
  },
  {
    id: '2',
    title: 'Experienced Shingle Installer',
    company: 'Piedmont Roof Solutions',
    type: 'Full-time',
    payRange: '$20 - $30/hour',
    location: 'Charlotte, NC',
    description: 'Seeking skilled shingle installers with 2+ years experience. Must have own tools and reliable transportation.',
    postedDays: 5,
    featured: false
  },
  {
    id: '3',
    title: 'Roofing Crew Leader',
    company: 'Matthews Family Roofing',
    type: 'Full-time',
    payRange: '$25 - $35/hour',
    location: 'Matthews, NC',
    description: 'Lead a crew of 3-4 installers. Must have leadership experience and strong knowledge of residential roofing.',
    postedDays: 3,
    featured: false
  },
  {
    id: '4',
    title: 'Commercial Roofing Technician',
    company: 'Steele Creek Roofers',
    type: 'Full-time',
    payRange: '$22 - $32/hour',
    location: 'Charlotte, NC',
    description: 'TPO and EPDM experience required. Join our commercial division for large-scale projects.',
    postedDays: 7,
    featured: false
  },
  {
    id: '5',
    title: 'Roofing Laborer',
    company: 'Huntersville Top Roofing',
    type: 'Full-time',
    payRange: '$15 - $20/hour',
    location: 'Huntersville, NC',
    description: 'Entry-level position. Will train the right candidate. Must be able to lift 50+ lbs and work at heights.',
    postedDays: 1,
    featured: false
  },
  {
    id: '6',
    title: 'Storm Damage Inspector',
    company: 'Concord Quality Roofing',
    type: 'Contract',
    payRange: 'Commission-based',
    location: 'Concord, NC',
    description: 'Inspect roofs for storm damage and work with insurance adjusters. Roofing knowledge preferred.',
    postedDays: 4,
    featured: false
  }
]

export default function JobsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Roofing Jobs in Charlotte, NC
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Find your next roofing career opportunity. Top-rated Charlotte roofing companies are hiring sales reps, installers, crew leaders, and more.
            </p>

            {/* Search Bar */}
            <form className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="search"
                placeholder="Search jobs by title, company, or location..."
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-600">
                <strong className="text-gray-900">{sampleJobs.length}</strong> open positions
              </span>
              <span className="text-sm text-gray-600">
                <strong className="text-gray-900">25+</strong> companies hiring
              </span>
            </div>
            <Link
              href="/jobs/post"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Post a Job
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-2 space-y-4">
              {sampleJobs.map((job) => (
                <article
                  key={job.id}
                  className={`bg-white rounded-xl p-6 shadow-sm border ${job.featured ? 'border-amber-300 ring-1 ring-amber-200' : 'border-gray-100'}`}
                >
                  {job.featured && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-semibold mb-3">
                      Featured
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-grow">
                      <h2 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h2>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center gap-1 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-gray-600">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                          <DollarSign className="w-4 h-4" />
                          {job.payRange}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs text-gray-500">
                        {job.postedDays === 1 ? 'Posted yesterday' : `Posted ${job.postedDays} days ago`}
                      </span>
                      <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {/* Load More */}
              <div className="text-center pt-4">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition">
                  Load More Jobs
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Post a Job CTA */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Hiring for your roofing company?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Post your job listings and reach qualified roofing professionals in Charlotte.
                </p>
                <Link
                  href="/jobs/post"
                  className="block w-full text-center py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
                >
                  Post a Job
                </Link>
              </div>

              {/* Register as Crew */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Looking for work?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Create your profile and let roofing companies find you.
                </p>
                <Link
                  href="/crews/register"
                  className="block w-full text-center py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
                >
                  Register as Crew
                </Link>
              </div>

              {/* Instant Estimate */}
              <InstantEstimateCTA variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Types of Roofing Jobs in Charlotte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sales Representatives', desc: 'Commission-based sales with high earning potential' },
              { title: 'Crew Leaders', desc: 'Lead installation teams and manage projects' },
              { title: 'Installers', desc: 'Skilled shingle, metal, and flat roof installation' },
              { title: 'Laborers', desc: 'Entry-level positions with training provided' }
            ].map((type) => (
              <div key={type.title} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
