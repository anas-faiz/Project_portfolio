import { useSelector } from "react-redux"


const AppBar = ({isCart})=>{

    const cartItems = useSelector((store)=> store.cart.items)
    return(
        <div className="flex justify-between p-4 m-2">
            <button onClick={()=> isCart(false)} className="border p-1">Home</button>
            <div>
              <button onClick={()=> isCart(true)} className="border p-1" >Cart</button>
                <span>{cartItems.length}</span>
            </div>
        </div>
    )
}

export default AppBar