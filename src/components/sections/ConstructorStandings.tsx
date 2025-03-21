import Image from "next/image";

export default function ConstructorStandings() {
    return (
        <section className="ml-10">
            <h3 className="text-3xl font-bold text-gold text-center m-10">
                Top Three In The Constructors Standings
            </h3>
            <div className="parent grid grid-cols-3 grid-rows-2 gap-0 justify-items-center">
                <div className="div1 col-start-2 col-end-3 row-start-1 row-end-2">

                    <Image src="/images/mclaren-2024.png" alt="mclaren f1 car" width="700" height="350"></Image>
                    <div className="grid grid-cols-2 justify-items-center gap-2 mt-4">
                        <span className="text-2xl text-light/70">Champion</span>
                        <span className="text-3xl text-gold font-bold">McLaren</span>
                        <span className="text-2xl text-light/70">Points</span>
                        <span className="text-3xl text-gold font-bold">666</span>
                    </div>
                </div>
                <div className="div2 col-start-1 col-end-2 row-start-2 row-end-3">
                    <Image src="/images/ferrari-2024.png" alt="mclaren f1 car" width="700" height="350"></Image>
                    <div className="grid grid-cols-2 justify-items-center gap-2 mt-4">
                        <span className="text-2xl text-light/70">Runner-up</span>
                        <span className="text-3xl text-red-600 font-bold">Ferrari</span>
                        <span className="text-2xl text-light/70">Points</span>
                        <span className="text-3xl text-red-600 font-bold">652</span>
                    </div>
                </div>
                <div className="div3 col-start-3 col-end-4 row-start-2 row-end-4"><Image src="/images/redbull-2024.png" alt="mclaren f1 car" width="700" height="350"></Image>
                    <div className="grid grid-cols-2 justify-items-center gap-2 mt-4">
                        <span className="text-2xl text-light/70">Third Place</span>
                        <span className="text-3xl text-blue-950 font-bold">RedBull</span>
                        <span className="text-2xl text-light/70">Points</span>
                        <span className="text-3xl text-blue-950 font-bold">589</span>
                    </div>
                </div>
            </div>
        </section>
    );
}