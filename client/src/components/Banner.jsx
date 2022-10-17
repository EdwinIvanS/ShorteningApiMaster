import React from "react";
import Container from "react-bootstrap/Container";
import illustrationWorking from '../assets/img/illustration-working.svg'


const Banner = () => {
    return(
        <Container className="container-banner">
            <div className="banner-descriptions">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how links are performing.</p>
                <button><span> Get Started </span> </button>
            </div>
            <div className="banner-img">
                <img src={illustrationWorking} alt=""/>
            </div>
        </Container>
    )
}

export default Banner;