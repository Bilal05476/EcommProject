export const initialState = {
  basket: [],
  wishlist: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };

    case "EMPTY_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };

    case "REMOVE_FROM_WISHLIST":
      const wishIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.id
      );
      let newWishlist = [...state.wishlist];

      if (wishIndex >= 0) {
        newWishlist.splice(wishIndex, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in wishlist!`
        );
      }

      return {
        ...state,
        wishlist: newWishlist,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
