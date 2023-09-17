import React from "react";
import Link from "next/link";

const BtnNewsletter = (props) => {
  return (
    <Link
      href="/"
      target="_blank"
      rel="noopener"
      className="w-full px-2 lg:px-8 py-4 text-md md:text-lg font-medium text-center text-white bg-dark-cerulean hover:bg-orange-people rounded-xl "
    >
      {props.title}
    </Link>
  );
};

export default BtnNewsletter;
