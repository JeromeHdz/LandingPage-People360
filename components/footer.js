import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

import { BsEnvelopeAtFill } from "react-icons/bs";

export default function Footer() {
  const navigation = [
    "Solution 360",
    "Templates",
    "Nous Connaître",
    "Company",
    "Ressources",
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>People 360</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              People 360 vous accompagne, vous et vos collaborateurs, tout au
              long de leur parcours professionnel.
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              People 360 n'est pas un service d'urgence. <br /> En cas
              d'urgence, contactez le 15.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>Contact us</div>
            <div className="flex mt-1 space-x-5 text-gray-400 dark:text-gray-500">
              <Link
                href="/"
                className="w-full text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                contact@people360.fr
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Copyright © {new Date().getFullYear()}.{" "}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          {/* Made with ♥ by{" "}
          <a href="https://web3templates.com/" target="_blank" rel="noopener">
            Web3Templates.
          </a>{" "}
          Illustrations from{" "}
          <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
            Glazestock
          </a> */}
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}
