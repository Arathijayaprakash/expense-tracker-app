import AuthButton from "./components/atoms/AuthButton";
import ThemeToggleButton from "./components/atoms/ThemeToggleButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white gap-6">
      <ThemeToggleButton />
      <AuthButton />
    </div>
  );
}
