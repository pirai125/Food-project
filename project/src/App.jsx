import { useState } from "react"
import { food_list , menu_list ,assets } from "./assets/food-assests/assets.js"
import Cart from "./Components/Cart.jsx"
import Header from "./Components/Header.jsx"
import Product from "./Components/Product.jsx"
import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer.jsx"
import { createContext } from "react"


export const cartitemsContext = createContext() 

export default function App() {
  const [cartitems , setCartitems]= useState([])
  const [category , setCategory]= useState("All")

  return (
    <>
    <div className="container mx-auto font-dm_sans">
      <cartitemsContext.Provider value={{cartitems , setCartitems ,assets}}>
        <Header/>
        <Routes>
          <Route path="/"
          element={<Product 
                    food_list={food_list} 
                    menu_list={menu_list} 
                    category={category}
                    setCategory={setCategory}/>}/>
          <Route path="/cart" element={ <Cart/>}/>
        </Routes>
        <Footer/>
    </cartitemsContext.Provider>
    </div>
    </>
  )
}