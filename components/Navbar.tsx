import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return <nav className="secondaryBackground flex flex-row justify-between items-center h-20">
        <Link href={"/"} className="left flex flex-row items-center gap-x-2 p-3">
            <Image alt="curaconnect_logo" src="/images/nav_logo.svg" width={50} height={50} />
            <div className="tracking-wide text-2xl">CURACONNECT</div>
        </Link>
        <div className="w-2/5 right flex flex-row items-center h-full justify-end">
            <Link href={"/"} className="h-full w-32 flex flex-column items-center justify-center primaryOnHover">Accueil</Link>
            <Link href={"/form"} className="h-full w-32 flex flex-column items-center justify-center primaryOnHover">Bilan médical</Link>
            <Link href={"/contact"} className="h-full w-32 flex flex-column items-center justify-center primaryOnHover">Contact</Link>
        </div>
    </nav>
}