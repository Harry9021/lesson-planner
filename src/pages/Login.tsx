import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.email === "demo@example.com" && credentials.password === "demo123") {
      auth?.login(navigate);
    } else {
      alert("Please use demo@example.com and demo123 to login");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>
        <div className="text-center text-muted mt-3">
          Use demo@example.com / demo123
        </div>
      </div>
    </div>
  );
};

export default Login;
