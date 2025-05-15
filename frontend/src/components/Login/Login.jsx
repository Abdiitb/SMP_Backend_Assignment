import Password from "./Password.jsx"
import Username from "./Username.jsx"


function Login() {
    return (
        <>
            <div className="flex w-full h-full justify-center items-center">
                <div className="shadow-2xl flex flex-col w-[25%] rounded-md gap-10 items-center justify-center bg-black">
                    <h1 className="bg-blue-500 px-10 py-5 w-full text-5xl rounded-md font-light">ADMIN LOGIN</h1>
                    <Username />
                    <Password />
                    <button className="btn btn-success mb-4 text-xl">Login</button>
                </div>
            </div>
        </>
    )
}

export default Login
