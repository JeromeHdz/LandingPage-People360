import React from "react";
import Link from "next/link";

const CtaBenefit = (props) => {
  return (
    <Link
      href="/book-demo"
      target="_blank"
      rel="noopener"
      className="max-w-2xl px-8 py-4 text-lg font-medium text-center text-white bg-dark-cerulean hover:bg-orange-people rounded-xl"
    >
      {props.title}
    </Link>
  );
};

export default CtaBenefit;
