import useUrlParams from "../hooks/useUrlParams";
import Bookmarks from "./Bookmarks";
import Button from "./Button";
import FormInput from "./FormInput";
import Logo from "./Logo";

function Header({ settoggleForm }) {
  const { searchParams, setSearchParams } = useUrlParams();

  function handleSearch(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const { search } = Object.fromEntries(data);
    if (!search) return;

    searchParams.delete("id");
    searchParams.set("search", search);
    searchParams.set("page", 1);
    setSearchParams(searchParams);

    e.target.reset();
  }

  return (
    <header className="header">
      <Logo />
      <form className="search" onSubmit={handleSearch}>
        <FormInput
          type="text"
          name="search"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
        />
        <Button
          className="btn search__btn"
          svgClassName="search__icon"
          svgName="search"
        >
          Search
        </Button>
      </form>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Button
              onClick={() => settoggleForm(true)}
              className="nav__btn nav__btn--add-recipe"
              svgName="edit"
              svgClassName="nav__icon"
            >
              Add recipe
            </Button>
            <Bookmarks />
          </li>
          <li className="nav__item">
            <Button
              className="nav__btn nav__btn--bookmarks"
              svgName="bookmark"
              svgClassName="nav__icon"
            >
              Bookmarks
            </Button>
            <Bookmarks />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
