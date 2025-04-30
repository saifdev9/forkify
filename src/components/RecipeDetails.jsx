import fracty from "fracty";
import { useState } from "react";
import { useBookmark } from "../contexts/Bookmarkcontext";
import Button from "./Button";
import { Link } from "react-router-dom";
import Svg from "./Svg";

function RecipeDetails({ recipe }) {
  const {
    id,
    image_url,
    title,
    cooking_time,
    servings,
    publisher,
    source_url,
    ingredients,
    key,
  } = recipe;

  const [newServing, setNewServing] = useState(servings);

  function handleServings(type) {
    if (type === "increase") {
      setNewServing((currServing) => currServing + 1);
    }

    if (type === "decrease" && newServing > 1) {
      setNewServing((currServing) => currServing - 1);
    }
  }

  const { removeBookmark, addBookmark, bookmarks } = useBookmark();

  const isBookmarked = bookmarks?.map((bookmark) => bookmark.id).includes(id);

  // console.log(recipe);
  // console.log(bookmarks);

  return (
    <>
      <figure className="recipe__fig">
        <img src={image_url} alt={image_url} className="recipe__img" />
        <h1 className="recipe__title">
          <span>{title}</span>
        </h1>
      </figure>

      <div className="recipe__details">
        <div className="recipe__info">
          <Svg className="recipe__info-icon" name="clock" />
          <span className="recipe__info-data recipe__info-data--minutes">
            {cooking_time}
          </span>
          <span className="recipe__info-text">minutes</span>
        </div>
        <div className="recipe__info">
          <Svg className="recipe__info-icon" name="users" />
          <span className="recipe__info-data recipe__info-data--people">
            {newServing}
          </span>
          <span className="recipe__info-text">servings</span>

          <div className="recipe__info-buttons">
            <Button
              onClick={() => handleServings("decrease")}
              className="btn--tiny btn--increase-servings"
              svgName="minus-circle"
            />
            <Button
              onClick={() => handleServings("increase")}
              className="btn--tiny btn--increase-servings"
              svgName="plus-circle"
            />
          </div>
        </div>

        <div className="recipe__user-generated">
          {key && <Svg name="user" />}
        </div>

        {!isBookmarked ? (
          <Button
            className="btn--round"
            onClick={() => addBookmark(recipe)}
            svgName="bookmark"
          />
        ) : (
          <Button
            className="btn--round"
            onClick={() => removeBookmark(id)}
            svgName="bookmark-fill"
          />
        )}
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <ul className="recipe__ingredient-list">
          {ingredients?.map((ingredient, i) => (
            <li key={i} className="recipe__ingredient">
              <Svg className="recipe__icon" name="check" />
              <div className="recipe__quantity">
                {fracty((ingredient?.quantity * newServing) / recipe?.servings)}
              </div>
              <div className="recipe__description">
                <span className="recipe__unit">{ingredient?.unit}</span>{" "}
                {ingredient?.description}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe__directions">
        <h2 className="heading--2">How to cook it</h2>
        <p className="recipe__directions-text">
          This recipe was carefully designed and tested by{" "}
          <span className="recipe__publisher">{publisher}</span>. Please check
          out directions at their website.
        </p>
        <Link
          className="btn--small recipe__btn"
          to={source_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Directions</span>
          <Svg className="search__icon" name="arrow-right" />
        </Link>
      </div>
    </>
  );
}

export default RecipeDetails;
