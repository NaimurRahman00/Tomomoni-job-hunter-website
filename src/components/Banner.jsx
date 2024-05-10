import { PiStarFourFill } from "react-icons/pi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import { IoSearch } from "react-icons/io5";

const Banner = () => {
  const banners = [
    {
      title: "Remote Customer Support Specialist",
      description:
        "Provide excellent service via phone and email, troubleshoot issues, and assist customers with product inquiries.",
    },
    {
      title: "Onsite Software Engineer",
      description:
        "Collaborate with teams to develop and maintain software applications, write code, and optimize performance.",
    },
    {
      title: "Part-Time Marketing Coordinator",
      description:
        "Create content, manage social media, and execute campaigns to promote brand awareness.",
    },
    {
      title: "Hybrid Project Manager",
      description:
        "Oversee projects both remotely and in-person, ensuring timely delivery and effective communication.",
    },
    {
      title: "Job Listings Curator",
      description:
        "Research and compile job openings, categorize roles, and maintain an up-to-date database.",
    },
  ];
  return (
    <div className="h-60 pt-20 px-20 w-full container mx-auto md:h-[470px] lg:h-[540px] relative overflow-hidden">
      <div className="flex items-center gap-6 text-4xl text-white/95">
        <h2 className="capitalize font-bold font-lato">
          Find your dream job here
        </h2>
        <PiStarFourFill />
      </div>
      <div className="grid grid-cols-12 my-10 gap-10">
        <div className="col-span-3 w-full h-[145%] rounded-lg bg-slate-100/10"></div>
        <div className="col-span-9 w-full rounded-lg mx-auto bg-slate-100/10 h-60">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{
              hide: false,
            }}
            modules={[Autoplay, Scrollbar]}
            className="mySwiper text-white h-full"
          >
            {banners.map((banner, idx) => (
              <SwiperSlide key={idx} className="p-8">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-3xl font-bold mb-3 font-lato">
                      {banner.title}
                    </h2>
                    <p className="text-xl ">{banner.description}</p>
                  </div>
                  <div>
                    <button className="btn w-fit font-bold">
                      Explore more
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative mt-10">
            <IoSearch className="absolute top-1/2 -translate-y-[45%] left-6" />
            <input
              type="text"
              className="bg-gray-100 w-full py-5 px-20 border rounded-lg text-black/80 text-md"
              placeholder="Job title or keyword"
            />
            <button className="absolute right-2 top-1/2 -translate-y-[50%] rounded-full bg-black/90 px-6 py-3 text-xs font-bold text-white/90 duration-300 active:scale-95 uppercase font-poppins">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
