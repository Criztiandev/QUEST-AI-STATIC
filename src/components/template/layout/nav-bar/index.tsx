import NavButton from "@/components/atoms/button/nav-button";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-16">
      <div>
        <img src="" alt="" />
      </div>

      <ul className="flex items-center gap-12 text-xl">
        <li>
          <Link to="/">Features</Link>
        </li>

        <li>
          <Link to="/">Roadmap</Link>
        </li>

        <li>
          <Link to="/">Tokenomics</Link>
        </li>

        <li>
          <Link to="/">FAQs</Link>
        </li>

        <li>
          <Link to="/">Support</Link>
        </li>
      </ul>

      <div>
        <NavButton>Get Started</NavButton>
      </div>
    </nav>
  );
};

export default Navbar;
