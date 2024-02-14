import React, { useRef } from 'react';
import { selectedFilter } from "../filterStore";
import { FilterTypes } from '../types';

interface SearchInterface { }

const Search: React.FC<SearchInterface> = () => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchTerm: string = new FormData(e.currentTarget).get('search')!.toString();
        selectedFilter.set({ name: FilterTypes.SEARCH, value: searchTerm });
    }

    const onResetSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = ''; // Reset the input value directly
        }
    };

    return (
        <form className="relative flex items-center gap-2.5 w-full max-w-[310px]" onSubmit={onSubmitSearch}>
            {/* Clear btn */}
            <button
                type="button"
                className="group absolute top-1/2 -translate-y-1/2 left-3 flex w-8 h-full justify-center items-center bg-white z-10"
                onClick={onResetSearch}
            >
                <div className="relative border-none bg-transparent outline-none size-5 text-[#a1a9bb] flex items-center justify-center">
                    <span className="transition-[top] rounded-md top-0 bg-white border border-[#ddd] px-1.5 py-0.5 text-sm absolute invisible opacity-0 h-0 group-hover:h-fit group-hover:opacity-100 group-hover:visible group-hover:-top-10">
                        Clear
                    </span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
            </button>

            <input
                type="text"
                placeholder="Search for a country..."
                ref={searchInputRef}
                name="search"
                className="bg-white rounded-md pl-14 pr-4 py-2 w-[calc(100%-32px)] outline-none placeholder:text-[#a1a9bb]"
            />
            <button type="submit" className="border-none bg-transparent outline-none size-8">
                <span className="sr-only">Search</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
            </button>
        </form>
    )
}

export default Search