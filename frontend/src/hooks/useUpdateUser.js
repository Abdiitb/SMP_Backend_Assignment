async function useUpdateUser(userData){
    try {
        const response = await fetch(`/api/v1/users/${userData._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.status !== 200){
            throw new Error("Error updating user details, Response Status : ", response.status);
        }
    } catch (error) {
        console.error(error.message);
    }
}

export default useUpdateUser;