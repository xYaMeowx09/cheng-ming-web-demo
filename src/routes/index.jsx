import { createHashRouter } from 'react-router';

// import 元件
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ArticleListsPage from '../pages/ArticleListsPage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'article-list',
        element: <ArticleListsPage />,
      },
      {
        path: 'product',
        element: <ProductPage />,
      },
    ],
  },
];

const router = createHashRouter(routes);
export default router;
