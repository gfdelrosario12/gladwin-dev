import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Home from "./components/Home/Home";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export default function Page() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Home />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
