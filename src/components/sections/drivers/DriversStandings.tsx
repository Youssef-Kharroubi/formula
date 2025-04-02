import {DriverStandingsDTO} from "@/app/Drivers/page";

interface DriverStandingsProps{
    data: DriverStandingsDTO[];
}
export default async function DriversStandings({data}:DriverStandingsProps){
        const Drivers = data;
    return(
        <section className="my-5 container ">
            <h3 className="text-4xl font-bold flex justify-center py-5">2025 Standings</h3>
            <div className="flex justify-center items-center">
            <table className="w-1/3 text-sm text-left rtl:text-right  ">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-900 dark:text-gray-400 ">
                <tr>
                    <th className="px-6 py-3">Name</th>
                    <th>Points</th>
                </tr>
                </thead>
                {(

                    Drivers.map((driver,index) => (
                        <tr className=" border-b  border-gray-200"
                            key={index}>
                            <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">{driver.name}</th>
                            <td>{driver.seasonpoints}</td>
                        </tr>

                    ))
                    )}
            </table>
            </div>
        </section>
    )
}