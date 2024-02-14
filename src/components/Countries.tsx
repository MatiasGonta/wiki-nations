import React, { useEffect, useState } from 'react';
import { FilterTypes, type RawCountry } from "../types";
import { useStore } from "@nanostores/react";
import { selectedFilter } from "../filterStore";
import Card from './Card.tsx';

const Countries: React.FC = ({ rawCountries }: { rawCountries: RawCountry[] }) => {
    const $selectedFilter = useStore(selectedFilter);

    const countriesInitialValue = rawCountries.sort((countryA, countryB) => {
        const nameA = countryA.name.common.toUpperCase();
        const nameB = countryB.name.common.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    const [countries, setCountries] = useState<RawCountry[]>(countriesInitialValue);

    useEffect(() => {
        let filteredCountries: RawCountry[] = countriesInitialValue;

        if ($selectedFilter.name === FilterTypes.SEARCH) {
            filteredCountries = rawCountries.filter((country) => country.name.common.toLowerCase().includes($selectedFilter.value!.toLowerCase()));
        }

        if ($selectedFilter.name === FilterTypes.REGION && $selectedFilter.value !== "World") {
            filteredCountries = rawCountries.filter((country) => country.region.toLowerCase() === $selectedFilter.value!.toLowerCase());
        }

        if ($selectedFilter.name === FilterTypes.SORT) {
            if ($selectedFilter.value === "asc") {
                filteredCountries = rawCountries.filter(country => country.population > 0);
                filteredCountries.sort((countryA, countryB) => countryA.population - countryB.population);
            } else if ($selectedFilter.value === "desc") {
                filteredCountries = rawCountries.filter(country => country.population > 0);
                filteredCountries.sort((countryA, countryB) => countryB.population - countryA.population);
            }
        }

        setCountries(filteredCountries);
        return;
    }, [$selectedFilter]);

    return (
        <ul className="grid gap-8 grid-cols-1 grid-rows-auto text-white w-fit h-full p-8 md:grid-cols-2 lg:grid-cols-3 min-[1300px]:grid-cols-4">
            {
                countries.map((country: RawCountry, index: number) => (
                    <Card
                        key={index}
                        name={country.name.common}
                        flag={country.flags.svg}
                        region={country.region}
                        subregion={country.subregion}
                        capital={country.capital}
                        population={country.population}
                    />
                ))
            }
        </ul>
    )
}

export default Countries