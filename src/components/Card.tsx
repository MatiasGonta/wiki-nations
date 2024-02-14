import React from 'react';
import type { Country } from '../types';
import { formatNumber } from '../utils';
import { Population, Building, Globe, Pin, Africa, Europe, Americas, Asia, Oceania, Antarctic } from '../icons';

const Card = ({ name, flag, region, subregion, capital, population }: Country) => {
    const continentBadges = {
        Africa: (
            <div className="max-w-[500px] max-h-[500px] absolute -left-[70%] -top-[20%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                <div className="flex gap-1 size-[500px]">
                    <Africa />
                </div>
            </div>
        ),
        Europe: (
            <div className="max-w-[500px] max-h-[500px] absolute -left-[95%] top-[0%] group-hover:-left-[110%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                <div className="flex gap-1 size-[700px]">
                    <Europe />
                </div>
            </div>
        ),
        Americas: (
            <div className="max-w-[500px] max-h-[500px] absolute -left-[10%] -top-[5%] group-hover:left-[0%] group-hover:top-[20%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                <div className="flex gap-1 size-[350px]">
                    <Americas />
                </div>
            </div>
        ),
        Asia: (
            <div className="max-w-[500px] max-h-[500px] absolute -left-[65%] top-[10%] group-hover:-left-[80%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                <div className="flex gap-1 size-[350px]">
                    <Asia />
                </div>
            </div>
        ),
        Oceania: (
            <div className="max-w-[500px] max-h-[500px] absolute -left-[185%] -top-[60%] group-hover:-left-[225%] group-hover:top-[-100%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                <div className="flex gap-1 size-[700px]">
                    <Oceania />
                </div>
            </div>
        ),
        Antarctic: (
            <div className="max-w-[500px] max-h-[500px] absolute -left-[10%] top-[10%] group-hover:left-[0%] group-hover:top-[0%] group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
                <div className="flex gap-1 size-[125px]">
                    <Antarctic />
                </div>
            </div>
        ),
    };

    const mainFeatures = [
        {
            icon: <Population />,
            label: formatNumber(population),
        },
        {
            icon: <Building />,
            label: capital,
        },
        {
            icon: <Globe />,
            label: region,
        },
        {
            icon: <Pin />,
            label: subregion,
        }
    ];

    return (
        <li>
            <a
                href={`/country/${name}`}
                className="group w-[300px] h-[325px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300"
            >
                {continentBadges[region]}

                <div className="absolute rounded-full bg-gray-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300" />

                <div className="w-full h-[44px] uppercase text-center leading-none z-40 flex justify-center items-end">
                    <p className="font-bold text-xl tracking-wider text-gray-500">
                        {name}
                    </p>
                </div>

                <div className="img w-[180px] h-[122.5px] aspect-square bg-gray-100 z-40 rounded-md overflow-hidden">
                    <img
                        src={flag}
                        alt={name}
                        width={180}
                        height={122.5}
                        decoding="async"
                        loading="lazy"
                        className="object-cover min-h-full"
                    />
                </div>

                <div className="w-[210px] z-40 flex flex-row justify-between gap-8">
                    <div className="flex flex-col items-start gap-1.5">
                        {
                            mainFeatures.slice(0,2).map(({ icon, label }, index) => (
                                label && (
                                    <div key={index} className="inline-flex gap-3 items-center justify-center">
                                        <div className="p-1 bg-white flex items-center justify-center rounded-full self-start text-gray-800">
                                            {icon}
                                        </div>
                                        <p className="font-semibold text-xs text-white break-words">
                                            {label}
                                        </p>
                                    </div>
                                )
                            ))
                        }
                    </div>

                    <div className="flex flex-col items-start gap-1.5">
                        {
                            mainFeatures.slice(2).map(({ icon, label }, index) => (
                                label && (
                                    <div key={index} className="inline-flex gap-3 items-center justify-center">
                                        <div className="p-1 bg-white flex items-center justify-center rounded-full self-start text-gray-800">
                                            {icon}
                                        </div>
                                        <p className="font-semibold text-xs text-white break-words">
                                            {label}
                                        </p>
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
            </a>
        </li>
    )
}

export default Card