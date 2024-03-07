import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between wrapper">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Little Lemon logo.svg"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
