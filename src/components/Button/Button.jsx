import React from "react";

const Button = ({ className, children, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;
