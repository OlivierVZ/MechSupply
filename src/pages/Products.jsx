import {Button} from "react-bootstrap";
import ProductCard from "../components/ProductCard.jsx";
import { useMemo, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { getProducts } from '../utils/products';


export default function Products() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [productsList] = useState(() => getProducts());

    const categories = useMemo(() => {
        const cats = Array.from(new Set(productsList.map(p => p.category)));
        return ['all', ...cats];
    }, [productsList]);

    const filtered = useMemo(() => {
        const term = search.trim().toLowerCase();
        return productsList.filter(p => {
            const matchesCategory = category === 'all' || p.category === category;
            const matchesSearch = !term || (
                p.name.toLowerCase().includes(term) ||
                (p.description && p.description.toLowerCase().includes(term))
            );
            return matchesCategory && matchesSearch;
        });
    }, [search, category]);


    return (
        <>
            <div className="container product-page mt-4 pb-4">
                <div className="content-header">
                    <h2>Products</h2>
                </div>

                <div className="product-controls my-3 d-flex gap-2 align-items-center">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search products by name or description..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Dropdown drop="down" onSelect={(eventKey) => setCategory(eventKey)}>
                        <Dropdown.Toggle variant="outline-secondary" id="category-dropdown">
                            {category === 'all' ? 'All categories' : category}
                        </Dropdown.Toggle>
                        <Dropdown.Menu popperConfig={{ modifiers: [{ name: 'flip', enabled: false }] }}>
                            {categories.map(cat => (
                                <Dropdown.Item eventKey={cat} key={cat} active={cat === category} className="">
                                    {cat === 'all' ? 'All categories' : cat}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button variant="outline-secondary" onClick={() => { setSearch(''); setCategory('all'); }}>
                        Clear
                    </Button>
                </div>

                <div className="row product-content">
                    {filtered.length === 0 ? (
                         <div className="col-12">
                             <p>No products found.</p>
                         </div>
                     ) : (
                        filtered.map((item) => <ProductCard key={item.id} item={item} />)
                     )}
                 </div>
             </div>
         </>
     )
 }
