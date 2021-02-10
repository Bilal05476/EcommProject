import { NavLink } from "react-router-dom";
import "./css/Blog.css";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost.json";
import { useParams } from "react-router-dom";

const DetailBlog = () => {
  const { id } = useParams();
  const blog = BlogPost[id];

  const identity = blog.id;
  const name = blog.title;
  const img = blog.img;
  const desc = blog.desc;

  return (
    <div className='shop__div' data-aos='zoom-in'>
      <div className='product__details'>
        <h5 className='text-light text-center'>Blog Details</h5>
      </div>
      <div className='container'>
        <nav aria-label='breadcrumb' className='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='breadcrumb-item'>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Blog Detail
            </li>
          </ol>
        </nav>
      </div>
      <div className='container-fluid bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <BlogCard id={identity} img={img} title={name} desc={desc} />
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
export default DetailBlog;
