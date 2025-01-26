import PrimarySingleLogo from "@/components/atoms/logo/primary-single-logo";
import { useMenuBar } from "@/context/layout/menu-bar-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpecialButton from "@/components/atoms/button/special-button";

const Header = () => {
  const isMobile = useIsMobile();
  const { isMenuOpen, toggleMenu } = useMenuBar();

  const menuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 1 },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  const listVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
    }
  };

  const navItems = [
    { label: "Features", id: "feature" },
    { label: "Roadmap", id: "roadmap" },
    { label: "Tokenomics", id: "tokenomics" },
    { label: "FAQs", id: "faq" },
    { label: "Support", id: "support" },
  ];

  return (
    <div className="border-b border-muted-foreground/52">
      <header className="p-4">
        <nav className="flex justify-between items-center">
          <PrimarySingleLogo />

          {!isMobile && (
            <ul className="flex items-center gap-12 text-xl">
              {navItems.map(({ label, id }) => (
                <li key={label}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(id);
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {isMobile ? (
            <motion.button onClick={toggleMenu} whileTap={{ scale: 0.95 }}>
              {isMenuOpen ? (
                <X color="white" size={28} />
              ) : (
                <MenuIcon color="white" size={28} />
              )}
            </motion.button>
          ) : (
            <SpecialButton>Get Started</SpecialButton>
          )}
        </nav>
      </header>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-hidden"
          >
            <motion.ul
              variants={listVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col items-start px-4 pt-4"
            >
              {navItems.map(({ label, id }) => (
                <motion.li
                  key={label}
                  variants={itemVariants}
                  className="w-full py-2"
                >
                  <a
                    href={`#${id}`}
                    className="text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(id);
                    }}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
