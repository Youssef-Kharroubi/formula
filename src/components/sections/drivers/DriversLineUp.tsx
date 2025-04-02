import Image from "next/image";
import DriverCard from "@/components/ui/DriverCard";
import {DriverDTO} from "@/app/Drivers/page";
interface DriversLineUpProps {
    drivers: DriverDTO[];
}
export default function DriversLineUp({drivers}:DriversLineUpProps){

    return (
        <section className="container">
            <h1 className="text-4xl md:text-6xl font-extrabold  text-center leading-tight m-10">
                F1 Drivers LineUp
                for 2025!</h1>
            <div className="flex justify-center items-center mt-5 ">
                <Image src="/images/lineup2025.jpg"
                       alt="carousel"
                       width={700}
                       height={300}
                       priority
                       loading="eager"
                       className="object-cover w-2/3 h-auto rounded-md "></Image>
            </div>
            <span className="block h-px border border-b-light/20 w-[calc(100%-64px)] mx-auto my-12"/>
            {( drivers.length > 0 && (
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-3 gap-2">
                        {drivers.map((driver, index) => (
                            <DriverCard key={index} driver={driver}/>
                        ))}
                    </div>
                )
            )}
        </section>
    )
}