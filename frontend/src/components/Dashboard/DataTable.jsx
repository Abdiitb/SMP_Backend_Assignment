import { DeleteIcon } from "./Icons.jsx"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import useDeleteUser from '../../hooks/useDeleteUser.js';
 
function DataTable({ data }) {
    console.log(data)
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
            <table className="table">

                <thead>
                    <tr className="text-xl bg-gray-800">
                        <th>id</th>
                        <th>Name</th>
                        <th>isActive</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-lg text-white">

                    {data && data.length !== 0 && data.map((row) => (
                        
                                <tr key={row._id} className="hover:bg-gray-900">
                                <th>{row._id}</th>
                                <td>{row.name}</td>
                                <td>{row.isActive ? <DoneIcon fontSize='large' color="success" /> : <CloseIcon fontSize='large' color="secondary" />}</td>
                                <td className="flex justify-end gap-2">
                                    <button className="btn bg-red-500" onClick={() => useDeleteUser(row._id)}><DeleteIcon />DELETE</button>
                                    <Link to={'/users/' + row._id}><button className="btn bg-blue-500"><EditIcon />EDIT</button></Link>
                                </td>
                            </tr>
                            
                            
                        // </Link>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default DataTable
