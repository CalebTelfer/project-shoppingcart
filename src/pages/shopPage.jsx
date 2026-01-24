import Navbar from "../components/Navbar";
import FooterContent from "../components/FooterContent";
import { useOutletContext } from "react-router";
import "./shopPage.css";
import AddToCart from "../components/AddToCart";

function ShopPage() {
    const { items } = useOutletContext();

    if (!items || items.length < 19) {
        return <div>Loading...</div>;
    }


    return (
        <>
        <div className="margintb1">

            <div className="seperator margin1"></div>
            
            {items.map( item => (
                <>
                    <div className="product flex-cen" key={item.id}>
                        <img src={item.image} alt="" className="product-img" />

                        <div className="flex-col gap1 product-info">
                            <div>
                                <h3>{item.title}</h3>
                                <h3>${item.price}</h3>
                            </div>

                            <div>
                                <p>{item.description}</p>
                            </div>

                            <AddToCart item={item}/>
                        </div>
                    </div>

                    <div className="seperator margin1"></div>
                </>

            ))}
        </div>
        </>
    )
}

export default ShopPage;