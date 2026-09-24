import { Moon, Sun } from "lucide-react";
import { useState } from "react"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);


    return (<button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-primary/10 transition-colors"
    >
        {isDarkMode ? <Sun /> : <Moon />}
    </button>
    )
}