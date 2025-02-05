
"use client";  

import { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../PostList";

const UserPosts = ({ params }: { params: { id: string } }) => {
  const [userId, setUserId] = useState<string | null>(null); 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const unwrappedParams = await params;  // Await params to unwrap the Promise
      setUserId(unwrappedParams.id); // Set the unwrapped id into state
    };

    fetchUserId(); 
  }, [params]); 
  useEffect(() => {
    if (!userId) return; 

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]); 

  if (loading) return <p className="text-center text-xl">Loading posts...</p>;
  if (error) return <p className="text-center text-xl text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default UserPosts;







