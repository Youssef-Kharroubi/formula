import {RacesDTO} from "@/app/Races/page";
import RacesCard from "@/components/ui/RacesCard";
import {useEffect,useState} from "react";

interface props{
    playedRaces: RacesDTO[];
}

const NEXT_RACE_API_ENDPOINT = "https://api.openf1.org/v1/meetings?year=2025";

export default function PlayedRaces({playedRaces}: Readonly<props>) {
    const [nextRace,setNextRace] = useState<RacesDTO>();

    useEffect(()=>{
        const fetchNextRaceDate = async() => {
            try{
                const data = await fetch(NEXT_RACE_API_ENDPOINT).then(response=> response.json())

                setNextRace(data.pop())
            }catch(error){
                console.error("Error fetching Race time",error);
            }
        }
        fetchNextRaceDate();
    },[nextRace])
    return (
      <section className="my-4">
          <h3 className="text-2xl text-light font-bold mt-3">Races Already Played</h3>
          <div className="flex justify-evenly items-center   ">
              {
                  playedRaces.map((race,index) => (
                      <RacesCard race={race} key={index}/>
                  ))
              }
          </div>


      </section>
    );
}