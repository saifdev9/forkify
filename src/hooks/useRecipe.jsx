import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../api/recipe";
import useUrlParams from "./useUrlParams";

function useRecipe() {
  const { id } = useUrlParams();

  const {
    data: recipe,
    isPending: isLoadingRecipe,
    error: errorRecipe,
  } = useQuery({
    queryFn: () => getRecipe(id),
    queryKey: ["recipe", id],
    enabled: !!id,
  });

  return { recipe, isLoadingRecipe, errorRecipe };
}

export default useRecipe;
