import LeftTable from "./LeftTable.jsx"
// import DataTable from "./DataTable.jsx"
// import { useState } from "react"
import { useUser } from "../../contexts/UserContextProvider.jsx";
import useFetchAllUsers from "../../hooks/useFetchAllUsers.js";

function Dashboard() {
    const {showAllUsers, setShowAllUsers, showAllAdminUsers, setShowAllAdminUsers} = useUser();

    // const allUsersData = useFetchAllUsers();

    return (
        <>
            
            {/* <div className="flex w-full flex-row"> */}
                <div className="flex flex-col w-[20%] h-full font-light">
                    <div className="p-2 m-2">
                        <LeftTable title="ADMIN" show={showAllAdminUsers} setShow={setShowAllAdminUsers} />
                    </div>
                    <div className="p-2 m-2">
                        <LeftTable title="USERS" show={showAllUsers} setShow={setShowAllUsers}/>
                    </div>
                </div>
                

                
            {/* </div> */}


        </>

    )
}

export default Dashboard