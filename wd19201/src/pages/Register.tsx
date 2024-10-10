import { useForm, SubmitHandler } from "react-hook-form"; //làm việc vs form
import axios from "axios"; //call API
import { useNavigate } from "react-router-dom"; //điều hướng ng dùng

//khai báo type input cho form đăng ký
type RegisterInput = {
    name: string,
    email: string,
    password: string,
}

function Register() {
    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<RegisterInput>();
    const navigate = useNavigate(); //điều hướng người dùng
    
    const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
        try { 
            await axios.post("http://localhost:3000/signup", data);
            navigate("/login");
        } catch (error) {
            
        }
    }

    return (
        <div className="container">
            <h1 className="text-center">Đăng ký</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="name"
                        { ...register("name", {
                            required: "Name is required"
                        })}
                    />
                    { errors?.name && (
                        <p className="text-danger">{ errors?.name?.message }</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        id="email"
                        { ...register("email", {
                            required: "Email is required"
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
                <button type="submit" className="btn btn-success mt-2">Đăng ký</button>
            </form>
        </div>
    )
}

export default Register