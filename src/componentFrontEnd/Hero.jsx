// import content
import { useEffect, useState } from "react";
import { content } from "../Content";
import Profile from "../api/ProFile";
const Hero = () => {
  let { hero } = content;
  const [heroData,setData] = useState({
    id: 1,
    title: "",
    firstName: "",
    LastName: "",
    image:
      "https://antimatter.vn/wp-content/uploads/2022/05/anh-gif-co-be-trong-long-kinh.gif",
    heroContent: [
      {
        count: "2+",
        text: "Năm kinh nghiệp trong làm Web",
      },
      {
        count: "12+",
        text: "Dự án đã làm trong sự nghiệp của tôi",
      },
    ],});
  
  useEffect(  () => {
    getDataHero();
  },[])
  const getDataHero = async () => {
  const data = await Profile.GetFrofile({});
  setData(data);
  }

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {heroData.firstName}{" "}
            <span className="text-dark_primary">{heroData.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{heroData.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{"xem ngay"}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {heroData.heroContent.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}+</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={heroData.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
