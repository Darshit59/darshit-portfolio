import { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-xl border border-cyan-500"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;