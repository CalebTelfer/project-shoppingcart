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
            <div className="product flex-cen">
                <img src={items[0].image} alt="" className="product-img" />

                <div className="flex-col gap1 product-info">
                    <div>
                        <h3>{items[0].title}</h3>
                        <h3>${items[0].price}</h3>
                    </div>

                    <div>
                        <p>{items[0].description}</p>
                    </div>

                    <AddToCart item={items[0]}/>
                </div>

            </div>

            <div className="seperator margin1"></div>

            <div className="product flex-cen">
                <img src={items[11].image} alt="" className="product-img" />

                <div className="flex-col gap1 product-info">
                    <div>
                        <h3>{items[11].title}</h3>
                        <h3>${items[11].price}</h3>
                    </div>

                    <div>
                        <p>{items[11].description}</p>
                    </div>

                    <AddToCart item={items[11]}/>
                </div>

            </div>
        </div>
        </>
    )
}

export default ShopPage;