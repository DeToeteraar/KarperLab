'use client';

import React from 'react';
import Image from 'next/image';

// Deze component stelt de coach voor.
// Het gebruikt 'style jsx' (onderaan) voor specifieke styling die alleen hier geldt.
export default function AboutCoach() {
    return (
        <section id="de-coach" className="kl-band kl-band--cream">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Foto kant */}
                    <div className="col-lg-5 order-2 order-lg-1">
                        <div className="coach-visual-stack">
                            <div className="coach-photo-main">
                                <Image
                                    src="/assets/img/coach/stefan-karper.jpg"
                                    alt="Stefan met een schubkarper"
                                    width={500}
                                    height={600}
                                    className="rounded shadow-lg"
                                />
                            </div>
                            <div className="coach-photo-accent d-none d-md-block">
                                <Image
                                    src="/assets/img/coach/stefan-steur.jpg"
                                    alt="Stefan met een grote steur"
                                    width={300}
                                    height={200}
                                    className="rounded shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tekst kant */}
                    <div className="col-lg-7 order-1 order-lg-2">
                        <span className="text-accent fw-bold text-uppercase small mb-2 d-block">De man achter KarperLab</span>
                        <h2 className="display-5 mb-4">"Ik help je de code van jouw water te kraken"</h2>

                        <div className="coach-story">
                            <p className="lead mb-4">
                                Net als jij werk ik hard en heb ik een druk leven. Dat betekent dat elke minuut aan de waterkant telt. Ik heb simpelweg niet de tijd om wekenlang te blanken.
                            </p>

                            <p className="mb-3">
                                Juist door dat gebrek aan tijd ben ik me gaan verdiepen in het **strategische deel** van het karpervissen. Ik wilde weten *waarom* een vis op een bepaalde plek aast, in plaats van alleen maar te hopen op een aanbeet. Ik ben diep in de theorie gedoken, heb geëxperimenteerd met tactieken en heb geleerd hoe ik succesvol kan vissen in korte sessies.
                            </p>

                            <p className="mb-3">
                                Het "Aha-moment" kwam toen ik samen met mijn vader viste. Hoewel we dezelfde uren maakten, merkte ik dat hij veel meer moeite had om die abstracte theorie om te zetten naar resultaat. Dat deed me beseffen: mijn kracht is niet alleen het vangen, maar het **vertalen van complexe strategieën naar simpele, effectieve sessies.**
                            </p>

                            <p className="fw-semibold text-dark mb-4">
                                Ik hoef je niet te vertellen wat je moet doen; ik leer je hóé je moet denken. Zodat jij met meer vertrouwen en resultaat aan het water zit, ook als je maar een paar uur de tijd hebt.
                            </p>
                        </div>

                        <div className="d-flex gap-3 mt-5">
                            <div className="stat-item">
                                <span className="d-block h3 mb-0">15+</span>
                                <span className="text-muted small">Jaar ervaring</span>
                            </div>
                            <div className="border-end"></div>
                            <div className="stat-item">
                                <span className="d-block h3 mb-0">100%</span>
                                <span className="text-muted small">Focus op tactiek</span>
                            </div>
                            <div className="border-end"></div>
                            <div className="stat-item">
                                <span className="d-block h3 mb-0">Efficiënt</span>
                                <span className="text-muted small">Korte sessies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .coach-visual-stack {
                    position: relative;
                    padding-bottom: 2rem;
                }
                .coach-photo-main img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    border: 4px solid white;
                }
                .coach-photo-accent {
                    position: absolute;
                    bottom: 0;
                    right: -2rem;
                    width: 60%;
                    z-index: 2;
                }
                .coach-photo-accent img {
                    width: 100%;
                    height: auto;
                    border: 4px solid white;
                }
                .stat-item .h3 {
                    color: var(--kl-anth-900);
                }
                .border-end {
                    border-right: 1px solid var(--kl-border) !important;
                }
                @media (max-width: 991px) {
                    .coach-photo-accent {
                        right: 0;
                    }
                }
            `}</style>
        </section>
    );
}
