import { useState } from "react";
import Header from "./components/Header";
import SearchRecipe from "./components/SearchRecipe";
import Recipe from "./components/Recipe";
import CreateRecipeForm from "./components/CreateRecipeForm";
import Main from "./components/Main";

export default function App() {
  const [toggleForm, settoggleForm] = useState(false);

  return (
    <Main>
      <Header settoggleForm={settoggleForm} />
      <SearchRecipe />
      <Recipe />
      <CreateRecipeForm toggleForm={toggleForm} settoggleForm={settoggleForm} />
    </Main>
  );
}
