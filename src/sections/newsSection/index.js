import "./style.css";
import { Title } from "../../components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slide1 from "../../assets/images/slider1.png";
import youtubeImage from "../../assets/images/youtubeposter.png";
const data = [
  {
    image: Slide1,
    title: "PolarSync Launch",
    title2: "Polar Sync <> Finally Launched 🎉",
    desc: "After an action-packed 24 hours, we wanted to provide Community with a detailed update regarding the official Polar Sync launch 👏",
    date: "12th of July 2021",
  },
  {
    image: Slide1,
    title: "PolarSync Launch",
    title2: "Polar Sync <> Second Launched 🎉",
    desc: "After an action-packed 24 hours, we wanted to provide Community with a detailed update regarding the official Polar Sync launch 👏",
    date: "12th of July 2021",
  },
  {
    image: Slide1,
    title: "PolarSync Launch",
    title2: "Polar Sync <> Second Launched 🎉",
    desc: "After an action-packed 24 hours, we wanted to provide Community with a detailed update regarding the official Polar Sync launch 👏",
    date: "12th of July 2021",
  },
];

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
          {data.map((item, i) => (
            <div className="flex flex-col md:flex-row">
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
        <div className="flex">
          <div className="w-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
