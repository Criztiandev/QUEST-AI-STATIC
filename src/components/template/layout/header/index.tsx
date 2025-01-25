import { useMenuBar } from "@/context/layout/menu-bar-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  const isMobile = useIsMobile();
  const { isMenuOpen, toggleMenu } = useMenuBar();
  return (
    <div>
      <header className="p-4">
        <nav className="flex justify-between items-center">
          <div>Logo</div>

          {!isMobile && (
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
          )}

          <button onClick={toggleMenu}>
            <MenuIcon color="white" size={28} />
          </button>
        </nav>
      </header>
      {isMobile && isMenuOpen && (
        <div className="min-h-[100vh] ">
          <ul className="flex flex-col items-start px-4 gap-2">
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
        </div>
      )}
    </div>
  );
};

export default Header;
