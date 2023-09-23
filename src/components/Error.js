import { useRouteError } from "react-router-dom";

const Error = () => {
    const err= useRouteError();
    //console.log(err);
    return(
        <div>
            <h1>OOPS an Error occured!</h1>
            <h2>status {err.status}  {err.statusText} ,  please enter correct URL....</h2>
        </div>

    )
}

export default Error;