import Head from "next/head";
import HeroCentered from "../components/heroCentered";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import RoadmapsButtons from "../components/roadmapsButtons";
import Container from "../components/container";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import CtaFooter from "../components/ctaFooter";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Stat from "../components/stat";
import Features from "../components/solution360/features";
import Contact from "../components/contact";
import Section3 from "../components/solution360/section3";
import Section4 from "../components/solution360/section4";

import { InlineWidget } from "react-calendly";

import fr from "../locales/fr";

const Solution360 = () => {
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
        <link rel="icon" href="/img/ico/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* HERO SECTION */}
      <Container className="flex z-1 w-full px-8 md:px-0 flex-col sm:py-0 justify-center text-left ">
        <div className="pt-8">
          <Navbar />
        </div>
      </Container>
      <section className="relative w-full h-screen ">
        <img
          src="img/solution360/hero-bg.png"
          className="absolute top-0 left-0 object-cover w-full h-full z-5"
          alt="Image alt text"
        />
        <section className="relative w-full h-screen flex justify-between items-center z-10">
          <HeroCentered
            title={fr.Solution360.heroSection.title}
            subTitle={fr.Solution360.heroSection.subTitle}
          />
        </section>
        <div className="absolute  bottom-0 left-0  right-0 h-40 bg-gradient-to-t from-pale-salmon to-transparent z-6"></div>
      </section>
      <section className="relative md:px-24 w-screen bg-pale-salmon ">
        <Container className="flex z-1 w-full flex-col space-y-8 py-32 sm:py-0 items-center justify-center">
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-floral-white to-transparent z-6"></div>
          <div className=" w-full ">
            <Features />
          </div>
        </Container>
      </section>

      <section>
      <Container className="flex z-1 w-full flex-col px-6 space-y-8 py-32 sm:py-0 items-center justify-center text-left">
        <SectionTitle
          className="roadmapSection py-0"
          pretitle=""
          title={"Accompagner individuellement"}
        />
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Benefits data={benefitThree} />
        </Container>
      </section>

      <section className="relative w-full bg-purple-people">
        <Container className="flex z-1 w-full flex-col px-6 space-y-8 py-32 sm:py-0 items-center justify-center text-left text-white">
        <Section3 />
        </Container>
      </section>

      <section>
        <Container className="flex z-1 w-full flex-col px-6 space-y-8 py-32 sm:py-0 items-center justify-center text-left">
        <Section4 />
        </Container>
      </section>

      <section>
        <Container className="flex z-1 w-full flex-col px-6 space-y-8 py-32 sm:py-0 items-center justify-center text-left">
        <CtaFooter props={fr.Solution360.ctaFooter} />
        <PopupWidget />
      </Container>
      </section>
      {/* FOOTER  */}
      <section className="relative w-full bg-antique-white">
        <Container className="flex w-full py-16 flex-col space-y-8 items-center justify-center text-center ">
          <Footer />
        </Container>
      </section>
    </>
  );
};

export default Solution360;
