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

      <Container className="flex w-full flex-col space-y-8 items-center justify-center text-left ">
        <Navbar />
        <Hero />
        {/* <Section1_1 /> */}
        <Section1_2 />
        <SectionTitle title={"Nos valeurs"} />
        <Values />
        <Social_Ambition />
        <Section4 />
        <SectionTitle title={"Nos partenaires"} />
        <Customers />
        <Footer />
      </Container>
    </div>
  );
};

export default team;
