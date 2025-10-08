"use client";

import React, { createContext, useEffect, useState } from "react";
import { AuthContextType, User } from "./types";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => { },
    logout: () => { },
});


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const route = useRouter()
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
        route.push('login')
    };
    return <AuthContext value={{ user, login, logout }}>{children}</AuthContext>
}