import { useEffect } from 'react';
import { useUser } from '../contexts/UserContextProvider';

function useLoginStatus() {
    const { setLoggedIn } = useUser();

    useEffect(() => {
        fetch("/api/auth/verify", {
            method: "GET",
            credentials: "include"
        })
            .then(res => {
                if (!res.ok) throw new Error("Unauthorized");
                setLoggedIn(true);
            })
            .then(data => console.log(data))
            .catch(() => {
                setLoggedIn(false);
            });
    }, [])
}

export default useLoginStatus
