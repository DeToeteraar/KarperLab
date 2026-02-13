// Dit onderdeel zorgt dat Google Analytics werkt, zodat je kunt zien hoeveel bezoekers er zijn.
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-ZFBF432BDJ"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZFBF432BDJ', {
            anonymize_ip: true
          });
        `}
            </Script>
        </>
    );
}
