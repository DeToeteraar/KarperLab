import React from 'react';

// Een 'Interface' vertelt de computer welke gegevens deze component nodig heeft (props).
interface CardProps {
    title: string;       // Een tekst voor de titel
    description: string; // Een tekst voor de beschrijving
    className?: string;  // Optioneel: extra CSS-klassen voor styling
}

// Dit is een herbruikbaar kaartje (Card).
// Je kunt dit overal op de site gebruiken met andere tekst.
export default function Card({ title, description, className = 'kl-card' }: CardProps) {
    return (
        <div className={`h-100 p-4 rounded ${className}`}>
            <h3 className="h6 fw-semibold mb-2">{title}</h3>
            <p className="mb-0 text-muted">{description}</p>
        </div>
    );
}
