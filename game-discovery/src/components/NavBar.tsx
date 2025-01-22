import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.webp";
import { Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Cradio</Text>
      </HStack>
    </>
  );
};

export default NavBar;
