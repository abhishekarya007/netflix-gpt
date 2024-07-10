import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../utils/useGetMovies";
import GptContainer from "./GptContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useGetMovies();
  const isGptSearch = useSelector((store) => store.gpt.isGptSearch);

  return (
    <div>
      <Header />
      {isGptSearch ? (
        <GptContainer />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
