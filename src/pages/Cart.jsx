import { Button } from 'react-bootstrap';
import CartSummary from "../components/CartSummary.jsx";
import { useNavigate} from "react-router-dom";
import { useCart} from "../context/CartContext.jsx"
import CartItem from "../components/CartItem.jsx";
import '../styles/cart.scss';

export default function Cart() {
    const navigate = useNavigate();
    const {state} = useCart();
    const {cartItems} = state;

    if (cartItems.length === 0) {
        return (
            <div className="container mt-4">
                <h2>Your Cart is Empty</h2>
                <Button className="button-primary" onClick={() => navigate('/products')}>
                    Browse Products
                </Button>
            </div>
        )
    }
    return (
        <div className="container cart-page mt-4">
            <div className="content-header">
                <h2>Your Cart</h2>
            </div>
            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <CartItem item={item} />
                        </div>
                    ))}
                </div>
                <div className="cart-summary-card">
                    <CartSummary />
                </div>
            </div>
        </div>
    )
}
