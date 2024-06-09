"use client"

import { useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Home from "./components/Home/Home";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export default function Page() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Home />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
