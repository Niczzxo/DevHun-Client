import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useNavigate } from "react-router";
import bannerSliderData from "../../../data/bannerSliderData";
import MyButton from "../MyButton/MyButton";

const BannerSlider = () => {
  const navigate = useNavigate();
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (_, time) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
      >
        {bannerSliderData.map((item) => (
          <SwiperSlide key={item.id}>
              <div className="w-full h-[70dvh] relative overflow-hidden rounded-[2rem]">
                <img
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center p-8">
                  <div className="text-center space-y-8 max-w-4xl">
                    <div className="space-y-4">
                      <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
                        {item.title}
                      </h1>
                      <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                      <MyButton 
                        onClick={() => navigate("/all-jobs")}
                        className="w-full sm:w-auto px-10! py-4! text-lg!"
                      >
                        Find Opportunities
                      </MyButton>

                      <MyButton 
                        variant="secondary"
                        onClick={() => navigate("/dashboard/add-job")}
                        className="w-full sm:w-auto px-10! py-4! text-lg!"
                      >
                        Post a Vacancy
                      </MyButton>
                    </div>
                  </div>
                </div>
              </div>
          </SwiperSlide>
        ))}

        <div
          className="size-12 z-10 absolute bottom-4 right-4 flex items-center justify-center font-bold text-secondary dark:text-primary"
          slot="container-end"
        >
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default BannerSlider;
