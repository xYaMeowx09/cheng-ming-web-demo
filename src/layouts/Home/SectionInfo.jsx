import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperNavigation from '../../components/SwiperNavigation';

export default function SectionInfo() {
  const [infoData] = useState([
    {
      id: 'temp-0',
      tag: '牆面',
      title: '牆面文章標題：...',
      imgUrl:
        'https://images.unsplash.com/photo-1649597211088-444c32af9574?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'temp-1',
      tag: '屋面',
      title: '屋面文章標題：...',
      imgUrl:
        'https://images.unsplash.com/photo-1602193471504-5dde016a1d9e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'temp-2',
      tag: '牆面',
      title: '牆面文章標題：...',
      imgUrl:
        'https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'temp-3',
      tag: '服務',
      title: '技術服務文章標題：...',
      imgUrl:
        'https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]);

  const swiperRef = useRef(null);
  return (
    <div className="container h-100">
      <div className="d-flex flex-column justify-content-center h-100 p-5">
        <div className="position-relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            style={{
              width: '90%',
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {infoData.map((data) => (
              <SwiperSlide>
                <div className="d-flex flex-column">
                  <Link className="stretch-link" to={`/article/${data.id}`}>
                    <div className="p-3 d-flex flex-column align-items-start">
                      <p className="border border-secondary rounded-pill px-3 py-1">
                        {data.tag}
                      </p>
                      <h3 className="fs-5">{data.title}</h3>
                    </div>
                    <img
                      src={data.imgUrl}
                      style={{
                        width: '100%',
                        height: '200px',
                      }}
                      className="object-fit-cover"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="position-absolute top-100 end-0">
            <SwiperNavigation
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
