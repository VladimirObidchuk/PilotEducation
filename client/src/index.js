import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";
import { values } from "mobx";
import UserEducation from "./education/UserEducation";
import CoursEducation from "./education/CoursEducation";

export const Context = createContext(values);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserEducation(),
      coursEducation: new CoursEducation(),
    }}
  >
    <App />
  </Context.Provider>
);
