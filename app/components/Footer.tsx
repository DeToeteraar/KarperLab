import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <section className="kl-band kl-band--dark">
            <div className="container">
                <footer className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                    <div className="row g-3 align-items-center">
                        <div className="col-md-6 d-flex align-items-center">
                            <Link href="#top" className="footer-brand me-3" aria-label="KarperLab home">
                                <Image
                                    src="/assets/img/Logo_KarperLab_v1.1_invert.png"
                                    alt="KarperLab logo"
                                    width={80}
                                    height={40}
                                    style={{ height: 'auto', width: 'auto', maxHeight: '40px' }}
                                />
                            </Link>
                            <div>
                                <div className="fw-semibold">KarperLab</div>
                                <div className="text-muted small">Karpercoaching in Noord-Holland en omgeving.</div>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <Link href="#top" className="link-light text-decoration-none me-3">
                                Naar boven
                            </Link>
                            <Link href="#privacy" className="link-light text-decoration-none me-3">
                                Privacy
                            </Link>
                            <a href="mailto:info@karperlab.nl" className="link-light text-decoration-none">
                                <svg
                                    className="email-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    focusable="false"
                                    aria-hidden="true"
                                    style={{ width: '16px', height: '16px', verticalAlign: 'middle', marginRight: '6px' }}
                                >
                                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" fill="none" />
                                    <polyline points="3 7 12 13 21 7" stroke="currentColor" fill="none" />
                                </svg>
                                <span>info@karperlab.nl</span>
                            </a>
                            <div className="text-muted small mt-2">© {currentYear} KarperLab</div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}
