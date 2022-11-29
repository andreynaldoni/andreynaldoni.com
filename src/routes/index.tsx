import { lazy, Suspense } from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import Loading from 'components/Loading';
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const CV = lazy(() => import('pages/CV'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </BrowserRoutes>
    </Suspense>
  );
};

export default Routes;
