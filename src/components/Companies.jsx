import { motion } from "framer-motion";
// import { fadeIn } from "../../varient"
const Companies = () => {

  return (
    <motion.div
      // variants={fadeIn("up", 0.2)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.7 }}
      className="flex max-w-[1840px] mt-20 justify-center items-center px-20 bg-zinc-800 grayscale mx-auto overflow-hidden"
    >
      <div className="relative flex gap-20">
        <div className="sm:py-12 h-32 sm:h-fit animate-marquee whitespace-nowrap flex gap-10">
          <span className="bg-transparent mx-4 w-fit">
            <img src="google.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="intel.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="netflix.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="philips.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="acer.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="symbols.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="tencent.png" alt="" />
          </span>
          <span className="bg-transparent ml-4 mr-16 w-fit">
            <img src="ebay.png" alt="" />
          </span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex md:gap-10">
          <span className="bg-transparent mx-4 w-fit">
            <img src="google.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="intel.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="netflix.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="philips.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="acer.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="symbols.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="tencent.png" alt="" />
          </span>
          <span className="bg-transparent mx-4 w-fit">
            <img src="ebay.png" alt="" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Companies;
