import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, MapPin, Star, Phone, Mail, Briefcase, ArrowRight, Search, CheckCircle } from 'lucide-react'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'

export const metadata: Metadata = {
  title: 'Find Roofing Crews & Sales Reps in Charlotte NC',
  description: 'Browse available roofing crews, sales representatives, and installers in Charlotte, NC. Hire experienced roofing professionals for your company.',
  keywords: [
    'roofing crews charlotte',
    'roofing sales reps charlotte',
    'hire roofers charlotte nc',
    'roofing installers for hire',
    'subcontract roofers charlotte'
  ],
}

// Sample crew listings
const sampleCrews = [
  {
    id: '1',
    name: 'Michael T.',
    type: 'Sales Representative',
    experience: '8 years',
    skills: ['Door-to-door', 'Storm damage', 'Insurance claims'],
    city: 'Charlotte',
    available: true,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Rodriguez Roofing Crew',
    type: 'Installation Crew',
    experience: '12 years',
    skills: ['Shingles', 'Metal', 'Flat roofs', 'Gutters'],
    city: 'Matthews',
    available: true,
    rating: 5.0
  },
  {
    id: '3',
    name: 'James W.',
    type: 'Crew Leader',
    experience: '6 years',
    skills: ['Residential', 'Commercial', 'Team management'],
    city: 'Huntersville',
    available: true,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Thompson Installations',
    type: 'Installation Crew',
    experience: '15 years',
    skills: ['Architectural shingles', 'Tear-off', 'Repairs'],
    city: 'Concord',
    available: false,
    rating: 4.9
  },
  {
    id: '5',
    name: 'Sarah M.',
    type: 'Sales Representative',
    experience: '4 years',
    skills: ['Consultative sales', 'Follow-up', 'CRM'],
    city: 'Charlotte',
    available: true,
    rating: 4.7
  },
  {
    id: '6',
    name: 'Elite Install Team',
    type: 'Installation Crew',
    experience: '10 years',
    skills: ['Metal roofing', 'Standing seam', 'Commercial'],
    city: 'Gastonia',
    available: true,
    rating: 5.0
  }
]

export default function CrewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Find Roofing Crews & Sales Reps
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Browse available roofing professionals in Charlotte. Find experienced crews, sales reps, and installers ready to work with your company.
            </p>

            {/* Search Bar */}
            <form className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="search"
                placeholder="Search by skill, type, or location..."
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
                <strong className="text-gray-900">{sampleCrews.filter(c => c.available).length}</strong> available now
              </span>
              <span className="text-sm text-gray-600">
                <strong className="text-gray-900">{sampleCrews.length}</strong> total professionals
              </span>
            </div>
            <Link
              href="/crews/register"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition"
            >
              Register as Crew
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Crew Listings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Crew List */}
            <div className="lg:col-span-2 space-y-4">
              {sampleCrews.map((crew) => (
                <article
                  key={crew.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {crew.name.charAt(0)}
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-lg font-bold text-gray-900">{crew.name}</h2>
                          {crew.available ? (
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                              Available
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs font-medium">
                              Unavailable
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium mb-2">{crew.type}</p>
                        <div className="flex flex-wrap gap-3 text-sm mb-3">
                          <span className="inline-flex items-center gap-1 text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            {crew.experience} experience
                          </span>
                          <span className="inline-flex items-center gap-1 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {crew.city}, NC
                          </span>
                          <span className="inline-flex items-center gap-1 text-amber-600">
                            <Star className="w-4 h-4 fill-amber-400" />
                            {crew.rating}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {crew.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                      <button
                        className={`px-4 py-2 font-medium rounded-lg transition ${
                          crew.available
                            ? 'bg-primary text-white hover:bg-primary-light'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!crew.available}
                      >
                        {crew.available ? 'Contact' : 'Unavailable'}
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {/* Load More */}
              <div className="text-center pt-4">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition">
                  Load More Crews
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Register CTA */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Are you a roofing professional?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Create your profile and let roofing companies in Charlotte find you.
                </p>
                <Link
                  href="/crews/register"
                  className="block w-full text-center py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
                >
                  Register Now - Free
                </Link>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Why Register?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Get discovered by top roofing companies
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Showcase your skills and experience
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Receive job opportunities directly
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    100% free to join
                  </li>
                </ul>
              </div>

              {/* Instant Estimate */}
              <InstantEstimateCTA variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* Crew Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Types of Roofing Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sales Representatives', desc: 'Experienced in door-to-door, storm chasing, and consultative sales' },
              { title: 'Crew Leaders', desc: 'Manage teams and oversee installation projects' },
              { title: 'Installation Crews', desc: 'Full crews ready for residential and commercial projects' },
              { title: 'Individual Installers', desc: 'Skilled roofers available for temp or permanent work' }
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
