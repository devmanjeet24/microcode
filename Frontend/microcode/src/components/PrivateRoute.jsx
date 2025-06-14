import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}


// Hi mam This page just created to acknowledge to how user enter in protected route in this small assignment there is no use of it, 
// if usdr having the token then only user enter in protected route