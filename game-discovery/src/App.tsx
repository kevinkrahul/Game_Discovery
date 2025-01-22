import { Button, Show } from "@chakra-ui/react";
import { Grid, GridItem,useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";



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
        { showAside && <GridItem area="aside" bg="gold">
            Aside
          </GridItem>}
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
