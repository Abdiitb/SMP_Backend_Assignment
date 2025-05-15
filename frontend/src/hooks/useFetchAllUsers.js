async function useFetchAllUsers() {
    try {
        const response = await fetch('/api/v1/users');
        if(response.status === 200){
            const json = await response.json();
            return json.data; 
        } else {
            throw new Error("Error fetching all users data, Response Status : ", response.statusCode);
        }
    } catch (error) {
        console.error("Error fetching users : ", error);
        return error.message;
    }
}

export default useFetchAllUsers;
