/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import { Title } from "../../components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import youtubeImage from "../../assets/images/youtubeposter.png";
import Twitter1 from "../../assets/images/twitter1.png";
import { sliderData, twitterData } from "./data";

const NewsSection = () => {
  const options = {
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    items: 1,
    // animateOut: "fadeIn",
  };

  return (
    <section className="news">
      <div className="container">
        <Title
          title="News & updates"
          desc="Discover featured news and what other are saying"
        />

        <OwlCarousel className="owl-theme my-20" {...options}>
          {sliderData.map((item, i) => (
            <div className="flex flex-col md:flex-row" key={i}>
              <div className="w-56 md:w-48 lg:w-60">
                <img src={item.image} alt="" className="w-full" />
              </div>
              <div className="flex-1 mt-8 md:mt-0 md:ml-8">
                <p className="text-base lg:text-lg">{item.title}</p>
                <h4 className="text-2xl lg:text-3xl font-bold my-4 lg:mt-8">
                  {item.title2}
                </h4>
                <p className="text-base lg:text-lg sm:mr-20  lg:mr-60">
                  {item.desc}
                </p>
                <span className="mt-4 block text-base lg:text-lg text-gray-400">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </OwlCarousel>
        <div>
          <img src={youtubeImage} alt="" />
        </div>
        <div className="mt-20 twitter-container">
          {twitterData.map((item, i) => (
            <div className="w-full sm:w-1/2 md:w-1/3 col" key={i}>
              <div className="twitter-card p-4 rounded-lg">
                <div className="flex">
                  <img src={item.image} alt="" />
                  <div className="ml-4">
                    <p className="text-lg">{item.name}</p>
                    <span className="text-base" style={{ color: "#819EBC" }}>
                      {item.id}
                    </span>
                  </div>
                </div>
                <p
                  className="mt-4 text-lg"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
