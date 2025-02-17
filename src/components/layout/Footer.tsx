export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark text-light/90 p-4 mt-16 w-full border-t border-light/20">
            <div className="container text-center">
                <p>&copy; {currentYear} Formula. All rights reserved.</p>
            </div>
        </footer>
    );
}
