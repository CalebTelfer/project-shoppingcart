import { useOutletContext } from "react-router";

function Homepage() {
    const { items } = useOutletContext();

    if (!items || items.length < 19) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
            <div className="card-container">
                <div className="home-card hc1">
                    <div className="card-text">
                        <h2>Keep it sporty.</h2>
                        <h4>Our mission is to change the world through sport. Browse Sportwear and shoes.</h4>
                        <div className="flex-cen">
                            <button className="view-collection-button">View Collection</button>
                        </div>
                    </div>

                    <div className="seperator"></div>

                    <img className="home-product-img" src={items[14].image} alt="" />
                </div>

                <div className="home-card hc2">
                    <div className="flex-cen">
                        <img className="horizontal-product-img" src={items[7].image} alt="" />
                        <div className="card-text">
                            <h4>{items[7].title}</h4>   
                            <h2>${items[7].price}</h2>
                        </div>
                    </div>
                </div>

                <div className="home-card hc3">
                    <div className="flex-cen">
                        <img className="horizontal-product-img" src={items[15].image} alt="" />
                        <div className="card-text">
                            <h4>{items[15].title}</h4>   
                            <h2>${items[15].price}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage