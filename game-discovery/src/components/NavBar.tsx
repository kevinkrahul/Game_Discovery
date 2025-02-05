import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props{
  onSearched:(searchText:string)=>void;
}

const NavBar = ({onSearched}:Props) => {
  return (
    <>
      <HStack padding='10px'>
        <Image src={logo} boxSize="60px" />
        <SearchBar onSearched={onSearched}/>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
