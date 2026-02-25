import React, { createContext, useContext, useState } from "react";

// ─── Color Tokens ────────────────────────────────────────────────────────────
export const lightTheme = {
  dark: false,
  background: "#F2F4F7",
  card: "#FFFFFF",
  text: "#1A1A2E",
  subText: "#6B7280",
  primary: "#3b82f6",
  border: "#E5E7EB",
  inputBg: "#FFFFFF",
  inputBorder: "#D1D5DB",
  error: "#EF4444",
  toggleBg: "#3b82f6",
  toggleText: "#FFFFFF",
  headerBg: "#3b82f6",
  shadow: "#00000020",
};

export const darkTheme = {
  dark: true,
  background: "#0F172A",
  card: "#1E293B",
  text: "#F1F5F9",
  subText: "#94A3B8",
  primary: "#60A5FA",
  border: "#334155",
  inputBg: "#1E293B",
  inputBorder: "#475569",
  error: "#F87171",
  toggleBg: "#60A5FA",
  toggleText: "#0F172A",
  headerBg: "#1E293B",
  shadow: "#00000060",
};

// ─── Context ──────────────────────────────────────────────────────────────────
const ThemeContext = createContext({
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {},
});

// ─── Provider ─────────────────────────────────────────────────────────────────
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ─── Custom Hook ──────────────────────────────────────────────────────────────
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
