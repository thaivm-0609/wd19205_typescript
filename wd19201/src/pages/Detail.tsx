import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import axios from "axios";

function Detail () {
    const { id } = useParams(); //lấy id bản ghi thông qua url
    const [product, setProduct] = useState<Product | undefined>();
    
    const getDetail = async(id: string) => {
        try {
            //B1: call api bằng axios
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            //B2: gán dữ liệu sv trả về vào biến product
            if (response.status == 200) { //nếu request được xử lý thành công
                setProduct(response.data); //gán response.data vào biến product
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { //nếu có id thì gọi hàm getDetail, ko thì dừng lại
        if (!id) return;
        getDetail(id);
    }, [id])

    return (
        <>
            <h1>Đây là trang chi tiết</h1>
            <p>Id: {product?.id}</p>
            <p>Name: {product?.name}</p>
            <p>Price: {product?.price}</p>
            <p>Brand: {product?.brand}</p>
            <p>Description: {product?.description}</p>
            <p>Image: <img src={product?.image} alt="image"></img></p>
        </>
    )
}

export default Detail;