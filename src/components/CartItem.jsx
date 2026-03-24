import {useCart} from "../context/CartContext.jsx"

export default function CartItem({item}) {
    const {dispatch} = useCart();
    return (
        <div className="card w-100 ">
            <div className="card-body row flex-row justify-content-between">
                <div className="col-12 col-lg-6">
                    <img src={item.image || item.img} alt={item.name} className="h-100 w-100" />
                </div>
                <div className="col-12 col-lg-4 align-content-center">

                    <div>
                        <h3>{item.name}</h3>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div>
                        <strong>€{item.price.toFixed(2)}</strong>
                        <div>
                            <button type="button" className="icon-button" onClick={() => dispatch({type: "DECREASE_QUANTITY", payload : item.id})}>
                                <i className="bi bi-dash-circle"></i>
                            </button>
                            <span className="qty">{item.quantity}</span>
                            <button type="button" className="icon-button" onClick={() => dispatch({type: "INCREASE_QUANTITY", payload : item.id})}>
                                <i className="bi bi-plus-circle"></i>
                            </button>
                            <button type="button" className="icon-button" onClick={() => dispatch({type: "REMOVE_FROM_CART", payload : item.id})}>
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}