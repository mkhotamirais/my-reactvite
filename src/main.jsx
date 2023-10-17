import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import ComponentsPage from "./pages/componentsPage/ComponentsPage.jsx";
import Accordion1 from "./pages/componentsPage/accordion1/Accordion1.jsx";
import Carousel1 from "./pages/componentsPage/carousel1/Carousel1.jsx";
import Pagination1 from "./pages/componentsPage/pagination1/Pagination1.jsx";
import ComponentsPageHome from "./pages/componentsPage/ComponentsPageHome.jsx";
// import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsPage />}>
          <Route path="" element={<ComponentsPageHome />} />
          <Route path="accordion1" element={<Accordion1 />} />
          <Route path="pagination1" element={<Pagination1 />} />
          <Route path="carousel1" element={<Carousel1 />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
