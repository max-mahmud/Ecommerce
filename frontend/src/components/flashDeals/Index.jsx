// import FlashCard from "./FlashCard"
// // import Data from '../../constants/Data'
// import { useDispatch, useSelector } from "react-redux"
// import { useEffect } from "react"
// import { getAllProducts } from "../../redux/actions/ProductAction"

// export default function Index() {
//   const {productsInfo} = useSelector((state)=> state.products)
//   const dispatch =useDispatch()

//   useEffect(()=>{
//     if(productsInfo.length === 0) {
//       dispatch(getAllProducts())
//     }
//   }, [dispatch])
//   return (
//     <>
//       <section className="flash">
//         <div className="container">
//             <div className="heading f-flex">
//                 <i className="fas fa-bolt" />
//                 <h2>Flash Deals</h2>
//             </div>
//             <div className="d_flex">
//                 {
//                   productsInfo && productsInfo.map((product)=>{
//                     return <FlashCard key={product.id} product={product} />
//                   })
//                 }
//             </div>
//         </div>
//       </section>
//     </>
//   )
// }

import { CircularProgress, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeProductInCart } from "../../redux/actions/CartAction";
import { getAllProducts } from "../../redux/actions/ProductAction";
import FlashCard from "./FlashCard";

const FlashDeals = () => {
  const dispatch = useDispatch();
  const { productsInfo, isLoading } = useSelector((state) => state.products);
  const { cartProducts } = useSelector((state) => state.carts);

  const addToCart = (product) => {
    dispatch(storeProductInCart(cartProducts, product));
  };

  useEffect(()=>{
    if(productsInfo.length === 0) {
      dispatch(getAllProducts())
    }
  }, [dispatch])

  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1> Best Deals</h1>
        </div>
        <div className="d_flex">
          {isLoading && (
            <Stack
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Stack>
          )}
          {productsInfo.length > 0 &&
            productsInfo.map((product) => (
              <FlashCard
                product={product}
                key={product._id}
                addToCart={addToCart}
              />
            ))}
          {!isLoading && productsInfo.length === 0 && (
            <Stack
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>No Products Found</h1>
            </Stack>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
