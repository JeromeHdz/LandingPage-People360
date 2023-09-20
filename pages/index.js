import Head from "next/head";
import Hero from "../components/hero";
import Hero2 from "../components/hero2";

import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
// import RoadmapsButtons from "../components/roadmapsButtons";
import Container from "../components/container";

import { benefitOne, benefitTwo, roadmaps } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import CtaFooter from "../components/ctaFooter";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Stat from "../components/stat";
import Features from "../components/features";
import Contact from "../components/contact";

import fr from "../locales/fr";
import { Client } from "@notionhq/client";
import { cleanDataFromNotion, getNotionContentBlockById } from "../utils";

import dynamic from "next/dynamic";

const RoadmapsButtons = dynamic(() => import("../components/roadmapsButtons"), {
  ssr: false,
});

const Home = ({ blocks }) => {
  // console.log(JSON.stringify(blocks, null, 2));
  const cleanedData = null; //cleanDataFromNotion(blocks);

  return (
    <>
      <Head>
        <title>
          People 360 - Une expérience sur-mesure et captivante pour vos
          collaborateurs.
        </title>
        <meta name="description" content="People 360 Homepage" />
        <meta
          property="og:title"
          content="Réenchantez les transitions de vie de vos salariés, vivez une expérience 360°"
        />
        <meta
          property="og:description"
          content="People 360 accompagne chaque collaborateur (salarié, pair, manager) aux moments adéquats, sur les bons leviers, grâce à des programmes sur-mesure."
        />
        <meta property="og:url" content="https://www.people360.fr/" />
        <meta property="og:image" content="/img/solution360/benefit-one.jpg" />
        <meta
          name="description"
          content="People 360 - Une expérience sur-mesure et captivante pour vos collaborateurs."
        />
        <link rel="icon" href="/img/ico/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen">
        <img
          src="img/home/hero.bg-sans.jpg"
          className="absolute top-0 left-0 object-cover w-full h-full z-5"
          alt="Image alt text"
        />
        <Container className="relative flex z-10 w-full h-screen flex-col space-y-8 px-8 md:px-32 xl:px-0 max-w-screen-xl text-left">
          <Navbar />
          {/* <Hero data={cleanedData} /> */}
          <Hero2 />
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-floral-white to-transparent z-6"></div>
      </section>

      {/* FEATURE SECTION */}
      <Container className="flex z-1 w-full flex-col space-y-8 py-46 md:py-32 px-8  sm:py-0 items-center justify-center text-left ">
        <SectionTitle
          className="roadmapSection py-0"
          pretitle={
            getNotionContentBlockById(
              cleanedData,
              "9280de45c952402dabcb2dde4af20133"
            ) || fr.LandingPage.featuresSection.preTitle
          }
          title={
            getNotionContentBlockById(
              cleanedData,
              "b7b8fe73cb1f4ca3b2e8d399ee7e35f3"
            ) || fr.LandingPage.featuresSection.title
          }
        >
          {getNotionContentBlockById(
            cleanedData,
            "dc27af491c7642679e935aa31b731a05"
          ) || fr.LandingPage.featuresSection.subtitle}
        </SectionTitle>

        <Features data={cleanedData} />
      </Container>
      <img
        src="img/home/feature-bottom.jpg"
        className=" top-0 left-0 object-cover w-full h-full z-5"
        alt="Image alt text"
      />
      {/* ROADMAPS SECTION */}
      <section className="relative w-full h-auto bg-pale-salmon">
        <Container className="flex w-full py-16 flex-col px-8 space-y-8 items-center justify-center text-center ">
          <SectionTitle
            className="roadmapSection py-0"
            pretitle={
              getNotionContentBlockById(
                cleanedData,
                "6c37feb099dd469aa5269b8fb9b3e365"
              ) || fr.LandingPage.roadmapSection.preTitle
            }
            title={
              getNotionContentBlockById(
                cleanedData,
                "5faf295af280414abecb783e371d1596"
              ) || fr.LandingPage.roadmapSection.title
            }
            roadmaps
          >
            {getNotionContentBlockById(
              cleanedData,
              "aa4bc3d396ce4e9aab33ccd691b9ddc5"
            ) || fr.LandingPage.roadmapSection.subtitle}
          </SectionTitle>
          <RoadmapsButtons data={roadmaps} />
          <p className="max-w-4xl text-2xl leading-normal lg:text-xl xl:text-2xl ">
            {getNotionContentBlockById(
              cleanedData,
              "d601a5dcbd7146258bf3d25947b21aa1"
            ) || fr.LandingPage.roadmapSection.subtitle2}
          </p>
          <Cta
            title={
              getNotionContentBlockById(
                cleanedData,
                "0d9116d3698d40ca9affceacfc0ec4f1"
              ) || fr.LandingPage.roadmapSection.cta
            }
          />
        </Container>
      </section>

      {/* STAT SECTION */}
      <Container className="flex w-full px-6 py-16 flex-col space-y-8 items-center justify-center text-center ">
        <SectionTitle
          className="roadmapSection py-0"
          pretitle={
            // getNotionContentBlockById(
            //   cleanedData,
            //   "310749b96c7145af9157419f246d646e"
            // ||)
            fr.LandingPage.statSection.preTitle
          }
          title={
            // getNotionContentBlockById(
            //   cleanedData,
            //   "928e104597064dbba34376f5e208e426"
            // ) ||
            fr.LandingPage.statSection.title
          }
        ></SectionTitle>
        <Stat data={cleanedData} />
      </Container>

      {/* CTA FOOTER SECTION */}
      {/* FOOTER  */}
      <section className="relative w-full bg-antique-white">
        <Container className="flex w-full py-16 flex-col space-y-8 items-center justify-center text-center ">
          <CtaFooter
            props={fr.LandingPage.ctaFooterSection}
            data={cleanedData}
          />

          <Footer />
        </Container>
      </section>

      <PopupWidget />
    </>
  );
};

// export const getStaticProps = async () => {
//   //Fetch data from notion
//   //create a static page

//   const notion = new Client({
//     auth: process.env.NOTION_SECRET,
//   });

//   const data = await notion.blocks.children.list({
//     block_id: process.env.HOMEPAGE_ID,
//   });

//   return {
//     props: {
//       blocks: data,
//     },
//   };
// };

export default Home;
