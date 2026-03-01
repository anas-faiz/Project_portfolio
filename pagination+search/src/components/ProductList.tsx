import { products } from "../data/products"

const ProductList = ()=>{

    return(
        <div>
            {products.map((i)=>(
                <div key={i.id} className="border p-1 m-2" >
                    <p>{i.title}</p>
                    <p>{i.description}</p>
                    <p>{i.price}</p>
                    <p>{i.category}</p>
                    <p>{i.rating}⭐</p>
                </div>
            ))}
        </div>
    )


}

export default ProductList