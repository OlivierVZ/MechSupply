import {NavLink} from 'react-router-dom';
import logo from '../assets/images/MechSupply-Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/main.scss'
import {useCart} from '../context/CartContext.jsx';

function Header() {
    const {state} = useCart();
    const totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <>

            <Navbar expand="md" className="nav" bg="light" data-bs-theme="Light">
                <Container className="d-flex align-items-center no-wrap">
                    <Navbar.Brand as={NavLink} to="/" className={" mx-0 order-1"}>
                        <img
                            src={logo}
                            width="120"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <div className="d-flex align-items-center order-2">
                        <Navbar.Toggle aria-controls="main-navbar"/>
                        <Nav className="ms-2 d-md-none">
                            <Nav.Link as={NavLink} to="/cart" className={'mx-2 p-0'}>
                                <i className="bi bi-bag-fill icon-bag-thick position-relative">
                                    {totalItems > 0 && (
                                        <span className="cart-badge">
                                            {totalItems}
                                        </span>
                                    )}
                                </i>
                            </Nav.Link>
                        </Nav>
                    </div>

                    <Navbar.Collapse id="main-navbar" className="w-100 order-3 flex-md-grow-1 mx-auto justify-content-center mt-2 mt-md-0">
                        <Nav>
                            <Nav.Link as={NavLink} to="/products" className={'mx-4'}>Products</Nav.Link>
                            <Nav.Link as={NavLink} to="/support" className={'mx-4'}>Support</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className={'mx-4'}>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Nav className="d-none d-md-flex ms-auto order-4">
                        <Nav.Link as={NavLink} to="/cart" className={'mx-2 p-0'}>
                            <i className="bi bi-bag-fill icon-bag-thick position-relative">
                                {totalItems > 0 && (
                                    <span className="cart-badge">
                                        {totalItems}
                                    </span>
                                )}
                            </i>

                        </Nav.Link>
                    </Nav>

                </Container>
            </Navbar>

        </>
    );
}

export default Header;