import React, { useState, useEffect } from 'react';

const CircleAnimation = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleHoverStart = () => {
            setIsHovering(true);
        };

        const handleHoverEnd = () => {
            setIsHovering(false);
        };

        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
        };

        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);

        document.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
            document.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (isMobile) return null;

    return (
        <div
            className={`fixed w-12 h-12 rounded-full bg-pink-500 border-2 border-brown-600 pointer-events-none z-50 ${isVisible ? 'visible' : 'invisible'}`}
            style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: 'translate(-50%, -50%)',
                opacity: isHovering ? 0.3 : 0.5,
            }}
        >
            <div
                className={`absolute inset-0 m-auto w-4 h-4 rounded-full bg-yellow-500 animate-pulse ${isHovering ? 'opacity-50' : 'opacity-100'}`}
            ></div>
        </div>
    );
};

export default CircleAnimation;
