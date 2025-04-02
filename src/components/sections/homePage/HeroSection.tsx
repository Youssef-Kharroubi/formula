import {cn} from "@/utils";
import Link from "next/link";
import Champion from "./Champion";
import ChampionStatistics from "./ChampionStatistics";

interface Props {
    className?: string;
}

export default function HeroSection({className}: Readonly<Props>) {
    return (
        <section className={cn("container lg:py-12 py-4", className)}>
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:items-center gap-4 lg:gap-16">
                <div className="lg:col-span-2 space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-light text-start leading-tight">
                        Experience the thrill of Formula 1 <br/>
                        The pinnacle of MOTORSPORT!
                    </h1>
                    <p className=" text-lg md:text-xl text-content ">
                        Stay updated with the latest races, driver standings, and exclusive insights from the world’s
                        fastest cars and most skilled drivers.
                    </p>
                    <div className="mt-2">
                        <Link href="/Drivers"
                              className="rounded-md border-2 p-3 border-light/80 hover:border-dark hover:bg-light hover:text-dark  ">See
                            Drivers</Link>
                    </div>
                </div>
                <video className="w-full h-auto object-cover rounded-md lg:col-span-3"
                       autoPlay
                       loop
                       muted
                       playsInline
                >
                    <source src="/videos/formula-cover.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <span className="block h-px border border-light/20 w-[calc(100%-64px)] mx-auto my-10"/>

            <Champion/>
            <span className={`block h-px border border-light/20 w-[calc(100%-64px)] mx-auto my-10`}/>
            <ChampionStatistics/>
        </section>
    );
}