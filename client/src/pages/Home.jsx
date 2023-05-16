import { useAuth } from "../context/AuthContext";
export default function Home() {
    const user = useAuth();
    return (
        <div>   
            <h1>Home</h1>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
            <div>
             <p className="bg-blue-500">
                {JSON.stringify(user)}
            </p>
            </div>
        </div>
    )
}