'use client';
import { useForm } from "react-hook-form";
import { ExpenseFormData, expenseSchema } from "./addExpenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addExpense } from "@/lib/features/expense/expenseSlice";

const AddExpense = () => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ExpenseFormData>({
        resolver: zodResolver(expenseSchema),
    });

    const onSubmit = async (data: ExpenseFormData) => {
        await fetch("/api/expenses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        dispatch(addExpense(data))
        reset();
        route.push('/dashboard')
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md p-8 space-y-2 bg-white dark:bg-gray-900 rounded-2xl shadow-md"
        >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">Add Expense</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Title
                </label>
                <input
                    type="text"
                    {...register("title")}
                    className="w-full p-2 mt-1 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Grocery shopping"
                />
                {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
            </div>

            {/* Amount */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Amount
                </label>
                <input
                    type="number"
                    step="0.01"
                    {...register("amount", { valueAsNumber: true })}
                    className="w-full p-2 mt-1 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 500"
                />
                {errors.amount && (
                    <p className="text-red-500 text-sm">{errors.amount.message}</p>
                )}
            </div>

            {/* Category */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Category
                </label>
                <select
                    {...register("category")}
                    className="w-full p-2 mt-1 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-500 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Other">Other</option>
                </select>
                {errors.category && (
                    <p className="text-red-500 text-sm">{errors.category.message}</p>
                )}
            </div>

            {/* Date */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Date</label>
                <input
                    type="date"
                    {...register("date")}
                    className="w-full p-2 mt-1 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-500 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.date && (
                    <p className="text-red-500 text-sm">{errors.date.message}</p>
                )}
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 dark:bg-blue-900 text-white dark:text-gray-400 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 dark:hover:text-gray-800 transition"
            >
                Add Expense
            </button>
        </form>
    )
}

export default AddExpense;