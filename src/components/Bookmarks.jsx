import { Link } from "react-router-dom";
import { useBookmark } from "../contexts/Bookmarkcontext";
import useUrlParams from "../hooks/useUrlParams";
import Message from "./Message";
import Svg from "./Svg";
import List from "./List";

function Bookmarks() {
  const { bookmarks } = useBookmark();
  const { searchParams, setSearchParams, id } = useUrlParams();

  return (
    <div className="bookmarks">
      <ul className="bookmarks__list">
        {bookmarks?.length === 0 && (
          <Message
            msg="No bookmarks yet. Find a nice recipe and bookmark it :)"
            svgName="smile"
          />
        )}

        {bookmarks?.map((bookmark) => (
          <List
            key={bookmark?.id}
            data={bookmark}
            activeId={id}
            onClick={() => {
              searchParams.delete("id");
              searchParams.set("id", bookmark.id);
              setSearchParams(searchParams);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;
