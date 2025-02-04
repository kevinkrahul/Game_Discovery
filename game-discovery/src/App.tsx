import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
// import { Button, ButtonGroup } from '../chakra-ui/react';
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  Genre: Genre | null;
  Platform: Platform | null;
}

const App = () => {
  const showAside = useBreakpointValue({ base: false, sm: true });

  // const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
  // const [selectedPlatform,setSelectedPlatform]=useState<Platform | null>(null)
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          sm: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        {showAside && (
          <GridItem area="aside" paddingX={5} width={"200px"}>
            <GenresList
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, Genre: genre })
              }
              selectedGenre={gameQuery.Genre}
            />
          </GridItem>
        )}
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={gameQuery.Platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, Platform: platform })
            }
          />
          <GameGrid gamequery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
