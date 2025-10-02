import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperNavigation from '../../components/SwiperNavigation';

export default function SectionBrand() {
  const [bannerData] = useState([
    {
      imgUrl:
        'https://images.unsplash.com/photo-1753146752494-de8d6a6dc791?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1647079002654-f1f3f701b39f?q=80&w=1250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      imgUrl:
        'https://plus.unsplash.com/premium_photo-1747069562744-938af186dfd9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]);
  const swiperRef = useRef(null);

  // const handleNavigatePrevSlide = () => swiperRef.current.slidePrev();
  // const handleNavigateNextSlide = () => swiperRef.current.slideNext();

  return (
    <div className="position-relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="d-flex flex-column"
      >
        {bannerData.map((data) => (
          <SwiperSlide>
            <div
              className="bg-cover"
              style={{
                height: '90vh',
                backgroundImage: `url(${data?.imgUrl})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="position-absolute top-100 end-0" style={{ zIndex: '10' }}>
        <SwiperNavigation
          onPrev={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
        />
      </div>
    </div>
  );
}
