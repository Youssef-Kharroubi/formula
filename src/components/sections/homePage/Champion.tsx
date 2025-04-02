'use client'
import Image from "next/image"
import {useIntersection} from "@/hooks/useIntersection";
export default function Champion(){
    const {ref, isVisible} = useIntersection(0.8);
    return (
        <section ref={ref} className="flex flex-col ">
            <div className="flex justify-center items-center mt-4 ">
            <span className={`text-3xl font-bold text-white transition-all duration-1000 ${
                isVisible ? "animate-fadeSlideIn" : "opacity-0 translate-y-12"
            }`}>
                Max Verstappen: 2024 Formula 1 <span className="text-gold">World Champion</span>!
            </span>
            </div>
            <div className="flex justify-center items-center my-8 ">
                <Image src="/images/maxVerstappen.jpg" alt="F1 champ" width="700" height="300" priority
                       loading="eager" className={`rounded-xl w-auto transition-all duration-1000 ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                }`}>

                </Image>

            </div>
        </section>
    )
}