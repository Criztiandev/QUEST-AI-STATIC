import PrimaryLongLogoWhite from "@/components/atoms/logo/primary-long-logo-white";

const Footer = () => {
  return (
    <footer className="px-6 mb-16">
      <div className="flex flex-col ">
        <div className="flex flex-col items-center mt-24 mb-16">
          <PrimaryLongLogoWhite />
          <p className="text-muted-foreground text-center max-w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-2 gap justify-items-center">
          <div className="flex flex-col space-y-2">
            <span className="text-lg font-bold">About</span>
            <ul className="text-muted-foreground">
              <li>Features</li>
              <li>Tokenomics</li>
              <li>Features</li>
              <li>Roadmap</li>
              <li>Whitepaper</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-lg font-bold">Support</span>
            <ul className="text-muted-foreground">
              <li>Email</li>
              <li>Telegram</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
