import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "../types/Product";

function Homepage() {
    const [products, setProducts ] = useState<Product[]>([]);
    const getProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/products");
            setProducts(data);
        } catch (error) {

        }
    }
    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete("http://localhost:3000/products/"+id);
                alert('Delete success!');
                getProducts();
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className="container">
            <h1>Đây là trang chủ</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <img src={product.image} alt="" />
                            </td>
                            <td>{product.brand}</td>
                            <td><a className="btn btn-info" href={'/products/'+product.id}>Chi tiết</a></td>
                            <td><a className="btn btn-warning" href={'/products/edit/'+product.id}>Sửa</a></td>
                            <td><a className="btn btn-danger" onClick={() => handleDelete(product.id)}>Xóa</a></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
        
    );
}

export default Homepage