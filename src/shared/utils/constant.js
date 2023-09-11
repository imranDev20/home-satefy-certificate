import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export const navItems = ["Home", "About", "Services", "Pricing", "Contact"];

export const contacts = {
  address: {
    id: 1,
    type: "text",
    text: "London, Great Britain, UK",
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
    text: "020 3488 4929",
    icon: HiPhone,
  },
  workingHours: {
    id: 3,
    type: "text",
    text: "Mon - Fri: 08:00 - 18:00",
    icon: HiPhone,
  },
};

export const socials = [
  { id: 1, name: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
  { id: 2, name: "Twitter", icon: FaTwitter, href: "https://facebook.com" },
  { id: 3, name: "YouTube", icon: FaYoutube, href: "https://facebook.com" },
  { id: 4, name: "Instagram", icon: FaInstagram, href: "https://facebook.com" },
];
