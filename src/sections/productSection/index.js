import "./style.css";
import Tab1 from "../../assets/images/tab1-logo.png";
import Tab2 from "../../assets/images/tab2-logo.png";
import Tab3 from "../../assets/images/tab3-logo.png";
import TabImage from "../../assets/images/tabimage.png";
import { Title } from "../../components";

const data = [
  {
    tab: {
      logo: Tab1,
      title: "Unitrade",
      desc: "DeFi Trading Platform Built from Uniswap",
    },
    content: {
      image: TabImage,
      title: "Unitrade",
      site: "unitrade.app",
      desc: "Schedule Buys / Sells, No KYC or Limits, Professional Trading Tools, Completely Decentralized",
    },
  },
  {
    tab: {
      logo: Tab2,
      title: "Unitrade",
      desc: "DeFi Trading Platform Built from Uniswap",
    },
    content: {
      image: TabImage,
      title: "Unitrade",
      site: "unitrade.app",
      desc: "Schedule Buys / Sells, No KYC or Limits, Professional Trading Tools, Completely Decentralized",
    },
  },
  {
    tab: {
      logo: Tab3,
      title: "Unitrade",
      desc: "DeFi Trading Platform Built from Uniswap",
    },
    content: {
      image: TabImage,
      title: "Unitrade",
      site: "unitrade.app",
      desc: "Schedule Buys / Sells, No KYC or Limits, Professional Trading Tools, Completely Decentralized",
    },
  },
];

const ProductSection = () => {
  return (
    <section className="product">
      <div className="container ">
        <div className="text-center">
          <Title
            title="Live Products"
            desc="Many of the best projects are using The Graph in production today."
          />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              {
                // data.map((item,i)=>())
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
