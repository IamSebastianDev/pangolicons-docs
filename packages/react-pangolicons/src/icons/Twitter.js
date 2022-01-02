
    import React from "react";

    export default ({
      size = "24",
      color = "currentColor",
      strokeWidth = "1.5",
      linecap = "round",
      linejoin = "round",
      className = ""
    }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={linecap}
          strokeLinejoin={linejoin}
          className="pangolicons pangolicons-twitter {className}"
        >
          <path  d="M10.68,15.64C9.23,16.77,5,18.53,3,18.53a8.37,8.37,0,0,1-1-.05,12,12,0,0,0,6.46,1.88,11.93,11.93,0,0,0,12-12L22,4.22s-1.72.56-2.68.75A4.22,4.22,0,0,0,12,7.86a5,5,0,0,0,.1,1,12,12,0,0,1-8.7-4.41,4.25,4.25,0,0,0-.56,2.12c0,1.47.5,7.28,7.82,9.11"/>
        </svg>
      );
    };
    
	