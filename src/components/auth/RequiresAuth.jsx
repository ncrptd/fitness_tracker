import { Navigate, useLocation } from 'react-router-dom';

function RequiresAuth({ children }) {
    const isLoggedIn = localStorage.getItem('profile');
    const location = useLocation();
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/auth" state={{ from: location }} />
    );
}

export default RequiresAuth 