import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function Demo() {
    const [posts, setPosts] = useState([]);
    const[loading,setLoading]=useState(false);
    const[page,setPage]=useState(0);
    const abortControllerRef=useRef<AbortControllernull>(null);
    useEffect(() => {
        const fetchPosts = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current=new AbortController();
            try {
                setLoading(true);
                const response = await fetch(`${BASE_URL}/posts?page=${page}`,{
                    signal:abortControllerRef.current?.signal,
                }); // Fix: Use backticks (`) here
               // console.log(response);
                const posts = await response.json();
              //  console.log(posts);
                setPosts(posts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="tutorial">
            <h1 className='mb-4 text-2xl'> Data Fetching in React </h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>;
                })}
            </ul>
        </div>
    );
}

export default Demo;
const initial=ReactDOM.createRoot(document.getElementById("root"));
initial.render(<Demo/>);