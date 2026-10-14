import { useEffect, useState } from "react"

interface Star {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
}

const generateStarsData = (): Star[] => {

    if (typeof window === "undefined") {
        return [];
    }

    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars: Star[] = [];

    for (let i = 0; i < numberOfStars; i++)
    {
        newStars.push({
            id:i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        });
    }

        return newStars;
};

export const StarBackground = () => {
    

    const [stars, setStars] = useState<Star[]>(generateStarsData());

    
    useEffect(() => {
        const handleResize = () => {
            setStars(generateStarsData());
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return ( 
    <div>
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}
            />
        ))}
    </div>
    );
};