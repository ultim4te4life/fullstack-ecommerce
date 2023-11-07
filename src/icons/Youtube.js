import * as React from "react";

const Youtube = (props) => {
  const openYoutubePage = () => {
    // Define the YouTube page URL here
    const youtubePageURL = "https://www.youtube.com"; // Replace with the actual YouTube page URL

    // Open the YouTube page in a new tab
    window.open(youtubePageURL, "_blank");
  };

  return (
    <a
      href="https://www.youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={openYoutubePage}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="none"
        style={{ cursor: "pointer" }}
        onClick={openYoutubePage}
        {...props}
      >
        <path
          fill="#fff"
          d="M35.45 19.429c-.275-1-.963-1.715-1.925-2C31.875 17 24.863 17 24.863 17s-6.875 0-8.663.429c-.962.285-1.65 1-1.925 2C14 21.286 14 25 14 25s0 3.714.412 5.571c.275 1 .963 1.715 1.925 2C17.987 33 25 33 25 33s6.875 0 8.663-.429c.962-.285 1.65-1 1.925-2C36 28.714 36 25 36 25s0-3.714-.55-5.571Zm-12.65 9V21.57L28.575 25 22.8 28.429Z"
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

export default Youtube;
