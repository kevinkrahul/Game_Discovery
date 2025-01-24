import { useState,useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";


interface Game {
    id: number;
    name: String;
  }
  
  interface FetchGameResponce {
    count: number;
    results: Game[];
  }


const useGames = () => {


  const [Games, SetGames] = useState<Game[]>([]);
  const [error, SetError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponce>("/games",{signal:controller.signal})
      .then((res) => SetGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        SetError(err.message)
      }
    );

      return () => controller.abort();
  },[]);

  return {Games,error};


};
export default useGames;