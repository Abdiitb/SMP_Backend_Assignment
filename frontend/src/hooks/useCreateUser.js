async function useCreateUser(userDetails) {
    try {
        const response = await fetch('/api/v1/users', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                }, 
                body: JSON.stringify(userDetails)
            }
        )
        if(!response.success){
            throw new Error("Error creating new user, Response Status : ", response.statusCode)
        }
    } catch (error) {
        console.error(error.message);
    }
  
}

export default useCreateUser;
