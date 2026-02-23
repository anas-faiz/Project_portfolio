import { useSelector } from "react-redux"

const Cart = ()=>{

        const cartItems = useSelector((store) => store.cart.items)

    return(
        <div>
            {cartItems.length == 0 ? 
            (<p> cart is empty</p>) :
            (
                cartItems.map((c)=>(
                    <div key={c.id} className="border p-2 m-2" >
                        <p>{c.name}</p>
                        <p>{c.price}</p>
                        <p>{c.category}</p>
                    </div>
                ))
            )
            
            }
        </div>
    )
}

export default Cart