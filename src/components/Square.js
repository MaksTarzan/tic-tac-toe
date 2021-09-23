import React from "react";

const Square = (props) => {
  const { value, onClick, styledClass } = props;
  return (
    <button className={styledClass} onClick={onClick}>
      {value}
    </button>
  );

};

export default Square;