// De formulieren-sectie. Dit is een complex onderdeel omdat het gegevens verwerkt.
// 'use client' vertelt Next.js dat dit onderdeel 'interactief' is (zoals knoppen die iets doen).
'use client';

import React, { useState } from 'react';

export default function PilotForm() {
    // We kunnen de status van het formulier bijhouden (bijv. aan het verzenden of klaar).
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

    return (
        <div className="kl-surface p-4 p-md-5 mx-auto" style={{ maxWidth: '480px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', margin: '0 auto' }}>
            <h2 className="h3 mb-5 fw-bold" style={{ color: '#000000', fontSize: '1.75rem', textAlign: 'center' }}>Client Details</h2>

            <form
                name="pilot-aanvraag"
                method="POST"
                action="/bedankt" // Waar je heen gaat nadat je op verzenden klikt
                data-netlify="true" // Dit zorgt ervoor dat Netlify het formulier herkent
                data-netlify-honeypot="bot-field"
                className="pilot-form"
            >
                {/* Verborgen velden die helpen tegen spam-robots */}
                <input type="hidden" name="form-name" value="pilot-aanvraag" />
                <div className="d-none">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </div>

                <div className="form-group-stack">
                    {/* Water */}
                    <div className="form-field">
                        <label htmlFor="water" className="form-label-clean">
                            OP WELK WATER VIS JE VOORAL? (NAAM + PLAATS) <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            id="water"
                            name="water"
                            className="form-input-clean"
                            placeholder=""
                            required
                        />
                    </div>

                    {/* Ervaring Niveau */}
                    <div className="form-field">
                        <label htmlFor="ervaring" className="form-label-clean">
                            NIVEAU <span className="text-danger">*</span>
                        </label>
                        <select id="ervaring" name="ervaring" className="form-select-clean" required>
                            <option value=""></option>
                            <option value="beginner">Beginner</option>
                            <option value="gemiddeld">Gemiddeld</option>
                            <option value="gevorderd">Gevorderd</option>
                        </select>
                    </div>

                    {/* Jaren ervaring */}
                    <div className="form-field">
                        <label htmlFor="jaren" className="form-label-clean">
                            AANTAL JAREN ERVARING <span className="text-danger">*</span>
                        </label>
                        <input
                            type="number"
                            id="jaren"
                            name="jaren"
                            className="form-input-clean"
                            placeholder=""
                            required
                        />
                    </div>

                    {/* Tijd en frequentie */}
                    <div className="form-field">
                        <label htmlFor="tijd" className="form-label-clean">
                            HOE VAAK VIS JE EN HOE LANG PER SESSIE? <span className="text-danger">*</span>
                        </label>
                        <textarea
                            id="tijd"
                            name="tijd"
                            className="form-input-clean"
                            rows={1}
                            placeholder=""
                            required
                        ></textarea>
                    </div>

                    {/* Doelen */}
                    <div className="form-field">
                        <label htmlFor="doelen" className="form-label-clean">
                            WAT HOUDT JE TEGEN EN WAT WIL JE BEREIKEN? <span className="text-danger">*</span>
                        </label>
                        <textarea
                            id="doelen"
                            name="doelen"
                            className="form-input-clean"
                            rows={1}
                            placeholder=""
                            required
                        ></textarea>
                    </div>

                    {/* Contact Email */}
                    <div className="form-field">
                        <label htmlFor="email" className="form-label-clean">
                            E-MAILADRES <span className="text-danger">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input-clean"
                            placeholder=""
                            required
                        />
                    </div>

                    {/* Telefoonnummer */}
                    <div className="form-field">
                        <label htmlFor="telefoon" className="form-label-clean">
                            TELEFOONNUMMER (OPTIONEEL)
                        </label>
                        <input
                            type="tel"
                            id="telefoon"
                            name="telefoon"
                            className="form-input-clean"
                            placeholder=""
                        />
                    </div>

                    {/* Beschikbaarheid */}
                    <div className="form-field">
                        <label htmlFor="beschikbaarheid" className="form-label-clean">
                            BESCHIKBAARHEID (OPTIONEEL MAAR AANBEVOLEN)
                        </label>
                        <input
                            type="text"
                            id="beschikbaarheid"
                            name="beschikbaarheid"
                            className="form-input-clean"
                            placeholder=""
                        />
                    </div>

                    {/* Submit */}
                    <div className="mt-5">
                        <button type="submit" className="btn-submit-clean">
                            SUBMIT
                        </button>
                        <p className="small mt-4 mb-0 text-center" style={{ color: '#999', fontSize: '0.75rem' }}>
                            Je gegevens worden alleen gebruikt om op je aanvraag te reageren.
                        </p>
                    </div>
                </div>
            </form>

            <style jsx>{`
                .form-group-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .form-field {
                    display: flex;
                    flex-direction: column;
                }
                .form-label-clean {
                    display: block;
                    margin-bottom: 0.6rem;
                    font-size: 0.75rem;
                    color: #999;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                }
                .form-input-clean, .form-select-clean {
                    display: block;
                    width: 100%;
                    padding: 0.85rem 1rem;
                    font-size: 1rem;
                    color: #333;
                    background-color: #f1f1f1;
                    border: none;
                    border-radius: 2px;
                    transition: background-color 0.2s;
                }
                .form-input-clean:focus, .form-select-clean:focus {
                    background-color: #e9e9e9;
                    outline: none;
                }
                .btn-submit-clean {
                    width: 100%;
                    background-color: #16b582;
                    color: white;
                    padding: 1rem;
                    border: none;
                    border-radius: 4px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    transition: background-color 0.2s;
                    cursor: pointer;
                    text-transform: uppercase;
                }
                .btn-submit-clean:hover {
                    background-color: #12a374;
                }
                .form-select-clean {
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%23999' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-position: right 1rem center;
                    background-size: 10px;
                }
                .text-danger {
                    color: #ff4d4d;
                    margin-left: 2px;
                }
                textarea.form-input-clean {
                    resize: none;
                }
            `}</style>
        </div>
    );
}
