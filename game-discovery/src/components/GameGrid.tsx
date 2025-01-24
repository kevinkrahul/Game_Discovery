import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: String;
}

interface FetchGameResponce {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [Games, SetGames] = useState<Game[]>([]);
  const [error, SetError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponce>("/games")
      .then((res) => SetGames(res.data.results))
      .catch((err) => SetError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {Games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
