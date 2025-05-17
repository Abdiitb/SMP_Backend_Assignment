import { useState, useEffect } from "react"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Login from "./components/Login/Login.jsx"
import { UserContextProvider } from "./contexts/UserContextProvider.jsx"
import { Outlet } from "react-router";

function App() {
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [showAllAdminUsers, setShowAllAdminUsers] = useState(false);
  const [allUserData, setAllUserData] = useState([]);
  const [adminUsersData, setAdminUsersData ] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContextProvider value={{showAllUsers, setShowAllUsers, showAllAdminUsers, setShowAllAdminUsers, allUserData, setAllUserData, adminUsersData, setAdminUsersData, loggedIn, setLoggedIn}}>
      {/* <Login /> */}
      {/* {!loggedIn ? <Login /> :
      <>
       <div className="px-10 py-5 w-full text-5xl bg-blue-500 text-black text-center">ADMIN DASHBOARD</div>
      <div className="flex w-full flex-row">
      <Dashboard />
      <Outlet />

      </div>
      </>
       
      
      } */}
      <div className="px-10 py-5 w-full text-5xl bg-blue-500 text-black text-center">ADMIN DASHBOARD</div>
      <div className="flex w-full flex-row">
      {/* <Dashboard /> */}
      <Outlet />

      </div>
     
    </UserContextProvider>
  )
}

export default App
