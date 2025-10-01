"use client";

import { useEffect, useState } from "react"
import { Theme } from "./types"
import { ThemeContext } from "./ThemeContext"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === 'dark');
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? "dark" : 'light'
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === 'dark')
    }

    return (
        <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
    )
}
