export function addOrder(order) {
  try {
    const existing = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      ...order,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    const updated = [...existing, newOrder];
    localStorage.setItem('orders', JSON.stringify(updated));
    return newOrder;
  } catch (e) {
    console.warn('Failed to save order', e);
    return null;
  }
}

export function getOrders() {
  try {
    return JSON.parse(localStorage.getItem('orders')) || [];
  } catch (e) {
    console.warn('Failed to read orders', e);
    return [];
  }
}

export function loginAdmin(username, password) {
  if (username === 'admin' && password === '1234') {
    localStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
}

export function logoutAdmin() {
  localStorage.removeItem('isAdmin');
}

export function isAdmin() {
  return localStorage.getItem('isAdmin') === 'true';
}

