async function useFetchUser(userid){
    try {
        const response = await fetch(`/api/v1/users/${userid}`);
        if(!response.success){
            throw new Error("Error fetching user details, Response Status : ", response.status);
        }
        const json = response.json();
        return json.data;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export default useFetchUser;