import React from 'react'
import { Route , createBrowserRouter , createRoutesFromElements,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import StudentPage from './pages/StudentPage';
import StudentLayout from './layouts/StudentLayout';
import AppTable from './pages/AppTable';


const router = createBrowserRouter(
  
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegistrationPage/>}/>
        </Route>
        {/* student layout */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentPage/>}/>
          <Route path="AppTable" element={<AppTable />} />
          

        </Route>
      </>
    )
  

);

const App = () => {
  

  return <RouterProvider router={router}/>
  
}

export default App