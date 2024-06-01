

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // const user = useSelector((state)=> state.login.user)
  const { user } = useSelector((state) => state.login);

  return user.mail && user.password ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRouter