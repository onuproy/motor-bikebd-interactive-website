import React from 'react';
import { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://secret-gorge-46028.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const hangleDeleteUser = id =>{
        const proceed = window.confirm('Are You Delete it?');
        if(proceed){
            const url= `https://secret-gorge-46028.herokuapp.com/services/${id}`;
            fetch(url,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remainingUser = products.filter(product=> product._id !== id)
                    setProducts(remainingUser);
                }
            })
        }
    }
    
    return (
        <div className="order-form container">
            <h2>All Products</h2>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Short Description</th>
                    <th scope="col">Delete Product</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(product=>
                    <tr key={product._id}>
                    <td><img src={product.img} alt="" /></td>
                    <td>{product.serviceName}</td>
                    <td>{product.price}</td>
                    <td>{product.shortdescription}</td>
                    <td onClick={()=>hangleDeleteUser(product._id)}>Delete</td>
                    </tr>)
                }
                </tbody>
                </table>
        </div>
    );
};

export default AllProducts;