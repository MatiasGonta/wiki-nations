import { atom, type WritableAtom } from 'nanostores';
import type { Filter } from './types';

export const selectedFilter: WritableAtom<Filter> = atom("default");