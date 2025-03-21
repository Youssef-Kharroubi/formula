import {ConstructorDTO} from "@/app/Constructors/page";
import Link from "next/link";

interface Props{
    Constructor: ConstructorDTO
}
export default function ConstructorCard({Constructor}: Readonly<Props>){
    return(
        <Link href={Constructor.url}>
            <div className="grid grid-cols-2   ">
            <span className="text-2xl font-bold text-light">
                {Constructor.name}
            </span>
                <span className="text-xl text-light/70">
                {Constructor.nationality}
            </span>
            </div>
            <span className="block h-px border border-light/20   my-5"/>
        </Link>

    );
}