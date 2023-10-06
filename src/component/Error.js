import { useRouteError } from "react-router-dom"
const Error=()=>{
    const error=useRouteError();
    console.log("error is: ",error)
    return (
        <div>
            <h1>The error is: {error.data} and error code is: {error.status}</h1>
        </div>
    )
}
export default Error;