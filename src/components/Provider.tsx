"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Toaster position="top-right" />
      {children}
    </ThemeProvider>
  );
}
