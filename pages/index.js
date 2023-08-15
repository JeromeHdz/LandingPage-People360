import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import RoadmapsButtons from "../components/roadmapsButtons";
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

const Home = () => {
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

      <Navbar />
      <Hero />

      {/* FEATURES SECTION */}
      <Container className="flex w-full py-16 flex-col space-y-8 items-center justify-center text-left ">
        <SectionTitle
          className="roadmapSection py-0"
          pretitle={fr.LandingPage.featuresSection.preTitle}
          title={fr.LandingPage.featuresSection.title}
        >
          {fr.LandingPage.roadmapSection.subtitle}
        </SectionTitle>
        <Features />
      </Container>

      {/* ROADMAPS SECTION */}
      <Container className="flex w-full py-16 flex-col space-y-8 items-center justify-center text-center ">
        <SectionTitle
          className="roadmapSection py-0"
          pretitle={fr.LandingPage.roadmapSection.preTitle}
          title={fr.LandingPage.roadmapSection.title}
          roadmaps
        >
          {fr.LandingPage.roadmapSection.subtitle}
        </SectionTitle>
        <RoadmapsButtons data={roadmaps} />
        <p className="max-w-4xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {fr.LandingPage.roadmapSection.subtitle2}
        </p>
        <Cta title={fr.Global.cta} />
      </Container>

      {/* STAT SECTION */}
      <Container className="flex w-full py-16 flex-col space-y-8 items-center justify-center text-center ">
        <SectionTitle
          className="roadmapSection py-0"
          pretitle={fr.LandingPage.statSection.preTitle}
          title={fr.LandingPage.statSection.title}
        ></SectionTitle>
        <Stat />
      </Container>

      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq /> */}

      {/* CTA FOOTER SECTION */}
      <CtaFooter />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
