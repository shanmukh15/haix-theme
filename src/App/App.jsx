import React from "react";
import TestComponent from "./TestComponent";
import { ThemeProvider } from "@uirack/components/ui/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="haix-color-mode">
      <TestComponent />
    </ThemeProvider>
  );
};

export default App;
