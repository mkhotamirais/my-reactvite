import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { FaChevronRight } from "react-icons/fa";

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main className="min-h-screen px-3 md:px-16">
        <FaChevronRight className="block sm:hidden opacity-30 hover:opacity-100 cursor-pointer border rounded p-1 text-2xl mt-2 -ml-2" />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
