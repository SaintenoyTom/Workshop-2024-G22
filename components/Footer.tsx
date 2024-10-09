import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 sm:px-6 md:px-8 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Conseil Médical. Tous droits réservés.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Mentions légales
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Confidentialité
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="/conditions"
        >
          Conditions d&apos;utilisation
        </Link>
      </nav>
    </footer>
  );
}

