// import React from 'react'
import { useState } from 'react'
import useCreateUser from '../../hooks/useCreateUser.js' 

function AddUser() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    isActive: true
  })

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[60%] border py-10 px-40 m-4">
      <div className='text-4xl text-center mb-10'>ADD NEW USER</div>
      <div className='grid grid-cols-2 gap-10 text-2xl'>
        
        <label className="label">Name</label>
        <input 
          type="text" 
          className="input" 
          placeholder="Name"
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({...prev, name: e.target.value}))} 
        />
      
      
      
      <label className="label">Email</label>
      <input 
        type="text" 
        className="input" 
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData((prev) => ({...prev, email: e.target.value}))}
      />
      
        <label className="label">Age</label>
      <input 
        type="text" 
        className="input" 
        placeholder="Age" 
        value={userData.age}
        onChange={(e) => setUserData((prev) => ({...prev, age: e.target.value}))}
        />
      
        <label className="label">isActive</label>
      
      <input 
        type="checkbox" 
        defaultChecked 
        className="checkbox" 
        onChange={(e) => setUserData((prev) => ({...prev, isActive: !prev.isActive}))}

      />
      
      </div>
    
      <div className='flex justify-center mt-10'>

      <button className="btn btn-success text-3xl font-light" onClick={() => useCreateUser(userData)}>ADD</button>
      </div>
      
    </fieldset>
  )
}

export default AddUser
