import { notify } from "../../utils/helper";
import {
  cartFailure,
  cartPending,
  cartSuccess,
  clearCart,
} from "../reducers/CartSlice";

// store product in cart
export const storeProductInCart =
  (cartProducts, product) => async (dispatch) => {
    dispatch(cartPending());
    try {
      const carts = new Array(...cartProducts);
      carts.push(product);
      // set cart to local storage
      localStorage.setItem("carts", JSON.stringify(carts));
      dispatch(cartSuccess(carts));
      notify("Product Added to Cart", "success");
    } catch (error) {
      dispatch(cartFailure(error.message));
    }
  };


  export const clearCartsAction = () => async (dispatch) => {
    dispatch(cartPending());
    try {
      dispatch(clearCart());
      notify('Cart Cleared', 'success');
    } catch (error) {
      dispatch(cartFailure(error.message));
    }
  };
  

  export const removeSpecificCartFromCartAction =
    (cartProducts, cart) => async (dispatch) => {
      try {
        dispatch(cartPending());
        const carts = new Array(...cartProducts);
        const updatedCarts = carts.filter((item) => item._id !== cart._id);
        dispatch(cartSuccess(updatedCarts));
        notify('Product removed from cart', 'warning');
      } catch (error) {
        dispatch(cartFailure(error.message));
        notify('Something went wrong', 'error');
      }
    };
  

//   export const storShippingInfoAction = (shippingInfo) => async (dispatch) => {
//     try {
//       dispatch(shippingSuccess(shippingInfo));
//     } catch (error) {
//       notify('Something went wrong', 'error');
//     }
//   };
  
//   export const storeExtraInfoAction = (extraInfo) => async (dispatch) => {
//     try {
//       dispatch(extraInfoSUccess(extraInfo));
//     } catch (error) {
//       notify('Something went wrong', 'error');
//     }
//   };
  
//   export const cartProductDetailsAction = (cartDetails) => async (dispatch) => {
//     try {
//       dispatch(cartProductDetails(cartDetails));
//     } catch (error) {
//       notify('Something went wrong', 'error');
//     }
//   };