import React, { useState } from 'react';

const Makeadmin = () => {
    const [email,setEmail] = useState();
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdmin = e =>{
        const user ={email};
        fetch('https://secret-gorge-46028.herokuapp.com/users/admin',{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            e.target.reset();
        })
        
        e.preventDefault();
    }
    return (
        <div class="admin-form-area">
            <h2>Make a New Admin</h2>
            <form onSubmit={handleAdmin}>
                <input onBlur={handleOnBlur} type="email" placeholder="Email" />
                <input type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default Makeadmin;