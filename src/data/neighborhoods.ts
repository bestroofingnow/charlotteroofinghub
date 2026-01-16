// Charlotte Neighborhoods and Communities Data
// Hyper-local SEO for Charlotte, NC roofing services

export interface Neighborhood {
  slug: string
  name: string
  type: 'neighborhood' | 'city' | 'community' | 'business-park'
  description: string
  zipCodes: string[]
  population?: string
  medianHomeValue?: string
  commonRoofTypes: string[]
  challenges: string[]  // Local roofing challenges
  featured?: boolean
}

export const neighborhoods: Neighborhood[] = [
  // CHARLOTTE NEIGHBORHOODS
  {
    slug: 'ballantyne',
    name: 'Ballantyne',
    type: 'neighborhood',
    description: 'Upscale master-planned community in south Charlotte known for luxury homes, golf courses, and the Ballantyne Corporate Park. Home to many executive residences requiring premium roofing materials.',
    zipCodes: ['28277'],
    population: '45,000+',
    medianHomeValue: '$550,000',
    commonRoofTypes: ['Architectural Shingles', 'Designer Shingles', 'Slate', 'Metal'],
    challenges: ['Large roof areas', 'HOA requirements', 'Premium aesthetics'],
    featured: true
  },
  {
    slug: 'southend',
    name: 'South End',
    type: 'neighborhood',
    description: 'Trendy urban neighborhood along the LYNX Blue Line with a mix of historic homes, new construction, and commercial buildings. Popular with young professionals.',
    zipCodes: ['28203'],
    population: '12,000+',
    medianHomeValue: '$450,000',
    commonRoofTypes: ['Architectural Shingles', 'Flat Roofing', 'Metal'],
    challenges: ['Historic preservation', 'Mixed-use buildings', 'Urban access'],
    featured: true
  },
  {
    slug: 'noda',
    name: 'NoDa (North Davidson)',
    type: 'neighborhood',
    description: 'Charlotte\'s arts district featuring historic mill homes, bungalows, and creative spaces. Known for its eclectic character and preservation of historic architecture.',
    zipCodes: ['28205', '28206'],
    population: '8,000+',
    medianHomeValue: '$380,000',
    commonRoofTypes: ['Architectural Shingles', 'Standing Seam Metal', 'Historic Restoration'],
    challenges: ['Historic homes', 'Older structures', 'Unique architecture']
  },
  {
    slug: 'dilworth',
    name: 'Dilworth',
    type: 'neighborhood',
    description: 'Charlotte\'s first streetcar suburb featuring beautiful early 20th century homes, tree-lined streets, and historic bungalows. A highly desirable in-town neighborhood.',
    zipCodes: ['28203', '28207'],
    population: '10,000+',
    medianHomeValue: '$650,000',
    commonRoofTypes: ['Architectural Shingles', 'Slate', 'Cedar Shake', 'Historic Materials'],
    challenges: ['Historic preservation', 'Mature trees', 'Steep pitches'],
    featured: true
  },
  {
    slug: 'myers-park',
    name: 'Myers Park',
    type: 'neighborhood',
    description: 'One of Charlotte\'s most prestigious neighborhoods with grand estates, historic homes, and beautiful tree canopy. Known for its elegant architecture and high property values.',
    zipCodes: ['28207', '28209'],
    population: '15,000+',
    medianHomeValue: '$1,200,000',
    commonRoofTypes: ['Slate', 'Cedar Shake', 'Designer Shingles', 'Copper Accents'],
    challenges: ['Premium materials required', 'Large estates', 'Historic preservation'],
    featured: true
  },
  {
    slug: 'plaza-midwood',
    name: 'Plaza Midwood',
    type: 'neighborhood',
    description: 'Eclectic neighborhood known for its diversity, independent businesses, and mix of historic and modern homes. Popular with artists and young families.',
    zipCodes: ['28205'],
    population: '12,000+',
    medianHomeValue: '$420,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing', 'Flat Roofing'],
    challenges: ['Mixed housing ages', 'Varied styles', 'Historic bungalows']
  },
  {
    slug: 'uptown',
    name: 'Uptown Charlotte',
    type: 'neighborhood',
    description: 'Charlotte\'s central business district with high-rise condos, commercial buildings, and urban living. Home to Bank of America Stadium and major corporate headquarters.',
    zipCodes: ['28202', '28204'],
    population: '20,000+',
    medianHomeValue: '$400,000',
    commonRoofTypes: ['Flat/Commercial Roofing', 'TPO', 'EPDM', 'Metal'],
    challenges: ['High-rise access', 'Commercial requirements', 'Urban logistics']
  },
  {
    slug: 'university-city',
    name: 'University City',
    type: 'neighborhood',
    description: 'Growing area surrounding UNC Charlotte with a mix of student housing, family homes, and new development. Home to University Research Park.',
    zipCodes: ['28262', '28213', '28223'],
    population: '75,000+',
    medianHomeValue: '$320,000',
    commonRoofTypes: ['Architectural Shingles', '3-Tab Shingles', 'Flat Roofing'],
    challenges: ['New construction', 'Rental properties', 'Storm damage prone']
  },
  {
    slug: 'steele-creek',
    name: 'Steele Creek',
    type: 'neighborhood',
    description: 'Rapidly growing area in southwest Charlotte with new subdivisions, retail development, and family-friendly communities.',
    zipCodes: ['28273', '28278'],
    population: '55,000+',
    medianHomeValue: '$380,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing'],
    challenges: ['New construction', 'Builder warranty issues', 'HOA compliance']
  },
  {
    slug: 'southpark',
    name: 'SouthPark',
    type: 'neighborhood',
    description: 'Affluent area centered around SouthPark Mall with upscale homes, excellent schools, and premium shopping. One of Charlotte\'s most desirable addresses.',
    zipCodes: ['28210', '28211'],
    population: '35,000+',
    medianHomeValue: '$750,000',
    commonRoofTypes: ['Designer Shingles', 'Slate', 'Metal', 'Cedar Shake'],
    challenges: ['Premium expectations', 'HOA requirements', 'Large homes'],
    featured: true
  },
  {
    slug: 'eastover',
    name: 'Eastover',
    type: 'neighborhood',
    description: 'Historic and affluent neighborhood featuring grand estates, mature landscaping, and some of Charlotte\'s most valuable real estate.',
    zipCodes: ['28207'],
    population: '3,500+',
    medianHomeValue: '$1,500,000',
    commonRoofTypes: ['Slate', 'Cedar Shake', 'Copper', 'Historic Materials'],
    challenges: ['Premium materials only', 'Historic preservation', 'Estate-sized roofs']
  },
  {
    slug: 'elizabeth',
    name: 'Elizabeth',
    type: 'neighborhood',
    description: 'Historic neighborhood near Uptown with charming bungalows, tree-lined streets, and proximity to Novant Health Presbyterian Medical Center.',
    zipCodes: ['28204'],
    population: '8,000+',
    medianHomeValue: '$500,000',
    commonRoofTypes: ['Architectural Shingles', 'Historic Restoration', 'Metal'],
    challenges: ['Historic homes', 'Mature trees', 'Older infrastructure']
  },
  {
    slug: 'cherry',
    name: 'Cherry',
    type: 'neighborhood',
    description: 'Small, walkable neighborhood near Uptown featuring a mix of historic homes and new townhomes. Popular with professionals seeking urban convenience.',
    zipCodes: ['28203'],
    population: '3,000+',
    medianHomeValue: '$475,000',
    commonRoofTypes: ['Architectural Shingles', 'Flat Roofing', 'Metal'],
    challenges: ['Mixed ages', 'Urban lots', 'Historic compliance']
  },
  {
    slug: 'sedgefield',
    name: 'Sedgefield',
    type: 'neighborhood',
    description: 'Established neighborhood near Park Road Shopping Center with well-maintained mid-century homes and a strong sense of community.',
    zipCodes: ['28209', '28210'],
    population: '6,000+',
    medianHomeValue: '$425,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing'],
    challenges: ['Mid-century homes', 'Roof updates needed', 'Tree coverage']
  },
  {
    slug: 'cotswold',
    name: 'Cotswold',
    type: 'neighborhood',
    description: 'Established neighborhood anchored by Cotswold Shopping Center with mature trees, family homes, and excellent access to Charlotte amenities.',
    zipCodes: ['28211'],
    population: '12,000+',
    medianHomeValue: '$450,000',
    commonRoofTypes: ['Architectural Shingles', 'Designer Shingles'],
    challenges: ['Aging roofs', 'Mature trees', 'Mid-century architecture']
  },
  {
    slug: 'arboretum',
    name: 'Arboretum',
    type: 'neighborhood',
    description: 'Planned community in southeast Charlotte known for excellent schools, family amenities, and proximity to the Carolina Arboretum area.',
    zipCodes: ['28226', '28270'],
    population: '25,000+',
    medianHomeValue: '$475,000',
    commonRoofTypes: ['Architectural Shingles', 'Designer Shingles', 'Metal'],
    challenges: ['HOA requirements', 'Large subdivisions', 'Storm exposure']
  },
  {
    slug: 'providence',
    name: 'Providence',
    type: 'neighborhood',
    description: 'Affluent area in south Charlotte featuring upscale homes, excellent schools, and the Providence Country Club.',
    zipCodes: ['28270', '28277'],
    population: '20,000+',
    medianHomeValue: '$600,000',
    commonRoofTypes: ['Designer Shingles', 'Slate', 'Metal', 'Cedar Shake'],
    challenges: ['Premium expectations', 'HOA compliance', 'Large roof areas']
  },
  {
    slug: 'quail-hollow',
    name: 'Quail Hollow',
    type: 'neighborhood',
    description: 'Prestigious neighborhood home to Quail Hollow Club and the Wells Fargo Championship. Features luxury homes and country club living.',
    zipCodes: ['28210', '28226'],
    population: '8,000+',
    medianHomeValue: '$800,000',
    commonRoofTypes: ['Slate', 'Designer Shingles', 'Metal', 'Cedar Shake'],
    challenges: ['Luxury standards', 'Country club proximity', 'Premium materials']
  },
  {
    slug: 'piper-glen',
    name: 'Piper Glen',
    type: 'neighborhood',
    description: 'Gated golf course community in south Charlotte featuring luxury homes, the Piper Glen Golf Club, and resort-style amenities.',
    zipCodes: ['28277'],
    population: '5,000+',
    medianHomeValue: '$750,000',
    commonRoofTypes: ['Designer Shingles', 'Slate', 'Metal'],
    challenges: ['Gated access', 'HOA strict requirements', 'Golf course proximity']
  },

  // SURROUNDING CITIES
  {
    slug: 'matthews',
    name: 'Matthews',
    type: 'city',
    description: 'Charming suburb east of Charlotte with a historic downtown, excellent schools, and family-friendly neighborhoods. Known for its community events and local businesses.',
    zipCodes: ['28104', '28105'],
    population: '32,000+',
    medianHomeValue: '$400,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing'],
    challenges: ['Storm damage', 'Aging subdivisions', 'Tree damage'],
    featured: true
  },
  {
    slug: 'huntersville',
    name: 'Huntersville',
    type: 'city',
    description: 'Fast-growing town in north Mecklenburg County with excellent schools, Lake Norman access, and a mix of established and new neighborhoods.',
    zipCodes: ['28078'],
    population: '60,000+',
    medianHomeValue: '$450,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing', 'Designer Shingles'],
    challenges: ['New construction', 'Lake proximity', 'Storm exposure'],
    featured: true
  },
  {
    slug: 'cornelius',
    name: 'Cornelius',
    type: 'city',
    description: 'Lake Norman community known for waterfront living, upscale homes, and excellent amenities. A popular destination for families and retirees.',
    zipCodes: ['28031'],
    population: '32,000+',
    medianHomeValue: '$500,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing', 'Standing Seam'],
    challenges: ['Lake effect weather', 'Waterfront homes', 'Wind exposure']
  },
  {
    slug: 'davidson',
    name: 'Davidson',
    type: 'city',
    description: 'Historic college town home to Davidson College with charming downtown, lakefront properties, and strong community values.',
    zipCodes: ['28036'],
    population: '14,000+',
    medianHomeValue: '$600,000',
    commonRoofTypes: ['Architectural Shingles', 'Historic Materials', 'Metal'],
    challenges: ['Historic preservation', 'College town character', 'Premium expectations']
  },
  {
    slug: 'mooresville',
    name: 'Mooresville',
    type: 'city',
    description: 'Known as "Race City USA" for its NASCAR connections. Growing Lake Norman community with a mix of lakefront estates and family subdivisions.',
    zipCodes: ['28115', '28117'],
    population: '50,000+',
    medianHomeValue: '$400,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing'],
    challenges: ['Lake Norman weather', 'Rapid growth', 'Storm damage']
  },
  {
    slug: 'mint-hill',
    name: 'Mint Hill',
    type: 'city',
    description: 'Family-oriented suburb east of Charlotte with excellent schools, parks, and a small-town feel while offering easy access to the city.',
    zipCodes: ['28227'],
    population: '27,000+',
    medianHomeValue: '$375,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing'],
    challenges: ['Storm damage', 'Aging roofs', 'Tree coverage']
  },
  {
    slug: 'indian-trail',
    name: 'Indian Trail',
    type: 'city',
    description: 'One of NC\'s fastest-growing towns in Union County with new construction, family amenities, and excellent schools.',
    zipCodes: ['28079', '28110'],
    population: '45,000+',
    medianHomeValue: '$350,000',
    commonRoofTypes: ['Architectural Shingles', '3-Tab Shingles'],
    challenges: ['New construction issues', 'Builder warranties', 'Rapid growth']
  },
  {
    slug: 'waxhaw',
    name: 'Waxhaw',
    type: 'city',
    description: 'Historic small town in Union County with a charming downtown, antique shops, and growing residential areas. Popular with families.',
    zipCodes: ['28173'],
    population: '18,000+',
    medianHomeValue: '$425,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing'],
    challenges: ['Rural areas', 'Storm exposure', 'Historic downtown']
  },
  {
    slug: 'pineville',
    name: 'Pineville',
    type: 'city',
    description: 'Small city in south Charlotte area known for Carolina Place Mall, historic downtown, and diverse neighborhoods.',
    zipCodes: ['28134', '28210'],
    population: '9,000+',
    medianHomeValue: '$300,000',
    commonRoofTypes: ['Architectural Shingles', 'Flat Roofing'],
    challenges: ['Mixed commercial/residential', 'Older homes', 'Diverse construction']
  },
  {
    slug: 'fort-mill',
    name: 'Fort Mill',
    type: 'city',
    description: 'Fast-growing South Carolina town just across the border with excellent schools, new development, and family-friendly communities.',
    zipCodes: ['29708', '29715', '29707'],
    population: '25,000+',
    medianHomeValue: '$450,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing'],
    challenges: ['SC regulations', 'New construction', 'Rapid growth']
  },
  {
    slug: 'rock-hill',
    name: 'Rock Hill',
    type: 'city',
    description: 'Larger South Carolina city in the Charlotte metro with historic neighborhoods, Winthrop University, and diverse housing options.',
    zipCodes: ['29730', '29732', '29733'],
    population: '75,000+',
    medianHomeValue: '$275,000',
    commonRoofTypes: ['Architectural Shingles', '3-Tab Shingles', 'Metal'],
    challenges: ['SC regulations', 'Mixed ages', 'Storm damage']
  },
  {
    slug: 'gastonia',
    name: 'Gastonia',
    type: 'city',
    description: 'Largest city in Gaston County with historic downtown, diverse neighborhoods, and proximity to Crowders Mountain State Park.',
    zipCodes: ['28052', '28054', '28056'],
    population: '80,000+',
    medianHomeValue: '$225,000',
    commonRoofTypes: ['Architectural Shingles', '3-Tab Shingles'],
    challenges: ['Older mill homes', 'Diverse housing stock', 'Storm damage']
  },
  {
    slug: 'concord',
    name: 'Concord',
    type: 'city',
    description: 'Home to Charlotte Motor Speedway and Concord Mills. Growing city with a mix of historic areas and new development.',
    zipCodes: ['28025', '28027'],
    population: '105,000+',
    medianHomeValue: '$325,000',
    commonRoofTypes: ['Architectural Shingles', 'Metal Roofing'],
    challenges: ['Speedway area commercial', 'Mixed ages', 'Storm exposure']
  },
  {
    slug: 'kannapolis',
    name: 'Kannapolis',
    type: 'city',
    description: 'Revitalized city known for its historic downtown, research campus, and the new downtown baseball stadium.',
    zipCodes: ['28081', '28083'],
    population: '53,000+',
    medianHomeValue: '$250,000',
    commonRoofTypes: ['Architectural Shingles', '3-Tab Shingles'],
    challenges: ['Mill town heritage', 'Older homes', 'Urban renewal areas']
  },

  // BUSINESS PARKS
  {
    slug: 'ballantyne-corporate-park',
    name: 'Ballantyne Corporate Park',
    type: 'business-park',
    description: 'Premier office park in south Charlotte home to major corporations including Wells Fargo, MetLife, and ESPN. Features Class A office buildings and retail.',
    zipCodes: ['28277'],
    population: 'N/A',
    commonRoofTypes: ['TPO', 'EPDM', 'Metal', 'Built-Up Roofing'],
    challenges: ['Commercial specifications', 'Minimal disruption', '24/7 operations']
  },
  {
    slug: 'university-research-park',
    name: 'University Research Park',
    type: 'business-park',
    description: 'Major research and office park near UNC Charlotte with tech companies, healthcare facilities, and corporate offices.',
    zipCodes: ['28262'],
    population: 'N/A',
    commonRoofTypes: ['TPO', 'EPDM', 'Metal', 'Flat Roofing'],
    challenges: ['R&D facilities', 'Tech requirements', 'Energy efficiency']
  },
  {
    slug: 'south-end-business-district',
    name: 'South End Business District',
    type: 'business-park',
    description: 'Mixed-use urban district along the LYNX Blue Line with tech startups, breweries, and creative office spaces.',
    zipCodes: ['28203'],
    population: 'N/A',
    commonRoofTypes: ['Flat Roofing', 'TPO', 'Metal', 'Green Roofing'],
    challenges: ['Urban access', 'Mixed-use buildings', 'Historic conversions']
  },
  {
    slug: 'charlotte-gateway-village',
    name: 'Charlotte Gateway Village',
    type: 'business-park',
    description: 'Urban office campus near Uptown home to Bank of America operations and other financial services companies.',
    zipCodes: ['28202'],
    population: 'N/A',
    commonRoofTypes: ['TPO', 'EPDM', 'Built-Up Roofing'],
    challenges: ['High-security facilities', 'Corporate standards', 'Urban logistics']
  },
  {
    slug: 'arrowood-business-park',
    name: 'Arrowood Business Park',
    type: 'business-park',
    description: 'Major industrial and office park in southwest Charlotte near I-77 and I-485 with distribution centers and corporate facilities.',
    zipCodes: ['28217'],
    population: 'N/A',
    commonRoofTypes: ['TPO', 'Metal', 'Built-Up Roofing', 'EPDM'],
    challenges: ['Large flat roofs', 'Industrial requirements', 'Distribution centers']
  },
  {
    slug: 'northlake-business-park',
    name: 'Northlake Business Park',
    type: 'business-park',
    description: 'Commercial area in north Charlotte near Northlake Mall with retail, office, and hospitality properties.',
    zipCodes: ['28216', '28269'],
    population: 'N/A',
    commonRoofTypes: ['TPO', 'Metal', 'Flat Roofing'],
    challenges: ['Retail properties', 'Mixed commercial', 'High visibility']
  }
]

// Helper functions
export const getNeighborhoodBySlug = (slug: string) =>
  neighborhoods.find(n => n.slug === slug)

export const getNeighborhoodsByType = (type: Neighborhood['type']) =>
  neighborhoods.filter(n => n.type === type)

export const getFeaturedNeighborhoods = () =>
  neighborhoods.filter(n => n.featured)

export const getCharlotteNeighborhoods = () =>
  neighborhoods.filter(n => n.type === 'neighborhood')

export const getSurroundingCities = () =>
  neighborhoods.filter(n => n.type === 'city')

export const getBusinessParks = () =>
  neighborhoods.filter(n => n.type === 'business-park')
