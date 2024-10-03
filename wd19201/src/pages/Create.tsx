import { useForm, SubmitHandler } from "react-hook-form"; //làm việc vs form
import axios from "axios"; //call API
import { ProductInput } from "../types/Product"; 
import { useNavigate } from "react-router-dom"; //điều hướng ng dùng

function Create() {
    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ProductInput>();
    const navigate = useNavigate(); //điều hướng người dùng
    
    const onSubmit: SubmitHandler<ProductInput> = async (data) => {
        try { 
            await axios.post("http://localhost:3000/products", data);
            navigate("/");
        } catch (error) {
            
        }
    }

    return (
        <div className="container">
            <h1 className="text-center">Trang thêm mới</h1>
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
                    <label htmlFor="" className="form-label">Price</label>
                    <input 
                        type="number"
                        className="form-control"
                        id="price"
                        { ...register("price", {
                            required: "Price is required"
                        })}
                    />
                    { errors?.price && (
                        <p className="text-danger">{ errors?.price?.message }</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Image</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="image"
                        { ...register("image", {
                            required: "Image is required"
                        })}
                    />
                    { errors?.image && (
                        <p className="text-danger">{ errors?.image?.message }</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Description</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="description"
                        { ...register("description", {
                            required: "Description is required"
                        })}
                    />
                    { errors?.description && (
                        <p className="text-danger">{ errors?.description?.message }</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Brand</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="brand"
                        { ...register("brand", {
                            required: "Brand is required"
                        })}
                    />
                    { errors?.description && (
                        <p className="text-danger">{ errors?.description?.message }</p>
                    )}
                </div>
                <button type="submit" className="btn btn-success mt-2">Thêm mới</button>
            </form>
        </div>
    )
}

export default Create