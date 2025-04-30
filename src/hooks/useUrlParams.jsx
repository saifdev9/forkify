import { useSearchParams } from "react-router-dom";

function useUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams?.get("page") ? Number(searchParams.get("page")) : 1;
  const id = searchParams.get("id") ?? null;
  const search = searchParams.get("search"); // trim spaces

  return { page, setSearchParams, searchParams, id, search };
}

export default useUrlParams;
