"use client";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import ThemeToggleButton from "../../atoms/ThemeToggleButton";
import { useSidebar } from "@/context/sidebar/SideBarContext";

const Sidebar = ({ logout }: { logout: () => void }) => {
    const route = useRouter()
    const { toggleSidebar, sidebarOpen, closeSidebar } = useSidebar()
    return (
        <div
            className={`fixed md:static top-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-md transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:translate-x-0`}
        >
            <div className="flex items-center justify-between p-4 text-xl font-bold border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                <span>Expense Tracker</span>
                <span><ThemeToggleButton /></span>
                {/* Close button visible only on mobile */}
                <button
                    className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 rounded"
                    onClick={toggleSidebar}
                >
                    ✕
                </button>
            </div>

            <ul className="p-4 space-y-2">
                <li className="hover:bg-gray-200 dark:hover:bg-gray-800 px-3 py-2 rounded dark:text-gray-300 cursor-pointer"
                    onClick={() => {
                        route.push('/dashboard')
                        closeSidebar()
                    }}>
                    Dashboard
                </li>
                <li className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded dark:text-gray-300 cursor-pointer"
                    onClick={() => {
                        route.push('/addexpense')
                        closeSidebar()
                    }}>
                    Add Expense
                </li>
                <li className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded dark:text-gray-300 cursor-pointer"
                    onClick={() => {
                        route.push('/reports')
                        closeSidebar()
                    }}>
                    Reports
                </li>
                <li className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded dark:text-gray-300 cursor-pointer"
                    onClick={() => {
                        logout()
                        closeSidebar()
                    }}>
                    Logout
                </li>
            </ul>
        </div>
    )
}

export default Sidebar