'use client'
import {useEffect,useState} from "react";
import ConstructorCard from "@/components/ui/ConstructorCard";
import ConstructorStandings from "@/components/sections/ConstructorStandings";

export interface ConstructorDTO{
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}
const CONSTRUCTOR_API_ENDPOINT = "http://ergast.com/api/f1/2024/constructors.json";
export default function Page(){
    const [Constructors, setConstructors] = useState<ConstructorDTO[]>([]);
    useEffect(() => {
        const fetchConstructors = async() => {
            try{
                const data = await fetch(CONSTRUCTOR_API_ENDPOINT).then(response => response.json())
                setConstructors(data.MRData.ConstructorTable.Constructors);
            }catch(error){
                console.error("Error Fetching Constructors",error);
            }
        }
        fetchConstructors();
    }, []);
    return(
        <section className="container">
            <h1 className="text-4xl md:text-6xl font-extrabold  text-center leading-tight m-10">
                F1 Constructors!
            </h1>
            <div className="grid grid-cols-3">

            <span>
                <div className="grid lg:gap-3 gap-2 mt-3 ">
                 {
                     Constructors.map((Constructor, index) => (
                         <ConstructorCard Constructor={Constructor} key={index}/>
                     ))
                 }

              </div>

            </span>
                <div className="col-span-2 self-center"><ConstructorStandings/></div>
            </div>
        </section>
    )
}