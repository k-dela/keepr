import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Protected({children}) {
    const user = useAuth();

    return user ? children : <Navigate to="/login"/>
}