import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextType {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);
    const closeSidebar = () => setSidebarOpen(false);
    const openSidebar = () => setSidebarOpen(true);

    return (
        <SidebarContext.Provider
            value={{ sidebarOpen, toggleSidebar, closeSidebar, openSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = (): SidebarContextType => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error("useSidebar must be used within SidebarProvider");
    return context;
};