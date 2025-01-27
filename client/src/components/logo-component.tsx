import { CircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function LogoComponent({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      {!isOpen && (
        <Link href="/" className="flex items-center gap-2">
          <CircleArrowOutUpRight className={`w-5 h-5 text-blue-500`} />
          <span className="text-blue-500 truncate">Taskify</span>
        </Link>
      )}
    </>
  );
}
