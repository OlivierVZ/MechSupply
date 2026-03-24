import { NavLink } from 'react-router-dom';
import logo from '../assets/images/MechSupply-Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/main.scss'
import { useCart } from '../context/CartContext.jsx';
function Header() {
    const {state} = useCart();
    const totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <>

            <Navbar expand="md" className="nav" bg="light" data-bs-theme="Light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className={"px-4 mx-0"}>
                        <img
                        src={logo}
                        width="120"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="mx-auto">
                            <Nav.Link as={NavLink}  to="/products" className={'mx-4'}  >Products</Nav.Link>
                            <Nav.Link as={NavLink} to="/support" className={'mx-4'} >Support</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className={'mx-4'} >About</Nav.Link>
                        </Nav>
                        <Nav>

                        <Nav.Link as={NavLink} to="/cart" className={'mx-4'}>
                            <i className="bi bi-bag-fill icon-bag-thick position-relative">
                                {totalItems > 0 && (
                                    <span className="cart-badge">
                                        {totalItems}
                                    </span>
                                )}
                            </i>

                        </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;