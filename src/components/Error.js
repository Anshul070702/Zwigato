import { useRouteError } from "react-router-dom";//helps us to show specific details of error.
const Error = () => {
    const err=useRouteError();
  return (
    <div>
      <h1>OOPS....</h1>
      <h2>Something Went Wrong!</h2>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  );
};
export default Error;
