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
        <div className="grid max-w-screen-xl grid-cols-1 md:grid-cols-2 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-4">
          <div className="flex md:justify-start justify-center">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium "
              >
                <Image
                  src="/img/logo-6.png"
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
                  className="w-full text-center md:text-left px-4 py-2  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center  md:text-left">
            <div className="font-semi-bold">Nous rencontrer</div>
            <div className="flex mt-1 space-x-5 ">
              <a
                href="mailto:hello@people360.fr"
                target="_blank"
                className="w-full  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
              >
                <div>
                  <span className="icon">
                    <MdAlternateEmail />
                  </span>
                  <span className="email">hello@people360.fr</span>
                </div>
              </a>
            </div>
            <div className="flex mt-4 space-x-5 ">
              <a
                href="https://goo.gl/maps/qrTxBDsxQAhtyVYg8"
                target="_blank"
                className="w-full  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
              >
                <div>
                  <span className="icon">
                    <RiHomeSmileFill />
                  </span>
                  <span className="email">Un café ensemble ?</span>
                </div>
              </a>
            </div>
            <div className="flex mt-4 space-x-5  ">
              <a
                href="https://goo.gl/maps/qrTxBDsxQAhtyVYg8"
                target="_blank"
                className="w-full  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
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
          <div className="text-center md:text-left ">
            <span className="font-semi-bold">Newsletter</span>
            <div className="max-w-md my-4">
              Actualités RH, infos clés, livres blancs et webinaires,
              inscrivez-vous à notre newsletter pour rester informé.
            </div>
            <BtnNewsletter title={"Je m'inscris à la newsletter"} />
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-10 mx-auto mt-5 border-t-4 border-dark-cerulean lg:grid-cols-5">
          {" "}
          <div className=" pt-6">
            <Link
              href="/"
              className="w-full py-2  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
            >
              Mentions légales
            </Link>

            <div className="max-w-md mt-4 ">
              {/*<div>People 360</div>
               <div className=" dark:text-gray-400">
                People 360 n'est pas un service d'urgence. <br /> En cas
                d'urgence, contactez le 15.
              </div> */}
            </div>
          </div>
          <div className="pt-6">
            <Link
              href="/"
              className="w-full py-2  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
            >
              CGS
            </Link>
          </div>
          <div className="pt-6">
            <Link
              href="/"
              className="w-full py-2  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
            >
              CGU
            </Link>
          </div>
          <div className="pt-6">
            <Link
              href="/"
              className="w-full py-2  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
            >
              Charte de confidentialité
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="w-full py-2  rounded-md  hover:text-light-cerulean focus:text-blue-700 focus:bg-indigo-100 focus:outline-none "
            >
              Charte de déontologie
            </Link>
          </div>
        </div>
      </Container>
      <div className="py-10 text-xs sm:text-sm text-center font-semibold">
        {" "}
        Copywright 2023 - Made with{" "}
        <span className="text-dark-cerulean">♥</span> by People 360
      </div>
    </div>
  );
}
