import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes, studentRoutes } from "./routes";
import { Context } from "../index";

function AppRouter() {
  const { user } = useContext(Context);
  // console.log(user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {user.isStudent &&
        studentRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
