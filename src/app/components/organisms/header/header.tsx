import { AuthContext } from "@/context/auth/AuthContext"
import { useSidebar } from "@/context/sidebar/SideBarContext"
import { useContext } from "react"

export default function Header() {
    const { toggleSidebar } = useSidebar()
    const { user } = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
            <button
                className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 rounded"
                onClick={toggleSidebar}
            >
                ☰
            </button>
            <h1 className="text-xl font-bold">Welcome, {user?.name}</h1>
        </div>
    )
}