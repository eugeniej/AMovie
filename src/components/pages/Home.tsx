import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { LayoutSizes, Movie } from "../../services/types";
import { ContainerStyled, LayoutContainer } from "../Global.style";
import { Card } from "../molecules/Card";
import { Input } from "../molecules/Input";
import { MoviesWrapper, TopBarSearch } from "./Home.style";

export const Home: React.FC = () => {
  const { moviesData, setMoviesData } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  const searchMovies = async (searchValue: string) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => setMoviesData(data.results))
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    if (searchValue) {
      searchMovies(searchValue);
    }
  }, [searchValue]);

  return (
    <ContainerStyled>
      <LayoutContainer theme={{ size: LayoutSizes.LARGE }}>
        <TopBarSearch>
          <Input value={searchValue} setValue={setSearchValue} />
        </TopBarSearch>
        <MoviesWrapper>
          {moviesData.map((movie: Movie) => (
            <Link to={`/MovieDetails/${movie.id}`} key={movie.id}>
              <Card
                key={movie.id}
                item={movie}
                urlImage={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </Link>
          ))}
        </MoviesWrapper>
      </LayoutContainer>
    </ContainerStyled>
  );
};
