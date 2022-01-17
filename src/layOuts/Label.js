import React from "react";

function Label(props) {
  return (
    <>
      <label className="form-label text-white p">{props.name}</label>
    </>
  );
}

export default Label;
