import { useState } from "react";
import Nav from "../components/Nav.jsx";

// import electronIcon from "../../public/icons/electron.svg";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isActive) {
      document.documentElement.style.overflow = "auto";
      setIsActive(false);

      console.log(isActive);

      return;
    }
    setIsActive(!isActive);
    console.log(isActive);
    document.documentElement.style.overflow = "hidden";
  };
  return (
    <nav
      className={` ${
        isActive ? "fixed justify-between" : ""
      } h-20 w-screen flex gap-4 p-3 bg-gray-100 shadow-xl fixed z-10`}
    >
      <span
        onClick={handleClick}
        className={`${
          isActive
            ? "order-last bg-transparent before:rotate-45 before:top-0 after:bottom-0  after:-rotate-45"
            : "opacity-100"
        }  relative bg-black h-[3px] w-6 block my-auto rounded-md before:content-[''] before:absolute before:transition-all before:top-2 before:w-6 before:h-[3px] before:rounded-md before:bg-black after:content-[''] after:absolute after:transition-all after:bottom-2 after:w-6 after:h-[3px] after:rounded-md after:bg-black`}
      />
      <div className={`flex items-center`}>
        <h2 className="text-3xl font-bold first-letter:text-4xl italic tracking-wider">
          Electron
        </h2>
      </div>
      <Nav isActive={isActive} />
    </nav>
  );
};

export default NavBar;
