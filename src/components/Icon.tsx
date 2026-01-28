import React from "react";

interface RocketIconProps {
    className?: string;
    size?: number;
}

const RocketIcon: React.FC<RocketIconProps> = ({
    className = "",
    size = 200,
}) => {
    return (
        <svg
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <defs>
                {/* Flame uses opacity only, no fixed colors */}
                <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <g transform="translate(15, 5)" fill="currentColor">
                {/* Body */}
                <path d="M35 8 L50 8 L58 35 L50 42 L35 42 L27 35 Z" />
                <path d="M35 8 L42.5 0 L50 8 Z" />

                {/* Fins */}
                <path d="M27 35 L20 50 L27 45 L32 42 Z" />
                <path d="M58 35 L65 50 L58 45 L53 42 Z" />

                {/* Window (cutout effect) */}
                <circle cx="42.5" cy="22" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="42.5" cy="22" r="3" fill="currentColor" opacity="0.4" />

                {/* Flame */}
                <path
                    d="M35 42 L42.5 70 L50 42 Q42.5 52 35 42"
                    fill="url(#flameGradient)"
                    filter="url(#glow)"
                />
            </g>
        </svg>
    );
};

export default RocketIcon;