/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@containers/layout';

import Home from '@pages/home';
import NotFound from '@pages/not-found';

import '@styles/global.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="destinationId/:destinationId" element={<Home />}>
            <Route path="pageNumber/:pageNumber" element={<Home />}>
              <Route path="pageSize/:pageSize" element={<Home />}>
                <Route path="checkIn/:checkIn" element={<Home />}>
                  <Route path="checkOut/:checkOut" element={<Home />}>
                    <Route path="adults1/:adults1" element={<Home />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
