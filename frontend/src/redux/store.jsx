import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "./reducers/ProductSlice";
import CartReducer from "./reducers/CartSlice";
import UserReducer from "./reducers/UserSlice";

export default configureStore({
    reducer: {
      products: ProductReducer,
      carts: CartReducer,
      users: UserReducer,
    },
  });
