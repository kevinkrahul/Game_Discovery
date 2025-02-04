import { GameQuery } from "@/App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// interface FetchGameResponce {
//   count: number;
//   results: Game[];
// }

const useGames = (
  gameQuery: GameQuery
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.Genre?.id, platforms: gameQuery.Platform?.id } },
    // [selectedGenre?.id, selectedPlatform?.id]
    [gameQuery]
  );
export default useGames;
