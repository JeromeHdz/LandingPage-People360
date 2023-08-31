import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import { AiOutlineAudit } from "react-icons/ai";
import { MdOutlineSick, MdElderly, MdQueryStats } from "react-icons/md";
import { LuBaby, LuHeartHandshake } from "react-icons/lu";
import { GiUpgrade, GiCycle, GiBoatFishing } from "react-icons/gi";
import { FaPlaneDeparture, FaPlaneArrival, FaTasks } from "react-icons/fa";
import { BsFillBandaidFill } from "react-icons/bs";
import { PiLinkBreakBold } from "react-icons/pi";
import { BiHandicap } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const roadmaps = [
  {
    title: "Parentalité",
    icon: <LuBaby />,
  },
  {
    title: "Promotion",
    icon: <GiUpgrade />,
  },
  {
    title: "Expatriation",
    icon: <FaPlaneDeparture />,
  },
  {
    title: "Aidant",
    icon: <BsFillBandaidFill />,
  },
  {
    title: "Maladie",
    icon: <MdOutlineSick />,
  },
  {
    title: "Management",
    icon: <FaTasks />,
  },
  {
    title: "Séparation",
    icon: <PiLinkBreakBold />,
  },
  {
    title: "Impatriation",
    icon: <FaPlaneArrival />,
  },
  {
    title: "Senior",
    icon: <MdElderly />,
  },
  {
    title: "Handicap",
    icon: <BiHandicap />,
  },
  {
    title: "Re-Onboarding",
    icon: <GiCycle />,
  },
  {
    title: "Retraite",
    icon: <GiBoatFishing />,
  },
];

const benefitOne = {
  title:
    "Élaborez des roadmaps personnalisés pour une expérience collaborateur optimale.",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  tags: ["Modulable", "Dynamique", "Agile"],
  ctaTitle: "Envie de tester l'une de nos ...",
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  tags: ["Modulable", "Dynamique", "Agile"],
  ctaTitle: "Pret pour une demo ...",
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const featuresList = [
  {
    icon: <AiOutlineAudit />,
    title: "Faites le bilan",
    description:
      "Des audits actionnables simplement par les RH et les managers. ",
    link: "/",
    titleNodtionId: "4911378ea8a8455ab7c99d7bb2111f39",
    descriptionNotionId: "7b855ae8734c4152b58d1b8e8288b307",
  },
  {
    icon: <LuHeartHandshake />,
    title: "Accompagner individuellement",
    description:
      "Roadmaps interactives personnalisées pushées automatiquement au bon moment. Assistant personnel 24/24h. Coachings d'experts individuels sur demande.",
    link: "/",
    titleNodtionId: "ae593313308f435489933fd05e3272f7",
    descriptionNotionId: "043a7014ca15476ebab25f7463f5fa93",
  },
  {
    icon: <TbSchool />,
    title: "Former Collectivement",
    description:
      "Conférences, ateliers d'experts, webinaires. Bibliothèque de contenus thématiques.",
    link: "/",
    titleNodtionId: "f098a799c456406999c62bad7da43087",
    descriptionNotionId: "bedc3542f79941b88f8c89c4a295ae4d",
  },
  {
    icon: <MdQueryStats />,
    title: "Mesurer votre impact",
    description:
      "Dashboard de suivi des performances individuelles et collectives.",
    link: "/",
    titleNodtionId: "3d21f0ad900341d08cea8687dda715ef",
    descriptionNotionId: "6c37feb099dd469aa5269b8fb9b3e365",
  },
];

export { benefitOne, benefitTwo, roadmaps, featuresList };
