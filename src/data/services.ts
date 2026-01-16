// Roofing Services Data for Charlotte, NC
// Comprehensive service pages for local SEO

export interface RoofingService {
  slug: string
  name: string
  shortName: string
  category: 'residential' | 'commercial' | 'specialty' | 'emergency'
  description: string
  longDescription: string
  benefits: string[]
  process: string[]
  priceRange: string
  timeline: string
  icon: string  // Lucide icon name
  featured?: boolean
  keywords: string[]
  faqs: { question: string; answer: string }[]
}

export const services: RoofingService[] = [
  // RESIDENTIAL SERVICES
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    shortName: 'Replacement',
    category: 'residential',
    description: 'Complete roof replacement services for Charlotte homes. Remove old roofing and install new materials with manufacturer warranties.',
    longDescription: 'When repairs are no longer cost-effective or your roof has reached the end of its lifespan, our verified Charlotte roofing contractors provide complete roof replacement services. This includes removing all old roofing materials down to the deck, inspecting and repairing the underlying structure, and installing a brand new roof system with proper ventilation, underlayment, and your choice of premium materials.',
    benefits: [
      'Increase your home\'s value by up to $15,000',
      'Lower energy bills with modern materials',
      'Eliminate ongoing repair costs',
      '25-50 year manufacturer warranties',
      'Improve curb appeal instantly',
      'Better protection from Charlotte storms'
    ],
    process: [
      'Free inspection and estimate',
      'Material selection consultation',
      'Permit acquisition',
      'Old roof removal',
      'Deck inspection and repairs',
      'Underlayment and ice barrier installation',
      'New roofing material installation',
      'Cleanup and final inspection'
    ],
    priceRange: '$8,000 - $25,000',
    timeline: '1-3 days',
    icon: 'Home',
    featured: true,
    keywords: ['roof replacement charlotte nc', 'new roof charlotte', 'replace roof charlotte', 'roof installation charlotte'],
    faqs: [
      {
        question: 'How do I know if I need a roof replacement?',
        answer: 'Signs include: shingles that are 20+ years old, multiple leaks, extensive storm damage, sagging areas, or if repairs exceed 30% of replacement cost. Our verified contractors offer free inspections to assess your roof\'s condition.'
      },
      {
        question: 'How long does a roof replacement take in Charlotte?',
        answer: 'Most residential roof replacements in Charlotte take 1-3 days, depending on size and complexity. Weather delays are common during Charlotte\'s rainy seasons, so we recommend scheduling during drier months when possible.'
      },
      {
        question: 'Will my homeowners insurance cover a roof replacement?',
        answer: 'Insurance typically covers roof damage from storms, hail, fallen trees, and fire - but not normal wear and aging. Many of our verified Charlotte roofers specialize in insurance claims and can help you navigate the process.'
      }
    ]
  },
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    shortName: 'Repair',
    category: 'residential',
    description: 'Expert roof repairs for leaks, storm damage, missing shingles, and more. Fast response times throughout Charlotte.',
    longDescription: 'From minor leaks to significant storm damage, our verified Charlotte roofing contractors handle all types of roof repairs. We address problems before they become major issues, extending your roof\'s lifespan and protecting your home. Our roofers use quality materials that match your existing roof and stand behind their work with warranties.',
    benefits: [
      'Stop leaks before they cause interior damage',
      'Extend your roof\'s lifespan by years',
      'Maintain your home\'s value',
      'Prevent mold and structural damage',
      'More affordable than full replacement',
      'Same-day service available'
    ],
    process: [
      'Inspection and damage assessment',
      'Detailed repair estimate',
      'Material matching',
      'Repair execution',
      'Quality check and cleanup',
      'Warranty documentation'
    ],
    priceRange: '$300 - $2,500',
    timeline: 'Same day - 2 days',
    icon: 'Wrench',
    featured: true,
    keywords: ['roof repair charlotte nc', 'fix roof leak charlotte', 'roofing repair charlotte', 'roof leak repair'],
    faqs: [
      {
        question: 'What are signs I need roof repair?',
        answer: 'Look for missing or damaged shingles, water stains on ceilings, granules in gutters, daylight through roof boards, or higher energy bills. After Charlotte storms, always check for hail damage or wind-blown debris damage.'
      },
      {
        question: 'Can small leaks wait to be repaired?',
        answer: 'No - even small leaks can cause significant damage to insulation, wood framing, and drywall. Mold can develop within 24-48 hours. We recommend addressing any leak immediately, especially in Charlotte\'s humid climate.'
      }
    ]
  },
  {
    slug: 'emergency-roof-repair',
    name: 'Emergency Roof Repair',
    shortName: 'Emergency',
    category: 'emergency',
    description: '24/7 emergency roofing services for storm damage, fallen trees, and sudden leaks in Charlotte.',
    longDescription: 'When disaster strikes, our verified Charlotte roofing contractors are ready to respond. Whether it\'s storm damage, a fallen tree, or a sudden catastrophic leak, we provide emergency tarping, board-up services, and rapid repairs to protect your home and belongings. Many of our contractors offer 24/7 emergency response throughout the Charlotte metro area.',
    benefits: [
      '24/7 emergency response available',
      'Rapid damage containment',
      'Insurance claim assistance',
      'Temporary protection (tarping)',
      'Prevent secondary water damage',
      'Professional damage documentation'
    ],
    process: [
      'Emergency dispatch',
      'Initial damage assessment',
      'Temporary protection (tarping/board-up)',
      'Damage documentation for insurance',
      'Permanent repair planning',
      'Insurance coordination',
      'Final repairs completed'
    ],
    priceRange: '$500 - $5,000+',
    timeline: 'Same day response',
    icon: 'AlertTriangle',
    featured: true,
    keywords: ['emergency roof repair charlotte', '24/7 roofer charlotte', 'storm damage roof charlotte', 'emergency roofing'],
    faqs: [
      {
        question: 'What counts as a roofing emergency?',
        answer: 'Emergencies include: active leaks during rain, holes in the roof from fallen trees or debris, significant storm damage exposing interior, fire damage, or structural concerns. If water is actively entering your home, call immediately.'
      },
      {
        question: 'How fast can emergency repairs be completed?',
        answer: 'Temporary protection (tarping) is typically completed same-day or within hours of your call. Permanent repairs depend on damage extent and material availability, usually within 1-7 days.'
      }
    ]
  },
  {
    slug: 'storm-damage-repair',
    name: 'Storm Damage Repair',
    shortName: 'Storm Damage',
    category: 'residential',
    description: 'Expert storm damage assessment and repair for Charlotte homes affected by hail, wind, and severe weather.',
    longDescription: 'Charlotte experiences severe thunderstorms, hail, and occasional hurricanes that can devastate roofs. Our verified contractors are experienced in storm damage assessment, insurance claims, and repairs. We document all damage thoroughly, work directly with your insurance company, and restore your roof to pre-storm condition using quality materials.',
    benefits: [
      'Free storm damage inspections',
      'Complete insurance claim assistance',
      'Thorough damage documentation',
      'Direct insurance company communication',
      'Quality repairs with warranties',
      'Fast turnaround times'
    ],
    process: [
      'Free storm damage inspection',
      'Detailed damage documentation (photos/video)',
      'Insurance claim filing assistance',
      'Meet with insurance adjuster',
      'Repair estimate approval',
      'Complete repairs',
      'Final walkthrough'
    ],
    priceRange: 'Often covered by insurance',
    timeline: '1-7 days after approval',
    icon: 'CloudLightning',
    keywords: ['storm damage roof charlotte', 'hail damage roof', 'wind damage repair', 'charlotte storm roofing'],
    faqs: [
      {
        question: 'Should I file an insurance claim for storm damage?',
        answer: 'If damage is significant (multiple shingles missing, hail damage, leaks), filing a claim is usually worthwhile. Our contractors provide free inspections and can advise whether damage warrants a claim. Many Charlotte roofs qualify for full replacement after major storms.'
      },
      {
        question: 'How can I tell if my roof has hail damage?',
        answer: 'Hail damage often isn\'t visible from the ground. Signs include dents in gutters/downspouts, bruised or fractured shingles, granule loss, and damaged vents. A professional inspection is essential after any hailstorm in Charlotte.'
      }
    ]
  },
  {
    slug: 'roof-inspection',
    name: 'Roof Inspection',
    shortName: 'Inspection',
    category: 'residential',
    description: 'Professional roof inspections for home buyers, sellers, maintenance, and insurance claims in Charlotte.',
    longDescription: 'Regular roof inspections are essential for maintaining your Charlotte home. Our verified contractors provide thorough inspections for home purchases, annual maintenance, post-storm assessment, and insurance claims. We document everything with photos and provide detailed reports on your roof\'s condition, remaining lifespan, and any needed repairs.',
    benefits: [
      'Identify problems before they worsen',
      'Essential for home buying/selling',
      'Insurance claim documentation',
      'Extend roof lifespan with early repairs',
      'Detailed written reports',
      'Peace of mind'
    ],
    process: [
      'Exterior roof examination',
      'Interior attic inspection',
      'Flashing and penetration check',
      'Gutter and drainage assessment',
      'Photo documentation',
      'Written condition report',
      'Repair recommendations'
    ],
    priceRange: 'Free - $300',
    timeline: '1-2 hours',
    icon: 'Search',
    keywords: ['roof inspection charlotte', 'roofing inspection', 'home inspection roof', 'roof assessment charlotte'],
    faqs: [
      {
        question: 'How often should I have my roof inspected?',
        answer: 'We recommend annual inspections, plus after any significant storm. Charlotte\'s severe weather makes regular inspections especially important. Inspections are also essential before buying or selling a home.'
      },
      {
        question: 'Are roof inspections free?',
        answer: 'Many of our verified Charlotte contractors offer free inspections, especially for potential repair or replacement projects. Detailed inspection reports for home sales or insurance purposes may have a fee of $150-300.'
      }
    ]
  },
  {
    slug: 'shingle-roofing',
    name: 'Shingle Roofing',
    shortName: 'Shingles',
    category: 'residential',
    description: 'Asphalt shingle installation and repair - Charlotte\'s most popular roofing material for homes.',
    longDescription: 'Asphalt shingles are the most popular roofing material in Charlotte, offering excellent value, durability, and aesthetic options. Our verified contractors install architectural shingles, designer shingles, and impact-resistant shingles from top manufacturers like GAF, Owens Corning, and CertainTeed. We help you choose the right style and warranty level for your home and budget.',
    benefits: [
      'Most affordable roofing option',
      'Wide variety of colors and styles',
      '25-50 year warranties available',
      'Energy-efficient options',
      'Impact-resistant grades for hail',
      'Fast installation'
    ],
    process: [
      'Material selection consultation',
      'Color and style matching',
      'Old shingle removal',
      'Deck inspection',
      'Underlayment installation',
      'Shingle installation',
      'Ridge vent and cap installation',
      'Cleanup and inspection'
    ],
    priceRange: '$4 - $8 per sq ft',
    timeline: '1-2 days',
    icon: 'Layers',
    featured: true,
    keywords: ['shingle roof charlotte', 'asphalt shingles charlotte', 'architectural shingles', 'shingle installation'],
    faqs: [
      {
        question: 'What\'s the difference between 3-tab and architectural shingles?',
        answer: 'Architectural shingles are thicker, more durable, and have a dimensional look. They typically last 25-30 years vs 15-20 for 3-tab, and better withstand Charlotte\'s storms. The price difference is usually $1-2 per square foot - well worth the upgrade.'
      },
      {
        question: 'Which shingle brand is best?',
        answer: 'GAF, Owens Corning, and CertainTeed are all excellent choices available in Charlotte. The brand matters less than proper installation by a certified contractor. Our verified roofers are certified by major manufacturers.'
      }
    ]
  },
  {
    slug: 'metal-roofing',
    name: 'Metal Roofing',
    shortName: 'Metal',
    category: 'residential',
    description: 'Durable, energy-efficient metal roofing installation for Charlotte homes. Standing seam and metal shingle options.',
    longDescription: 'Metal roofing is growing in popularity across Charlotte for its exceptional durability, energy efficiency, and longevity. Our verified contractors install standing seam metal roofs and metal shingle systems that can last 50+ years with minimal maintenance. Metal roofs reflect heat, reducing cooling costs in Charlotte\'s hot summers, and withstand high winds and hail.',
    benefits: [
      '50+ year lifespan',
      'Excellent energy efficiency',
      'Superior wind and hail resistance',
      'Low maintenance',
      'Environmentally friendly (recyclable)',
      'Increases home value',
      'Fire resistant'
    ],
    process: [
      'Design consultation',
      'Color and style selection',
      'Precise measurements',
      'Material fabrication',
      'Underlayment installation',
      'Panel installation',
      'Trim and flashing work',
      'Final inspection'
    ],
    priceRange: '$8 - $16 per sq ft',
    timeline: '2-5 days',
    icon: 'Shield',
    featured: true,
    keywords: ['metal roof charlotte', 'standing seam metal charlotte', 'metal roofing contractor', 'metal roof installation'],
    faqs: [
      {
        question: 'Are metal roofs noisy when it rains?',
        answer: 'Modern metal roofs with proper underlayment and insulation are no louder than shingle roofs. The solid decking and insulation absorb sound effectively. Many Charlotte homeowners are surprised how quiet their metal roof is.'
      },
      {
        question: 'Do metal roofs attract lightning?',
        answer: 'No - metal roofs don\'t attract lightning any more than other materials. In fact, if struck, metal disperses the energy safely and won\'t catch fire like wood shakes. Metal roofs are actually safer in lightning-prone areas like Charlotte.'
      }
    ]
  },
  {
    slug: 'flat-roofing',
    name: 'Flat Roofing',
    shortName: 'Flat Roof',
    category: 'commercial',
    description: 'Commercial flat roof installation and repair in Charlotte. TPO, EPDM, and modified bitumen systems.',
    longDescription: 'Flat and low-slope roofs are common on Charlotte commercial buildings, industrial facilities, and some residential additions. Our verified contractors specialize in TPO, EPDM, PVC, and modified bitumen roofing systems. We handle new installations, repairs, and full replacements with proper drainage solutions and energy-efficient materials.',
    benefits: [
      'Cost-effective for large areas',
      'Easy maintenance access',
      'Can support HVAC equipment',
      'Energy-efficient options (white TPO)',
      'Long warranties available',
      'Ideal for commercial buildings'
    ],
    process: [
      'Drainage assessment',
      'System recommendation',
      'Substrate preparation',
      'Insulation installation',
      'Membrane installation',
      'Flashing and detail work',
      'Drainage verification',
      'Final inspection'
    ],
    priceRange: '$5 - $12 per sq ft',
    timeline: '2-7 days',
    icon: 'Square',
    keywords: ['flat roof charlotte', 'commercial roofing charlotte', 'TPO roofing', 'EPDM roof', 'flat roof repair'],
    faqs: [
      {
        question: 'What\'s the best flat roofing material?',
        answer: 'TPO is currently the most popular choice for Charlotte commercial buildings due to its energy efficiency, durability, and cost-effectiveness. EPDM is more affordable but less energy efficient. We help you choose based on your building\'s needs.'
      },
      {
        question: 'How long do flat roofs last?',
        answer: 'With proper installation and maintenance, TPO and EPDM roofs last 20-30 years. Modified bitumen typically lasts 15-20 years. Regular inspections and prompt repairs extend lifespan significantly.'
      }
    ]
  },
  {
    slug: 'commercial-roofing',
    name: 'Commercial Roofing',
    shortName: 'Commercial',
    category: 'commercial',
    description: 'Full-service commercial roofing for Charlotte businesses, industrial facilities, and multi-family properties.',
    longDescription: 'Our verified Charlotte commercial roofing contractors serve businesses of all sizes, from small retail shops to large industrial facilities. We understand the unique needs of commercial properties: minimizing business disruption, meeting building codes, managing budgets, and providing proper warranties. Services include new installation, repairs, maintenance programs, and emergency response.',
    benefits: [
      'Minimize business disruption',
      'Flexible scheduling (nights/weekends)',
      'Maintenance programs available',
      'Extended warranty options',
      'Energy-efficient solutions',
      'Code compliance expertise'
    ],
    process: [
      'Facility assessment',
      'Custom proposal development',
      'Project scheduling',
      'Material procurement',
      'Professional installation',
      'Quality assurance checks',
      'Warranty documentation',
      'Maintenance program setup'
    ],
    priceRange: 'Varies by project',
    timeline: 'Project-dependent',
    icon: 'Building2',
    featured: true,
    keywords: ['commercial roofing charlotte', 'business roofing', 'industrial roofing', 'commercial roof repair charlotte'],
    faqs: [
      {
        question: 'Can you work around our business hours?',
        answer: 'Absolutely. Our verified commercial contractors offer flexible scheduling including nights, weekends, and phased approaches to minimize disruption to your Charlotte business operations.'
      },
      {
        question: 'Do you offer maintenance contracts?',
        answer: 'Yes - many of our verified contractors offer preventive maintenance programs that include regular inspections, gutter cleaning, and minor repairs. This extends roof life and catches problems early.'
      }
    ]
  },
  {
    slug: 'gutter-installation',
    name: 'Gutter Installation',
    shortName: 'Gutters',
    category: 'specialty',
    description: 'Seamless gutter installation and repair to protect Charlotte homes from water damage.',
    longDescription: 'Proper gutter systems are essential for protecting your Charlotte home from water damage. Our verified contractors install seamless aluminum gutters, copper gutters, and gutter guards. We ensure proper sizing, pitch, and downspout placement to handle Charlotte\'s heavy rainfall and direct water safely away from your foundation.',
    benefits: [
      'Protect foundation from water damage',
      'Prevent basement flooding',
      'Eliminate landscape erosion',
      'Seamless design prevents leaks',
      'Gutter guard options available',
      'Custom color matching'
    ],
    process: [
      'Drainage assessment',
      'Gutter sizing calculation',
      'Material and color selection',
      'Old gutter removal',
      'New gutter fabrication on-site',
      'Installation with proper pitch',
      'Downspout placement',
      'System testing'
    ],
    priceRange: '$4 - $15 per linear ft',
    timeline: '1 day',
    icon: 'Droplets',
    keywords: ['gutter installation charlotte', 'seamless gutters charlotte', 'gutter repair', 'gutter guards charlotte'],
    faqs: [
      {
        question: 'Why choose seamless gutters?',
        answer: 'Seamless gutters have no joints along the length, meaning fewer leak points. They\'re custom-fabricated on-site to fit your Charlotte home perfectly and look cleaner than sectional gutters.'
      },
      {
        question: 'Are gutter guards worth it?',
        answer: 'In Charlotte, with our heavy tree coverage and frequent storms, gutter guards significantly reduce maintenance and prevent clogs. They\'re especially valuable if you have pine trees or oaks nearby.'
      }
    ]
  },
  {
    slug: 'skylight-installation',
    name: 'Skylight Installation',
    shortName: 'Skylights',
    category: 'specialty',
    description: 'Professional skylight installation and repair by Charlotte\'s verified roofing contractors.',
    longDescription: 'Skylights add natural light and beauty to your Charlotte home, but improper installation is a leading cause of roof leaks. Our verified contractors specialize in skylight installation with proper flashing and waterproofing. We install fixed skylights, vented skylights, and tubular skylights from top brands like VELUX.',
    benefits: [
      'Increase natural light by up to 30%',
      'Reduce electricity costs',
      'Add architectural interest',
      'Vented options improve ventilation',
      'Energy-efficient glazing options',
      'Proper flashing prevents leaks'
    ],
    process: [
      'Placement consultation',
      'Structural assessment',
      'Product selection',
      'Opening cut and framed',
      'Skylight installation',
      'Flashing system installation',
      'Interior finishing',
      'Leak testing'
    ],
    priceRange: '$1,500 - $3,500',
    timeline: '1-2 days',
    icon: 'Sun',
    keywords: ['skylight installation charlotte', 'skylight repair', 'velux skylights charlotte', 'roof window installation'],
    faqs: [
      {
        question: 'Will a skylight leak?',
        answer: 'When properly installed with correct flashing, skylights should never leak. Problems usually stem from improper installation or failing flashing. Our verified contractors specialize in leak-free skylight installation.'
      },
      {
        question: 'Where is the best place to install a skylight?',
        answer: 'North-facing skylights provide consistent, soft light without overheating. South-facing adds warmth in winter but may overheat in Charlotte summers. We help determine the best placement for your goals.'
      }
    ]
  },
  {
    slug: 'roof-ventilation',
    name: 'Roof Ventilation',
    shortName: 'Ventilation',
    category: 'specialty',
    description: 'Improve attic ventilation to extend roof life and reduce energy costs in Charlotte homes.',
    longDescription: 'Proper roof ventilation is crucial in Charlotte\'s hot, humid climate. Poor ventilation leads to premature shingle failure, ice dams in winter, mold growth, and higher energy bills. Our verified contractors assess and improve your ventilation system with ridge vents, soffit vents, and powered options to ensure optimal airflow.',
    benefits: [
      'Extend shingle lifespan',
      'Reduce cooling costs up to 30%',
      'Prevent ice dams',
      'Eliminate moisture and mold',
      'Meet building code requirements',
      'Improve indoor comfort'
    ],
    process: [
      'Ventilation assessment',
      'Calculate required airflow',
      'Recommend solutions',
      'Install intake vents (soffits)',
      'Install exhaust vents (ridge)',
      'Verify balanced airflow',
      'Energy efficiency check'
    ],
    priceRange: '$300 - $1,500',
    timeline: '1 day',
    icon: 'Wind',
    keywords: ['roof ventilation charlotte', 'attic ventilation', 'ridge vent installation', 'soffit vents charlotte'],
    faqs: [
      {
        question: 'How do I know if my attic needs better ventilation?',
        answer: 'Signs include: extremely hot attic in summer, ice dams in winter, musty odors, mold or mildew, peeling paint on eaves, or shingles that curl prematurely. Charlotte\'s climate makes proper ventilation essential.'
      },
      {
        question: 'What\'s the best type of roof vent?',
        answer: 'Ridge vents combined with soffit vents provide the most effective passive ventilation. This creates natural airflow from eave to peak. Power vents are sometimes needed for complex roof designs.'
      }
    ]
  },
  {
    slug: 'roof-maintenance',
    name: 'Roof Maintenance',
    shortName: 'Maintenance',
    category: 'residential',
    description: 'Preventive roof maintenance programs to extend your Charlotte roof\'s lifespan.',
    longDescription: 'Regular maintenance is the key to maximizing your roof\'s lifespan and avoiding costly repairs. Our verified Charlotte contractors offer maintenance programs that include inspections, cleaning, minor repairs, and gutter service. Catching small problems early saves thousands in the long run and keeps your warranty valid.',
    benefits: [
      'Extend roof life by years',
      'Catch problems early',
      'Maintain warranty requirements',
      'Prevent emergency repairs',
      'Improve energy efficiency',
      'Peace of mind'
    ],
    process: [
      'Comprehensive inspection',
      'Debris removal',
      'Gutter cleaning',
      'Minor repair completion',
      'Flashing check and seal',
      'Documentation and report',
      'Recommendations for future'
    ],
    priceRange: '$150 - $400 per visit',
    timeline: '2-4 hours',
    icon: 'Settings',
    keywords: ['roof maintenance charlotte', 'roof cleaning', 'preventive roof care', 'roof maintenance program'],
    faqs: [
      {
        question: 'How often should I have roof maintenance done?',
        answer: 'We recommend at least annual maintenance, ideally in spring after winter weather and fall before leaves accumulate. After major Charlotte storms, an additional inspection is wise.'
      },
      {
        question: 'What does roof maintenance include?',
        answer: 'Typical maintenance includes: full inspection, debris removal, gutter cleaning, sealing exposed nail heads, checking flashing, minor repairs, and a written condition report.'
      }
    ]
  }
]

// Helper functions
export const getServiceBySlug = (slug: string) =>
  services.find(s => s.slug === slug)

export const getServicesByCategory = (category: RoofingService['category']) =>
  services.filter(s => s.category === category)

export const getFeaturedServices = () =>
  services.filter(s => s.featured)

export const getResidentialServices = () =>
  services.filter(s => s.category === 'residential')

export const getCommercialServices = () =>
  services.filter(s => s.category === 'commercial')
