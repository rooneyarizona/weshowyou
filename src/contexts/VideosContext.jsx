import { useContext, createContext } from "react";

const VideosContext = createContext();

function VideosProvider({ children }) {
  const test = "Hello";
  return (
    
      <VideosContext.Provider
        value={{
          test: test,
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
