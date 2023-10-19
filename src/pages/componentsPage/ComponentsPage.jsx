import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ComponentsPage = () => {
  const isShow = useSelector((state) => state.aside.value);
  return (
    <>
      <aside className={`${isShow ? "show" : ""}`}>
        <h1 id="aside-title" className="text-xl font-semibold mb-4 px-2">
          Components
        </h1>
        <nav className="flex flex-col">
          <NavLink to="accordion1" className={"aside-link"}>
            Accordion1
          </NavLink>
          <NavLink to="accordion2" className={"aside-link"}>
            Accordion2
          </NavLink>
          <NavLink to="carousel1" className={"aside-link"}>
            Carousel1
          </NavLink>
          <NavLink to="pagination1" className={"aside-link"}>
            Pagination1
          </NavLink>
          <NavLink to="pagination2" className={"aside-link"}>
            Pagination2
          </NavLink>
          <NavLink to="pagination3" className={"aside-link"}>
            Pagination3
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
