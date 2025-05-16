// import { use, useState } from 'react'
// import { Plus } from './Icons.jsx'
// import { useUser } from '../../contexts/UserContextProvider.jsx';
// import { useFetchAllUsers } from '../../hooks/useFetchAllUsers.js';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router';


function LeftTable({ title, show, setShow }) {
    // const { showAllUsers, setShowAllUsers } = useUser();
    // const [showUsers, setShowUsers] = useState(showAllUsers);

    // const handleClick = () => {
    //     const allUserData = useFetchAllUsers();



    // }

    return (
        <div className="h-fit">
            <table className="table bg-base-200 rounded-md">
                <thead>
                    <tr>
                        <th className="text-2xl bg-gray-800 rounded-t-md">{title}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="flex flex-row items-center justify-between">
                        <td
                            className="text-xl cursor-pointer"
                            onClick={() => {
                                if (!show) setShow(true)
                            }}
                        >
                            <Link to={'/' + title.toLowerCase()}>
                                {title.toLowerCase()}
                            </Link>
                        </td>

                        <td>
                            {/* <div className=""> */}
                            <Link to='/users/add-user'>
                            <button className="btn bg-green-600">
                                <AddIcon fontSize='small' />
                                <span className='text-lg'>Add</span>
                            </button>
                            </Link>
                            {/* </div> */}
                        </td>

                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default LeftTable
