import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-white/15 bg-black">
      <footer className="container w-[full] px-5 mx-auto ">
        <div className=" flex  flex-col items-center justify-between gap-4  py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-[#c8ff00]"></span>

            <Link className="flex gap-2 items-center" href="/">
              <Image src="/logo.png" width={20} height={20} alt="logo" />
              <h1>FITLOG</h1>
            </Link>
          </div>

          <p className="text-center text-sm text-gray-300">
            © 2026 FitLog — Workout Library. Train hard, log honestly.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
