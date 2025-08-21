import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-red-500/50 overflow-hidden">
      <div className="relative h-12 flex items-center">
        <div className="warning-scroll">
          WARNING: IF YOU DON'T WANT TO MAKE FUCK TONNES OF MONEY, DO NOT WASTE OUR TIME
        </div>
      </div>
    </header>
  );
};

export default Header;
