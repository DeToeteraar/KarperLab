import React from 'react';

interface CardProps {
    title: string;
    description: string;
    className?: string;
}

export default function Card({ title, description, className = 'kl-card' }: CardProps) {
    return (
        <div className={`h-100 p-4 rounded ${className}`}>
            <h3 className="h6 fw-semibold mb-2">{title}</h3>
            <p className="mb-0 text-muted">{description}</p>
        </div>
    );
}
