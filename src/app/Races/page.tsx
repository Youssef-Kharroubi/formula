'use client'

import {useState, useEffect, useRef} from 'react';
import PlayedRaces from "@/components/sections/races/PlayedRaces";
import UpComingRaces from "@/components/sections/races/UpComingRaces";

export interface RacesDTO{
    round: number;
    grand_prix: string;
    circuit: number;
    date: string;
    date_end: string;

}
let cachedRaces: { upcomingRaces: RacesDTO[]; playedRaces: RacesDTO[] } | null = null

const RACES_API_ENDPOINT = "http://localhost:3000/api/upcomingRaces";
export default function Races(){

    const [playedRaces,setPlayedRaces] = useState<RacesDTO[]>([]);
    const [upcomingRaces,setUpcomingRaces] = useState<RacesDTO[]>([]);


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const calculateTimeLeft = () => {
        if (!cachedRaces?.upcomingRaces[0].date) return;
        const raceDateTime = new Date(cachedRaces?.upcomingRaces[0].date);
        const now = new Date();
        const difference = raceDateTime.getTime() - now.getTime();
        if (difference <= 0) {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            if (timerRef.current) clearInterval(timerRef.current);
            return;
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+1;
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
    };
    const fetchRaces = async () => {
        if (cachedRaces) {
            setUpcomingRaces(cachedRaces.upcomingRaces);
            setPlayedRaces(cachedRaces.playedRaces);
            return;
        }
        try {
            const response = await fetch(RACES_API_ENDPOINT);
            const data = await response.json();
            cachedRaces = {
                upcomingRaces: data.upcomingRaces,
                playedRaces: data.playedRaces,
            };
            setUpcomingRaces(data.upcomingRaces);
            setPlayedRaces(data.playedRaces);
        } catch (error) {
            console.error("Failed to fetch races:", error);
        }
    };
    useEffect(() => {
        fetchRaces();
        calculateTimeLeft();
        timerRef.current = setInterval(() => {
            calculateTimeLeft();
        }, 1000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);



    return (
        <section className="container">
            <div className="grid grid-cols-3  ">
                <span
                    className=" col-start-3 text-lg text-light font-bold mt-3 font-mono border-2 rounded-xl border-red-600 p-3">Next Race is in:
                    {timeLeft.days} Days {timeLeft.hours.toString().padStart(2, '0')}:
                    {timeLeft.minutes.toString().padStart(2, '0')}:
                    {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
            <PlayedRaces playedRaces={playedRaces}/>
            <UpComingRaces upcomingRaces={upcomingRaces}/>
        </section>
    )
}