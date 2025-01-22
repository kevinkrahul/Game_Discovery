import { ChakraProvider } from "@chakra-ui/react";
// import { ThemeProvider } from "next-themes";
import { defaultSystem } from "@chakra-ui/react";
import React from "react";

interface props {
  children: React.ReactNode;
}
//export function Provider(props:{children:React.ReactNode}){}
export function Provider({ children }: props) {
  return (
    <ChakraProvider value={defaultSystem}>
      {/* <ThemeProvider> */}
      {children}
      {/* </ThemeProvider>     */}
    </ChakraProvider>
  );
}
