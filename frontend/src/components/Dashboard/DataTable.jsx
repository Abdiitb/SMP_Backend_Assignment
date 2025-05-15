import { DeleteIcon } from "./Icons.jsx"


function DataTable({rows}) {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-2xl bg-gray-800">
                        <th>id</th>
                        <th>Name</th>
                        <th>isActive</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-xl">
                    {/* row 1 */}
                    {rows && rows.length !== 0 && rows.map((row) => (
                        <tr>
                            <th>{row.id}</th>
                            <td>{row.name}</td>
                            <td>{row.isActive}</td>
                            <td className="flex justify-end"><button className="btn bg-red-500"><DeleteIcon />DELETE</button></td>
                        </tr>
                    ))}
                    
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td></td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        {/* <td>Red</td> */}
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default DataTable
