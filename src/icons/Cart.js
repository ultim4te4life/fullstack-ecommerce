import * as React from "react";
const Cart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#8B8E99"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1 1h3.455l2.314 11.604A1.723 1.723 0 0 0 8.496 14h8.395c.405.008.8-.127 1.116-.382.316-.255.532-.614.611-1.013L20 5.334H5.318"
    />
  </svg>
);
export default Cart;
