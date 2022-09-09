import React, { useContext, useEffect, useState } from "react";
import { Movie } from "./services/types";

const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

interface AppContextProps {
  loading: boolean;
  moviesData: Movie[];
  setMoviesData: React.Dispatch<React.SetStateAction<Movie[]>>;
  error: any;
}

export const INITIAL_STATE = {
  loading: false,
  moviesData: [],
  setMoviesData: () => {},
  error: null,
};

const AppContext = React.createContext<AppContextProps>(INITIAL_STATE);

const AppProvider = ({ children }: any) => {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const getMovies = async (url: string) => {
    return await fetch(url)
      .then((response) => response.json())
      .then((actualData) => setMoviesData(actualData.results))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getMovies(POPULAR_MOVIES);
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ loading, moviesData, setMoviesData, error }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
