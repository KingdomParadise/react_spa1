import React from "react";
import { Layout } from "../components";
import {
  BannerSection,
  PartnerSection,
  NetworkSection,
  AboutSection,
  ProductSection,
  NewsSection,
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
        <NewsSection />
      </Layout>
    </div>
  );
};

export default Home;
