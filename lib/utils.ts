import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {Jersey_10, Smooch_Sans} from "next/font/google";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const smoochSans = Smooch_Sans({
    subsets: ["latin"],
    variable: "--font-smooch"
})

export const jerseyTen = Jersey_10({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-jersey"
})