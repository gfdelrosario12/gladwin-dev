import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import HomeComponent from "./components/Home/HomeComponent";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export default function Page() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <HomeComponent />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
