import RacesCard from "@/components/ui/RacesCard";
import {RacesDTO} from "@/app/Races/page";

interface props{
    upcomingRaces: RacesDTO[];
}
export default function UpComingRaces({upcomingRaces}: Readonly<props>){


    return (
        <section className="my-4">
            <h3 className="text-4xl text-light font-bold my-4">UpComing Races This Season</h3>
            <div className="grid grid-cols-3 ">
                {
                    upcomingRaces.map((race, index) => (
                        <RacesCard race={race} key={index}/>
                    ))
                }
            </div>

        </section>
    )
}