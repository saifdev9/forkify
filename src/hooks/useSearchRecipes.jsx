import { useQuery } from "@tanstack/react-query";
import { getSearchRecipe } from "../api/recipe";
import { RESULTS_PER_PAGE } from "../constants/constant";
import useUrlParams from "./useUrlParams";

function useSearchRecipes() {
  const { search } = useUrlParams();

  const isSearchValid = Boolean(search && search.length > 0); // search must not be empty

  const {
    data: searchRecipes = [],
    isPending,
    error: errorSearchRecipe,
  } = useQuery({
    queryKey: ["recipes", search],
    queryFn: () => getSearchRecipe(search),
    enabled: isSearchValid,
  });

  const count = Math.ceil(searchRecipes.length / RESULTS_PER_PAGE);

  // handle loading manually
  const isLoadingSearchRecipes = isSearchValid ? isPending : false;

  return { searchRecipes, errorSearchRecipe, isLoadingSearchRecipes, count };
}

export default useSearchRecipes;
