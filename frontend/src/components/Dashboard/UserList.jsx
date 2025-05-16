import { useUser } from "../../contexts/UserContextProvider.jsx";
import useFetchAllUsers from "../../hooks/useFetchAllUsers.js";
import DataTable from "./DataTable.jsx";

function UserList() {
    const { showAllUsers, showAllAdminUsers } = useUser();

    const allUsersData = useFetchAllUsers();



    return (
        <>
            {showAllUsers && (
                <div className="flex flex-col w-[70%] gap-5">
                    <h1 className="p-2 m-2 text-4xl font-light mt-5">Select User to Change</h1>
                    {/* <div className="bg-green-500 border-5 border-amber-400 p-2 m-2">
                        <Table />
                    </div> */}
                    <div className="p-2 m-2">
                        <DataTable data={allUsersData} />
                    </div>
                    {/* <div className="flex flex-row m-2 p-2 justify-around"> */}
                    {/* <button className="btn btn-neutral">Add</button> */}
                    {/* <button className="btn btn-primary text-2xl font-light px-10">Add</button> */}
                    {/* <button className="btn btn-secondary">Secondary</button> */}
                    {/* </div> */}

                </div>
            )}


            <div className="flex flex-col w-[20%]">
                <div className="bg-green-500 border-5 border-amber-400 p-2 m-2">
                    {/* <Table /> */}
                </div>
            </div>
        </>
    )
}

export default UserList
