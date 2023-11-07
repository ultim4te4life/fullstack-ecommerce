import * as React from "react";

const Twitter = (props) => {
  const openTwitterPage = () => {
    // Define the Twitter page URL here
    const twitterPageURL = "https://www.twitter.com"; // Replace with the actual Twitter page URL

    // Open the Twitter page in a new tab
    window.open(twitterPageURL, "_blank");
  };

  return (
    <a
      href="https://www.twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={openTwitterPage}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="none"
        style={{ cursor: "pointer" }}
        onClick={openTwitterPage}
        {...props}
      >
        <path
          fill="#fff"
          d="M34.5 18.86a3.895 3.895 0 0 1-2.21.683 4.076 4.076 0 0 0 1.768-2.276 3.91 3.91 0 0 1-2.485.968 3.939 3.939 0 0 0-2.236-1.187 3.877 3.877 0 0 0-2.48.433 4.048 4.048 0 0 0-1.731 1.879 4.209 4.209 0 0 0-.292 2.573 10.797 10.797 0 0 1-4.439-1.228 11.116 11.116 0 0 1-3.57-2.982 4.205 4.205 0 0 0-.39 2.914 4.102 4.102 0 0 0 1.606 2.433 3.88 3.88 0 0 1-1.768-.398 4.17 4.17 0 0 0 .889 2.513 3.963 3.963 0 0 0 2.204 1.413 3.865 3.865 0 0 1-1.767.057 4.096 4.096 0 0 0 1.408 2.032c.664.51 1.465.794 2.292.812a10.804 10.804 0 0 1-5.799 1.65 10.823 10.823 0 0 0 5.744 1.847 10.795 10.795 0 0 0 5.832-1.529 11.234 11.234 0 0 0 4.188-4.45 11.663 11.663 0 0 0 1.303-6.052A11.25 11.25 0 0 0 34.5 18.86Z"
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
    </a>
  );
};

export default Twitter;
