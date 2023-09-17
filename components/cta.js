import React from "react";
import Link from "next/link";

const Cta = (props) => {
  return (
    <Link
      href="/book-demo"
      target="_blank"
      rel="noopener"
      className="w-3/5 px-2 lg:px-8 py-4 text-lg font-medium text-center text-white bg-dark-cerulean hover:bg-floral-white hover:text-dark-cerulean rounded-md "
    >
      {props.title}
    </Link>
  );
};

export default Cta;
