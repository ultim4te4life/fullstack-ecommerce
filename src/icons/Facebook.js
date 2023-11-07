import * as React from "react";

const Facebook = (props) => {
  const openFacebookPage = () => {
    // Define the Facebook page URL here
    const facebookPageURL = "https://www.facebook.com"; // Replace with the actual Facebook page URL

    // Open the Facebook page in a new tab
    window.open(facebookPageURL, "_blank");
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      fill="none"
      onClick={openFacebookPage} // Attach the onClick handler
      style={{ cursor: "pointer" }} // Change cursor to pointer on hover
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M31 17H19c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h6v-5.5h-2V25h2v-2a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H28V33h3c1.103 0 2-.897 2-2V19c0-1.103-.897-2-2-2Z"
        clipRule="evenodd"
      />
      <rect
        width={49}
        height={49}
        x={0.5}
        y={0.5}
        stroke="#fff"
        strokeOpacity={0.125}
        rx={24.5}
      />
    </svg>
  );
};

export default Facebook;
