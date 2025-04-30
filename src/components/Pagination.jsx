// import { useSearchParams } from "react-router-dom";
import useUrlParams from "../hooks/useUrlParams";
import Button from "./Button";
import Svg from "./Svg";

function Pagination({ count }) {
  const { searchParams, setSearchParams, page } = useUrlParams();

  function nextPage() {
    if (count >= page) {
      searchParams.set("page", page + 1);
      setSearchParams(searchParams);
    }
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  function prevPage() {
    if (page > 1) {
      searchParams.set("page", page - 1);
      setSearchParams(searchParams);
    }
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  if (count <= 1) return;

  return (
    <div className="pagination">
      {page !== 1 && (
        <Button
          disabled={page === 1}
          onClick={prevPage}
          className="btn--inline pagination__btn--prev"
          svgClassName="search__icon"
          svgName="arrow-left"
        >
          <span>Page {page - 1}</span>
        </Button>
      )}

      {page !== count && (
        <Button
          disabled={page === count}
          onClick={nextPage}
          className="btn--inline pagination__btn--next"
          end={true}
          svgClassName="search__icon"
          name="arrow-right"
        >
          <span>Page {page + 1}</span>
        </Button>
      )}
    </div>
  );
}

export default Pagination;
