import useRecipe from "../hooks/useRecipe";
import useUrlParams from "../hooks/useUrlParams";
import Error from "./Error";
import Message from "./Message";
import RecipeDetails from "./RecipeDetails";
import Spinner from "./Spinner";

function Recipe() {
  const { id } = useUrlParams();
  const { errorRecipe, isLoadingRecipe, recipe = {} } = useRecipe();

  return (
    <div className="recipe">
      {!id && <Message msg="No recipe found!" svgName="smile" />}
      {id && errorRecipe?.message && <Error />}
      {id && isLoadingRecipe && <Spinner />}

      {id && recipe && !isLoadingRecipe && !errorRecipe?.message && (
        <RecipeDetails recipe={recipe} />
      )}
    </div>
  );
}

export default Recipe;
