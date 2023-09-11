import * as React from "react";
import Layout from "../components/global/layout";
import Services from "../components/home/services";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Pricing from "../components/home/pricing";
import Process from "../components/home/process";
import Contact from "../components/home/contact";
import Achievements from "../components/home/achievements";
import Blogs from "../components/home/blogs";
import ServicesCards from "../components/home/services-cards";

const IndexPage = (props) => {
  return (
    <>
      <Hero />
      <ServicesCards />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Process />
      <Achievements />
      <Blogs />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>
      Property Certification and Gas Safety Services | Home Safety Cert
    </title>
    <meta
      name="title"
      content="Gas Safety Services in London | Property Certification | Home Safety Cert"
    />
    <meta
      name="description"
      content="Ensure your property meets all certification requirements with our expert services. We specialize in Gas Safety, EICR, and more. Contact us today! Home Safety Cert."
    />
  </>
);
