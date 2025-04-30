import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRecipe as createRecipeApi } from "../api/recipe";
import { useBookmark } from "../contexts/Bookmarkcontext";
import useUrlParams from "./useUrlParams";

function useCreateRecipe() {
  const queryClinet = useQueryClient();
  const { addBookmark } = useBookmark();
  const { searchParams, setSearchParams } = useUrlParams();

  const { mutate: createRecipe, isPending: isCreatingRecipe } = useMutation({
    mutationFn: createRecipeApi,
    onError: (err) => console.log(err),
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["recipes", "recipe"],
      });
    },
    onSettled: (data) => {
      addBookmark(data.data.recipe);
      searchParams.delete("id");
      searchParams.set("id", data?.data?.recipe?.id);
      setSearchParams(searchParams);

      //   console.log(data);
    },
  });
  return { createRecipe, isCreatingRecipe };
}

export default useCreateRecipe;
