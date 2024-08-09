import { createContext, useContext, useState } from "react";

const UsersContext = createContext();

function UsersProvider({ children }) {
  const [globalUserName, setGlobalUserName] = useState("");
  const [globalAdminUsername, setGlobalAdminUsername] = useState("");

  return (
    <UsersContext.Provider
      value={{
        globalUserName,
        setGlobalUserName,
        setGlobalAdminUsername,
        globalAdminUsername,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);
  if (context === undefined)
    throw new Error("UsersContext was used outside of UsersProvider");
  return context;
}

export { UsersProvider, useUsers };
