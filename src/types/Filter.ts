import type { Continents } from "./Continents"

export enum FilterTypes {
    REGION = 'region',
    SEARCH = 'search',
    SORT = 'sort'
}

export type FilterSelectOption = {
    value: Continents | "asc" | "desc" | undefined;
    label: string;
    icon?: any;
    iconClass?: string;
}