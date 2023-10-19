import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ReduxPage = () => {
  const isShow = useSelector((state) => state.aside.value);
  return (
    <>
      <aside className={`${isShow ? "show" : ""}`}>
        <h1 id="aside-title" className="text-xl font-semibold mb-4 px-2">
          Components
        </h1>
        <nav className="flex flex-col">
          <NavLink to="counter" className={"aside-link"}>
            Counter
          </NavLink>
        </nav>
      </aside>
      <div className="float-right w-full sm:w-3/4 p-2 pt-4">
        <Outlet />
      </div>
    </>
  );
};

export default ReduxPage;
