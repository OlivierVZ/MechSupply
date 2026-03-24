import defaults from '../data/products.json';

const STORAGE_KEY = 'mechSupply_products';

export function getProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Failed to read products from localStorage', e);
  }
  return defaults.map(p => ({ ...p }));
}

export function saveProducts(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    console.warn('Failed to save products', e);
    return false;
  }
}

export function addProduct(product) {
  const list = getProducts();
  const id = Date.now();
  const toAdd = { ...product, id };
  list.push(toAdd);
  saveProducts(list);
  return toAdd;
}

export function updateProduct(id, patch) {
  const list = getProducts();
  const idx = list.findIndex(p => p.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...patch };
  saveProducts(list);
  return list[idx];
}

export function deleteProduct(id) {
  let list = getProducts();
  list = list.filter(p => p.id !== id);
  saveProducts(list);
  return true;
}

