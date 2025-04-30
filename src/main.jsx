import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookmarkProvider from "./contexts/Bookmarkcontext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
