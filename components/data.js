import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import { MdOutlineSick, MdElderly } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { GiUpgrade, GiCycle, GiBoatFishing } from "react-icons/gi";
import { FaPlaneDeparture, FaPlaneArrival, FaTasks } from "react-icons/fa";
import { BsFillBandaidFill } from "react-icons/bs";
import { PiLinkBreakBold } from "react-icons/pi";
import { BiHandicap } from "react-icons/bi";

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

export { benefitOne, benefitTwo, roadmaps };
