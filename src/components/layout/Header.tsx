import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-dark text-light border-b border-b-light/20">
            <nav className="flex items-center justify-between container py-3">
                    <Link className="font-bold text-xl p-4 -m-3" href="/">Formula</Link>

                <ul className="font-bold text-md flex gap-3">
                    <li className="bg-light/80 p-2 rounded-md hover:bg-light transition-colors ease-in-out duration-200 text-dark ">
                        <Link href="/Races">Races</Link>
                    </li>
                    <li className="bg-light/80 p-2 rounded-md hover:bg-light transition-colors ease-in-out duration-200 text-dark ">
                        <Link href="/Drivers">Drivers</Link>
                    </li>
                    <li className="bg-light/80 p-2 rounded-md hover:bg-light transition-colors ease-in-out duration-200 text-dark ">
                        <Link href="/Constructors">Constructors</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}