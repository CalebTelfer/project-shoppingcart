import test from "../assets/test.png"

function Homepage() {
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

                    <img className="product-img" src={test} alt="" />
                </div>

                <div className="home-card hc2">
                    <div className="flex-cen">
                        <img className="horizontal-product-img" src={test} alt="" />
                        <div className="card-text">
                            <h4>Placeholder product name</h4>   
                            <h2>$345</h2>
                        </div>
                    </div>
                </div>

                <div className="home-card hc3">
                    <div className="flex-cen">
                        <img className="horizontal-product-img" src={test} alt="" />
                        <div className="card-text">
                            <h4>Placeholder product name</h4>   
                            <h2>$345</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage