import {useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import { getOrders } from '../utils/orders';

export default function Success(){
    const navigate = useNavigate();
    const [recentOrder, setRecentOrder] = useState(null);

    useEffect(() => {
        const orders = getOrders();
        if (orders && orders.length > 0) {
            const last = orders[orders.length - 1];
            setRecentOrder(last);
        }
    }, []);

    return(
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <h2>Thank you for your order!</h2>
                    <p className="text-muted">Your order has been placed successfully. We will process it shortly.</p>
                    <div className="mt-3">
                        <button className="btn btn-primary me-2" onClick={() => navigate( '/products')}>Continue shopping</button>
                        <button className="btn btn-outline-secondary" onClick={() => navigate( '/')}>Home</button>
                    </div>
                </div>


                <div className="mt-4">
                    <h2>Recent order</h2>
                    {recentOrder ? (
                        <div className="card p-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Order ID:</strong> {recentOrder.id}
                                </div>
                                <div className="text-muted">
                                    {recentOrder.createdAt ? new Date(recentOrder.createdAt).toLocaleString() : ''}
                                </div>
                            </div>

                            <hr />

                            <div>
                                {recentOrder.items && recentOrder.items.length > 0 ? (
                                    recentOrder.items.map(item => (
                                        <div key={item.id} className="d-flex align-items-center mb-2">
                                            <img src={item.image || item.img} alt={item.name} style={{width:60, height:60, objectFit:'cover', marginRight:12}} />
                                            <div style={{flex:1}}>
                                                <div><strong>{item.name}</strong></div>
                                                <div className="text-muted small">Qty: {item.quantity} × ${Number(item.price).toFixed(2)}</div>
                                            </div>
                                            <div><strong>${(item.quantity * item.price).toFixed(2)}</strong></div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-muted">No items in this order.</p>
                                )}
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <div className="text-muted">Items: {recentOrder.itemsCount ?? (recentOrder.items ? recentOrder.items.length : 0)}</div>
                                <div><strong>Total: ${Number(recentOrder.total).toFixed(2)}</strong></div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-muted">No recent orders found.</p>
                    )}
                </div>

            </div>
        </>
    )
}
