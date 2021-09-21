import React from "react";

const Square = (props) => {
  const { value, onClick, winner } = props;
  //const style = value ? `squares ${value}` : `squares`;
  const style = winner ? `squares winner` : `squares`;
  //console.log(value);

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
  
};

export default Square;