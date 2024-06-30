import BootStrap from './BootStrap';
import { ThemeProvider } from '@uirack/components/ui/ThemeProvider';

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="haix-color-mode">
    <BootStrap />
  </ThemeProvider>
);

export default App;
