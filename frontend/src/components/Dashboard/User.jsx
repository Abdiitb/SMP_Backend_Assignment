import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useFetchUser from '../../hooks/useFetchUser.js';
import useUpdateUser from '../../hooks/useUpdateUser.js';

function User() {
  const { userid } = useParams();

  const data = useFetchUser(userid); 

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    isActive: true
  });

  useEffect(() => {
    if (Object.keys(data).length) {
      setUserData(data);
    }
  }, [data])

  console.log(userData);

  return (
    <div>
      <div className='text-4xl text-center mb-10'>UPDATE USER DETAILS</div>
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

      <button className="btn btn-success text-3xl font-light" onClick={() => useUpdateUser(userData)}>UPDATE</button>
      </div>
    </div>
  )
}

export default User
