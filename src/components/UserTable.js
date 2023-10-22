import React, { useState, useEffect } from "react";

function UserTable() {
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            const sortedData=data.sort((a,b)=>a.id-b.id);
            setUsers(sortedData);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("error in api",error);
            setLoading(false);
        });
    },[]);

    if(loading){
        return <p>Loading....</p>
    }
    return (
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
             {users.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>
             ))}
        </tbody>
      </table>
    )
}

export default UserTable;
