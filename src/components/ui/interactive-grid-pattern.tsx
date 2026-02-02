"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

/**
 * Interactive Grid Pattern
 * A grid background that responds to user interactions (clicks).
 * Renders individual cells that flash when clicked.
 */
interface InteractiveGridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number;
    height?: number;
    squaresClassName?: string;
}

export function InteractiveGridPattern({
    width = 100,
    height = 100,
    className,
    squaresClassName,
    ...props
}: InteractiveGridPatternProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                setDimensions({ width, height });
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    // Calculate grid dimensions
    // Add 1 to ensure coverage
    const cols = Math.ceil(dimensions.width / width);
    const rows = Math.ceil(dimensions.height / height);

    // To prevent rendering 0 cells initially
    const safeCols = cols > 0 ? cols : 0;
    const safeRows = rows > 0 ? rows : 0;

    // Handle interaction via delegation for performance
    const handleGridClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;

        // Check if the clicked element is a grid cell
        if (target.dataset.gridCell === "true") {
            // Remove any existing animation classes to reset
            target.classList.remove("bg-primary/20", "duration-500", "transition-colors");

            // Force reflow to ensuring reset applies if clicked rapidly
            void target.offsetWidth;

            // Add animation classes
            target.classList.add("bg-primary/20", "transition-none");

            // Start fade out after a brief "flash"
            setTimeout(() => {
                target.classList.remove("transition-none");
                target.classList.add("transition-colors", "duration-1000"); // Slow fade
                target.classList.remove("bg-primary/20");
            }, 100);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 h-full w-full overflow-hidden pointer-events-auto", // pointer-events-auto to capture clicks
                className
            )}
            onClick={handleGridClick}
            {...props}
            style={{
                maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
                ...props.style,
            }}
        >
            {safeCols > 0 && safeRows > 0 && (
                <div
                    className="grid absolute inset-0"
                    style={{
                        gridTemplateColumns: `repeat(${safeCols}, ${width}px)`,
                        gridTemplateRows: `repeat(${safeRows}, ${height}px)`,
                    }}
                >
                    {Array.from({ length: safeRows * safeCols }).map((_, i) => (
                        <div
                            key={i}
                            data-grid-cell="true"
                            className={cn(
                                "border-r border-b border-gray-200 dark:border-gray-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-500 cursor-pointer",
                                squaresClassName
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
