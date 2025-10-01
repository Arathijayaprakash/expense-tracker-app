"use client";

import { createContext } from "react";
import { ThemeContextType } from "./types";

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light", toggleTheme() {
        console.warn("must be inside a theme provider")
    },
})