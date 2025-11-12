function FooterContent() {
    return (
        <>
            <div className="flex-cen flex-col footer-div">
                <h4 className="margin1 white-text">Site Links</h4>
                <div className="flex-cen gap1 margin1">
                    <div className="flex-col gap1">
                        <p className="white-text pointer">Contact Us</p>
                        <p className="white-text pointer">About Us</p>
                    </div>

                    <div className="flex-col gap1">
                        <p className="white-text pointer">Promotions</p>
                        <p className="white-text pointer">Partners</p>
                    </div>

                    <div className="flex-col gap1">
                        <p className="white-text pointer">Careers</p>
                        <p className="white-text pointer">FAQS</p>
                    </div>
                </div>
            </div>

            <div className="endfooter-style"></div>
        </>
    );
}

export default FooterContent