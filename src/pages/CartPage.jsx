// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
// } from "@chakra-ui/react";
// import React from "react";
// import carticon from "../assets/shopping-cart.png";
// import { CheckCircleIcon } from "@chakra-ui/icons";
// import img1 from "../assets/bed2.png";
// import { Link } from "react-router-dom";
// import cartWhite from "../assets/shopping-cart-white.png";
// // import { useDispatch, useSelector } from "react-redux";
// // import { decreaseQty, increaseQty } from "../redux/features/cartSlice";

// const CartPage = ({ isOpen, onClose }) => {
//   const item = [
//     {
//       img: img1,
//       name: "King Size Bedding Platform",
//       inches: "30 inches",
//       price: "NGN 500,000",
//     },
//     {
//       img: img1,
//       name: "King Size Bedding Platform",
//       inches: "30 inches",
//       price: "NGN 500,000",
//     },
//   ];
//   // const cart = useSelector((state) => state.cart.value);
//   // const dispatch = useDispatch();

//   // const increaseBtn = (item) => {
//   //   dispatch(increaseQty({ id: item.id }));
//   // };

//   // const decreaseBtn = (item) => {
//   //   dispatch(decreaseQty({ id: item.id }));
//   // };

//   return (
//     <div className="w-full flex items-center justify-center min-h-screen ">
//       <Modal isOpen={isOpen} onClose={onClose} size="md">
//         <ModalOverlay />
//         <ModalContent
//           w="100%" // Set the width to 100% of the screen
//           maxW="1000px" // Ensure the content doesn't exceed 1000px
//           margin="5rem auto" // Center the modal horizontally
//           padding="1rem 0" // Remove default padding
//           boxShadow="lg"
//           borderRadius="0"
//         >
//           <ModalHeader>
//             <div className="flex items-center justify-between pb-1 font-lato px-2">
//               <img src={carticon} alt="cart-icon" className="w-6 h-6" />
//               <h2 className="font-bold">REVIEW YOUR CART</h2>
//               <button
//                 onClick={onClose}
//                 className="w-5 h-5 border border-black rounded-full flex items-center justify-center text-sm font-bold"
//               >
//                 x
//               </button>
//             </div>
//             <div className="h-px bg-lineClr"></div>
//             <p className="text-center text-green-600 text-[0.6rem] pt-4 flex items-center gap-1 justify-center mt-6">
//               <CheckCircleIcon />
//               WORLDWIDE SHIPMENT + EASY RETURN
//             </p>
//             <div className="h-px w-[20%] bg-lineClr mt-2 mx-auto"></div>
//           </ModalHeader>
//           <ModalBody className="px-6">
//             <div className="mt-4">
//               {item.map((items, index) => (
//                 <div key={index} className="mb-6">
//                   <div className="flex items-start justify-between gap-10 font-lato">
//                     <img
//                       src={items.img}
//                       alt={items.name}
//                       className="w-[30%] object-cover"
//                     />
//                     <div className="flex flex-col">
//                       <p className="font-bold">{items.name}</p>
//                       <p className="font-medium">{items.inches}</p>
//                       <p className="font-medium">{items.price}</p>
//                       <p className="font-medium">Warranty years: 1 year</p>
//                       <p className="text-red-600 text-sm font-medium cursor-pointer hover:underline mt-2">
//                         REMOVE
//                       </p>
//                     </div>
//                     <div className="flex items-center justify-center gap-2 mt-2 border border-black rounded-md h-[30px] w-[10%]">
//                       <button className="border border-black rounded-full w-5 h-5 flex items-center justify-center">
//                         -
//                       </button>
//                       <p>2</p>
//                       <button className="border border-black rounded-full w-5 h-5 flex items-center justify-center">
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="h-px bg-lineClr my-10"></div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex items-center justify-between font-normal font-lato">
//               <p>SUBTOTAL:</p>
//               <p>NGN 1,000,000</p>
//             </div>
//             <Link
//               to={"/checkout"}
//               className="bg-sageGreen md:w-[20%] mx-auto h-[48px] text-white font-lato rounded-md flex items-center justify-center my-16"
//             >
//               <img src={cartWhite} alt="cart icon" className="mr-2" />
//               <span>Checkout</span>
//             </Link>
//             <p className="font-medium font-lato">
//               By clicking on “CHECKOUT”, you will be directed to the checkout
//               page where payment will be taken and your order fulfilled using
//               your payment card. Note that we “ONLY” accept valid payment cards
//               (MasterCard, Verve Card, and Visa).
//             </p>
//             {/* {cart.cartItems.length === 0 ? (
//               <p className="text-center font-medium">Cart is empty!</p>
//             ) : (
//               cart.cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between mb-4"
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-[30%] object-cover"
//                   />
//                   <div className="flex flex-col ml-4">
//                     <p className="font-bold">{item.name}</p>
//                     <p>{item.price}</p>
//                     <p className="text-sm">Quantity: {item.quantity}</p>
//                   </div>
//                   <div className="flex items-center gap-2 mt-2">
//                     <button
//                       className="border border-black rounded-full w-5 h-5 flex items-center justify-center"
//                       onClick={() => decreaseBtn(item)}
//                     >
//                       -
//                     </button>
//                     <p>{item.quantity}</p>
//                     <button
//                       className="border border-black rounded-full w-5 h-5 flex items-center justify-center"
//                       onClick={() => increaseBtn(item)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )} */}
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };

