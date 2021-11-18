import React from "react";
import { Layout } from "../components";
import { BannerSection, PartnerSection, NetworkSection } from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <BannerSection />
        <PartnerSection />
        <NetworkSection />
      </Layout>
    </div>
  );
};

export default Home;
