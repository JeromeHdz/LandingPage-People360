import React from "react";
import Link from "next/link";

const BtnNewsletter = (props) => {
  return (
    <Link
      href="/"
      target="_blank"
      rel="noopener"
      className="px-4 sm:px-8 py-1 sm:py-2 text-sm sm:text-sm font-medium text-center text-white bg-blue-700 rounded-md"
    >
      {props.title}
    </Link>

  );
};

export default BtnNewsletter;
