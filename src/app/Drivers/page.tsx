'use client'
import DriverCard from "../../components/ui/DriverCard";
import Image from "next/image";
import {useState,useEffect} from 'react';
import DriverCardSkeleton from "@/components/ui/DriverCardSkeleton";

export interface DriverDTO{
    boradcast_name: string;
    country_code: string;
    driver_number: string;
    first_name: string;
    last_name: string;
    headshot_url: string;
    permanentNumber: string;
    team_name: string;
    team_colour: string,
    meeting_key: string,
    session_key: string,
}
const API_ENDPOINT = 'https://api.openf1.org/v1/drivers';

export default function Drivers() {
    const [Drivers, setDrivers] = useState<DriverDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDrivers = async() => {
        try{
        const data = await fetch(API_ENDPOINT).then(response => response.json())
            const driversTable = (data|| []).filter((driver:DriverDTO)=> driver.session_key == "9158");
            setDrivers(driversTable);
        } catch(error) {
                console.error("Error Fetching Data",error);
            }
        finally {
                setLoading(false);
            }

    };
        fetchDrivers();},[]);

    return (
        <section className="container">
            <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 text-center leading-tight m-10">
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
            {loading || Drivers.length === 0 ? (
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-3 gap-2">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <DriverCardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                Drivers.length > 0 && (
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-3 gap-2">
                        {Drivers.map((driver, index) => (
                            <DriverCard key={index} driver={driver} />
                        ))}
                    </div>
                )
            )}

        </section>


    );
}