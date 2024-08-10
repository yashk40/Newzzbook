import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './component/Navbar.jsx';
import Api from './component/Api.jsx';
import Second from './component/Second.jsx'; // Assuming Second component exists
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CountryDropdown from './component/CountryDropdown.jsx';
import Languagelist  from './component/Languagelist.jsx'



function App() {
  const [country, setCountry] = useState("In");
  const [newlang , setlang] = useState("en")
  const router = createBrowserRouter([
    { path: "/health", element: <Api category="health" country={country} lang={newlang} /> },
    { path: "/entertainment", element: <Api category="entertainment" country={country} lang={newlang} /> },
    { path: "/Science", element: <Api category="science" country={country} lang={newlang} /> },
    { path: "/business", element: <Api category="business" country={country} lang={newlang} /> },
    { path: "/", element: <Api category="general" country={country} lang={newlang} /> },
    { path: "/Sports", element: <Api category="sports" country={country} lang={newlang} /> },
    { path: "/Technology", element: <Api category="technology" country={country} lang={newlang} /> },
  ]);

  return (
    <>
    
       <Navbar setCountry={setCountry} setlang={setlang}/>
      <Second />
      <RouterProvider router={router} /> 
     
      </>
  );
}

export default App;
