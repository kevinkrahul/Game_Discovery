import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
// import { Button, ButtonGroup } from '../chakra-ui/react';
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

const App = () => {
  const showAside = useBreakpointValue({ base: false, sm: true });

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          sm: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={
          {
            base:'1fr',
            lg:'200px 1fr'
          }
        }
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        {showAside && (
          <GridItem area="aside" paddingX={5} width={'200px'}>
            <GenresList />
          </GridItem>
        )}
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
