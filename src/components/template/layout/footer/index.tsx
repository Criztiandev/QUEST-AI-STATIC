import Logo from "@/components/atoms/other/logo";

const Footer = () => {
  return (
    <footer className="px-32 my-16 border">
      <div className="w-full flex justify-between items-center">
        <div>
          <Logo />
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        </div>

        <div className="flex gap-16">
          <div>
            <span>About</span>
            <ul>
              <li>Features</li>
              <li>Tokenomics</li>
              <li>Features</li>
              <li>Roadmap</li>
              <li>Whitepaper</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
