import React from "react";
import Head from "next/head";
import Container from "../components/container";

import Navbar from "../components/navbar";
import Section1_1 from "../components/team/section1_1";
import Section1_2 from "../components/team/section1_2";
import Hero from "../components/team/hero";
import SectionTitle from "../components/sectionTitle";
import Values from "../components/team/values";
import Social_Ambition from "../components/team/social_ambition";
import Section4 from "../components/team/section4";
import Customers from "../components/team/customers";
import Footer from "../components/footer";

const team = () => {
  return (
    <div>
      <Head>
        <title>
          People 360 - Une expérience sur-mesure et captivante pour vos
          collaborateurs.
        </title>
        <meta
          name="description"
          content="People 360 - Une expérience sur-mesure et captivante pour vos collaborateurs."
        />
        <link rel="icon" href="/img/ico/favicon.ico" />
      </Head>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen px-6 md:px-16 bg-pale-salmon">
        <img
          src="img/team/hero-bg.jpg"
          className="absolute top-0 left-0 object-cover w-full h-full z-5"
          alt="Image alt text"
        />
        <Container className="relative flex z-10 w-full flex-col space-y-8 px-8 md:px-32 xl:px-0 max-w-screen-xl text-left">
          <Navbar color={"white"}/>
          {/* <Hero data={cleanedData} /> */}
          <Hero />
        </Container>
      </section>
     
      <section className="relative md:px-24 w-screen  ">

      <Container className="flex w-full flex-col space-y-8 items-center justify-center text-left ">
        {/* <Navbar />
        <Hero /> */}
        {/* <Section1_1 /> */}
        <Section1_2 />
        </Container>
        
        
        <div className="absolute  bottom-0 left-0  right-0 h-40 bg-gradient-to-t from-pale-salmon to-transparent z-6"></div>
      </section>
        <section className="relative  w-screen bg-pale-salmon ">
          
          <Container className="flex w-full flex-col space-y-8 items-center justify-center text-left ">
        <SectionTitle title={"Nos valeurs"} />
        <Values />
        </Container>
        
        <div className=" w-screen bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-floral-white to-transparent z-6"></div>

        </section>

      <section className="relative md:px-24 w-screen ">
       
        <Container className="flex w-full flex-col space-y-8 items-center justify-center text-left ">
          
        <Social_Ambition />
        </Container>
        
      </section>
          
      <section className="relative  w-screen bg-dark-cerulean">

        <Container className="flex w-full flex-col space-y-8 items-center justify-center text-left bg-dark-cerulean">
        <Section4 />
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="#FFF6ED"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
        </Container>

      </section>
      <section className="relative md:px-24 w-screen ">

        <Container className="flex w-full flex-col space-y-8 items-center justify-center text-left ">
        <SectionTitle title={"Nos partenaires"} />
        <Customers />
        <Footer color={"dark-cerulean"} className='pr-3'/>
      </Container>
      </section>
    </div>
  );
};

export default team;
