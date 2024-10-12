import { useForm, SubmitHandler } from "react-hook-form"; //làm việc vs form
import axios from "axios"; //call API
import { Product, ProductInput } from "../types/Product"; 
import { useNavigate, useParams } from "react-router-dom"; //điều hướng ng dùng
import { useEffect, useState } from "react";

function Edit() {
    //lấy thông tin cũ hiển thị ra form
    const { id } = useParams();
    
    const getDetail = async(id: string) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            reset({
                name: data.name,
                price: data.price,
                image: data.image,
                description: data.description,
                brand: data.brand
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        if (!id) return;
        getDetail(id);
    }, [id])

    //form edit
    const { 
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ProductInput>();
    const navigate = useNavigate(); //điều hướng người dùng
    
    const onSubmit: SubmitHandler<ProductInput> = async (data) => {
        try { 
            await axios.put("http://localhost:3000/products/"+id, data);
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
                <button type="submit" className="btn btn-success mt-2">Sửa</button>
            </form>
        </div>
    )
}

export default Edit