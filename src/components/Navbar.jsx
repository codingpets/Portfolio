import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  function handleNavbar() {
    setNavbar(!navbar);
  }
  return (
    <div>
      <div className=" absolute left-0 top-0 flex h-20 w-screen items-center justify-between px-10 py-4 shadow-sm ">
        <h1 className="text-xl font-medium text-gray-700 lg:text-2xl">
          coding<span className=" text-emerald-600">Pets</span>
        </h1>
        <ul className="hidden space-x-4 md:flex">
          <li className="cursor-pointer font-medium text-gray-700 hover:text-emerald-600 lg:text-xl">
            HOME
          </li>
          <li className="cursor-pointer font-medium text-gray-700 hover:text-emerald-600 lg:text-xl">
            ABOUT
          </li>
          <li className="cursor-pointer font-medium text-gray-700 hover:text-emerald-600 lg:text-xl">
            SKILLS
          </li>
          <li className="cursor-pointer font-medium text-gray-700 hover:text-emerald-600 lg:text-xl">
            CONTACT
          </li>
        </ul>
        <div className="z-10 flex sm:hidden" onClick={handleNavbar}>
          {!navbar ? (
            <AiOutlineClose size={24} className=" text-emerald-100 " />
          ) : (
            <AiOutlineMenu
              size={24}
              className=" cursor-pointer text-gray-700 "
            />
          )}
        </div>
      </div>
      {!navbar && (
        <div className=" z-1 absolute left-0 right-0 top-0  flex h-screen flex-col items-center justify-center bg-emerald-800 sm:hidden">
          <ul className="  flex flex-col items-center gap-20 text-emerald-100">
            <li className=" cursor-pointer text-xl font-medium hover:text-emerald-50">
              HOME
            </li>
            <li className=" cursor-pointer text-xl font-medium hover:text-emerald-50">
              ABOUT
            </li>
            <li className=" cursor-pointer text-xl font-medium hover:text-emerald-50">
              SKILLS
            </li>
            <li className=" cursor-pointer text-xl font-medium hover:text-emerald-50">
              CONTACT
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
