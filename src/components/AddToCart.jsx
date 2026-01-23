import { useState } from "react";

function AddToCart({ item }) {
    const [quantity, setQuantity] = useState(0);

    function handleAddToCart() {
        //add to cart quantity + item
    }

  return (
    <>
        <div>
            <label for="quantity"></label>

            <select name="quantity-select" id="quantity" onChange={(e) => setQuantity(Number(e.target.value))}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>

            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </>
  );
}

export default AddToCart