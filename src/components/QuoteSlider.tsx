import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import Billgates from "../assets/bill-gates.jpg";
import LinusTorvalds from "../assets/linus-torvalds.jpg";
import LarryPage from "../assets/larry-page.jpg";
import SteveJobs from "../assets/steve-jobs.jpg";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

const quotesData = [
  {
    author: "Bill Gates",
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    image: Billgates,
  },
  {
    author: "Linus Torvalds",
    quote:
      "See, you not only have to be a good coder to create system like Linux, you have to be a sneaky bastard too.",
    image: LinusTorvalds,
  },
  {
    author: "Larry Page",
    quote:
      "If you're changing the world, you're working on important things. You're excited to get up in the morning.",
    image: LarryPage,
  },
  {
    author: "Steve Jobs",
    quote:
      "Because the people who are crazy enough to think they can change the world are the ones who do.",
    image: SteveJobs,
  },
];

const QuoteSlider = () => {
  return (
    <div className="mt-5 p-5">
      <div className="bg-[#e55c4c] mx-auto p-5">
        <h1 className="text-white text-4xl font-thin text-center mt-5">
          Inspiring Quotes
        </h1>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          scrollbar={{ draggable: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          {quotesData.map((quote, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center w-full p-5 mt-5">
                <div className="mt-5">
                  <img src={quote.image} alt="" className="rounded-full" />
                </div>
                <div className="mt-5">
                  <p className="text-white text-2xl font-serif">
                    {quote.quote}
                  </p>
                  <p className="text-center text-white">
                    by <span className="font-bold">{quote.author}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QuoteSlider;
