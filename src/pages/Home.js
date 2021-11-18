import React from "react";
import { Layout } from "../components";
import { BannerSection, PartnerSection } from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <BannerSection />
        <PartnerSection />
      </Layout>
    </div>
  );
};

export default Home;
