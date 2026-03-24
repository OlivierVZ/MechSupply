import {Button} from "react-bootstrap";
import {useCart} from '../context/CartContext.jsx';
export default function ProductCard({item}) {
    const {dispatch} = useCart();

    const handleAddToCart = () => {
        dispatch({type: 'ADD_TO_CART', payload: item});
    }
    return (
        <div className="col-12 col-md-6 col-xl-4 mb-4">
            <div className="card h-100">
                <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top product-image"
                    width={600}
                    height={200}
                    loading="lazy"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="product-title">{item.name}</h5>
                    <p className="product-description">{item.description}</p>

                    <div className=" p-2 d-flex justify-content-between align-items-center">
                        <strong>€{item.price.toFixed(2)}</strong>
                        <Button onClick={handleAddToCart} className="button-primary">Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}