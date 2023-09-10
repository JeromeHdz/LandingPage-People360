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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="flex w-full flex-col space-y-8 items-center justify-center text-left ">
        <Navbar />
        <HeroCentered
          title={fr.Solution360.heroSection.title}
          subTitle={fr.Solution360.heroSection.subTitle}
        />
        <Features />
        <SectionTitle
          className="roadmapSection py-0"
          pretitle=""
          title={"Accompagner individuellement"}
        >
          {""}
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Benefits data={benefitThree} />
        <Section3 />
        <Section4 />
        <CtaFooter props={fr.Solution360.ctaFooter} />
        <Footer />
        <PopupWidget />
      </Container>
    </>
  );
};

export default Solution360;
