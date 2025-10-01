"use client";

import { AuthContext } from "@/context/auth/AuthContext"
import { useContext } from "react"
import LoginForm from "../organisms/login/LoginForm";
import Dashboard from "../organisms/dashboard/Dashboard";

const AuthButton = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="p-4">
            {user ? <Dashboard /> : <LoginForm />}
        </div>
    )
}

export default AuthButton;