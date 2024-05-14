import BlogBody from "../components/BlogBody";
import BlogFooter from "../components/BlogFooter";
import BlogsHead from "../components/BlogsHead";

const Blog = () => {
  return (
    <div className="container mx-auto p-20 pt-28">
      <BlogsHead></BlogsHead>
      <BlogBody></BlogBody>
      <BlogFooter></BlogFooter>
    </div>
  );
};

export default Blog;
