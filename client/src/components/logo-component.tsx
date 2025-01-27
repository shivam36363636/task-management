import Image from "next/image";
import Link from "next/link";
import logo from "../app/logo-icon.png";

export default function LogoComponent({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      {!isOpen && (
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <span className="text-lg font-bold">Taskify</span>
        </Link>
      )}
    </>
  );
}
