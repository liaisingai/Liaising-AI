import React, { lazy, Suspense } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Authenticator,
} from '@aws-amplify/ui-react';
const Layout = lazy(() =>  import("./components/layout/layout"));
const Subscription = lazy(() =>  import("./components/subscription/subscription"));
// const Home = lazy(() =>  import("./components/home/home"));
const Auth = lazy(() =>  import("./components/auth/auth"));
const Login = lazy(() =>  import("./components/login/login"));
const Find = lazy(() =>  import("./components/find/find"));
const Profiles = lazy(() =>  import("./components/profiles/profiles"));
const Requirements = lazy(() =>  import("./components/requirements/requirements"));
const Settings = lazy(() =>  import("./components/settings/settings"));

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspense fallback=" "><Login /></Suspense>} />
          <Route
            path="/find"
            element={
              <Auth> 
                <Suspense fallback=""><Find /></Suspense>
              </Auth>
            }
          />
          <Route
            path="/profiles"
            element={
              <Auth>
                <Suspense fallback=" "><Profiles /></Suspense>
              </Auth>
            }
          />
          <Route
            path="/requirements"
            element={
              <Auth>
                <Suspense fallback=" "><Requirements /></Suspense>
              </Auth>
            }
          />
          <Route
            path="/settings"
            element={
              <Auth>
                <Suspense fallback=" "><Settings /></Suspense>
              </Auth>
            }
          />
          <Route
            path="/subscriptions"
            element={
              <Auth>
                <Suspense fallback=" "><Subscription /></Suspense>
              </Auth>
            }
          />
          <Route path="/login" element={<Suspense fallback=" "><Login /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
};

export default App;