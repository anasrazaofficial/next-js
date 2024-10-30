import React from 'react'

const Users = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 10 } });
    const users = await res.json();

    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul className="list-disc list-inside">
                {users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default Users;