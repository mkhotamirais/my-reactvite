import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ComponentsPage = () => {
  const isShow = useSelector((state) => state.aside.value);

  return (
    <>
      <aside
        className={`${
          isShow ? "block" : "hidden"
        } z-50 border-r sm:border-none bg-white fixed left-0 sm:sticky top-16 sm:block min-h-screen w-3/4 sm:w-1/4 px-2 sm:px-0 md:pr-2 pt-4 sm:float-left`}
      >
        <h1 className="text-xl font-semibold mb-4 px-2">Components</h1>
        <nav className="flex flex-col">
          <NavLink to="accordion1" className={"aside-link"}>
            Accordion1
          </NavLink>
          <NavLink to="carousel1" className={"aside-link"}>
            Carousel1
          </NavLink>
          <NavLink to="pagination1" className={"aside-link"}>
            Pagination1
          </NavLink>
        </nav>
      </aside>
      <div className="float-right w-full sm:w-3/4 p-2 pt-4">
        <Outlet />
      </div>
    </>
  );
};

export default ComponentsPage;
