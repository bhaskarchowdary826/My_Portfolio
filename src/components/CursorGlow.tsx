import { useEffect, useRef } from "react";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

/**
 * CursorGlow — a full-page ambient radial gradient that smoothly
 * follows the mouse cursor, giving the portfolio a premium interactive feel.
 * Uses a ref-based position hook so it never triggers re-renders.
 */
export function CursorGlow() {
    const positionRef = useMousePositionRef();
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animFrame: number;

        const animate = () => {
            if (glowRef.current) {
                const { x, y } = positionRef.current;
                glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--primary) / 0.08), transparent 60%)`;
            }
            animFrame = requestAnimationFrame(animate);
        };

        animFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrame);
    }, [positionRef]);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed inset-0 z-30 transition-none"
            aria-hidden="true"
        />
    );
}
