async function useDeleteUser(userid) {
    try {
        const response = await fetch(`/api/v1/users/${userid}`, {
            method: "DELETE"
        })
        if(!response.status){
            throw new Error("Error deleting user, Response Status : ", response.statusCode)
        }
    } catch (error) {
        console.error(error.message);
    }
}

export default useDeleteUser;