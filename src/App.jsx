import React from 'react'
import { Route , createBrowserRouter , createRoutesFromElements,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
       < Route index element={<HomePage/>}/>
       < Route path='/login' element={<LoginPage/>}/>
    </Route>
    )
);

const App = () => {
  

  return <RouterProvider router={router}/>
}

export default App