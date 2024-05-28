import HomeComponent from "./components/Home/HomeComponent";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <HomeComponent />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
