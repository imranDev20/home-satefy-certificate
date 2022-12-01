import * as React from "react";
import loadable from "@loadable/component";
import Layout from "../components/global/layout";
import Services from "../components/home/services";
import Hero from "../components/home/hero";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
