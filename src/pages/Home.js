import React from "react";
import { Layout } from "../components";
import {
  BannerSection,
  PartnerSection,
  NetworkSection,
  AboutSection,
  ProductSection,
} from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <BannerSection />
        <PartnerSection />
        <NetworkSection />
        <AboutSection />
        <ProductSection />
      </Layout>
    </div>
  );
};

export default Home;
