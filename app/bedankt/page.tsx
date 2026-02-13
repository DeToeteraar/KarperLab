// Dit is de pagina die je ziet nadat je het formulier hebt ingevuld.
import React from 'react';
import Link from 'next/link';

export default function BedanktPage() {
    return (
        <main className="kl-band kl-band--cream d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <div className="container text-center">
                <div className="kl-surface p-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <div className="mb-4" style={{ fontSize: '3rem' }}>🎣</div>
                    <h1 className="h3 mb-3">Bedankt voor je aanvraag!</h1>
                    <p className="lead mb-4">
                        Ik heb je gegevens goed ontvangen en neem binnen 48 uur contact met je op om de pilot-sessie te bespreken.
                    </p>
                    <div className="d-grid gap-2">
                        <Link href="/" className="btn btn-accent">
                            Terug naar de website
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
