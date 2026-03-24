import {useCart} from "../context/CartContext.jsx";
import {Button} from "react-bootstrap";
import { addOrder } from '../utils/orders';
import {useNavigate} from "react-router-dom";

export default function CartSummary() {
    const {state, dispatch} = useCart();
    const {cartItems} = state;
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryFee = totalPrice > 50 ? 0 : 15;

    const discount = totalPrice * 0.1;
    const total = totalPrice - discount + deliveryFee;

    const navigate = useNavigate();
    const handleOrder = () => {
        const order = {
            items: cartItems,
            total: total,
            itemsCount: totalItems,
        };
        const saved = addOrder(order);
        if (saved) {
            dispatch({type: 'CLEAR_CART'});
        }
        navigate("/success");
    }


    return (
        <div>
            <h2>Order Summary</h2>
            <div className="order-summary">
                <p className="summary-item">Total Items: {totalItems}</p>
                <p className="summary-item">Total Price: €{totalPrice.toFixed(2)}</p>
                <p className="summary-item">Discount (10%): -€{discount.toFixed(2)}</p>
                <p className="summary-item">Delivery Fee: €{deliveryFee.toFixed(2)}</p>
                <h3 className="total">Total: €{total.toFixed(2)}</h3>
            </div>
            <Button className="button-primary" onClick={handleOrder} disabled={cartItems.length === 0}>Place Order</Button>
        </div>
    )
}