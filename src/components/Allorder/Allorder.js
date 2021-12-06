import React from 'react';
import { useEffect, useState } from 'react';

const Allorder = () => {
    const [orders,setOrder] = useState([]);
    useEffect(()=>{
        fetch('https://secret-gorge-46028.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    const hangleDeleteUser = id =>{
        const proceed = window.confirm('Are You Delete it?');
        if(proceed){
            const url= `https://secret-gorge-46028.herokuapp.com/orders/${id}`;
            fetch(url,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remainingUser = orders.filter(order=> order._id !== id)
                    setOrder(remainingUser);
                }
            })
        }
    }
    
    return (
        <div className="order-form container">
            <h2>All Orders</h2>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Products Name</th>
                    <th scope="col">Addresh</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order=>
                    <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.ordername}</td>
                    <td>{order.address}</td>
                    <td></td>
                    <td onClick={()=>hangleDeleteUser(order._id)}>Delete</td>
                    </tr>)
                }
                </tbody>
                </table>
        </div>
    );
};

export default Allorder;