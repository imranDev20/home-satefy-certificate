import * as React from "react";
import loadable from "@loadable/component";
import Layout from "../components/global/layout";
import Services from "../components/home/services";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Pricing from "../components/home/pricing";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Pricing />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
