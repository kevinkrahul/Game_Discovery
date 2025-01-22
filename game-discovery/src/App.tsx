import { Button, Show } from "@chakra-ui/react";
import { Grid, GridItem,useBreakpointValue } from "@chakra-ui/react";
const App = () => {

  const showAside=useBreakpointValue({base:false,sm:true});

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          sm: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="red">
          Nav
        </GridItem>
        { showAside && <GridItem area="aside" bg="gold">
            Aside
          </GridItem>}
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
