import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import page from './page-hoc-route'

// 动态导入页面组件
const User = lazy(() => import(/* webpackChunkName: "user" */ './pages/user/index'));
const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/home/index'));
const Manage = lazy(() => import(/* webpackChunkName: "manage" */ './pages/manage/index'));

function App() {
    console.log(page);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
