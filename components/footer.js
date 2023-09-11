import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";
import BtnNewsletter from "./btnNewsletter";

import { BsEnvelopeAtFill } from "react-icons/bs";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  const navigation = [
    { text: "Solution 360", url: "/solution-360" },
    { text: "Templates", url: "/categorie-templates" },
    {
      text: "Nous Connaître",
      url: "/team",
    },
    { text: "Ressources", url: "/resources" },
  ];
  const legal = [
    { text: "Sécurité", url: "/securite" },
    { text: "RGPD", url: "/rgpd" },
    {
      text: "Confidentialité",
      url: "/confidentialite",
    },
    { text: "Mentions légales", url: "/mentions-legales" },
  ];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-4">
          <div className="">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-blue-700 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.png"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>People 360</span>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>Nous rencontrer</div>
            <div className="flex mt-1 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="mailto:hello@people360.fr"
                target="_blank"
                className="w-full text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                <div>
                  <span className="icon">
                    <MdAlternateEmail />
                  </span>
                  <span className="email">hello@people360.fr</span>
                </div>
              </a>
            </div>
            <div className="flex mt-4 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://goo.gl/maps/qrTxBDsxQAhtyVYg8"
                target="_blank"
                className="w-full text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                <div>
                  <span className="icon">
                    <RiHomeSmileFill />
                  </span>
                  <span className="email">Un café ensemble ?</span>
                </div>
              </a>
            </div>
            <div className="flex mt-4 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://goo.gl/maps/qrTxBDsxQAhtyVYg8"
                target="_blank"
                className="w-full text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                <div>
                  <span className="icon">
                    <AiFillLinkedin />
                  </span>
                  <span className="email">Suivez nos actus !</span>
                </div>
              </a>
            </div>
          </div>
          <div className="text-left">
            Newsletter
            <div className="max-w-md my-4 text-gray-500 dark:text-gray-400">
              Actualités RH, infos clés, livres blancs et webinaires,
              inscrivez-vous à notre newsletter pour rester informé.
            </div>
            <BtnNewsletter title={"Je m'inscris à la newsletter"} />
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 mx-auto mt-5 border-t-4 border-blue-600 lg:grid-cols-5">
          <div className=" pt-6">
            <Link
              href="/"
              className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
            >
              Mentions légales
            </Link>

            <div className="max-w-md mt-4 ">
              <div>People 360</div>
              <div className="text-gray-500 dark:text-gray-400">
                People 360 n'est pas un service d'urgence. <br /> En cas
                d'urgence, contactez le 15.
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0 ">
              <Link
                href="/"
                className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                CGS
              </Link>
            </div>
          </div>
          <div className="pt-6">
            <Link
              href="/"
              className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
            >
              CGU
            </Link>
          </div>
          <div className="pt-6">
            <Link
              href="/"
              className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
            >
              Charte de confidentialité
            </Link>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0 pt-6">
              <Link
                href="/"
                className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-700 focus:text-blue-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                Charte de déontologie
              </Link>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copywright 2023 - Made with <span className="text-blue-500">♥</span>{" "}
          by People 360
        </div>
      </Container>
    </div>
  );
}
