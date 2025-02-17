import {twMerge} from "tailwind-merge";
import clsx, {ClassValue} from "clsx";

export function tw(input: string) {
    return input;
}

export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(...classes));
}
