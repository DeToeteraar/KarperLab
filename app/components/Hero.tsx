import React from 'react';
import Link from 'next/link';

// De Hero component is het eerste grote blok bovenaan de pagina (met de hoofdtitel).
export default function Hero() {
    return (
        <header id="hero" className="hero py-5" style={{ paddingTop: 'calc(3rem + var(--kl-nav-divider-h))' }}>
            <div className="container">
                <div className="row align-items-center g-4">
                    <div className="col-lg-8 hero-copy">
                        <h1 className="display-5 fw-bold mb-2">Maak van elke sessie een vangst</h1>
                        <p className="lead mb-3">
                            Persoonlijke karpercoaching voor drukbezette vissers in Noord-Holland. In één pilot-sessie krijg je een concreet plan om vaker te vangen met je beperkte vistijd.
                        </p>
                        <p className="mb-4">Beperkte plekken • antwoord binnen 48 uur</p>
                        <div className="d-flex flex-wrap gap-2">
                            <Link href="#pilot-cta" className="btn btn-accent">
                                Vraag de pilot aan
                            </Link>
                            <Link href="#wat-je-krijgt-cta" className="btn btn-outline-light">
                                Bekijk wat je krijgt
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="p-4 rounded kl-card kl-shadow">
                            <h2 className="h5 mb-2">Pilot-sessie</h2>
                            <p className="mb-3">3 uur • materiaalcheck + wateranalyse + aanvalsplan</p>
                            <div className="d-flex align-items-baseline gap-2 mb-3">
                                <div className="h3 mb-0">€249</div>
                                <div className="text-muted">introductieprijs</div>
                            </div>
                            <Link href="#pilot-cta" className="btn btn-accent w-100">
                                Pilot aanvragen
                            </Link>
                            <div className="text-muted small mt-2">Uitgebreide sessie: vanaf €399.</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
