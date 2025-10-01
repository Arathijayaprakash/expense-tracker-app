"use client";

import { AuthContext } from "@/context/auth/AuthContext";
import { useContext, useState } from "react";
import ExpenseChart from "../../molecules/ExpenseChart";
import ThemeToggleButton from "../../atoms/ThemeToggleButton";

const mockExpenses = [
    { date: "2025-09-01", amount: 500 },
    { date: "2025-09-05", amount: 200 },
    { date: "2025-09-10", amount: 700 },
    { date: "2025-09-15", amount: 300 },
];

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const income = 5000;
    const expenses = mockExpenses.reduce((acc, cur) => acc + cur.amount, 0);
    const balance = income - expenses;

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Sidebar */}
            <div
                className={`fixed md:static top-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-md h-full transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:translate-x-0`}
            >
                <div className="p-4 text-xl font-bold border-b border-gray-200 dark:border-gray-700">
                    Expense Tracker
                </div>

                <ul className="p-4 space-y-2">
                    <li className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
                        Dashboard
                    </li>
                    <li className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
                        Add Expense
                    </li>
                    <li className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded">
                        Reports
                    </li>
                    <li className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded cursor-pointer" onClick={logout}>
                        Logout
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col md:ml-64">
                {/* Header */}
                <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
                    <button
                        className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 rounded"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰
                    </button>
                    <h1 className="text-xl font-bold">Welcome, {user?.name}</h1>
                </div>

                {/* Summary cards */}
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-green-500 text-white p-4 rounded-lg shadow">
                        <h2 className="text-sm">Income</h2>
                        <p className="text-2xl font-bold">${income}</p>
                    </div>
                    <div className="bg-red-500 text-white p-4 rounded-lg shadow">
                        <h2 className="text-sm">Expenses</h2>
                        <p className="text-2xl font-bold">${expenses}</p>
                    </div>
                    <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
                        <h2 className="text-sm">Balance</h2>
                        <p className="text-2xl font-bold">${balance}</p>
                    </div>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mb-4">
                    <ExpenseChart />
                </div>

                {/* Expense Table */}
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-lg font-bold mb-2">Recent Expenses</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 dark:bg-gray-700">
                                    <th className="px-4 py-2 text-left">Date</th>
                                    <th className="px-4 py-2 text-left">Amount</th>
                                    <th className="px-4 py-2 text-left">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockExpenses.map((exp, idx) => (
                                    <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                                        <td className="px-4 py-2">{exp.date}</td>
                                        <td className="px-4 py-2">${exp.amount}</td>
                                        <td className="px-4 py-2">Misc</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
