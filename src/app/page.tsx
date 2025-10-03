"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/auth/AuthContext";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    user ? router.push('/dashboard') : router.push('/login')
  }, [user, router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white gap-6">
    </div>
  );
}
