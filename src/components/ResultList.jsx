import { Link } from "react-router-dom";
import useUrlParams from "../hooks/useUrlParams";
import Svg from "./Svg";
import List from "./List";

function ResultList({ result }) {
  const { searchParams, setSearchParams, id } = useUrlParams();

  return (
    <List
      data={result}
      activeId={id}
      onClick={() => {
        searchParams.set("id", result?.id);
        setSearchParams(searchParams);
        if (id === result?.id) {
          searchParams.delete("id");
          setSearchParams(searchParams);
          return;
        }
      }}
    />
  );
}

export default ResultList;
