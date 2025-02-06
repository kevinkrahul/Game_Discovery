import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCarSkeleton from "./GameCarSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from "@/hooks/useGenres";
import { GameQuery } from "@/App";
interface Props{
  gamequery:GameQuery;
  // selectedGenre:Genre | null;
  // selectedPlatform:Platform | null;
}

// const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
const GameGrid = ({gamequery}:Props) => {
  const { data, error, isLoading } = useGames(gamequery); // selectedGenre,selectedPlatform as gamequery
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCarSkeleton  children={'200px'}/>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
