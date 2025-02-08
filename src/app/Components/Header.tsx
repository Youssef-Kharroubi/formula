import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex lg:flex-grow justify-between">
                <h1 className="font-bold text-xl pt-2 ">
                    <Link href="/">Formula</Link>
                </h1>
                <ul className="font-bold text-md">
                    <li className="bg-black p-2 rounded-md hover:bg-gray-700">
                        <Link href="/Drivers">Drivers</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}