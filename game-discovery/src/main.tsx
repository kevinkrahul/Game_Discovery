import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./components/Ui/theme.ts";
import { ColorModeScript } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </StrictMode>
);
