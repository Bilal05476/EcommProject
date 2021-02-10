import { useStateValue } from "../StateProvider";

const WishListProduct = ({ id, img, price, title }) => {
  const [{ wishlist }, dispatch] = useStateValue();
  console.log(`Wishlist ${wishlist}`);

  const removeFromWish = () => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id,
    });
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        img,
        price,
      },
    });
  };
  return (
    <div className='container card-deck mx-auto my-4'>
      <div key={id} className='card details__div'>
        <div className='row'>
          <div className='col-md-2' style={{ padding: 0 }}>
            <img style={{ width: 280, height: 200 }} src={img} alt='' />
          </div>
        </div>
        <div className='card-body detailsProduct'>
          <h5 className='card-title text-left'>{title}</h5>
          <p className='card-text text-left'>$ {price}</p>
          <button
            className='btn btn-danger text-light mx-2 my-2'
            onClick={removeFromWish}>
            REMOVE FROM WISHLIST
          </button>
          <button
            className='btn btn-success text-light mx-2 my-2'
            onClick={addToBasket}>
            ADD TO CART
          </button>
          <hr />
          <div className='nuturition'>
            <h5>Nuturitional Product</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              omnis assumenda maiores blanditiis ipsum optio inventore. Fugiat
              tenetur distinctio autem est tempore laudantium delectus aliquid
              impedit, aut numquam eum velit?
            </p>
            <h5>Review</h5>
            {["Thomas", "James", "Lara"].map((item, ind) => {
              return (
                <div key={ind}>
                  <strong className='text-success'>{item}</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi modi et aliquid ipsum nihil! Itaque sapiente dolore
                    magnam aut nisi?
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListProduct;
