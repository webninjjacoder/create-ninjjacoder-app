import { Footer, BaseLayout, Header } from '@mskcc/carbon-react';
import { FC, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

import routes from '~react-pages';

export interface PageSetupInterface {
  className?: string;
  children: ReactNode;
}

export const PageSetup: FC<PageSetupInterface> = ({ className, children }) => {
  const location = useLocation();

  const isActive = (route?: string) => {
    if (route) return location.pathname.endsWith(route);
  };

  const sortedRoutes = routes.sort((a, b) => {
    if (a.path === '/') {
      return -1;
    }
    if (b.path === '/') {
      return 1;
    }
    return 0;
  });

  const navRoutes = sortedRoutes.map((route, index) => {
    const routeName = route.path === '/' ? 'Home' : route.path;
    const routePath = route.path?.startsWith('/')
      ? route.path
      : `/${route.path}`;
    return (
      <li className='msk-header-app-nav-li' key={index}>
        <Link
          to={routePath ?? ''}
          className={`msk-header-app-nav-item${
            isActive(route.path) ? ' active' : ''
          }`}
        >
          <span className='msk-header-app-nav-item-text'>{routeName}</span>
        </Link>
      </li>
    );
  });

  return (
    <BaseLayout
      className={className}
      header={
        <Header
          maxWidth='fluid'
          productName='React Vite SPA'
          skipHref='#'
          appMenu={<ul className='msk-header-app-nav'>{navRoutes}</ul>}
        />
      }
      footer={<Footer maxWidth='fluid' />}
    >
      {children}
    </BaseLayout>
  );
};
