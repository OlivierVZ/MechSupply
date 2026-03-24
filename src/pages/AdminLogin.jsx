import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../utils/orders';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginAdmin(username, password)) {
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="container mt-4 mt-auto admin-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:400}}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div className="text-danger mb-2">{error}</div>}
        <button className="button-primary">Login</button>
      </form>
    </div>
  );
}

