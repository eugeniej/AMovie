import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LayoutSizes, Movie, TextLevel } from "../../services/types";
import { useThemeContext } from "../../ThemeProvider";
import Text from "../atoms/Text";
import { LayoutContainer } from "../Global.style";
import {
  ImageWrapper,
  MovieDetailsContainer,
  MovieInformations,
  TextDescriptionWrapper,
} from "./MoviesDetails.style";

export const MovieDetails: React.FC = () => {
  let { id } = useParams();
  const GET_MOVIES_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const [movieDetails, setMovieDetails] = useState<Movie>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { themeSettings } = useThemeContext();

  useEffect(() => {
    fetch(GET_MOVIES_DETAILS)
      .then((response) => response.json())
      .then((actualData) => {
        setLoading(false);
        setMovieDetails(actualData);
      })
      .catch((err) => {
        setError(err);
      });

    setLoading(false);
  }, [id]);

  return (
    <MovieDetailsContainer>
      <LayoutContainer theme={{ size: LayoutSizes.LARGE }}>
        {movieDetails ? (
          <MovieInformations>
            <TextDescriptionWrapper>
              <Text level={TextLevel.H2} color={themeSettings.color}>
                {movieDetails.title}
              </Text>
              <Text level={TextLevel.p} color={themeSettings.color}>
                {movieDetails.overview}
              </Text>
            </TextDescriptionWrapper>
            <ImageWrapper>
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  movieDetails!.poster_path
                }`}
                alt=""
                height={300}
                width={220}
              />
            </ImageWrapper>
          </MovieInformations>
        ) : (
          <div>Loading...</div>
        )}
      </LayoutContainer>
    </MovieDetailsContainer>
  );
};
