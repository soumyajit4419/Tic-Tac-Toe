import React from "react";

function Box({ value, onClick }) {
  return (
    <button
      style={{ height: "50px", width: "50px", padding: 0, margin: "8px", borderRadius:"5px" }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Box;
