import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://smileelite.ge"),
  title: {
    default: "SmileElite — პრემიუმ სტომატოლოგიური კლინიკა თბილისში",
    template: "%s | SmileElite Dental Clinic",
  },
  description:
    "საქართველოს წამყვანი პრემიუმ სტომატოლოგიური კლინიკა. კბილების გათეთრება, იმპლანტი, ინვიზალაინი, ვინირები — სერტიფიცირებული სპეციალისტები, უმტკივნეულო მკურნალობა, თანამედროვე ტექნოლოგია. დაჯავშნეთ უფასო კონსულტაცია.",
  keywords: [
    "სტომატოლოგი თბილისი",
    "სტომატოლოგია საქართველო",
    "კბილების გათეთრება",
    "კბილის იმპლანტი",
    "ინვიზალაინი თბილისი",
    "ვინირები",
    "პრემიუმ სტომატოლოგია",
    "SmileElite",
  ],
  openGraph: {
    type: "website",
    locale: "ka_GE",
    url: "https://smileelite.ge",
    siteName: "SmileElite Dental Clinic",
    title: "SmileElite — პრემიუმ სტომატოლოგია თბილისში",
    description:
      "გარდაქვით თქვენი ღიმილი საქართველოს საუკეთესო სტომატოლოგ-სპეციალისტებთან. უმტკივნეულო, თანამედროვე, ლუქსური სტომატოლოგია.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SmileElite Dental Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileElite Dental Clinic",
    description: "პრემიუმ სტომატოლოგია თბილისში, საქართველო.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness"],
  name: "SmileElite Dental Clinic",
  description: "პრემიუმ სტომატოლოგიური კლინიკა თბილისში — კოსმეტიკური, ზოგადი და ორთოდონტიული სტომატოლოგია.",
  url: "https://smileelite.ge",
  telephone: "+995-32-200-00-00",
  email: "hello@smileelite.ge",
  priceRange: "₾₾₾",
  image: "https://smileelite.ge/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "რუსთაველის გამზ. 14",
    addressLocality: "თბილისი",
    postalCode: "0108",
    addressCountry: "GE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 41.6938, longitude: 44.8015 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00", closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00", closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.98",
    reviewCount: "286",
    bestRating: "5",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
