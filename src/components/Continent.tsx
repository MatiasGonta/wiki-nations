import React from 'react';
import { Africa, Europe, Americas, Asia, Oceania, Antarctic } from '../icons';
import type { Continents } from '../types';

const Continent: React.FC = ({ name }: { name: Continents }) => {
  return 
    (name === "Africa" && (
        <div className="max-w-[500px] max-h-[500px] absolute -left-[70%] -top-[20%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
            <div className="flex gap-1 size-[500px]">
                <Africa />
            </div>
        </div>
    )) ||
    (name === "Europe" && (
        <div className="max-w-[500px] max-h-[500px] absolute -left-[95%] top-[0%] group-hover:-left-[110%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
            <div className="flex gap-1 size-[700px]">
                <Europe />
            </div>
        </div>
    )) ||
    (name === "Americas" && (
        <div className="max-w-[500px] max-h-[500px] absolute -left-[10%] -top-[5%] group-hover:left-[0%] group-hover:top-[20%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
            <div className="flex gap-1 size-[350px]">
                <Americas />
            </div>
        </div>
    )) ||
    (name === "Asia" && (
        <div className="max-w-[500px] max-h-[500px] absolute -left-[65%] top-[10%] group-hover:-left-[80%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
            <div className="flex gap-1 size-[350px]">
                <Asia />
            </div>
        </div>
    )) ||
    (name === "Oceania" && (
        <div className="max-w-[500px] max-h-[500px] absolute -left-[185%] -top-[60%] group-hover:-left-[225%] group-hover:top-[-100%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
            <div className="flex gap-1 size-[700px]">
                <Oceania />
            </div>
        </div>
    )) ||
    (name === "Antarctic" && (
        <div className="max-w-[500px] max-h-[500px] absolute -left-[10%] top-[10%] group-hover:left-[0%] group-hover:top-[0%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
            <div className="flex gap-1 size-[125px]">
                <Antarctic />
            </div>
        </div>
    ))
}

export default Continent