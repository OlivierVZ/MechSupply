import Carousel from 'react-bootstrap/Carousel';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function FeaturedCarousel() {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-auto">
        <Carousel controls={false}  pause={false} interval={3000} className={'carousel'}>
            <Carousel.Item interval={3000}>
                <img
                  className="d-block"
                  src="https://prototypist.net/cdn/shop/files/render2.png?v=1691756351&width=auto"
                  alt="First slide"
                />
                <Carousel.Caption className="md-w-50">
                    <h3>Neo 65</h3>
                    <p>Neo 65, a premium budget friendly 65% keyboard</p>
                    <Button as={Link} to="/products" className="button-primary">See More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                  className="d-block"
                  src="https://dailyclack.com/cdn/shop/products/thrill_1.png?v=1628213748"
                  alt="Second slide"
                />
                <Carousel.Caption className="md-w-50">
                    <h3>GMK Classic Retro Keycap Set</h3>
                    <p>High-quality dye-sublimated PBT keycaps in a nostalgic retro colorway.</p>
                    <Button as={Link} to="/products" className="button-primary">See More</Button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block"
                  src="https://i.rtings.com/assets/products/acRxkcE0/durock-t1/design-medium.jpg?format=auto"
                  alt="Third slide"
                />
                <Carousel.Caption className="w-md-50">
                    <h3>Gazzew Boba U4T</h3>
                    <p>Tactile mechanical switches with a unique bump profile, designed for a satisfying typing experience.</p>
                    <Button as={Link} to="/products" className="button-primary">See More</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default FeaturedCarousel;