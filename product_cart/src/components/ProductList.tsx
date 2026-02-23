import { useDispatch } from "react-redux"
import { products } from "../data/product"
import { addToCart } from "../utils/cartSlice";

const ProductList = ()=>{
    const dispatch = useDispatch();
    
    return(
        <div>
            {
                products.map((p)=>(
                    <div key={p.id} className="border p-2 m-2" >
                        <p>{p.name}</p>
                        <p>{p.price}</p>
                        <p>{p.category}</p>
                        <button onClick={()=> dispatch(addToCart(p))} className="border p-1 bg-blue-200" >Add</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList