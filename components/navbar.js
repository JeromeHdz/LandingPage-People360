import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import fr from "../locales/fr";

const Navbar = () => {
  const navigation = [
    {
      text: "Nos Solutions",
      url: "/solution-360",
    },
    // {
    //   text: "Templates",
    //   url: "/categorie-templates",
    // },
    {
      text: "Nous Connaître",
      url: "/team",
    },
    // {
    //   text: "Ressources",
    //   url: "/resources",
    // },
  ];

  return (
    <div className="w-full">
      <nav className=" relative flex flex-wrap items-center justify-between lg:justify-between">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-dark-cerulean">
                    <span>
                      <Image
                        src="/img/logo-6.png"
                        alt="P"
                        width="64"
                        height="64"
                        className="w-8"
                      />
                    </span>
                    <span>People 360</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto 0 rounded-md lg:hidden hover:text-dark-cerulean focus:text-white focus:bg-dark-cerulean focus:outline-none "
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="w-full px-4 py-2 -ml-4 text-dark-cerulean-500 rounded-md   focus:bg-light-cerulean focus:outline-none"
                      >
                        {item.text}
                      </Link>
                    ))}
                    <Link
                      href="/book-demo"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-dark-cerulean rounded-md lg:ml-5"
                    >
                      {fr.Global.cta}
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={item.url}
                  className="text-xl inline-block px-4 py-2  font-normal text-dark-cerulean  font-semi-bold no-underline rounded-md hover:text-floral-white focus:text-white-700 focus:bg-white-100 focus:outline-none "
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/book-demo"
            className="px-6 py-2 text-white  font-semi-bold bg-dark-cerulean hover:bg-floral-white hover:text-dark-cerulean rounded-md md:ml-5"
          >
            {fr.Global.cta}
          </Link>

          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
