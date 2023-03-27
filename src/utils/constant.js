import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";

export const navItems = ["Home", "About", "Services", "Pricing", "Contact"];

export const contacts = {
  address: {
    id: 1,
    type: "text",
    text: "1058 Meadowb, Mall Road",
    icon: HiMapPin,
  },
  email: {
    id: 2,
    type: "link-email",
    text: "hello@homesafetycert.co.uk",
    icon: HiEnvelope,
  },
  phone: {
    id: 3,
    type: "link-phone",
    text: "+44 7894 860827",
    icon: HiPhone,
  },
};
