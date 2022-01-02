
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
          className="pangolicons pangolicons-wifi {className}"
        >
          <circle  cx="12.01" cy="17.66" r="0.75"/><path  d="M8.26,15.13a4.52,4.52,0,0,1,7.5,0"/><path  d="M5.13,13a8.3,8.3,0,0,1,13.75,0"/><path  d="M2,10.91a12.08,12.08,0,0,1,20,0"/>
        </svg>
      );
    };
    
	