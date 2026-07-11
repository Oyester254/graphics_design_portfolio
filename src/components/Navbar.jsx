import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav
      className="
      bg-white
      shadow-sm
      sticky
      top-0
      z-50
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-8
        lg:px-12
        h-20
        flex
        items-center
        justify-between
      "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
            text-2xl
            font-bold
            text-gray-900
          "
        >
          Mish<span className="text-blue-600">Design</span>
        </Link>

        {/* Desktop Menu */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
        "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="
                  text-gray-600
                  hover:text-blue-600
                  transition
                  font-medium
                "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-gray-700
            text-3xl
          "
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
            md:hidden
            border-t
            bg-white
            px-5
            py-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
            "
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="
                    text-gray-700
                    hover:text-blue-600
                    font-medium
                  "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
