import LeftTable from "./LeftTable.jsx"
import DataTable from "./DataTable.jsx"

function Dashboard() {
    return (
        <>
            <div className="px-10 py-5 w-full text-5xl bg-blue-500 text-black text-center">ADMIN DASHBOARD</div>
            <div className="flex w-full flex-row">
                <div className="flex flex-col w-[20%] h-full">
                    <div className="p-2 m-2">
                        <LeftTable title="Admin" rows={["Users"]} />
                    </div>
                    <div className="p-2 m-2">
                        <LeftTable title="Models" rows={['C','D']}/>
                    </div>
                </div>

                <div className="flex flex-col w-[60%] gap-5">
                    <h1 className="p-2 m-2 text-4xl font-light mt-5">Select User to Change</h1>
                    {/* <div className="bg-green-500 border-5 border-amber-400 p-2 m-2">
                        <Table />
                    </div> */}
                    <div className="p-2 m-2">
                        <DataTable />
                    </div>
                    {/* <div className="flex flex-row m-2 p-2 justify-around"> */}
                        {/* <button className="btn btn-neutral">Add</button> */}
{/* <button className="btn btn-primary text-2xl font-light px-10">Add</button> */}
{/* <button className="btn btn-secondary">Secondary</button> */}
                    {/* </div> */}
                    
                </div>

                <div className="flex flex-col w-[20%]">
                    <div className="bg-green-500 border-5 border-amber-400 p-2 m-2">
                        {/* <Table /> */}
                    </div>
                </div>
            </div>


        </>

    )
}

export default Dashboard