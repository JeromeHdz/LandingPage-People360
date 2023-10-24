import React from "react";
import Link from "next/link";

const BtnNewsletter = (props) => {
  return (
    <Link
      href="https://04f0201f.sibforms.com/serve/MUIFAL3b98Y9j9wI4z0qVNBxGq3gyi5OGLCM-aW5_-caVT9WQnFSWVYwG--jHHDNmMIwl958zfg2GSN3KWJRnrCvG3WYiKnUGYybSfg4_apVAgQjFogc9r_MITNVdLCqqFi8VK89H351vSOZUvw5DWwPvd5gWkkSw8w716GdKo8z-EvWbizqvXLeZnQWR_oPZjTQzQbQV1EYEa_t"
      target="_blank"
      rel="noopener"
      className={` ${
        props.color === "dark-cerulean"
          ? "bg-floral-white text-dark-cerulean"
          : "bg-dark-cerulean text-floral-white"
      }  w-full px-2 lg:px-8 py-4 text-md md:text-lg font-medium text-center  hover:bg-orange-people rounded-xl`}
    >
      {props.title}
    </Link>
  );
};

export default BtnNewsletter;
