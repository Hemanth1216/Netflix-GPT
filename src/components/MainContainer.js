import React from 'react'
import VideoTitleContainer from './VideoTitleContainer'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  if(!movies) return;

  const mainMovie = movies[0];
  return (
    <div>
        <VideoTitleContainer movieDetails = {mainMovie} />
        <VideoContainer youtubeId = {mainMovie.youtube_id}/>
    </div>
  )
}

export default MainContainer