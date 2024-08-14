import { useContext, createContext, useState } from "react";

/**
 * Context Provider created with future intention of having access to video props globally.
 */

const VideosContext = createContext();

function VideosProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <VideosContext.Provider
      value={{
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

function useVideos() {
  const context = useContext(VideosContext);
  if (context === undefined)
    throw new Error("VideosContext was used outside the VideosProvider");
  return context;
}

export { VideosProvider, useVideos };
