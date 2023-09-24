import BannerImg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="md:w-1/2  h-full">
        <h1 className=" text-[#6CA3BB] text-2xl font-bold text-center p-5 md:text-5xl">
          Your Go-To Destination for Shopping Bliss.
        </h1>
      </div>
 <div className="md:w-1/2 p-5"> <img src={BannerImg} alt="hero" className="w-full" /></div>
      
    </div>
  );
};

export default Banner;
