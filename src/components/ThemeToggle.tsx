import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react"
import { cn } from "../lib/utils";

// Check if the theme is saved locally already
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme === 'dark';
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme',  isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);


    return (<button
        onClick={toggleTheme}
        className= {cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}
    >
        {isDarkMode ? <Sun/> : <Moon/> }
    </button>
    )
}