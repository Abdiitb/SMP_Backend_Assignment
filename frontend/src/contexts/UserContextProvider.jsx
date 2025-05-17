import { createContext, useContext } from "react";

export const UserContext = createContext({
    showAllUsers: null,
    setShowAllUsers: () => {},
    showAllAdminUsers: null,
    setShowAllAdminUsers: () => {},
    loggedIn: null,
    setLoggedIn: () => {},
    // allUserData: null,
    // setAllUserData: () => {},
    // adminUsersData: null,
    // setAdminUsersData: () => {}
})

export const UserContextProvider = UserContext.Provider;

export const useUser = () => {
    return useContext(UserContext);
}