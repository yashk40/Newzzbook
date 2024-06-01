
import './App.css';
import Navbar from './component/Navbar.jsx';
import Api from './component/Api.jsx';
import Second from './component/Second.jsx'; // Assuming Second component exists
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
   const router = createBrowserRouter([
    {
      path: "/health",
      element: <Api category="health"/>
    },{
      path: "/entertainment",
      element: <Api category="entertainment"/>
    }, {
      path: "/Science",
      element: <Api category="Science"/>
    },{
      path: "/business",
      element: <Api category="business"/>
    },{
      path:'/',
      element:<Api category="general"/>
    },{
      path:'/Sports',
      element:<Api category="sports"/>
    },{
      path:'/Technology',
      element:<Api category="Technology"/>
    }
   ])

  return (
    <>
    <Navbar/>
    <Second />
     <RouterProvider router={router}/>
    </>
  )
}

export default App
