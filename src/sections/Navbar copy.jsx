import { useState } from "react";
import { motion } from "motion/react";
import { Link as ScrollLink } from "react-scroll";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <ScrollLink
          className="nav-link cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Home
        </ScrollLink>
      </li>
      <li className="nav-li">
        <ScrollLink
          className="nav-link cursor-pointer"
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
        >
          About
        </ScrollLink>
      </li>
      <li className="nav-li">
        <ScrollLink
          className="nav-link cursor-pointer"
          to="work"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Work
        </ScrollLink>
      </li>
      <li className="nav-li">
        <ScrollLink
          className="nav-link cursor-pointer"
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Contact
        </ScrollLink>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-pointer"
          >
            Dararith J.
          </ScrollLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
