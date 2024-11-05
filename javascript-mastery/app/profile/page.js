"use client"

import { useEffect, useState } from "react";
import Profile from "@components/Profile"
import { useSession } from "next-auth/react";

const MyProfile = () => {
    const [posts, setPosts] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await res.json();
            setPosts(data);
        }

        if (session?.user.id) fetchPosts();
    }, []);

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }


    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile