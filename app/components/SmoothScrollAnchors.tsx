'use client';

import { useEffect } from 'react';

export default function SmoothScrollAnchors() {
    useEffect(() => {
        const DEFAULT_SCROLL_OFFSET_FROM_BOTTOM = 50; // px
        const PILOT_SCROLL_OFFSET_FROM_BOTTOM = 100; // px

        function bindBottomAnchorScroll(anchorId: string, offsetFromBottom = DEFAULT_SCROLL_OFFSET_FROM_BOTTOM) {
            document.querySelectorAll(`a[href="#${anchorId}"]`).forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    const target = document.getElementById(anchorId);
                    if (!target) return;

                    const rect = target.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;

                    const scrollTop =
                        window.pageYOffset +
                        rect.top -
                        (viewportHeight - offsetFromBottom);

                    window.scrollTo({
                        top: scrollTop,
                        behavior: 'smooth'
                    });
                });
            });
        }

        // Bind all bottom-anchors that should land near the bottom of the viewport
        bindBottomAnchorScroll('pilot-cta', PILOT_SCROLL_OFFSET_FROM_BOTTOM);
        bindBottomAnchorScroll('wat-je-krijgt-cta');
        bindBottomAnchorScroll('werkwijze-cta');
        bindBottomAnchorScroll('faq-cta');
    }, []);

    return null; // This component doesn't render anything
}
