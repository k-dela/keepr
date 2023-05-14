import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export default function CheckSession({children}) {
    const user = useAuth();

    return user ? <Navigate to="/"/> : children;
}