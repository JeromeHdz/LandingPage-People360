import React from "react";
import Link from "next/link";

const BtnNewsletter = (props) => {
  return (
    <Link
      href="/"
      target="_blank"
      rel="noopener"
      className={` ${props.color === "dark-cerulean" ? "bg-floral-white text-dark-cerulean" : "bg-dark-cerulean"}  w-full px-2 lg:px-8 py-4 text-md md:text-lg font-medium text-center  hover:bg-orange-people rounded-xl`}
    >
      {props.title}
    </Link>
  );
};

export default BtnNewsletter;
