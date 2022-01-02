
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
          className="pangolicons pangolicons-moonRough {className}"
        >
          <path  d="M20,6.07A1.74,1.74,0,0,1,17.93,4,10,10,0,0,0,7.29,3.18,1.76,1.76,0,0,1,5.53,4.94,1.46,1.46,0,0,1,5,4.85a10,10,0,0,0-3,6.18,4.1,4.1,0,0,1,2.89,3.91,4.06,4.06,0,0,1-1.12,2.8,10,10,0,0,0,4.76,3.65A1.77,1.77,0,0,1,12,22a10,10,0,0,0,7.56-3.47,1.77,1.77,0,0,1,1.26-3,1.57,1.57,0,0,1,.49.08A9.87,9.87,0,0,0,22,12,10,10,0,0,0,20,6.07Z"/>
        </svg>
      );
    };
    
	