import { useSelector, useDispatch } from "react-redux";
import { clearCart, decreaseQuantity, increaseQuantity } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div>
        <div className="flex justify-end pr-2" >
        <button className="border p-2" onClick={()=>dispatch(clearCart())} >clear Cart</button>
        </div>
      {cartItems.length == 0 ? (
        <p> cart is empty</p>
      ) : (        
        cartItems.map((c) => (
          <div key={c.id} className="border p-2 m-2 ">
            <p>{c.name}</p>
            <p>{c.price}</p>
            <p>{c.category}</p>
            <p>Quantity : {c.quantity}</p>
            <span>
              <button
                onClick={() => dispatch(increaseQuantity(c.id))}
                className="border p-0.5 m-0.5"
              >
                +
              </button>
              <button
                onClick={() => dispatch(decreaseQuantity(c.id))}
                className="border p-0.5"
              >
                -
              </button>
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
