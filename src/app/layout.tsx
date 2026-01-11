import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InstantEstimateCTA from "@/components/layout/InstantEstimateCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://charlotteroofinghub.com'),
  title: {
    default: "Charlotte Roofing Hub | Find Top-Rated Roofers in Charlotte NC",
    template: "%s | Charlotte Roofing Hub"
  },
  description: "Your trusted source for finding quality roofing companies in Charlotte, NC. Browse 25+ top-rated roofers (4.8+ stars), job listings, and roofing professionals. Get instant roof estimates!",
  keywords: [
    "roofing companies charlotte nc",
    "charlotte roofing contractors",
    "best roofers in charlotte",
    "roofing jobs charlotte nc",
    "roof repair charlotte",
    "new roof charlotte nc",
    "residential roofing charlotte",
    "commercial roofing charlotte",
    "metal roofing charlotte nc",
    "shingle roof replacement charlotte",
    "roofing crews charlotte",
    "roof estimate charlotte",
    "charlotte roof installation",
    "roof contractors near me",
    "affordable roofing charlotte"
  ],
  authors: [{ name: "Charlotte Roofing Hub" }],
  creator: "Charlotte Roofing Hub",
  publisher: "Charlotte Roofing Hub",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charlotteroofinghub.com",
    siteName: "Charlotte Roofing Hub",
    title: "Charlotte Roofing Hub | Find Top-Rated Roofers in Charlotte NC",
    description: "Your trusted source for finding quality roofing companies in Charlotte, NC. Browse 25+ top-rated roofers, job listings, and get instant roof estimates!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Charlotte Roofing Hub - Find Quality Roofers in Charlotte NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlotte Roofing Hub | Find Top-Rated Roofers in Charlotte NC",
    description: "Your trusted source for finding quality roofing companies in Charlotte, NC.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://charlotteroofinghub.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Structured Data for the website
function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Charlotte Roofing Hub",
    url: "https://charlotteroofinghub.com",
    description: "Your trusted source for finding quality roofing companies in Charlotte, NC",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://charlotteroofinghub.com/companies?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Charlotte Roofing Hub",
    url: "https://charlotteroofinghub.com",
    logo: "https://charlotteroofinghub.com/logo.png",
    description: "The definitive resource for roofing services, companies, and professionals in Charlotte, NC",
    areaServed: {
      "@type": "City",
      name: "Charlotte",
      containedInPlace: {
        "@type": "State",
        name: "North Carolina"
      }
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "Charlotte, NC"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function LocalBusinessAggregateSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Roofing Companies in Charlotte, NC",
    description: "Curated list of 4.8+ star rated roofing companies serving Charlotte and surrounding areas",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "RoofingContractor",
          name: "Best Roofing Now LLC",
          description: "Featured roofing contractor serving Charlotte, NC",
          url: "https://bestroofingnow.com"
        }
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <WebsiteSchema />
        <OrganizationSchema />
        <LocalBusinessAggregateSchema />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a5f" />
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Charlotte" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <InstantEstimateCTA variant="banner" />
        <InstantEstimateCTA variant="popup" />
      </body>
    </html>
  );
}
