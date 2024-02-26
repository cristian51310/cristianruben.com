import { useEffect, useState } from "react";
import MoonIcon from "./icons/simples/Moon";
import SunIcon from "./icons/simples/Sun";

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className="border rounded-md p-1.5 hover:cursor-pointer
    dark:border-purple-500 dark:bg-purple-500/30
    border-yellow-600 bg-amber-200/80"
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </div>
  )
}