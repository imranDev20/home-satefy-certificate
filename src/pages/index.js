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

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <ServicesCards />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Process />
      <Achievements />
      <Blogs />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
