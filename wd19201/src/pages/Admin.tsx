import { Navigate } from "react-router-dom";

function Admin() {
    const token = localStorage.getItem('token'); 
    //lấy token từ localStorage, nếu có thì cho truy cập, không thì đẩy về trang login

    return (
        <>
        { token ? (
            <div> 
                <h1>Đây là trang admin</h1>
            </div>
        ) : (
            <Navigate to={'/login'}></Navigate>
        )}
        </> 
    )
}

export default Admin