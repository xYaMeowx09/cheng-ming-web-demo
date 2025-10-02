import { Outlet } from 'react-router';

export default function ArticlePage() {
  return (
    <div className="container">
      <div className="pt-4">
        <Outlet />
      </div>
    </div>
  );
}
