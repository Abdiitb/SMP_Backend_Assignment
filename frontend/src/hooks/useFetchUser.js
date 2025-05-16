import { useEffect, useState } from "react";

function useFetchAllUsers(userid) {
    const  [data, setData] = useState({});

    useEffect(() => {
        fetch(`/api/v1/users/${userid}`)
        .then((res) => res.json())
        .then((res) => setData(res.data))
        .catch((error) => console.error(error.message))

        console.log("data : ", data)
    }, [])

    return data;
}

export default useFetchAllUsers;