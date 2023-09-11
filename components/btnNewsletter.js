import React from "react";
import Link from "next/link";

const BtnNewsletter = (props) => {
  return (
    <Link
      href="/"
      target="_blank"
      rel="noopener"
      className="px-8 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-md "
    >
      {props.title}
    </Link>
  );
};

export default BtnNewsletter;
