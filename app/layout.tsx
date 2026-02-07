import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";
import SmoothScrollAnchors from "./components/SmoothScrollAnchors";

export const metadata: Metadata = {
    title: "KarperLab – Persoonlijke karpercoaching",
    description: "KarperLab biedt persoonlijke karpercoaching voor drukbezette vissers in Noord-Holland. Ontvang een concreet aanvalsplan en vang vaker met je beperkte vistijd. Vraag de pilot-sessie aan.",
    metadataBase: new URL('https://www.karperlab.nl'),
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'KarperLab – Persoonlijke karpercoaching',
        description: 'Ontvang een concreet aanvalsplan om vaker te vangen met je beperkte vistijd. Vraag de pilot-sessie aan.',
        url: 'https://www.karperlab.nl',
        type: 'website',
        images: [
            {
                url: '/assets/img/photos/voorwie_drone-banner.jpg',
                width: 1200,
                height: 630,
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KarperLab – Persoonlijke karpercoaching',
        description: 'Persoonlijke karpercoaching voor drukbezette vissers in Noord-Holland. Leer slimmer karpervissen met een concreet aanvalsplan.',
        images: ['/assets/img/photos/voorwie_drone-banner.jpg'],
    },
    icons: {
        icon: '/assets/img/Logo_KarperLab_v1.0_B-W.svg',
    },
    other: {
        'theme-color': '#111417',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl">
            <head>
                <link rel="canonical" href="https://www.karperlab.nl/" />
                <meta name="robots" content="index,follow,max-image-preview:large" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": "https://www.karperlab.nl/#localbusiness",
                            "name": "KarperLab",
                            "url": "https://www.karperlab.nl/",
                            "logo": "https://www.karperlab.nl/assets/img/Logo_KarperLab_v1.1_creme.png",
                            "image": "https://www.karperlab.nl/assets/img/Logo_KarperLab_v1.1_creme.png",
                            "email": "info@karperlab.nl",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Zaanstad",
                                "addressRegion": "NH",
                                "addressCountry": "NL"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Noord-Holland"
                            },
                            "serviceOffered": {
                                "@type": "Service",
                                "name": "Persoonlijke karpercoaching",
                                "description": "Persoonlijke karpercoaching en visbegeleiding voor karpervissers die efficiënter willen leren karpervissen met beperkte tijd.",
                                "areaServed": {
                                    "@type": "AdministrativeArea",
                                    "name": "Noord-Holland"
                                },
                                "provider": {
                                    "@type": "LocalBusiness",
                                    "name": "KarperLab"
                                }
                            }
                        })
                    }}
                />
            </head>
            <body>
                <GoogleAnalytics />
                <SmoothScrollAnchors />
                <Navbar />
                <Hero />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
