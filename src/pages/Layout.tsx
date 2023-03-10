import React from 'react'
import { Outlet } from "react-router-dom";
import PageProvider from '@providers/page/PageProvider'
import Nav from '@components/Nav';

const Layout = () => {

  return (
    <>
      <Nav />
      <PageProvider>
        <Outlet />
      </PageProvider>
    </>
  );
}


export default Layout
