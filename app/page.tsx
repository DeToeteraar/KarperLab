// Dit is de 'HomePage' component. Dit is wat mensen zien als ze op de hoofdpagina komen.
// We importeren hier andere onderdelen (components) om de pagina op te bouwen.
import React from 'react';
import Image from 'next/image'; // Voor geoptimaliseerde afbeeldingen
import Link from 'next/link';   // Voor snelle links tussen pagina's
import Card from './components/Card';
import PilotForm from './components/PilotForm';
import AboutCoach from './components/AboutCoach';

export default function HomePage() {
    const mailtoLink = `mailto:info@karperlab.nl?subject=${encodeURIComponent('KarperLab pilot-aanvraag')}&body=${encodeURIComponent(`Beste KarperLab,

Ik wil graag een pilot-sessie aanvragen.

1) Op welk water vis ik vooral (naam + plaats):
2) Hoeveel ervaring heb ik (beginner / gemiddeld / gevorderd + aantal jaren):
3) Hoe vaak vis ik gemiddeld en hoeveel tijd heb ik meestal per sessie:
4) Wat houdt mij nu het meeste tegen en wat wil ik graag bereiken:
Telefoonnummer - optioneel:

Groet,
`)}`;

    return (
        <main>
            {/* Een onzichtbaar punt om naar terug te scrollen */}
            <div id="top" aria-hidden="true"></div>

            {/* Sectie: Voor wie is KarperLab? */}
            <section id="voor-wie" className="kl-band kl-band--cream">
                <div className="container">
                    <h2 className="h4 mb-3">Voor wie is dit?</h2>
                    <Image
                        src="/assets/img/photos/werkwijze_silhouet_vissen.jpg"
                        alt="Visser bij zonsondergang"
                        width={1400}
                        height={600}
                        className="kl-section-photo mb-4 pos-fisher"
                        loading="lazy"
                    />
                    <div className="row g-3">
                        <div className="col-md-4">
                            <Card
                                title="Weinig tijd"
                                description="Je werkt veel en wilt dat elke sessie telt."
                                className="kl-card border"
                            />
                        </div>
                        <div className="col-md-4">
                            <Card
                                title="Vaak blanken"
                                description="Je vangt te weinig en zoekt een aanpak die wél werkt."
                                className="kl-card border"
                            />
                        </div>
                        <div className="col-md-4">
                            <Card
                                title="Bereid te investeren"
                                description="Je wilt gericht verbeteren met praktische coaching."
                                className="kl-card border"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectie: Wat krijg je bij de coaching? */}
            <section id="wat-je-krijgt" className="kl-band kl-band--light">
                <div className="container">
                    <h2 className="h4 mb-3">Wat je krijgt</h2>
                    <Image
                        src="/assets/img/photos/voorwie_drone-banner.jpg"
                        alt="Water en omgeving van bovenaf"
                        width={1400}
                        height={600}
                        className="kl-section-photo mb-4 pos-reels"
                        loading="lazy"
                    />
                    <div className="row g-3">
                        <div className="col-md-4">
                            <Card
                                title="Materiaalcheck"
                                description="We lopen je set-up door en finetunen rigs, montage en voer zodat je efficiënter vist."
                                className="kl-surface kl-shadow rounded"
                            />
                        </div>
                        <div className="col-md-4">
                            <Card
                                title="Wateranalyse"
                                description="We zoeken patronen en logische hotspots op jouw water: observatie, stekkeuze en aanpak."
                                className="kl-surface kl-shadow rounded"
                            />
                        </div>
                        <div className="col-md-4">
                            <Card
                                title="Concreet aanvalsplan"
                                description="Een plan dat past bij jouw tijd: waar, wanneer, hoe en waarmee jij dit water het beste bevist."
                                className="kl-surface kl-shadow rounded"
                            />
                        </div>
                    </div>
                    <div id="wat-je-krijgt-cta" aria-hidden="true"></div>
                </div>
            </section>

            {/* Sectie: Hoe de pilot-sessie precies werkt */}
            <section id="werkwijze" className="kl-band kl-band--cream">
                <div className="container">
                    <h2 className="h4 mb-3">Hoe verloopt de pilot?</h2>
                    <Image
                        src="/assets/img/photos/watjekrijgt_materiaal_detail.jpg"
                        alt="Detail van molens en hengels"
                        width={1400}
                        height={600}
                        className="kl-section-photo mb-4 pos-reels"
                        loading="lazy"
                    />
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="h-100 p-4 border rounded kl-card">
                                <div className="fw-semibold mb-1">1) Intake + materiaal</div>
                                <div className="text-muted">Kort kennismaken, jouw set-up beoordelen en direct verbeteren waar het telt.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="h-100 p-4 border rounded kl-card">
                                <div className="fw-semibold mb-1">2) Naar het water</div>
                                <div className="text-muted">We lopen je water af, observeren en bepalen de meest logische stekken/aanpak.</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="h-100 p-4 border rounded kl-card">
                                <div className="fw-semibold mb-1">3) Plan van aanpak</div>
                                <div className="text-muted">Je krijgt een helder plan + vervolgstappen. Later stuur ik je een korte samenvatting.</div>
                            </div>
                        </div>
                    </div>
                    <div id="werkwijze-cta" aria-hidden="true"></div>
                </div>
            </section>

            {/* Sectie: Veelgestelde vragen (FAQ) */}
            <section id="faq" className="kl-band kl-band--light">
                <div className="container">
                    <h2 className="h4 mb-3">FAQ</h2>
                    <Image
                        src="/assets/img/photos/faq_water_textuur.jpg"
                        alt="Rustige rimpels op het water"
                        width={1400}
                        height={600}
                        className="kl-section-photo mb-4 pos-top"
                        loading="lazy"
                    />
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="h-100 p-4 rounded kl-surface kl-shadow">
                                <div className="fw-semibold mb-1">Hoe lang duurt de pilot?</div>
                                <div className="text-muted">Ongeveer 3 uur: intake, materiaalcheck, wateranalyse en plan.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-4 rounded kl-surface kl-shadow">
                                <div className="fw-semibold mb-1">Moet ik nieuwe spullen kopen?</div>
                                <div className="text-muted">Nee. We werken met je huidige materiaal. Als iets echt loont, geef ik gericht advies.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-4 rounded kl-surface kl-shadow">
                                <div className="fw-semibold mb-1">Waar doe je dit?</div>
                                <div className="text-muted">Startregio: Noord-Holland. Tot ~45 min rijden vanaf Zaanstad inbegrepen; daarbuiten stemmen we vooraf af.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-4 rounded kl-surface kl-shadow">
                                <div className="fw-semibold mb-1">Waarom een pilot?</div>
                                <div className="text-muted">Dit is de compacte, praktische sessie om jouw aanpak snel scherper te krijgen — zonder gedoe, met een concreet plan.</div>
                            </div>
                        </div>
                    </div>
                    <div id="faq-cta" aria-hidden="true"></div>
                </div>
            </section>

            {/* Onderdeel over de coach (apart bestand in components/AboutCoach.tsx) */}
            <AboutCoach />

            {/* Sectie: Formulier om een pilot aan te vragen */}
            <section id="pilot" className="kl-band kl-band--dark" style={{ background: 'var(--kl-hero-bg)' }}>
                <div className="container">
                    <h2 className="h4 mb-2">Pilot aanvragen</h2>
                    <Image
                        src="/assets/img/photos/pilot_karper_in_water.jpg"
                        alt="Karper in het water"
                        width={1400}
                        height={600}
                        className="kl-section-photo mb-4 pos-mid"
                        loading="lazy"
                    />
                    <p className="mb-3 text-center">Wil je meedoen aan de pilot? Vul het formulier hieronder in. Dan reageer ik met een voorstel en de eerstvolgende mogelijkheid.</p>

                    <PilotForm />
                    <div id="pilot-cta" aria-hidden="true" style={{ marginTop: '2rem' }}></div>

                    <div className="d-flex flex-column flex-sm-row gap-2 mt-4">
                        <Link href="#top" className="btn btn-outline-light flex-fill">
                            Terug naar boven
                        </Link>
                    </div>
                </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="kl-band kl-band--light">
                <div className="container">
                    <h2 className="h4 mb-2">Privacy & cookies</h2>
                    <p className="mb-2">GA4, geanonimiseerd (IP). Geen marketingcookies.</p>
                    <p className="mb-2">Mail-link opent je e-mailapp. Je mail wordt alleen gebruikt om te reageren.</p>
                    <p className="mb-0 text-muted small">
                        Vragen? Mail naar <a href="mailto:info@karperlab.nl">info@karperlab.nl</a>.
                    </p>
                </div>
            </section>
        </main>
    );
}
