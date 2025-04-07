import React, {useEffect, useRef, useState} from 'react';

interface Position {
    x: number;
    y: number;
}

interface TrailPosition extends Position {
    id: number;
    timestamp: number;
}

const Cursor: React.FC = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [trail, setTrail] = useState<TrailPosition[]>([]);
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailIdRef = useRef(0);
    const lastUpdateTimeRef = useRef(0);

    useEffect(() => {
        let animationFrameId: number;
        let currentPosition = { x: 0, y: 0 };

        const updatePosition = (e: MouseEvent) => {
            currentPosition = { x: e.clientX, y: e.clientY };

            const now = Date.now();
            if (now - lastUpdateTimeRef.current > 15) {
                setTrail(prevTrail => {
                    return [
                        {
                            x: currentPosition.x,
                            y: currentPosition.y,
                            id: trailIdRef.current++,
                            timestamp: now
                        },
                        ...prevTrail.slice(0, 15)
                    ];
                });
                lastUpdateTimeRef.current = now;
            }
        };

        const render = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${currentPosition.x - 4}px, ${currentPosition.y - 4}px)`;
            }

            const now = Date.now();
            setTrail(prevTrail =>
                prevTrail.filter(point => now - point.timestamp < 100)
            );

            setPosition(currentPosition);
            animationFrameId = requestAnimationFrame(render);
        };

        document.body.style.cursor = 'none';

        const styleElement = document.createElement('style');
        styleElement.textContent = `
            a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]) {
                cursor: none !important;
            }
        `;
        document.head.appendChild(styleElement);

        document.addEventListener('mousemove', updatePosition);
        animationFrameId = requestAnimationFrame(render);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            cancelAnimationFrame(animationFrameId);
            document.body.style.cursor = 'auto';
            document.head.removeChild(styleElement);
        };
    }, []);

    return (
        <>
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="fixed rounded-full pointer-events-none"
                    style={{
                        left: 0,
                        top: 0,
                        transform: `translate(${point.x - 4}px, ${point.y - 4}px)`,
                        width: `${8 - index * 0.5}px`,
                        height: `${8 - index * 0.5}px`,
                        backgroundColor: `rgba(90, 57, 246, ${1 - index * 0.12})`,
                        transition: 'opacity 30ms ease-out, transform 30ms ease-out', // Dodane płynne zanikanie
                        zIndex: 9999,
                    }}
                />
            ))}

            <div
                ref={cursorRef}
                className="fixed rounded-full pointer-events-none"
                style={{
                    left: 0,
                    top: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'rgb(90, 57, 246)',
                    boxShadow: '0 0 10px rgba(90, 57, 246, 0.7)',
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                    zIndex: 9999,
                }}
            />
        </>
    );
};

export default Cursor;