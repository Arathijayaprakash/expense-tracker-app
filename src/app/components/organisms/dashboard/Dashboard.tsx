"use client";

import { AuthContext } from "@/context/auth/AuthContext";
import { useContext, useMemo, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community';
import { ExpenseFormData } from "../addExpense/addExpenseSchema";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const expense = useAppSelector((state) => state.expense)
    const [rowData] = useState<ExpenseFormData[]>(expense);
    const columnDefs = useMemo<ColDef<ExpenseFormData>[]>(
        () => [
            { headerName: "Title", field: "title", sortable: true, filter: true, flex: 1 },
            { headerName: "Date", field: "date", sortable: true, filter: true, flex: 1 },
            { headerName: "Amount", field: "amount", sortable: true, filter: true, flex: 1, valueFormatter: (p: any) => `$${p.value}` },
            { headerName: "Category", field: "category", sortable: true, filter: true, flex: 1 },
        ],
        []
    );
    const income = 5000;
    const expenses = expense.reduce((acc, cur) => acc + cur.amount, 0);
    const balance = income - expenses;

    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

            {/* Main content */}
            <div>
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

                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
                        Recent Expenses
                    </h2>

                    <div
                        style={{ height: 300, width: "100%" }}
                    >
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
