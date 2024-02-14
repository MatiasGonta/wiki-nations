import React from 'react';
import type { Continents, FilterTypes } from '../types';
import { useStore } from '@nanostores/react';
import { selectedFilter } from '../filterStore';
import { ArrowDown } from '../icons';

type FilterSelectOption = {
    value: Continents | "World" | "asc" | "desc" | "default";
    label: string;
    icon?: JSX.Element;
}

interface FilterSelectInterface {
    filterType: FilterTypes.REGION | FilterTypes.SORT;
    options: FilterSelectOption[];
    children: React.ReactNode;
}

const FilterSelect = ({ filterType, options, children }: FilterSelectInterface) => {
    const $selectedFilter = useStore(selectedFilter);

    const handleRegionFilter = (value: FilterSelectOption['value']) => {
        if (value === selectedFilter.value) return;

        selectedFilter.set({ name: filterType, value });
    };

    return (
        <div className="relative w-[150px]">
            <button className="flex gap-1.5 justify-between items-center px-2 w-[150px] h-10 bg-white border-none rounded-md">
                {children}
                <div className="size-5 mt-0.5">
                    <ArrowDown />
                </div>
            </button>

            <div className="group absolute top-0 pt-12 z-[200]">
                <div className="transition-[height] overflow-hidden h-0 opacity-0 invisible w-[150px] p-2.5 rounded-md bg-white border border-[#ddd] group-hover:h-auto group-hover:opacity-100 group-hover:visible">
                    <ul className="w-full flex flex-col gap-1">
                        {
                            options.map((option: FilterSelectOption, index: number) => (
                                <li
                                    key={option.label + index}
                                    className={`
                                                w-full h-12 flex items-center cursor-pointer gap-2.5 p-1.5 rounded border
                                                ${$selectedFilter && $selectedFilter.value === option.value
                                                    ? 'bg-slate-200 border-[#ddd]'
                                                    : 'border-white hover:bg-slate-200 hover:border-[#ddd]'}
                                            `}
                                    onClick={() => handleRegionFilter(option.value)}
                                >
                                    {option.icon && (
                                        <div className="relative size-10 overflow-hidden">
                                            {option.icon}
                                        </div>
                                    )}
                                    <span>{option.label}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FilterSelect