// Type definitions for Charlotte Roofing Hub

export interface Company {
  id: string
  name: string
  slug: string
  description?: string | null
  phone?: string | null
  email?: string | null
  website?: string | null
  address?: string | null
  city: string
  state: string
  zipCode?: string | null
  googleRating?: number | null
  reviewCount?: number | null
  services: string[]
  materials: string[]
  isFounder: boolean
  isContributor: boolean
  isVerified: boolean
  logoUrl?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Job {
  id: string
  title: string
  description: string
  type: string
  payRange?: string | null
  companyId: string
  company?: Company
  location: string
  isApproved: boolean
  createdAt: Date
  expiresAt?: Date | null
}

export interface Crew {
  id: string
  name: string
  type: string
  phone: string
  email: string
  experience?: string | null
  skills: string[]
  bio?: string | null
  city: string
  isAvailable: boolean
  isApproved: boolean
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string | null
  category?: string | null
  tags: string[]
  author: string
  imageUrl?: string | null
  isPublished: boolean
  publishedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface FAQ {
  question: string
  answer: string
}

export interface MaterialInfo {
  name: string
  avgCostPerSqFt: string
  lifespan: string
  bestFor: string
  description: string
}

export type CrewType = 'sales-rep' | 'crew-leader' | 'installer' | 'laborer' | 'foreman'
export type JobType = 'full-time' | 'part-time' | 'contract' | 'commission'
export type ServiceType = 'residential' | 'commercial' | 'repairs' | 'inspections' | 'gutters'
