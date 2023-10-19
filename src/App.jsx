import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { hideAside, showAside } from "./pages/asideSlice";
import { useEffect } from "react";

const App = () => {
  const isShow = useSelector((state) => state.aside.value);
  const dispatch = useDispatch();
  function showAsideBtn() {
    dispatch(showAside());
  }
  useEffect(() => {
    if (isShow) {
      window.addEventListener("scroll", () => {
        dispatch(hideAside());
      });
      window.addEventListener("click", (e) => {
        if (e.target.id && e.target.id == "btnAsideLayer") {
          dispatch(showAside());
        } else if (e.target.tagName == "ASIDE" || e.target.id == "aside-title") {
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
        <AsideBtn showAsideBtn={showAsideBtn} />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const AsideBtn = ({ showAsideBtn }) => {
  return (
    <div
      onClick={showAsideBtn}
      className="fixed border flex w-6 h-6 items-center justify-center cursor-pointer mt-2 -ml-1 opacity-40 rounded hover:opacity-100"
    >
      <div id="btnAsideLayer" className="absolute top-0 bottom-0 left-0 right-0 bg-transparent"></div>
      <FaChevronRight id="showAside" className="text-sm" />
    </div>
  );
};
AsideBtn.propTypes;

export default App;
