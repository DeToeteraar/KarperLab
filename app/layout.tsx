import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "KarperLab – Persoonlijke karpercoaching",
    description: "KarperLab biedt persoonlijke karpercoaching voor drukbezette vissers in Noord-Holland. Ontvang een concreet aanvalsplan en vang vaker met je beperkte vistijd. Vraag de pilot-sessie aan.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl">
            <body>{children}</body>
        </html>
    );
}
