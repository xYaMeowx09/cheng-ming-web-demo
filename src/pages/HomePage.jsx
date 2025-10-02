// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

// swiper style
import 'swiper/css';
import 'swiper/css/pagination';

// components
import SectionBrand from '../layouts/Home/SectionBrand';
import SectionProduct from '../layouts/Home/SectionProduct';
import SectionInfo from '../layouts/Home/SectionInfo';
import SectionCase from '../layouts/Home/SectionCase';

export default function HomePage() {
  const pagination = {
    clickable: true,
    renderBullet: customRenderBullet,
  };
  return (
    <Swiper
      className="custom-vertical-swiper"
      style={{ height: '100vh' }}
      direction={'vertical'}
      pagination={pagination}
      mousewheel={{
        thresholdDelta: 50,
        thresholdTime: 1000,
      }}
      modules={[Pagination, Mousewheel]}
    >
      <SwiperSlide>
        <SectionBrand />
      </SwiperSlide>
      <SwiperSlide>
        <SectionProduct />
      </SwiperSlide>
      <SwiperSlide>
        <SectionCase />
      </SwiperSlide>
      <SwiperSlide>
        <SectionInfo />
      </SwiperSlide>
    </Swiper>
  );
}

const customRenderBullet = (index, className) => {
  const slideNames = ['品牌', '產品', '案例', '資訊'];

  return `
      <div class="${className}" data-index="${index}">
        <span class="swiper-bullet-text stretch-link">${slideNames[index]}</span>
      </div>
    `;
};
