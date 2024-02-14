import type { Continents } from "./Continents"

export enum FilterTypes {
    REGION = 'region',
    SEARCH = 'search',
    SORT = 'sort'
}

export type Filter = {
    name: FilterTypes;
    value: Continents | "World" | "asc" | "desc" | "default";
}