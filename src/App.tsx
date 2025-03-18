import { BrowserRouter } from "react-router";
import { Router } from "./Router";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
      <BrowserRouter>
          <Toaster richColors duration={3000} />
          <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export { App }
