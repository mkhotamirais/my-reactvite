import { NavLink, Outlet } from "react-router-dom";

const ComponentsPage = () => {
  return (
    <>
      <aside className="hidden sm:block min-h-screen w-1/4 px-0 md:pr-2 pt-4 sticky top-16 float-left">
        <h1 className="text-xl font-semibold mb-4 px-2">Components</h1>
        <nav className="flex flex-col">
          <NavLink to="carousel1" className={"aside-link"}>
            Carousel1
          </NavLink>
          <NavLink to="pagination1" className={"aside-link"}>
            Pagination1
          </NavLink>
          <NavLink to="accordion1" className={"aside-link"}>
            Accordion1
          </NavLink>
        </nav>
      </aside>
      <div className="float-right w-3/4 p-2 pt-4">
        <Outlet />
      </div>
    </>
  );
};

export default ComponentsPage;
