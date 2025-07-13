import Header from "./Header";
import useMockMovies from "../utils/custom-hooks/useMockMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useMockMovies();

  return (
    <div>
      <Header />
      <div className="">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
