import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    
    useEffect(()=> {
        const fetchUsers = async() => {
            setLoading(true)
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const result = await response.json();
                setData(result)
                setLoading(false)
            } catch(err) {
                setError(err.message)
            }
        }
        fetchUsers();
    },[])
    if(loading) {
        return <p>Loading...</p>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
    <>
        <h1>User List</h1>
        {data.map((user)=> { //if we use {} then we have to return
            return <p key={user.id}>{user.name}</p>
        })}
        {data.map((user) => ( // here return does not require
            <p key={user.id}>{user.name}</p>
        ))}
    </>
  )
}

export default FetchData