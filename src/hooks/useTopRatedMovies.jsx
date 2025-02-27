import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../redux/movieSlice";
import { TMDB_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const movieListUrl = "https://api.themoviedb.org/3/movie/top_rated?page=1";
    const data = await fetch(movieListUrl, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
