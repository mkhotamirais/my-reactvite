import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isOpenbar, setIsOpenbar] = useState(false);
  const navref = useRef(null);

  function openBar() {
    setIsOpenbar(!isOpenbar);
    // console.log(navref.current.scrollHeight);
  }
  function changeBar() {
    setIsOpenbar(!isOpenbar);
  }

  useEffect(() => {
    if (isOpenbar) {
      window.addEventListener("scroll", () => {
        setIsOpenbar(!isOpenbar);
      });
      window.addEventListener("click", (e) => {
        if (e.target.id && e.target.id == "barsLayer") {
          setIsOpenbar(true);
        } else {
          setIsOpenbar(!isOpenbar);
        }
      });
    }
  }, [isOpenbar]);
  return (
    <header className="sticky top-0 z-50 h-16 px-3 md:px-16 flex justify-between items-center border-b backdrop-blur-[3px] bg-[hsla(0,0%,100%,.8)]">
      <Link to="/" className="uppercase text-xl md:text-2xl font-semibold">
        logo
      </Link>
      <div onClick={openBar} className="relative block sm:hidden border p-1 rounded cursor-pointer">
        <div
          id="barsLayer"
          className={`${isOpenbar ? "hidden" : "block"} bg-tranparent absolute left-0 right-0 top-0 bottom-0`}
        ></div>
        {isOpenbar ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </div>
      <ul
        ref={navref}
        className={`transition-all duration-300 z-50 overflow-hidden ${
          isOpenbar ? "h-[96px]" : "h-0"
        } sm:h-auto border-b sm:border-none sm:flex absolute top-16 left-0 right-0 sm:static bg-white sm:bg-transparent`}
      >
        <li className="nav-list">
          <NavLink onClick={changeBar} to="/" className={"nav-link"}>
            home
          </NavLink>
        </li>
        <li className="nav-list">
          <NavLink onClick={changeBar} to="/components" className={"nav-link"}>
            compoenents
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
