import { useForm, SubmitHandler } from "react-hook-form"; //làm việc vs form
import axios from "axios"; //call API
import { useNavigate } from "react-router-dom"; //điều hướng ng dùng

//khai báo type input cho form đăng ký
type LoginInput = {
    email: string,
    password: string,
}

function Login() {
    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginInput>();
    const navigate = useNavigate(); //điều hướng người dùng
    
    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        try { 
            const response = await axios.post("http://localhost:3000/signin", data); //call api đăng nhập
            localStorage.setItem('token', response.data.accessToken); //lưu token vào trong localStorage
            navigate('/admin');
        } catch (error) {
            
        }
    }

    return (
        <div className="container">
            <h1 className="text-center">Đăng nhập</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        id="email"
                        { ...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Email không đúng định dạng'
                            }
                        })}
                    />
                    { errors?.email && (
                        <p className="text-danger">{ errors?.email?.message }</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        id="password"
                        { ...register("password", {
                            required: "Password is required"
                        })}
                    />
                    { errors?.password && (
                        <p className="text-danger">{ errors?.password?.message }</p>
                    )}
                </div>
                <button type="submit" className="btn btn-success mt-2">Đăng nhập</button>
            </form>
        </div>
    )
}

export default Login