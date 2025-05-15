import { Pencil, Plus } from './Icons.jsx'

function LeftTable({ title, rows }) {
    return (
        <div className="h-fit">
            <table className="table bg-base-200 rounded-md">
                <thead>
                    <tr>
                        <th className="text-2xl bg-gray-800 rounded-t-md">{title}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr className="flex flex-row items-center justify-between">
                            <td className="text-xl">{row}</td>
                            <div className="mr-2">
                                <button className="btn btn-square bg-gray-600"><Plus /></button>
                                {/* <button className="btn btn-square bg-blue-400"><Pencil /></button> */}
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LeftTable
