"use client";

import React, { createContext, useEffect, useState } from "react";
import { AuthContextType, User } from "./types";

export const AuthContext = createContext<AuthContextType>({
    user: null, login: () => { console.log("Not Logged"); },
    logout: function (): void {
        throw new Error("Function not implemented.");
    }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    const login = (userData: User) => {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage

    };
    const logout = () => {
        setUser(null)
        localStorage.removeItem("user"); // Remove from localStorage
    };
    return <AuthContext value={{ user, login, logout }}>{children}</AuthContext>
}