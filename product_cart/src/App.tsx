import { useState } from "react"
import AppBar from "./components/AppBar"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"


const App = ()=>{

  const [isCart,setIsCart] = useState(false)

  return(
    <div>
      <AppBar isCart={setIsCart}/>
      { isCart ? <Cart/> : <ProductList/> }

    </div>
  )
}

export default App