import DriversStandings from "@/components/sections/drivers/DriversStandings";
import {neon} from "@neondatabase/serverless";
import DriversLineUp from "@/components/sections/drivers/DriversLineUp";

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
export interface DriverStandingsDTO{
    name:string;
    seasonpoints:string;
}

async function getDriversLineUp(): Promise<DriverDTO[]>{
    const data = await fetch(process.env.DRIVERS_API_ENDPOINT as string);
    return data.json()
}
async function getDriversStandings(): Promise<DriverStandingsDTO[]>{
    const sql = neon(process.env.DATABASE_URL as string);
    const response = await sql`SELECT name,seasonPoints from DRIVERS ORDER BY seasonPoints DESC`;
    return response as DriverStandingsDTO[];
}

export default async function Drivers() {
    const Drivers:DriverDTO[] = await getDriversLineUp();
    const DriversStanding:DriverStandingsDTO[] = await getDriversStandings();

    return (
        <>
        <DriversLineUp drivers={Drivers}/>
        <DriversStandings data={DriversStanding}/>
        </>

    );
}