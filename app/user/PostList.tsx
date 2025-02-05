
interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  const PostList = ({ posts }: { posts: Post[] }) => {
    return (
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default PostList;