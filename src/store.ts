import { create } from 'zustand';

type FilterStore = {
    isAscending: boolean,
    count: string,
    setCount: (value: string) => void,
    changeSorting: (value: string) => void
}

export const useFilterStore = create<FilterStore>((set) => ({
    isAscending: true,
    count: '10',
    setCount: (value) => {
        set({ count: value });
    },
    changeSorting: (value) => {
        set({ isAscending: value === 'ascending' && true })
    }
}))