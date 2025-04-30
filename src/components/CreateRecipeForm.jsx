import { createPortal } from "react-dom";
import useCreateRecipe from "../hooks/useCreateRecipe";
import { useOutsideClick } from "../hooks/useOutsideClick";
import FormInput from "./FormInput";
import Button from "./Button";

const formInputdata = [
  {
    label: "Title",
    defaultValue: "Pizza TEST",
    name: "title",
    type: "text",
  },
  {
    label: "URL",
    defaultValue: "Pizza TEST",
    name: "source_url",
    type: "text",
  },
  {
    label: "Image URL",
    defaultValue: "Pizza TEST",
    name: "image_url",
    type: "text",
  },
  {
    label: "Publisher",
    defaultValue: "Pizza TEST",
    name: "publisher",
    type: "text",
  },
  {
    label: "Prep time",
    defaultValue: 25,
    name: "cooking_time",
    type: "number",
  },
  {
    label: "Servings",
    defaultValue: 23,
    name: "servings",
    type: "number",
  },
];

function CreateRecipeForm({ toggleForm, settoggleForm }) {
  const { createRecipe, isCreatingRecipe } = useCreateRecipe();
  const formRef = useOutsideClick(() => settoggleForm(false));

  //addRecipe
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const ingredients = Object.entries(data).reduce((acc, [key, value]) => {
      if (key.startsWith("ingredient") && value.length > 0) {
        const [quantity, unit, description] = value
          .split(",")
          .map((el) => el.trim());

        return [
          ...acc,
          {
            quantity: +quantity || null,
            unit: unit || "",
            description: description || "",
          },
        ];
      } else {
        return acc;
      }
    }, []);

    // if (ingredinets.some((ing) => ing.length !== 3)) {
    //   throw new Error("Wrong ingredient format!");
    // }

    const newRecipe = {
      title: data.title,
      image_url: data.image_url,
      source_url: data.source_url,
      publisher: data.publisher,
      cooking_time: +data.cooking_time,
      servings: +data.servings,
      ingredients,
    };
    console.log(newRecipe);

    createRecipe(newRecipe);
    settoggleForm(false);
  }

  return (
    <>
      <div className={`overlay ${toggleForm ? "" : "hidden"} `}></div>

      {createPortal(
        <div
          ref={formRef}
          className={`add-recipe-window ${toggleForm ? "" : "hidden"}`}
        >
          <Button
            className="btn--close-modal"
            onClick={() => settoggleForm(false)}
          >
            &times;
          </Button>

          <form className="upload" onSubmit={handleSubmit}>
            <div className="upload__column">
              <h3 className="upload__heading">Recipe data</h3>
              {formInputdata.map((dt) => (
                <FormInput
                  key={dt.name}
                  label={dt.label}
                  defaultValue={dt.defaultValue}
                  name={dt.name}
                  type={dt.type}
                />
              ))}
            </div>

            <div className="upload__column">
              <h3 className="upload__heading">Ingredients</h3>
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i}>
                  <FormInput
                    label={`Ingredient ${i + 1}`}
                    defaultValue="1.2,kg,rice"
                    name={`ingredient-${i + 1}`}
                    type="text"
                    placeholder="Format: 'Quantity,Unit,Description'"
                  />
                </div>
              ))}
            </div>

            <Button
              className="btn upload__btn"
              disabled={isCreatingRecipe}
              isLoading={isCreatingRecipe}
              svgName={"upload-cloud"}
            >
              Upload
            </Button>
          </form>
        </div>,
        document.body
      )}
    </>
  );
}

export default CreateRecipeForm;
