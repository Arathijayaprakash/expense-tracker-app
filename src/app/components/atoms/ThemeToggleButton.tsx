"use client";

import { ThemeContext } from "@/context/theme/ThemeContext";
import { useContext } from "react";

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button className="float-end top-4 p-2 rounded-3xl border shadow-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200" onClick={toggleTheme}>{theme === "light" ? "🌙 " : " 🌞 "}</button>
    )
}

export default ThemeToggleButton;