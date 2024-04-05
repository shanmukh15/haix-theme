import TestComponent from "./TestComponent";
import { ThemeProvider } from "@uirack/components/ui/ThemeProvider";

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="haix-color-mode">
    <TestComponent />
  </ThemeProvider>
);

export default App;
