import { useContext, createContext, useState } from "react";

const VideosContext = createContext();

function VideosProvider({ children }) {
  const [searchResults, setSearchResults] = useState([])
  return (
    
      <VideosContext.Provider
        value={{
          searchResults, setSearchResults
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
