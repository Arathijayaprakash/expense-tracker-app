"use client";

import { useContext, useState } from "react";
import Sidebar from "../components/organisms/sidebar/sidebar";
import { AuthContext } from "@/context/auth/AuthContext";
import { SidebarProvider } from "@/context/sidebar/SideBarContext";
import Header from "../components/organisms/header/header";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { logout } = useContext(AuthContext);

    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <SidebarProvider>
                <Header />
                <div className="flex flex-row min-h-screen">
                    <Sidebar logout={logout} />
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </SidebarProvider>
        </div>

    );
}