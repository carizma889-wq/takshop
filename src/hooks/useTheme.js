import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );
  
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));

  return { theme, toggleTheme };
}

export default useTheme;