// export default CartPage;
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import carticon from "../assets/shopping-cart.png";
import { CheckCircleIcon } from "@chakra-ui/icons";
import img1 from "../assets/bed13.png";
import { Link } from "react-router-dom";
import cartWhite from "../assets/shopping-cart-white.png";
import CartProduct from "../components/CartProduct";
// import { useDispatch, useSelector } from "react-redux";
// import { decreaseQty, increaseQty } from "../redux/features/cartSlice";

const CartPage = ({ isOpen, onClose }) => {
  const item = [
    {
      img: img1,
      name: "King Size Bedding Platform",
      inches: "30 inches",
      price: "NGN 500,000",
    },
    {
      img: img1,
      name: "King Size Bedding Platform",
      inches: "30 inches",
      price: "NGN 500,000",
    },
  ];
  // const cart = useSelector((state) => state.cart.value);
  // const dispatch = useDispatch();

  // const increaseBtn = (item) => {
  //   dispatch(increaseQty({ id: item.id }));
  // };

  // const decreaseBtn = (item) => {
  //   dispatch(decreaseQty({ id: item.id }));
  // };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent
        w="95%" // Set the width to 100% of the screen
        maxW="1000px" // Ensure the content doesn't exceed 1000px
        margin="1rem auto" // Center the modal horizontally with responsive margin
        // padding="1rem" // Remove default padding for smaller screens
        boxShadow="lg"
        borderRadius="0"
      >
        <ModalHeader>
          <div className="flex items-center justify-between pb-1 font-lato px-2">
            <img src={carticon} alt="cart-icon" className="w-6 h-6" />
            <h2 className="font-bold">REVIEW YOUR CART</h2>
            <button
              onClick={onClose}
              className="w-5 h-5 border border-black rounded-full flex items-center justify-center text-sm font-bold"
            >
              x
            </button>
          </div>
          <div className="h-px bg-lineClr"></div>
          <p className="text-center text-green-600 text-[0.6rem] pt-4 flex items-center gap-1 justify-center mt-6">
            <CheckCircleIcon />
            WORLDWIDE SHIPMENT + EASY RETURN
          </p>
          <div className="h-px w-[20%] bg-lineClr mt-2 mx-auto"></div>
        </ModalHeader>
        <ModalBody className="px-4 sm:px-6">
          <div className="mt-4">
            {item.map((items, index) => (
              <div key={index} className="mb-6">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 font-lato">
                  <img
                    src={items.img}
                    alt={items.name}
                    className="w-full sm:w-[30%] object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">{items.name}</p>
                    <p className="font-medium">{items.inches}</p>
                    <p className="font-medium">{items.price}</p>
                    <p className="font-medium">Warranty years: 1 year</p>
                    <p className="text-red-600 text-sm font-medium cursor-pointer hover:underline mt-2">
                      REMOVE
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2 border border-black rounded-md h-[30px] w-[30%]  sm:w-[12%] px-2">
                    <button className="border border-black rounded-full w-5 h-5 flex items-center justify-center">
                      -
                    </button>
                    <p>2</p>
                    <button className="border border-black rounded-full w-5 h-5 flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
                <div className="h-px bg-lineClr my-10"></div>
              </div>
            ))}
          </div>

          <CartProduct />
          <div className="flex items-center justify-between font-normal font-lato">
            <p>SUBTOTAL:</p>
            <p>NGN 1,000,000</p>
          </div>
          <Link
            to={"/checkout"}
            className="bg-sageGreen md:w-[30%] mx-auto h-[48px] text-white font-lato rounded-md flex items-center justify-center my-16"
          >
            <img src={cartWhite} alt="cart icon" className="mr-2" />
            <span>Checkout</span>
          </Link>
          <p className="font-medium font-lato">
            By clicking on “CHECKOUT”, you will be directed to the checkout page
            where payment will be taken and your order fulfilled using your
            payment card. Note that we “ONLY” accept valid payment cards
            (MasterCard, Verve Card, and Visa).
          </p>
          {/* {cart.cartItems.length === 0 ? (
              <p className="text-center font-medium">Cart is empty!</p>
            ) : (
              cart.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[30%] object-cover"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="font-bold">{item.name}</p>
                    <p>{item.price}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="border border-black rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={() => decreaseBtn(item)}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="border border-black rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={() => increaseBtn(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )} */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CartPage;