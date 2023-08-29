import React from "react";
import Link from "next/link";

const Cta = (props) => {
  return (
    <Link
      href="/book-demo"
      target="_blank"
      rel="noopener"
      className="w-3/5 px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
    >
      {props.title}
    </Link>
  );
};

export default Cta;
