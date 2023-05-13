import { useAuth } from "../context/AuthContext";
export default function Home() {
    const user = useAuth();
    return (
        <div>   
            <h1>Home</h1>
            <p>{JSON.stringify(user)}</p>
        </div>
    )
}