import { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContextProvider.jsx";
import useFetchAllUsers from "../../hooks/useFetchAllUsers.js";
import DataTable from "./DataTable.jsx";

function UserList() {
    const { showAllUsers, showAllAdminUsers } = useUser();
    const [filterBy, setFilterBy] = useState("");
    const [sortInAscending, setSortInAscending] = useState(true);
    const [sortBy, setSortBy] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(10);
    const [pageData, setPageData] = useState([]);
    const [numPages, setNumPages] = useState(1);

    const allUsersData = useFetchAllUsers();

    useEffect(() => {
        if (allUsersData && allUsersData.length !== 0) {
            if (sortInAscending !== null) {
                if (sortInAscending && (sortBy === "name")) {
                    console.log("ascending and name", sortInAscending, sortBy, sortInAscending && (sortBy === "name"));
                    allUsersData.sort((a, b) => a.name > b.name ? 1 : -1);
                } else if ((!sortInAscending) && (sortBy === "name")) {
                    
                    allUsersData.sort((a, b) => a.name < b.name ? 1 : -1);
                } else if (sortInAscending && sortBy === "age") {
                    console.log("ascending and age");
                    allUsersData.sort((a, b) => a.age > b.age ? 1 : -1);
                } else if (!sortInAscending && sortBy === "age") {
                    allUsersData.sort((a, b) => a.age < b.age ? 1 : -1);
                }
            }


            if (filterBy === "active") {
                setFilteredData(allUsersData.filter((user) => user.isActive === true));
            } else if (filterBy === "inactive") {
                setFilteredData(allUsersData.filter((user) => user.isActive === false));
            } else {
                setFilteredData([]);
            }
            
            if(filteredData.length === 0){
                setNumPages(Math.ceil(allUsersData.length / usersPerPage));
                setPageData(allUsersData.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage));
            } else {
                setNumPages(Math.ceil(filteredData.length / usersPerPage));
                setPageData(filteredData.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage));
            }
            // setPageData(() => {
            //     if(filteredData.length === 0){
            //         return allUsersData.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);
            //     } else {
            //         return filteredData.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);
            //     }
            // })
        }
    }, [allUsersData, sortInAscending, filterBy, sortBy, currentPage, usersPerPage]);


    console.log("filteredData : ", filteredData);
    console.log("sortBy : ", sortBy);
    console.log("sortInAscending : ", sortInAscending);
    console.log("filterBy : ", filterBy);
    console.log("allUsersData : ", allUsersData.length !== 0 ? allUsersData[0].createdAt.split("T")[0]: "");
    console.log(pageData);
    console.log("currentPage : ", currentPage === 1);


    return (
        <>
            {showAllUsers && (
                <div className="flex flex-col w-[70%] gap-5">
                    <h1 className="p-2 m-2 text-4xl font-light mt-5">Select User to Change</h1>
                    <div className="p-2 m-2">
                        {filteredData && filteredData.length !== 0 ? (
                            pageData && pageData.length !== 0 && <DataTable data={pageData} />
                            // <DataTable data={filteredData} />
                        ) : (
                            allUsersData && allUsersData.length !== 0 && (
                            pageData && pageData.length !== 0 &&
                                <DataTable data={pageData} />
                            )
                        )

                        }
                        {/* <DataTable data={allUsersData} /> */}
                    </div>
                    <div className="join">
            <button className="join-item btn" onClick={() => setCurrentPage(1)}>First Page</button>
            <button className="join-item btn" onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>Previous Page</button>
            <button className="join-item btn" onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === numPages}>Next Page</button>
            <button className="join-item btn" onClick={() => setCurrentPage(numPages)}>Last Page</button>
            <button className="join-item btn">Showing Page {currentPage} of {numPages}</button>

            <div>Users Per Page :
                
            <select value={usersPerPage} onChange={(e) => setUsersPerPage(e.target.value)}>
                <option value={10} className="text-black">10</option>
                <option value={25} className="text-black">25</option>
                <option value={50} className="text-black">50</option>
                <option value={100} className="text-black">100</option>
            </select>
            </div>


        </div>
                </div>
                
            )}


            <div className="flex flex-col w-[20%]">
                <div className="border-5 border-amber-400 p-2 m-2">
                    <h1>Sort In:</h1>

                    <select
                        value={sortInAscending}
                        onChange={(e) => setSortInAscending(e.target.value === "true" ? true : false)}
                    >
                        {/* <option value="">""</option> */}
                        {/* <option value={null}>-----</option> */}
                        <option value={true}>Ascending</option>
                        <option value={false}>Descending</option>
                    </select>
                    {/* <input
                        type="checkbox"
                        className="checkbox"
                        checked={sortInAscending}
                        // value={sortInAscending}
                        onChange={() => setSortInAscending((prev) => !prev)}
                    />
                    <label htmlFor="checkbox">Ascending</label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={!sortInAscending}
                        // value={sortInAscending}
                        onChange={() => setSortInAscending((prev) => !prev)}
                    />
                    <label htmlFor="checkbox">Descending</label> */}
                    <h1>Sort By:</h1>
                    <select
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option value="">-----</option>
                        <option value="name">Name</option>
                        <option value="age">Age</option>
                    </select>

                    <h1>Filter By:</h1>
                    <select
                        value={filterBy}
                        onChange={(e) => {
                            setFilterBy(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option value="">-----</option>
                        <option value="active">Active</option>
                        <option value="inactive">Not Active</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default UserList
