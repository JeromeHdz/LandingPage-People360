import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Container from "../components/container";
import Footer from "../components/footer";

import PopupWidget from "../components/popupWidget";

import { InlineWidget } from "react-calendly";

import fr from "../locales/fr";

const BookDemo = () => {
  return (
    <>
      <Head>
        <title>
          People 360 - Une expérience sur-mesure et captivante pour vos
          collaborateurs.
        </title>
        <meta
          name="description"
          content="People 360 - Une expérience sur-mesure et captivante pour vos collaborateurs."
        />
        <link rel="icon" href="/img/favico/favicon.ico" />
      </Head>

      <Container className="flex flex-wrap ">
        <Navbar />
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              {fr.BookDemo.hero.catchPhrase}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {fr.BookDemo.hero.tagline}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <InlineWidget
              styles={{
                height: "400px",
                width: "500px",
              }}
              url="https://calendly.com/jerome-people360"
            />
          </div>
        </div>
      </Container>
      <Footer />
      <PopupWidget />
    </>
  );
};

export default BookDemo;
