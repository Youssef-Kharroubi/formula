import {DriverDTO} from "@/app/Drivers/page"
import Link from "next/link";
import Image from "next/image";

interface Props{
    driver: DriverDTO;
}
export default function DriverCard({driver}: Readonly<Props>){

    return(
        <Link href="/" className="border rounded-lg p-4">

            <div className="grid grid-cols-2 items-center gap-4">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-light">{driver.driver_number}</span>
                    <div className="mt-8 flex flex-col ">
                        <span className="text-2xl text-light/70">{driver.first_name}</span>
                        <span className="text-3xl text-light font-bold">{driver.last_name}</span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Image
                        src={driver.headshot_url || "/images/lineup2025.jpg"}
                        alt="Headshot"
                        width={220}
                        height={220}
                        className="object-cover rounded-4xl  "
                    />
                </div>
            </div>

            {/*<div className="border-2 border-red-600 rounded-lg m-3 mb-5 p-1 w-1/4 ">*/}
            {/*    <div className="grid grid-cols-2 items-center justify-center mb-5">*/}
            {/*        <p className="text-center mt-2"><b>Name</b>: {driver.givenName}</p>*/}
            {/*        <p className="text-center mt-2"><b>LastName</b>: {driver.familyName}</p>*/}
            {/*    </div>*/}
            {/*    <div className="grid grid-cols-3 items-center justify-center">*/}
            {/*        <p className="text-center mt-2">{driver.nationality}</p>*/}
            {/*        <p className="text-center mt-2"> <b>N°</b>{driver.permanentNumber}</p>*/}
            {/*        <p className="text-center mt-2"><b>Age</b>: {driver.dateOfBirth}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Link>
    );
}