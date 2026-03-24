import { useEffect, useState } from 'react';
import { getOrders, isAdmin } from '../utils/orders';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../utils/products';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
    const navigate = useNavigate();
    const [tab, setTab] = useState('orders');

    const [orders, setOrders] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    const loadOrders = () => {
        const o = getOrders();
        const sorted = o.slice().sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(sorted);
    }
    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({ name: '', price: '', image: '', description: '', category: '' });

    const loadProducts = () => {
        setProducts(getProducts());
    }

    useEffect(() => {
        if (!isAdmin()) {
            navigate('/admin-login');
            return;
        }
        loadOrders();
        loadProducts();
    }, [navigate]);



    const openEdit = (p) => {
        setEditing(p);
        setForm({ name: p.name, price: p.price != null ? String(p.price) : '', image: p.image, description: p.description, category: p.category });
        setTab('products');
    }

    const saveForm = () => {
        const raw = String(form.price || '').trim();
        const sanitized = raw.replace(/[^0-9.]/g, '');
        const parts = sanitized.split('.');
        const normalized = parts.length <= 1 ? sanitized : parts[0] + '.' + parts.slice(1).join('');
        const priceNumber = parseFloat(normalized) || 0;

        const payload = { ...form, price: priceNumber };
        if (editing) {
            updateProduct(editing.id, payload);
        } else {
            addProduct(payload);
        }
        loadProducts();
        setForm({ name: '', price: '', image: '', description: '', category: '' });
        setEditing(null);
    }

    const handleDelete = (id) => {
        if (!confirm('Delete this product?')) return;
        deleteProduct(id);
        loadProducts();
    }

    return (
        <div className="container mt-4 pb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Admin</h2>
                <div>
                    <button className="btn btn-outline-danger me-2" onClick={() => { localStorage.removeItem('isAdmin'); navigate('/'); }}>Logout</button>
                </div>
            </div>

            <div className="mb-3">
                <button className={`btn ${tab === 'orders' ? 'btn-secondary' : 'btn-outline-secondary'} me-2`} onClick={() => setTab('orders')}>Orders</button>
                <button className={`btn ${tab === 'products' ? 'btn-secondary' : 'btn-outline-secondary'} me-2`} onClick={() => setTab('products')}>Products</button>
            </div>

            {tab === 'orders' && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3>Recent Orders</h3>
                    </div>

                    {(!orders || orders.length === 0) ? (
                        <div className="text-center text-muted">No recent orders</div>
                    ) : (
                        <div className="list-group">
                            {orders.map(order => (
                                <div key={order.id} className="list-group-item">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h5 className="mb-1">Order #{order.id}</h5>
                                            <small className="text-muted">{new Date(order.createdAt).toLocaleString()}</small>
                                            <div className="mt-2 text-muted">{order.items ? order.items.length : 0} line items • {order.items ? order.items.reduce((s,it)=>s+it.quantity,0) : 0} pcs</div>
                                        </div>
                                        <div className="text-end">
                                            <div className="fw-semibold mb-2">€{order.total.toFixed(2)}</div>
                                            <button className="btn btn-sm btn-outline-secondary" onClick={() => setExpandedId(expandedId === order.id ? null : order.id)}>
                                                {expandedId === order.id ? 'Hide details' : 'View details'}
                                            </button>
                                        </div>
                                    </div>

                                    {expandedId === order.id && (
                                        <div className="mt-3">
                                            <div className="list-group">
                                                {order.items && order.items.map(it => (
                                                    <div key={it.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <div className="fw-semibold">{it.name}</div>
                                                            <small className="text-muted">{it.description || ''}</small>
                                                        </div>
                                                        <div className="text-end">
                                                            <div>x{it.quantity}</div>
                                                            <div className="text-muted">€{(it.price * it.quantity).toFixed(2)}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {tab === 'products' && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3>Products</h3>
                    </div>

                    <div className="row">
                        {products.map(p => (
                            <div key={p.id} className="col-12 col-md-6 mb-3">
                                <div className="card p-3 d-flex flex-row gap-3 align-items-center">
                                    <img src={p.image} alt={p.name} style={{width:80, height:60, objectFit:'cover', borderRadius:6}} />
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <div className="fw-semibold">{p.name}</div>
                                                <div className="text-muted small">{p.category} • €{Number(p.price).toFixed(2)}</div>
                                            </div>
                                            <div className="justify-content-end d-flex">
                                                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => openEdit(p)}>Edit</button>
                                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card p-3 mt-3">
                        <h5>{editing ? 'Edit product' : 'New product'}</h5>
                        <div className="row g-2">
                            <div className="col-12 col-md-6">
                                <input className="form-control" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                            </div>
                            <div className="col-12 col-md-3">
                                <input
                                  className="form-control"
                                  placeholder="Price (use dot for decimals, e.g. 0.48)"
                                  type="text"
                                  inputMode="decimal"
                                  value={form.price}
                                  onChange={e => {
                                    const v = e.target.value;
                                    const cleaned = v.replace(/[^0-9.]/g, '');
                                    const parts = cleaned.split('.');
                                    const normalized = parts.length <= 1 ? cleaned : parts[0] + '.' + parts.slice(1).join('');
                                    setForm({...form, price: normalized});
                                  }}
                                />
                            </div>
                            <div className="col-12 col-md-3">
                                <input className="form-control" placeholder="Category" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
                            </div>
                            <div className="col-12">
                                <input className="form-control" placeholder="Image Url" value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" placeholder="Description" rows={3} value={form.description} onChange={e => setForm({...form, description: e.target.value})}></textarea>
                            </div>
                        </div>
                        <div className="mt-3 d-flex gap-2">
                            <button className="btn btn-secondary" onClick={saveForm}>{editing ? 'Update' : 'Add'}</button>
                            <button className="btn btn-outline-secondary" onClick={() => { setForm({ name: '', price: '', image: '', description: '', category: '' }); setEditing(null); }}>Reset</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
