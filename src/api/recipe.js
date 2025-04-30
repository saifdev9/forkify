const API_URL = "https://forkify-api.jonas.io/api/v2/recipes";
const KEY = "69a85d98-f940-47fa-bde5-25ffbb64b3aa";

export async function getRecipe(id) {
  // if (!id) return;

  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) throw new Error("Failed to load!");

  const data = await res.json();

  return data.data.recipe;
}

export async function getSearchRecipe(recipeOf) {
  // if (recipeOf === "") return;

  const res = await fetch(`${API_URL}?search=${recipeOf}&key=${KEY}`);

  if (!res.ok) throw new Error("Failed to load!");

  const data = await res.json();
  // console.log(data);

  // console.log(data);

  return data.data.recipes;
}

export async function createRecipe(newRecipe) {
  // if (recipeOf === "") return;
  try {
    const res = await fetch(`${API_URL}?key=${KEY}`, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed to upload!");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
