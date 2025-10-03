"use client";

import { useContext, useState } from "react";
import Sidebar from "../components/organisms/sidebar/sidebar";
import { AuthContext } from "@/context/auth/AuthContext";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { logout } = useContext(AuthContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex flex-row min-h-screen">
            <Sidebar logout={logout} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <main className="flex-1">
                {children}
            </main>
        </div>

    );
}