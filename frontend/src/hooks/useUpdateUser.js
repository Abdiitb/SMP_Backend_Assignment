async function useUpdateUser(userid, userData){
    try {
        const response = await fetch(`/api/v1/users/${userid}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(!response.success){
            throw new Error("Error updating user details, Response Status : ", response.statusCode);
        }
    } catch (error) {
        console.error(error.message);
    }
}

export default useUpdateUser;