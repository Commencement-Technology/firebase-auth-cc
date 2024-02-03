import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { RoutesEnum } from "./routes";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={RoutesEnum.Login} element={<Login />} />
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.Register} element={<Register />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
