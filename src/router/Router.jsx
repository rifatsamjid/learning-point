import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router";

const HomeLayout = lazy(() => import("../layout/HomeLayout"));
const Home = lazy(() => import("../page/Home"));
const LogIn = lazy(() => import("../components/LogIn/LogIn"));
const Register = lazy(() => import("../components/Register/Register"));
const MyProfile = lazy(() => import("../components/MyProfile/MyProfile"));
const Details = lazy(() => import("../components/Details/Details"));
const ForgetPassword = lazy(() =>
  import("../components/ForgetPassword/ForgetPassword")
);
const Error = lazy(() => import("../components/Error/Error"));

const Loading = () => (
  <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="text-2xl animate-pulse">Loading...</div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <HomeLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loading />}>
            <MyProfile />
          </Suspense>
        ),
      },
      {
        path: "details/:skillId",
        element: (
          <Suspense fallback={<Loading />}>
            <Details />
          </Suspense>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
  {
    path: "/auth/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LogIn />
      </Suspense>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <Suspense fallback={<Loading />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/auth/login/forget",
    element: (
      <Suspense fallback={<Loading />}>
        <ForgetPassword />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
  },
]);

export default router;
