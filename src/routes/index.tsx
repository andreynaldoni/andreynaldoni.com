import { lazy, Suspense } from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import Loading from 'components/Loading';
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRoutes>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </BrowserRoutes>
    </Suspense>
  );
};

export default Routes;
