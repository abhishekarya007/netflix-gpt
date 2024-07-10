import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptContainer from "./GptContainer";
import { useSelector } from "react-redux";
import useSetMovies from "../hooks/useSetMovies";

const Browse = () => {
  useSetMovies();
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
