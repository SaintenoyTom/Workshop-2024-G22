"use client";  // Indique que ce composant est un Client Component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture du menu

    return (
        <nav className="secondaryBackground flex flex-row justify-between items-center h-20 px-4 relative">

            <div className="left flex flex-row items-center gap-x-2 p-3">
                <Image alt="curaconnect_logo" src="/nav_logo.svg" width={50} height={50} />
                <Link href="/" className="tracking-wide text-2xl">CURACONNECT</Link>
            </div>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none relative">

                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>


            <div className="hidden md:flex w-2/5 right flex-row items-center h-full justify-end">
                <Link href="/" className="h-full w-32 flex flex-column items-center justify-center primaryOnHover">Accueil</Link>
                <Link href="/form" className="h-full w-32 flex flex-column items-center justify-center primaryOnHover">Bilan médical</Link>
                <Link href="/contact" className="h-full w-32 flex flex-column items-center justify-center primaryOnHover">Contact</Link>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-20 right-0 bg-white shadow-lg z-10">
                    <div className="flex flex-col items-center py-2">
                        <Link href="/" className="py-2 px-4 text-center hover:bg-gray-200" onClick={() => setIsOpen(false)}>Accueil</Link>
                        <Link href="/form" className="py-2 px-4 text-center hover:bg-gray-200" onClick={() => setIsOpen(false)}>Bilan médical</Link>
                        <Link href="/contact" className="py-2 px-4 text-center hover:bg-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
