async function useLoginUser(userDetails) {
    try {
        const response = await fetch('/api/v1/users/admin/login', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                }, 
                body: JSON.stringify(userDetails)
            }
        )
        if(!response.success){
            throw new Error("Error logging in user, Response Status : ", response.status)
        }
    } catch (error) {
        console.error(error.message);
    }
}

export { useLoginUser };