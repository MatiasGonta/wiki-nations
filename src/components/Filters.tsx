import React from 'react';
import FilterSelect from './FilterSelect';
import Search from './Search';
import { Africa, Americas, Antarctic, Asia, Europe, Oceania, World } from "../icons";
import { FilterTypes } from '../types';

const Filters = () => {
    const regionOptions = [
        {
            value: "World",
            label: "World",
            icon: (
                <div className="size-[50px] absolute top-[35px] -left-1">
                    <World />
                </div>
            ),
        },
        {
            value: "Africa",
            label: "Africa",
            icon: (
                <div className="size-[140px] absolute -top-[26px] -left-12">
                    <Africa />
                </div>
            ),
        },
        {
            value: "Asia",
            label: "Asia",
            icon: (
                <div className="size-[110px] absolute top-0 -left-14">
                    <Asia />
                </div>
            ),
        },
        {
            value: "Europe",
            label: "Europe",
            icon: (
                <div className="size-[230px] absolute -top-[13px] -left-[90px]">
                    <Europe />
                </div>
            ),
        },
        {
            value: "Americas",
            label: "America",
            icon: (
                <div className="size-[70px] absolute -top-0 left-1">
                    <Americas />
                </div>
            ),
        },
        {
            value: "Oceania",
            label: "Oceania",
            icon: (
                <div className="size-[185px] absolute -top-[52px] -left-[135px]">
                    <Oceania />
                </div>
            ),
        },
        {
            value: "Antarctic",
            label: "Antarctic",
            icon: (
                <div className="size-10 absolute -top-0 -left-0.5">
                    <Antarctic />
                </div>
            ),
        },
    ];

    const sortOptions = [
        {
            value: "default",
            label: "Default",
        },
        {
            value: "desc",
            label: "Most populated",
        },
        {
            value: "asc",
            label: "Less populated",
        },
    ];

    return (
        <search className="w-full flex gap-2.5 flex-col items-center md:flex-row md: justify-between md:gap-0">
            <Search />
            <div className="flex items-center gap-2.5">
                <FilterSelect filterType={FilterTypes.SORT} options={sortOptions}>
                    Sort by
                </FilterSelect>
                <FilterSelect filterType={FilterTypes.REGION} options={regionOptions}>
                    Sort by region
                </FilterSelect>
            </div>
        </search>
    )
}

export default Filters