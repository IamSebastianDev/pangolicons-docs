
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
          className="pangolicons pangolicons-cloudFog {className}"
        >
          <path  d="M17.29,16.65a4.71,4.71,0,1,0-1.91-9,7.05,7.05,0,1,0-10.22,9"/><line  x1="6.12" y1="13.23" x2="16.71" y2="13.23"/><line  x1="8.47" y1="16.76" x2="14.35" y2="16.76"/><line  x1="6.12" y1="20.29" x2="19.06" y2="20.29"/>
        </svg>
      );
    };
    
	