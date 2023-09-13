import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container py-8 flex ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;