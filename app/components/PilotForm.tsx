'use client';

import React, { useState } from 'react';

export default function PilotForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

    // Netlify Forms requires the form name to be present in an input
    // and the form tag itself to have data-netlify="true"

    return (
        <div className="kl-surface p-4 p-md-5 mx-auto" style={{ maxWidth: '500px' }}>
            <h3 className="h4 mb-4 text-center">Pilot aanvraag formulier</h3>

            <form
                name="pilot-aanvraag"
                method="POST"
                action="/bedankt"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="pilot-form"
            >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="pilot-aanvraag" />
                <p className="d-none">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>

                <div className="row g-3">
                    {/* Water */}
                    <div className="col-12">
                        <label htmlFor="water" className="form-label fw-semibold">
                            Op welk water vis je vooral? (naam + plaats) <span className="text-accent">*</span>
                        </label>
                        <input
                            type="text"
                            id="water"
                            name="water"
                            className="form-control"
                            placeholder="Bijv. Sloterplas, Amsterdam"
                            required
                        />
                    </div>

                    {/* Ervaring */}
                    <div className="col-12">
                        <label htmlFor="ervaring" className="form-label fw-semibold">
                            Niveau <span className="text-accent">*</span>
                        </label>
                        <select id="ervaring" name="ervaring" className="form-select" required>
                            <option value="">Kies je niveau...</option>
                            <option value="beginner">Beginner</option>
                            <option value="gemiddeld">Gemiddeld</option>
                            <option value="gevorderd">Gevorderd</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="jaren" className="form-label fw-semibold">
                            Aantal jaren ervaring <span className="text-accent">*</span>
                        </label>
                        <input
                            type="number"
                            id="jaren"
                            name="jaren"
                            className="form-control"
                            placeholder="Bijv. 5"
                            required
                        />
                    </div>

                    {/* Tijd en frequentie */}
                    <div className="col-12">
                        <label htmlFor="tijd" className="form-label fw-semibold">
                            Hoe vaak vis je en hoe lang per sessie? <span className="text-accent">*</span>
                        </label>
                        <textarea
                            id="tijd"
                            name="tijd"
                            className="form-control"
                            rows={2}
                            placeholder="Bijv. 1x per week, gemiddeld 6 uur per sessie"
                            required
                        ></textarea>
                    </div>

                    {/* Doelen */}
                    <div className="col-12">
                        <label htmlFor="doelen" className="form-label fw-semibold">
                            Wat houdt je tegen en wat wil je bereiken? <span className="text-accent">*</span>
                        </label>
                        <textarea
                            id="doelen"
                            name="doelen"
                            className="form-control"
                            rows={3}
                            placeholder="Bijv. Ik blank te vaak op groot water en wil leren hoe ik de vis sneller vind."
                            required
                        ></textarea>
                    </div>

                    {/* Contact */}
                    <div className="col-12">
                        <label htmlFor="email" className="form-label fw-semibold">
                            E-mailadres <span className="text-accent">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="jouw@email.nl"
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="telefoon" className="form-label fw-semibold">
                            Telefoonnummer (optioneel)
                        </label>
                        <input
                            type="tel"
                            id="telefoon"
                            name="telefoon"
                            className="form-control"
                            placeholder="06 12345678"
                        />
                    </div>

                    {/* Beschikbaarheid */}
                    <div className="col-12">
                        <label htmlFor="beschikbaarheid" className="form-label fw-semibold">
                            Beschikbaarheid (optioneel maar aanbevolen)
                        </label>
                        <input
                            type="text"
                            id="beschikbaarheid"
                            name="beschikbaarheid"
                            className="form-control"
                            placeholder="Bijv. doordeweekse avonden of zaterdagochtend"
                        />
                    </div>

                    {/* Submit */}
                    <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-accent w-100">
                            Pilot aanvraag versturen
                        </button>
                        <p className="text-muted small mt-3 mb-0 text-center">
                            Je gegevens worden alleen gebruikt om op je aanvraag te reageren.
                        </p>
                    </div>
                </div>
            </form>

            <style jsx>{`
                .form-label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                }
                .form-control, .form-select {
                    display: block;
                    width: 100%;
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: var(--kl-text);
                    background-color: var(--kl-surface);
                    background-clip: padding-box;
                    border: 1px solid var(--kl-border);
                    border-radius: 8px;
                    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                }
                .form-control:focus, .form-select:focus {
                    border-color: var(--kl-accent);
                    outline: 0;
                    box-shadow: 0 0 0 0.25rem rgba(209, 176, 106, 0.25);
                }
                .text-accent {
                    color: var(--kl-accent);
                }
                select.form-select {
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-position: right 1rem center;
                    background-size: 16px 12px;
                }
            `}</style>
        </div>
    );
}
