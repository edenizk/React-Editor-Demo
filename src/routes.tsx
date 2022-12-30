import React, { useMemo } from 'react'
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Layout from './pages/Layout'
import PageList from './pages/PageList';
import DemoPage from './pages/DemoPage';
import EditPage from './pages/EditPage';
import NoMatch from './pages/NoMatch';

const Routes = () => {
  const routesObj: RouteObject[] = useMemo(() => (
    [
      {
        path: "/",
        element: <Layout/>,
        children: [
          { 
            index: true, 
            element: <PageList/> 
          },
          {
            path: "/page/0",
            element: <DemoPage/>,
          },
          {
            path: "/page/:id",
            element: <EditPage/>,
          },
          { 
            path: "*", 
            element: <NoMatch/> 
          },
        ],
      },
    ]
  ), [])

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  const element = useRoutes(routesObj);

  return element
}

export default Routes
