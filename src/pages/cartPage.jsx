import { useOutletContext } from "react-router";
import './cartPage.css';

function CartPage() {
    const { cartData, cartQuantity, cartPrice} = useOutletContext();
    
console.log(cartData);
    return (
        <>
            <div className="cartbgdiv">
                <h2 className="cartTitle">Shopping Cart</h2>

                <div className="flex cartRow">
                    <div className="cartProductCol"><h4>Product</h4></div>
                    <div className="cartItemDescCol"></div>
                    <div className="cartQuantityCol"><h4>Quantity</h4></div>
                    <div className="cartPriceCol"><h4>Price</h4></div>
                </div>


                <div className="flex-col gap5">
                    {cartData.map(([item, quantity]) => (
                        <>
                            <div className="flex cartRow" key={item.id}>
                                <div className="cartProductCol">
                                    <img src={item.image} alt="" className="cart-product-img"/>
                                </div>


                                <div className="cartItemDescCol"><h4>{item.title}</h4></div>
                                <div className="cartQuantityCol"><h4>{quantity}</h4></div>
                                <div className="cartPriceCol"><h4>${item.price * quantity}</h4></div>
                            </div>
                        </>
                    ))}
                </div>


                <div className="flex-cen gap5 margin1">
                    <h2>Total : ${cartPrice}</h2>

                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CartPage;