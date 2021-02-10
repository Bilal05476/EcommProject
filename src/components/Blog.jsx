import { NavLink } from "react-router-dom";
import "./css/Blog.css";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost.json";

const Blog = () => {
  return (
    <div className='blog__div' data-aos='zoom-in'>
      <div className='product__details'>
        <h5 className='text-light text-center'>Our Blog</h5>
      </div>
      <div className='container'>
        <nav aria-label='breadcrumb' className='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Blog
            </li>
          </ol>
        </nav>
      </div>
      <div className='container-fluid bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              {Object.keys(BlogPost).map((item) => {
                const post = BlogPost[item];
                const para = post.desc.slice(0, 200);
                return (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    img={post.img}
                    title={post.title}
                    desc={para}
                  />
                );
              })}
            </div>
            <div className='col-md-2 py-5 search__tags'>
              <h4 className='bg-success px-3 py-2 text-light'>Search tags</h4>
              {[
                "blog",
                "food",
                "conscious",
                "healthy",
                "food",
                "natural",
                "organic",
                "lifestyle",
                "best organic food",
              ].map((item, ind) => {
                return (
                  <h6 key={ind} className='bg-light text-secondary'>
                    {item}
                  </h6>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
