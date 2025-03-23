'use client'

import {useState,useEffect} from 'react';
import PlayedRaces from "@/components/sections/races/PlayedRaces";
import UpComingRaces from "@/components/sections/races/UpComingRaces";

export interface RacesDTO{
    round: number;
    grand_prix: string;
    circuit: number;
    date: string;
    date_end: string;

}
const RACES_API_ENDPOINT = "http://localhost:3000/api/upcomingRaces";
export default function Races(){

    const [playedRaces,setPlayedRaces] = useState([]);
    const [upcomingRaces,setUpcomingRaces] = useState([]);

    useEffect(() => {
        const fetchRaces =async ()=>{
            const data = await fetch(RACES_API_ENDPOINT).then((response)=>response.json())
            setUpcomingRaces(data.upcomingRaces);
            setPlayedRaces(data.playedRaces);
        }
        fetchRaces();
    }, []);
    return (
        <section className="container">
            <PlayedRaces playedRaces={playedRaces} />
            <UpComingRaces upcomingRaces={upcomingRaces}/>
        </section>
    )
}