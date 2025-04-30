import { RESULTS_PER_PAGE } from "../constants/constant";
import useSearchRecipes from "../hooks/useSearchRecipes";
import useUrlParams from "../hooks/useUrlParams";
import Copyright from "./Copyright";
import Error from "./Error";
import ResultList from "./ResultList";
import Spinner from "./Spinner";
import Pagination from "./Pagination";

function SearchRecipe() {
  const {
    searchRecipes = [],
    count,
    isLoadingSearchRecipes,
  } = useSearchRecipes();
  const { page, search } = useUrlParams();

  const results = searchRecipes?.slice(
    (page - 1) * RESULTS_PER_PAGE,
    RESULTS_PER_PAGE * page
  );

  return (
    <div className="search-results">
      <ul className="results">
        {isLoadingSearchRecipes && <Spinner />}
        {results?.map((result) => (
          <ResultList result={result} key={result?.id} />
        ))}
        {!isLoadingSearchRecipes &&
          search?.length > 0 &&
          results?.length === 0 && <Error />}
      </ul>

      {results?.length > 0 && <Pagination count={count} />}

      <Copyright />
    </div>
  );
}

export default SearchRecipe;
