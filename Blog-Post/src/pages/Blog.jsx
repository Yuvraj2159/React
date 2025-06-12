import { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace this with your real API endpoint
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=1")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="mb-6 border-b pb-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
