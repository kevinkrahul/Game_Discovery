import {  Grid, GridItem,useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Button, ButtonGroup } from '@chakra-ui/react'
import GameGrid from "./components/GameGrid";


 
const App = () => {

  const showAside=useBreakpointValue({base:false,sm:true});

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          sm: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        { showAside && <GridItem area="aside">
            Aside
          </GridItem>}
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
  
};

export default App;
