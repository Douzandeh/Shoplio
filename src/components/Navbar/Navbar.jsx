import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electoronics",
    link: "/#",
  },
];

function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}

      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 " />
              Shoplio
            </a>
          </div>

          {/* search bar and order button */}

          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-50 group-hover:w-75 transition-all duration-300 rounded-full border border-gray-300 bg-white dark:bg-gray-800 px-2 py-1 focus:outline-none focus:border focus:border-primary"
              />
              <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-linear-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>

          {/*order button */}
        </div>
      </div>
      {/* lower Navbar */}
      <div>
        <ul>
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
