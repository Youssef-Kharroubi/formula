export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-16 w-full">
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Formula. All rights reserved.</p>
            </div>
        </footer>
    );
}
