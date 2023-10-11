import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/authActions";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
function Header() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 < new Date().getTime()) logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user?.token])
    return (
        <header className="shadow-lg py-4 flex p-2">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Fitness Tracker</h1>
                <nav className="space-x-4">
                    <Link to="/" className=" hover:underline">Home</Link>
                    <Link to="/exercises" className=" hover:underline">Exercises</Link>
                    <Link to="/foods" className=" hover:underline">Foods</Link>
                    <Link to="/goals" className=" hover:underline">Goals</Link>

                </nav>
                {user ? <div className="flex gap-4 items-center justify-center">
                    <h2 className="font-semibold">{user.result.name}</h2>
                    <Link className="bg-green-500 hover:green-violet-600 text-white font-semibold py-2 px-4 rounded" to='/' onClick={handleLogout}>
                        SIGN OUT
                    </Link>
                </div> : <div>
                    <Link className="bg-green-500 hover:green-violet-600 text-white font-semibold py-2 px-4 rounded" to='/auth'>
                        SIGN IN
                    </Link>
                </div>}
            </div>
        </header>
    );
}

export default Header;
