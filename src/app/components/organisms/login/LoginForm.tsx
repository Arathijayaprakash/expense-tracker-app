"use client";

import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "@/context/auth/AuthContext";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const route = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginSchema) => {
        // Simulate login
        login({ id: "1", name: "John Doe", email: data.email });
        route.push('/dashboard');
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-150 dark:bg-gray-800 rounded-lg shadow-md p-10 space-y-5"
        >
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                Login
            </h2>
            <div className="flex flex-col space-y-2">
                <label className="text-gray-700 dark:text-gray-300">Email</label>
                <input
                    type="email"
                    {...register("email")}
                    className="px-5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="you@example.com"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-gray-700 dark:text-gray-300">Password</label>
                <input
                    type="password"
                    {...register("password")}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="********"
                />
                {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Login
            </button>
        </form>
    );
}

export default LoginForm;