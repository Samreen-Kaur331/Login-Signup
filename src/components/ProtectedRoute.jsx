// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivatedRoute = () => {
//      const token=localStorage.getItem("token");
//   return (
//    token ? <Outlet/>:<Navigate to="/login"/>
//   )
// }

// export default PrivatedRoute

 //using children also 
 import React from 'react'
 
    import { Navigate } from 'react-router-dom';
 const PrivatedRoute = ({children}) => {
    const token=localStorage.getItem("token");
   return (
      token ? children : <Navigate to="/login" />
   )
 }
 
 export default PrivatedRoute
 