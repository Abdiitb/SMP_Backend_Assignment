// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import UserList from './components/Dashboard/UserList.jsx'
import User from './components/Dashboard/User.jsx'
import AddUser from './components/Dashboard/AddUser.jsx'
import { useUser } from './contexts/UserContextProvider.jsx'
import Login from './components/Login/Login.jsx'

// const { loggedIn } = useUser();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Dashboard />} />
      <Route path='/users' element={<UserList />} />
      <Route path='/users/:userid' element={<User />}/>
      <Route path='/users/add-user' element={<AddUser />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // {/* </StrictMode> */}
)
