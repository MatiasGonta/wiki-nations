import type { Continents } from "./Continents";

type Name = {
    common: string;
    official: string;
    nativeName: Record<string, { official: string; common: string }>;
};

type Flags = {
    png: string;
    svg: string;
    alt: string;
};

export interface RawCountry {
    name: Name;
    region: Continents;
    subregion: string;
    capital: string;
    population: number;
    flags: Flags;
}

export interface Country extends Omit<RawCountry, 'name' | 'flags'> {
    name: string;
    flag: string;
}
