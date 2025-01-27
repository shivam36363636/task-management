import Image from "next/image";
import Link from "next/link";
import logo from "../app/logo-icon.png";
import { motion } from "framer-motion";

export default function LogoComponent({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Link href="/" className={`flex items-center gap-2`}>
            <Image src={logo} alt="Logo" width={30} height={30} />
            <span className="text-lg font-bold">Taskify</span>
          </Link>
        </motion.div>
      )}
    </>
  );
}
