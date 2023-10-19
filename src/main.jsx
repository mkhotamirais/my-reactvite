import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import ComponentsPage from "./pages/componentsPage/ComponentsPage.jsx";
import Carousel1 from "./pages/componentsPage/carousel/Carousel1.jsx";
import ComponentsPageHome from "./pages/componentsPage/ComponentsPageHome.jsx";
import Accordion1 from "./pages/componentsPage/accordion/Accordion1.jsx";
import Accordion2 from "./pages/componentsPage/accordion/Accordion2.jsx";
import Pagination1 from "./pages/componentsPage/pagination/Pagination1.jsx";
import Pagination2 from "./pages/componentsPage/pagination/Pagination2.jsx";
import Pagination3 from "./pages/componentsPage/pagination/Pagination3.jsx";
import ReduxPage from "./pages/reduxPage/ReduxPage.jsx";
import ReduxPageHome from "./pages/reduxPage/ReduxPageHome.jsx";
import Counter from "./pages/reduxPage/counter/Counter.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsPage />}>
          <Route path="" element={<ComponentsPageHome />} />
          <Route path="accordion1" element={<Accordion1 />} />
          <Route path="accordion2" element={<Accordion2 />} />
          <Route path="pagination1" element={<Pagination1 />} />
          <Route path="pagination2" element={<Pagination2 />} />
          <Route path="pagination3" element={<Pagination3 />} />
          <Route path="carousel1" element={<Carousel1 />} />
        </Route>
        <Route path="/redux" element={<ReduxPage />}>
          <Route path="" element={<ReduxPageHome />} />
          <Route path="counter" element={<Counter />} />
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
