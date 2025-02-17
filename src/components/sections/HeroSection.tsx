export default function HeroSection() {
    return(
        <>
            <section className="flex justify-center items-center w-screen mt-16 ">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center leading-tight">
                        Experience the thrill of Formula 1 – the pinnacle of MOTORSPORT!
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-500 text-center max-w-2xl mx-auto">
                        Stay updated with the latest races, driver standings, and exclusive insights from the world’s
                        fastest cars and most skilled drivers.
                    </p>

                </div>
                <video className="m-14 w-2/3 object-cover rounded-md"
                       autoPlay
                       loop
                       muted
                       playsInline
                >
                    <source src="/formula-cover.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </section>
        </>
    );
}