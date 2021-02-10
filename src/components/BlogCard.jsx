import "./css/BlogCard.css";
import { NavLink } from "react-router-dom";
const BlogCard = (props) => {
  return (
    <div className='card-deck blogCard mx-auto my-4'>
      <NavLink className='link' to={`/blog/${props.id}`}>
        <div key={props.id} className='card mx-2'>
          <img src={props.img} alt='' />
          <div className='card-body'>
            <h5 className='card-title text-left'>{props.title}</h5>
            <p className='card-text text-left text-success product__price'>
              {props.desc}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default BlogCard;
