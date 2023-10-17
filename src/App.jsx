import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { hideAside, showAside } from "./features/asideSlice";
import { useEffect } from "react";

const App = () => {
  const isShow = useSelector((state) => state.aside.value);
  const dispatch = useDispatch();
  function asideShow() {
    dispatch(showAside());
  }
  useEffect(() => {
    if (isShow) {
      window.addEventListener("scroll", () => {
        dispatch(hideAside());
      });
      window.addEventListener("click", (e) => {
        if (e.target.id && e.target.id == "showAside") {
          dispatch(showAside());
        } else {
          dispatch(hideAside());
        }
      });
    }
  }, [dispatch, isShow]);
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main className="min-h-screen px-3 md:px-16">
        <FaChevronRight
          onClick={asideShow}
          id="showAside"
          className="fixed mt-2 left-2 z-40 block sm:hidden opacity-30 hover:opacity-100 cursor-pointer border rounded p-1 text-2xl"
        />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
