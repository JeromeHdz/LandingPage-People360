import React from "react";
import Container from "./container";
import Link from "next/link";
import { getNotionContentBlockById } from "../utils";

const CtaFooter = ({ props, data }) => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            {getNotionContentBlockById(
              data,
              "48124e1447d4405aa57f1b61fc7e20cb"
            ) || props.title}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {getNotionContentBlockById(
              data,
              "55ec929962d644a6a13b380d384e65c9"
            ) || props.subtitle}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/book-demo"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            {getNotionContentBlockById(
              data,
              "d72fab956e874adba3fbc112d1e650d8"
            ) || props.buttonTitle}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CtaFooter;
