import {RacesDTO} from "@/app/Races/page";

interface props {
    race:RacesDTO;
}
export default function RacesCard({race}: Readonly<props> ){
    return(
        <div className="my-4 mx-4">
        <div className="grid  items-center gap-4 rounded-2xl bg-card px-3 py-3">
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-light">{race.grand_prix}</span>
                <div className="mt-8 flex flex-col ">
                    <span className="text-xl text-light/70">{race.circuit}</span>
                    <span className="text-2xl text-light/70">{race.round}</span>
                    <span className="text-3xl text-light font-bold">{race.date.substring(0,10)}</span>
                </div>
            </div>
        </div>
        </div>
    );
}