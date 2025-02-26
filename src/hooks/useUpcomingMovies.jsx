import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../redux/movieSlice";
import { TMDB_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const movieListUrl = "https://api.themoviedb.org/3/movie/upcoming?page=1";
    const data = await fetch(movieListUrl, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
