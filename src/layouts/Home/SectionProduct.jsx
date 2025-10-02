import { useState } from 'react';
import { Link } from 'react-router';

export default function SectionProduct() {
  const [productCatalog] = useState([
    {
      title: '牆面系統',
      description: '建築表皮的美感',
      imgUrl:
        'http://pic-aboo.com/wp-content/uploads/building-hospital-001-s.png',
    },
    {
      title: '屋面系統',
      description: '建築屋面的堅守',
      imgUrl:
        'http://pic-aboo.com/wp-content/uploads/building-hospital-001-s.png',
    },
    {
      title: '樓面系統',
      description: '樓面系統...',
      imgUrl:
        'http://pic-aboo.com/wp-content/uploads/building-hospital-001-s.png',
    },
    {
      title: '其他系統',
      description: '其他...',
      imgUrl:
        'http://pic-aboo.com/wp-content/uploads/building-hospital-001-s.png',
    },
  ]);
  return (
    <div className="container h-100">
      <div className="d-flex align-items-center p-5 h-100">
        <ul className="row list-unstyled w-100 mx-auto">
          {productCatalog.map((catalog) => (
            <li className="product-card col-3" key={catalog.title}>
              <Link className="link-card p-3 stretch-link d-flex flex-column align-items-center">
                <div className="link-card-content">
                  <h3 className="link-card-title">{catalog.title}</h3>
                  <p className="link-card-subtitle">{catalog.description}</p>
                </div>
                <img src={catalog.imgUrl} className="img-fluid" />
                <span className="link-card-hover-text">瞭解更多</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
