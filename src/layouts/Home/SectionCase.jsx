import { useState } from 'react';
import CaseCard from '../../components/CaseCard';

export default function SectionCase() {
  const [caseData] = useState([
    {
      caseCategory: '製造',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      caseCategory: '科技',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1595798896730-9fdf2e709649?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      caseCategory: '場館',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1547895749-888a559fc2a7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      caseCategory: '產業園',
      backgroundImageUrl:
        'https://plus.unsplash.com/premium_photo-1711132342037-885a3c261da5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      caseCategory: '運輸',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1619620469874-ab0ef2763f94?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      caseCategory: '動力',
      backgroundImageUrl:
        'https://plus.unsplash.com/premium_photo-1674043991849-9b313155d218?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]);
  return (
    <div className="container h-100">
      <div className="d-flex flex-column justify-content-center px-5 h-100">
        <ul className="row row-cols-6 justify-content-between list-unstyled h-75">
          {caseData.map((data) => (
            <li className="case-card col d-block">
              <CaseCard
                backgroundImageUrl={data.backgroundImageUrl}
                caseCategory={data.caseCategory}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
