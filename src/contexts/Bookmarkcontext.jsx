/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const Bookmarkcontext = createContext();

function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useLocalStorageState("bookmarks", []);

  function removeBookmark(id) {
    setBookmarks((bookmarks) =>
      bookmarks.filter((bookmark) => bookmark.id !== id)
    );
  }

  function addBookmark(newBookmark) {
    setBookmarks((currBookmark) => [...currBookmark, newBookmark]);
  }

  return (
    <Bookmarkcontext.Provider
      value={{ bookmarks, setBookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </Bookmarkcontext.Provider>
  );
}

export function useBookmark() {
  const context = useContext(Bookmarkcontext);
  if (context === undefined)
    throw new Error("Using bookmark context outside provider!");

  return context;
}

export default BookmarkProvider;
