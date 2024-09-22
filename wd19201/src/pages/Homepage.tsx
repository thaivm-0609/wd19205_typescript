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
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <h1>Đây là trang chủ</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Brand</th>
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
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
        
    );
}

export default Homepage