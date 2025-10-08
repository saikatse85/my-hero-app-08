import React from "react";

const LoadingSpinner = ({ size = 16, color = "orange-500", text }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div
        className={`w-${size} h-${size} border-4 border-${color} border-t-transparent border-solid rounded-full animate-spin`}
      ></div>
      {text && <p className={`mt-4 text-${color} font-semibold`}>{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
