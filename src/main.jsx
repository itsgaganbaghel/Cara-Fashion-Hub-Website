import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NewArrivalsContext from "./Context/NewArrivalsContext.jsx";
import FeaturedProductContext from "./Context/FeaturedProductContext.jsx";
import SetBackgroundContext from "./Context/SetBackgroundContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NewArrivalsContext>
        <FeaturedProductContext>
          <SetBackgroundContext>
            <App />
          </SetBackgroundContext>
        </FeaturedProductContext>
      </NewArrivalsContext>
    </BrowserRouter>
  </StrictMode>
);
