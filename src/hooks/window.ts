import { useEffect, useState } from "react";

const breakpoints = {
    sm: 600,
    md: 768,
    lg: 1024,
    xl: 1280,
};

const useWindow = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0,
    });
    const [scrollY, setScrollY] = useState(0);

    function handleScroll(): void {
        setScrollY(window.scrollY);
    }

    function handleResize(): void {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        handleResize();
        handleScroll();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return (): void => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {
        ...windowDimensions,
        breakpoints,
        scrollY,
    };
};

export { useWindow };
