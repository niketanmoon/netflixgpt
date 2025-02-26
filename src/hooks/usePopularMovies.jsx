import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../redux/movieSlice";
import { TMDB_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const movieListUrl = "https://api.themoviedb.org/3/movie/popular?page=1";
    const data = await fetch(movieListUrl, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
