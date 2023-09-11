import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import { AiOutlineAudit } from "react-icons/ai";
import { MdOutlineSick, MdElderly, MdQueryStats, MdStroller } from "react-icons/md";
import { LuBaby, LuHeartHandshake } from "react-icons/lu";
import { GiUpgrade, GiCycle, GiBoatFishing, GiPuzzle } from "react-icons/gi";
import { FaPlaneDeparture, FaPlaneArrival, FaTasks, FaHandHoldingHeart } from "react-icons/fa";
import { BsFillBandaidFill } from "react-icons/bs";
import { PiLinkBreakBold, PiShootingStarFill } from "react-icons/pi";
import { BiHandicap } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si"
import { PiHandWavingLight } from "react-icons/pi"


import benefitOneImg from "../public/img/solution360/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import benefitThreeImg from "../public/img/solution360/benefit-three.png";


const roadmaps = [
  {
    title: "Parentalité",
    icon: <MdStroller />,
    color:"bg-rose-50",
  },
  {
    title: "Maladie",
    icon: <MdOutlineSick />,
    color: "bg-rose-100",

  },
  {
    title: "Handicap",
    icon: <BiHandicap />,
    color: "bg-rose-200",

  },
  {
    title: "Aidant",
    icon: <FaHandHoldingHeart />,
    color: "bg-rose-300",

  },
  {
    title: "Senior",
    icon: <MdElderly />,
    color: "bg-rose-400",

  },
  {
    title: "Promotion",
    icon: <PiShootingStarFill />,
    color: "bg-blue-50",

  },
  {
    title: "Expatriation",
    icon: <SiYourtraveldottv />,
    color: "bg-blue-100",

  },
  {
    title: "Impatriation",
    icon: <FaPlaneArrival />,
    color: "bg-blue-200",

  },
  {
    title: "Management",
    icon: <FaTasks />,
    color: "bg-blue-300",

  },
  {
    title: "Retraite",
    icon: <GiBoatFishing />,
    color: "bg-blue-400",

  },
  // {
  //   title: "Séparation",
  //   icon: <PiLinkBreakBold />,
  // },
  // {
  //   title: "Re-Onboarding",
  //   icon: <GiCycle />,
  // },
  
];

const benefitOne = {
  title: "L’IA au service du parcours collaborateur, accessible à tous",
  subsubtitle:'Des roadmaps interactives, sur-mesure, engageantes et utiles ',
  desc: `<b>Des roadmaps interactives, sur-mesure, engageantes et utiles </b><br><br> Elles impliquent les équipes, les bonnes personnes, au bon moment, quand elles en ont besoin. <br/><br/>
  Bien plus qu'une to do list, des notifications push sont envoyées automatiquement sur l'agenda des collaborateurs(salarié, manager, collègue). <br/><br/>
  Rappels réglementaires, tâches à ne pas rater, quizz d'auto-évaluation, bonnes pratiques, contenus informatifs (vidéos, audios, écrits...)  <br/><br/>
  Chaque collaborateur peut adapter sa roadmap selon ses timings et préférences. <br/><br/>
  Roadmaps disponibles par thématique: parentalité, reconversion, aidants, maladie etc...`,
  image: benefitOneImg,
  tags: ["Modulable", "Dynamique", "Agile"],
  ctaTitle: "Envie de tester l'une de nos roadmaps dans votre entreprise?",
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

const benefitTwo = {
  title:
    "Assistant personnel 24/24h",
  desc: "Pour toutes les questions qui nécessitent une réponse rapide, efficace et sure, mais pas de consultation spécifique auprès d'un expert, l'assitant personnel est disponible 24h/24.<br><br> Grâce à notre technologie unique basée sur l'intelligence artificielle et l'expertise de nos coachs, vous êtes assurés de bénéficier d'une expérience hors norme.",
  image: benefitTwoImg,
  tags: ["Modulable", "Dynamique", "Agile"],
  ctaTitle: "Prêt pour une démo de l'assistant personnel?",
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

const benefitThree = {
  title: "Coaching d'expert spécialisé",
  subtitle: '',
  desc: `Prenez RDV individuellement avec nos experts certifiés, selon vos besoins.<br><br>
  Notre algorithme maison, la technologie "perfect match" vous proposera une sélection des 3 experts les plus adaptés. <br><br>
  Coachs spécialisés, avocats, comptables, thérapeutes, psychologues, prenez un rdv en ligne sur leur agenda partagé.`,
  image: benefitThreeImg,
  tags: ["Modulable", "Dynamique", "Agile"],
  ctaTitle: "Vous souhaitez organiser des RDV avec des experts pour vos salariés?",
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
    link: "/solution-360#bilan",
    titleNodtionId: "4911378ea8a8455ab7c99d7bb2111f39",
    descriptionNotionId: "7b855ae8734c4152b58d1b8e8288b307",
  },
  {
    id:"accompagner-individuellement",
    icon: <LuHeartHandshake />,
    title: "Accompagner individuellement",
    description:
      "Roadmaps interactives personnalisées pushées au bon moment. Assistant personnel 24/24h. Coaching individualisés avec des experts dédiés.",
    link: "/solution-360#accompagner-individuellement",
    titleNodtionId: "ae593313308f435489933fd05e3272f7",
    descriptionNotionId: "043a7014ca15476ebab25f7463f5fa93",
  },
  {
    id:"former-collectivement",
    icon: <TbSchool />,
    title: "Former Collectivement",
    description:
      "Conférences, ateliers d'experts, webinaires. Bibliothèque de contenus thématiques.",
    link: "/solution-360#former-collectivement",
    titleNodtionId: "f098a799c456406999c62bad7da43087",
    descriptionNotionId: "bedc3542f79941b88f8c89c4a295ae4d",
  },
  {
    id:"mesurer-votre-impact",
    icon: <MdQueryStats />,
    title: "Mesurer votre impact",
    description:
      "Dashboard de suivi des performances individuelles et collectives.",
    link: "/solution-360#mesurer-votre-impact",
    titleNodtionId: "3d21f0ad900341d08cea8687dda715ef",
    descriptionNotionId: "6c37feb099dd469aa5269b8fb9b3e365",
  },
];

export { benefitOne, benefitTwo, benefitThree, roadmaps, featuresList };
