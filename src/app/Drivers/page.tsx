'use client'
import DriverCard from "../Components/DriverCard";
import axios from "axios";
import { parseString } from 'xml2js';
import {
    useEffect,
    useState
} from "react";
import Image from "next/image";

class Driver{
    driverId:string;
    GivenName:string;
    FamilyName:string;
    DateOfBirth:string;
    PermanentNumber:string;
    Nationality:string;
}

export default function Drivers() {
    const [Drivers,setDrivers] = useState<Driver[]>([]);
    useEffect(() => {
        axios.get('http://ergast.com/api/f1/2024/drivers')
            .then((response) => {
                console.log(response.data);
                parseString(response.data, { explicitArray: false }, (err, result) => {
                    if (err) {
                        console.error("Error parsing XML:", err);
                        return;
                    }
                    const drivers = result.MRData.DriverTable.Driver || [];
                    setDrivers(drivers);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 text-center leading-tight m-10">
                F1 Drivers LineUp
                for 2025!</h1>
            <div className="flex justify-center items-center mt-5 ">
                <Image src="/lineup2025.jpg"
                       alt="carousel"
                       priority
                       width={700}
                       height={300}
                       className="object-cover w-2/3 h-auto rounded-md "></Image>
            </div>
            <div className="flex justify-center items-center w-screen">
            <hr className="mt-10 w-5/6  border-t-3 border-black opacity-100"/>
            </div>
                <div className="flex justify-center items-center m-2 w-screen">
                <div className="flex flex-wrap justify-center items-center  ">
                    {Array.isArray(Drivers) && Drivers.map((Driver, index) => (
                        <DriverCard key={index} Driver={Driver}/>
                    ))}</div>
            </div>

        </>
    );
}