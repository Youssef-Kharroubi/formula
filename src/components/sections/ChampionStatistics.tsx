'use client'
import {useIntersection} from "@/hooks/useIntersection";

export default function ChampionStatistics(){
    const {ref,isVisible} = useIntersection(0.8);
    return (
        <section ref={ref} className={`grid grid-cols-3 transition-all duration-1000 ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                }`}>
            <div className="gird-cols-1 grid grid-cols-2 justify-self-center content-center">
                <span className="text-3xl grid-cols-2 text-light/40">Race Wins:</span>
                <span className="text-light grid-cols-1 text-4xl justify-self-center"> 14</span>
                <span className="text-3xl grid-cols-2 text-light/40">Podiums:</span>
                <span className="text-light grid-cols-1 justify-self-center text-4xl"> 18</span>
            </div>
            <div className="border-l border-light/20 h-32 grid-cols-2 justify-self-center items-center w-4 "></div>
            <div className="gird-cols-3 grid grid-cols-2 justify-self-center content-center">
                <span className="text-3xl grid-cols-2 text-light/40 ">Pole Positions:</span>
                <span className="text-light grid-cols-1 text-4xl justify-self-center "> 5</span>
                <span className="text-3xl grid-cols-2 text-light/40 ">Fastest Laps:</span>
                <span className="text-light grid-cols-1 text-4xl justify-self-center ">7</span>
            </div>
        </section>
    )
}