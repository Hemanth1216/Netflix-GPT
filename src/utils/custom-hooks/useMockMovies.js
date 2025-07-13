import { useDispatch } from "react-redux";
import { mockMovies } from "../mocks/recent-movies-mock";
import { addNowPlayingMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useMockMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = () => {
    dispatch(addNowPlayingMovies(mockMovies));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, [])
}

export default useMockMovies;