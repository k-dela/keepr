import { createContext, useEffect, useContext, useState } from "react";
import supabase from "../supabase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const checkCurrentUser = async () => {
        const { data, error } = await supabase.auth.getSession();

        if(data.session === null) {
            setUser(null);
            setLoading(false);
            return; 
        }
        console.log(data.session );
        setUser(data.session.user || null);
        setLoading(false);
    }

    useEffect(() => {
        checkCurrentUser();
        
        const {data} = supabase.auth.onAuthStateChange((event, session) => {
            if(event === "SIGNED_IN") {
                setUser(session.user);
                setLoading(false);
            }
        });

        return () => {
            data.subscription.unsubscribe();
        }
    }, []);
    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    );
}